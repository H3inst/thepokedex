import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from "../reducers/interfaceReducer";
import pokeReducer from "../reducers/pokeReducer";

export const store = configureStore({
  reducer: {
    pokedex: pokeReducer,
    interface: interfaceReducer,
  }
});