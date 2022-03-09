import { createSlice } from "@reduxjs/toolkit";

export const pokeapiSlice = createSlice({
  name: "pokeapi",
  initialState: {
    pokemon_types: [],
    pokemons: []
  },
  reducers: {
    getPokemonTypes: (state, action) => {
      state.pokemon_types = action.payload;
    },
    getPokemons: (state, action) => {
      state.pokemons = action.payload;
    }
  }
});

export const { getPokemonTypes, getPokemons } = pokeapiSlice.actions;

export default pokeapiSlice.reducer;