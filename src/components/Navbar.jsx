const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar__flex">
        <img className="logo__img" src="./images/logo2.png" alt="logoNombre" />

        <div className="container-nav  ">
          <a className="navbar-brand navbar-title " to="#">
            Gómez Maximiliano Ezequiel
          </a>
          <span className="navbar-line"> | </span>
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

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">
                  Sobre Mi!
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
                  Contratame!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
