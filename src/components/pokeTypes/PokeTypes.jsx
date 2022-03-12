import { Fragment, useEffect, useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
//
import * as PokedexActions from "../../actions/pokedexActions";
import PokemonSearcher from "../searcher/PokemonSearcher";

function PokeTypes(props) {
  const {
    getPokemonTypes,
    getAllPokemons,
    getPokemonsByType,
    pokemonTypes
  } = props;
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    getPokemonTypes();
    getAllPokemons();
  }, [getPokemonTypes, getAllPokemons]);

  const handleSetSelectedType = (type = "") => {
    setSelectedType(type);

    if (type !== "all") {
      getPokemonsByType(type);
    } else {
      getAllPokemons();
    }
  };

  const renderUI = () => {
    return (
      <Fragment>
        <PokemonSearcher setType={setSelectedType} />
        <div className="mt-20">
          <button
            className={`poke-button ${selectedType === "all" && "active"}`}
            onClick={() => handleSetSelectedType("all")}
          >
            All
          </button>
          {!!pokemonTypes && pokemonTypes.map(({ name: type }, index) => (
            <button
              key={`type-${type}-${index}`}
              className={`poke-button ${selectedType === type && "active"}`}
              onClick={() => handleSetSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </Fragment>
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