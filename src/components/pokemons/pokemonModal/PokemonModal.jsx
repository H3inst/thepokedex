import Modal from "../../common/Modal";

function PokemonModal({ open, onClose, pokemon = {} }) {

  const renderUI = () => {

    return (
      <Modal open={open} onClose={onClose}>
        <div className="poke-modal__card-header">
          <img
            src={pokemon.sprites?.front_default}
            alt="pokemon"
            loading="lazy"
          />
          <h1 className="text-header">{pokemon.name}</h1>
        </div>
        <div className="poke-modal__card-details">
          <span>
            <span className="title">ID: </span>
            {pokemon.id}
          </span>
          <span>
            <span className="title">Experience: </span>
            {pokemon.base_experience}
          </span>
          <span>
            <span className="title">Abilities: </span>
            {pokemon.abilities?.map((ab) => ab.ability.name + ", ")}
          </span>
          <span>
            <span className="title">Moves: </span>
            {pokemon.moves?.length} moves
          </span>
          <span>
            <span className="title">Height: </span>
            {pokemon.height}cm
          </span>
          <span>
            <span className="title">Weight: </span>
            {pokemon.weight}g
          </span>
        </div>
      </Modal>
    );
  };

  return renderUI();
}

export default PokemonModal;