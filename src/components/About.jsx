const About = () => {
  return (
    <div className="About__container">
      <div className="about__info">
        <h1 className="title__About">
          Hola, Soy Maxi.
          <br /> Soy de la provincia de Cordoba, Argentina.
        </h1>
        <p className="text__About">
          Actualmente me encuentro trabajando en un comercio del rubro quimico,
          y estoy buscando mi primera experiencia profesional en el mundo de la
          programacion.
        </p>
        <div className="about__btn">
          <button className="btn btn-primary btn__general">
            Trabaja conmigo
          </button>
          <button className="btn btn-secondary btn__general ">
            Mira mis trabajos y proyectos
          </button>
          <button className="btn btn-danger btn__general">
            Descarga aqui mi Curriculum!
          </button>
        </div>
      </div>
      <img
        className="about__img"
        src="./images/fotoCarnet.png"
        alt="Mi fotografia"
      />
    </div>
  );
};

export default About;
