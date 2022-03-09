import { connect } from "react-redux";

function Pokemons(props) {
  const { pokemons } = props;

  const renderUI = () => {
    
    return (
      <div>
        {!!pokemons && pokemons.map(({ pokemon }) => (
          <h1>{pokemon?.name}</h1>
        ))}
      </div>
    );
  };

  return renderUI();
}

const mapStateToProps = (state) => ({
  pokemons: state.pokedex.pokemons
});

export default connect(mapStateToProps)(Pokemons);