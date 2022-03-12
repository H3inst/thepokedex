import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PokemonModal from "./pokemonModal/PokemonModal";

function Pokemons(props) {
  const { pokemons = [] } = props;
  const [pokemonArrays, setPokemonArrays] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [pokemonDetailsModal, setPokemonDetailsModal] = useState({ visible: false });

  useEffect(() => {
    if (pokemons) {
      let splittedPokemons = pokemons.reduce((acc, el, index) => {
        const chunk = Math.floor(index / 24);

        if (!acc[chunk]) acc[chunk] = [];
        acc[chunk].push(el);

        return acc;
      }, []);
      setPokemonArrays(splittedPokemons);
    }
    setPagination(0);
  }, [pokemons]);

  const handleSetPage = (page = 0) => {
    setPagination(page);
  };

  const handleOpenPokemonModal = (pokemon) => {
    setPokemonDetailsModal({ visible: true, pokemon });
  };

  const handleClosePokemonModal = () => {
    setPokemonDetailsModal({ visible: false });
  };

  const renderUI = () => {
    return (
      <Fragment>
        <div className="flex justify-center flex-wrap">
          {!!pokemons.length ? pokemonArrays[pagination]?.map((pokemon) => (
            <div
              key={pokemon.name}
              className="poke-card"
              onClick={() => handleOpenPokemonModal(pokemon)}
            >
              <div className="poke-card__image">
                <img
                  src={pokemon.sprites.front_default}
                  alt="pokemon"
                  loading="lazy"
                />
              </div>
              <div className="poke-card__description">
                <span><span className="title"
                >Name:</span> {pokemon.name}
                </span>
                <span><span className="title">
                  Experience:</span> {pokemon.base_experience}
                </span>
                <span><span className="title">
                  Type:</span> {pokemon.types[0].type.name}
                </span>
              </div>
              <div className="poke-card__action">
                See more
              </div>
            </div>
          )) : (
            <h1 className="text-header">Oops! There are no pokemons here. 🤔</h1>
          )}
        </div>
        <div className="flex justify-center align-center">
          {pokemonArrays?.map((_page, index) => (
            <button
              key={index}
              className={`poke-button mt-50 mb-50 ${pagination === index && "active"}`}
              onClick={() => handleSetPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <PokemonModal
          open={pokemonDetailsModal.visible}
          pokemon={pokemonDetailsModal.pokemon}
          onClose={handleClosePokemonModal}
        />
      </Fragment>
    );
  };

  return renderUI();
}

const mapStateToProps = (state) => ({
  pokemons: state.pokedex.pokemons,
});

export default connect(mapStateToProps)(Pokemons);