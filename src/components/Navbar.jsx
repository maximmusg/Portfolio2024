const Navbar = () => {
  return (
    <div className="navbar-container" style={{ backgroundColor: "#0b60b0" }}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <img
            className="logo__img"
            src="./images/logo2.png"
            alt="logoNombre"
          />
          <a className="navbar-brand navbar-title" href="#">
            Gómez Maximiliano Ezequiel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Sobre Mí!
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Trabajos anteriores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  ¡Contratame!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
