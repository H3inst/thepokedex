import Header from "../components/header/Header";
import Pokemons from "../components/pokemons/Pokemons";
import PokeTypes from "../components/pokeTypes/PokeTypes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="poke-container-50">
        <h1 className="text-header mt-50 text-center">
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
        <Pokemons />
      </div>
    </div>
  );
}

export default App;