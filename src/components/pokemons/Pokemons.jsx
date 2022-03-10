import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

function Pokemons(props) {
  const { pokemons = [] } = props;
  const [pokemonArrays, setPokemonArrays] = useState([]);
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    if (pokemons) {
      let splittedPokemons = pokemons.reduce((acc, el, index) => {
        const chunk = Math.floor(index / 20);

        if (!acc[chunk]) acc[chunk] = [];
        acc[chunk].push(el);

        return acc;
      }, []);
      setPokemonArrays(splittedPokemons);
    }
    setPagination(0)
  }, [pokemons]);

  const handleSetPage = (page = 0) => {
    setPagination(page);
  }

  console.log(pokemons);

  const renderUI = () => {
    return (
      <Fragment>
        <div className="poke-container-80 flex flex-wrap">
          {!!pokemons.length && pokemonArrays[pagination]?.map((pokemon) => (
            <div key={pokemon?.name} className="poke-card">
              <h1 className="text-header">{pokemon?.name}</h1>
            </div>
          ))}
        </div>
        <div className="flex justify-center align-center">
          {pokemonArrays?.map((page, index) => (
            <button
              key={index}
              className={`poke-button mt-50 mb-50 ${pagination === index && "active"}`}
              onClick={() => handleSetPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </Fragment>
    );
  };

  return renderUI();
}

const mapStateToProps = (state) => ({
  pokemons: state.pokedex.pokemons
});

export default connect(mapStateToProps)(Pokemons);