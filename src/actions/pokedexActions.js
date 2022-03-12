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

      const params = { offset: 0, limit: 24, };
      const { results: pokemons } = await PokeapiServices.getAllPokemons(params);

      if (pokemons) {
        let reducedPokemons = pokemons.reduce((acc, el) => {
          let pokemonWithData = PokeapiServices.getPokemonByName(el.name);
          return acc.concat(pokemonWithData);
        }, []);
        const result = await Promise.all(reducedPokemons);
        dispatch(getPokemons(result));
      }

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

      const params = { offset: 0, limit: 24 };
      const { pokemon = [] } =
        await PokeapiServices.getPokemonsByType(type, params);

      if (pokemon) {
        let reducedPokemons = pokemon.reduce((acc, { pokemon }) => {
          const pokemonWithData = PokeapiServices.getPokemonByName(pokemon.name);
          return acc.concat(pokemonWithData);
        }, []);
        const result = await Promise.all(reducedPokemons);
        dispatch(getPokemons(result));
      }

    } catch (error) {
      console.error("Unexpected error", error);

    } finally {
      dispatch(finishLoadingAction());
    }
  };
}

export function getPokemonBySearch(name) {
  return async function (dispatch) {
    try {
      dispatch(startLoadingAction());
      const pokemon = await PokeapiServices.getPokemonByName(name);

      if (pokemon) {
        let pokemonArray = [{ ...pokemon }];
        dispatch(getPokemons(pokemonArray));
      }

    } catch (error) {
      console.error("Unexpected error", error);
      dispatch(getPokemons([]));

    } finally {
      dispatch(finishLoadingAction());
    }
  };
}