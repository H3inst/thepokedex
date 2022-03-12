import { useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
//
import * as PokedexActions from "../../actions/pokedexActions";

function PokemonSearcher(props) {
  const {
    setType = () => { },
    getPokemonBySearch = () => { },
  } = props;
  const [pokemonSearched, setPokemonSearched] = useState("");

  const handlePokemonSearch = (event) => {
    setPokemonSearched(event.target.value);
  };

  const handleSearchPokemonSubmit = (event) => {
    event.preventDefault();
    if (pokemonSearched.length > 0) {
      setType("");
      getPokemonBySearch(pokemonSearched);
    }
  };

  const renderUI = () => {
    return (
      <form onSubmit={handleSearchPokemonSubmit}>
        <input
          type="text"
          className="poke-textfield w-100 mt-30"
          placeholder="Search for a pokemon"
          onChange={handlePokemonSearch}
        />
      </form>
    );
  };

  return renderUI();
}

const mapDispatchToProps = (dispatch) => ({
  getPokemonBySearch: bindActionCreators(PokedexActions.getPokemonBySearch, dispatch)
});

export default connect(null, mapDispatchToProps)(PokemonSearcher);