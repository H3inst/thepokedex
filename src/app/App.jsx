import { connect } from "react-redux";

import Loader from "../components/common/Loader";
import Header from "../components/header/Header";
import Pokemons from "../components/pokemons/Pokemons";
import PokeTypes from "../components/pokeTypes/PokeTypes";

function App(props) {
  const { isLoading } = props;
  return (
    <div className="App">
      <Header />
      <div className="poke-container-50">
        <h1 className="text-header text-center" style={{ marginTop: 150 }}>
          Watch all pokemons with the best API for it.
        </h1>
        <input
          type="text"
          className="poke-textfield w-100 mt-30"
          placeholder="Search for a pokemon"
        />
        <PokeTypes />
      </div>
      <div className="poke-container-80 mt-40">
        {isLoading ? <Loader /> : <Pokemons />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.interface.isLoading,
})

export default connect(mapStateToProps)(App);