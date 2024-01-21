const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Gomez Maximiliano Ezequiel
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
          <br />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Sobre Mi!
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Trabajos anteriores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
