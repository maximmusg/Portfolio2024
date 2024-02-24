const Navbar = () => {
  return (
    <div>
      <div
        className="logo-container"
        style={{ backgroundColor: "#0B60B0", textAlign: "center" }}
      >
        <a href="#">
          <img
            className="logo__img"
            src="./images/logo2.png"
            alt="logoNombre"
          />
        </a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-nav">
          <a className="navbar-brand" href="#">
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
