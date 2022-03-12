function Footer() {

  const renderUI = () => {
    return (
      <footer className="poke-footer">
        <span>All rights reserved © 2022</span>
        <a
          href="https://github.com/ewrightht/thepokedex"
          className="poke-link ml-20 mr-20"
          target={"_blank"}
          rel="noreferrer"
        >
          Check it on GitHub
        </a>
        <span>Siddev 2022</span>
      </footer>
    );
  };

  return renderUI();
}

export default Footer;