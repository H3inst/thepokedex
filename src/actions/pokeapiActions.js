import * as PokeapiServices from "../services/pokeapi";
import { getPokemonTypes, getPokemons } from "../reducers/pokeReducer";
import { finishLoadingAction, startLoadingAction } from "./interfaceActions";

export function getPokemonTypesAction() {
  return async function (dispatch) {
    try {
      dispatch(startLoadingAction());
      
      const { results } = await PokeapiServices.getAllPokemonTypes();
      dispatch(getPokemonTypes(results));

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
      dispatch(getPokemons(results));

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
      const { pokemon } =
        await PokeapiServices.getPokemonsByType(type, params);
      dispatch(getPokemons(pokemon));

    } catch (error) {
      console.error("Unexpected error", error);

    } finally {
      dispatch(finishLoadingAction());
    }
  };
}