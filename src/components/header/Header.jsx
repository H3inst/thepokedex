function Header() {

  const renderUI = () => {
    return (
      <header className="poke-header">
        <h1 className="text-header">
          Di<span className="primary-color">Pokedex</span>
        </h1>
      </header>
    );
  };

  return renderUI();
}

export default Header;