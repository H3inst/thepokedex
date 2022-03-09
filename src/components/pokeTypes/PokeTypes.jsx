import { useEffect } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
//
import * as PokedexActions from "../../actions/pokeapiActions";

function PokeTypes(props) {
  const {
    getPokemonTypes,
    getAllPokemons,
    getPokemonsByType,
    pokemonTypes
  } = props;

  useEffect(() => {
    getPokemonTypes();
    getAllPokemons();
  }, [getPokemonTypes, getAllPokemons]);

  const renderUI = () => {
    return (
      <div className="mt-20">
        <button
          className="poke-button"
          onClick={getAllPokemons}
        >
          All
        </button>
        {!!pokemonTypes && pokemonTypes.map(({ name }, index) => (
          <button
            key={`type-${name}-${index}`}
            className="poke-button"
            onClick={() => getPokemonsByType(name)}
          >
            {name}
          </button>
        ))}
      </div>
    );
  };

  return renderUI();
}

const mapStateToProps = (state) => ({
  pokemonTypes: state.pokedex.pokemon_types
});

const mapDispatchToProps = (dispatch) => ({
  getPokemonTypes: bindActionCreators(
    PokedexActions.getPokemonTypesAction, dispatch
  ),
  getAllPokemons: bindActionCreators(
    PokedexActions.getAllPokemonsAction, dispatch
  ),
  getPokemonsByType: bindActionCreators(
    PokedexActions.getPokemonsByTypeAction, dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(PokeTypes);