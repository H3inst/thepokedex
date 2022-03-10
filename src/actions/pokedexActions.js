import * as PokeapiServices from "../services/pokedex";
import { getPokemonTypes, getPokemons } from "../reducers/pokeReducer";
import { finishLoadingAction, startLoadingAction } from "./interfaceActions";

export function getPokemonTypesAction() {
  return async function (dispatch) {
    try {
      dispatch(startLoadingAction());

      const { results } = await PokeapiServices.getAllPokemonTypes();
      if (results) dispatch(getPokemonTypes(results));

    } catch (error) {
      console.error("Unexpected error", error);

    } finally {
      dispatch(finishLoadingAction());
    }
  };
}

export function getAllPokemonsAction() {
  return async function (dispatch) {
    try {
      dispatch(startLoadingAction());

      const params = { offset: 0, limit: 20, };
      const { results } = await PokeapiServices.getAllPokemons(params);
      if (results) dispatch(getPokemons(results));

    } catch (error) {
      console.error("Unexpected error", error);

    } finally {
      dispatch(finishLoadingAction());
    }
  };
}

export function getPokemonsByTypeAction(type) {
  return async function (dispatch) {
    try {
      dispatch(startLoadingAction());

      const params = { offset: 0, limit: 20 };
      const { pokemon = [] } =
        await PokeapiServices.getPokemonsByType(type, params);

      if (pokemon) {
        let reducedPokemons = pokemon.reduce((acc, { pokemon }) => {
          return acc.concat(pokemon);
        }, []);
        dispatch(getPokemons(reducedPokemons));
      }

    } catch (error) {
      console.error("Unexpected error", error);

    } finally {
      dispatch(finishLoadingAction());
    }
  };
}