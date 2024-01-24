const About = () => {
  return (
    <div className="About__container">
      <div className="about__info">
        <h2 className="title__About">
          Hola, Soy Maxi !
          <br /> Soy de la provincia de Cordoba, Argentina.
        </h2>
        <p className="text__About">
          Actualmente me encuentro trabajando en un comercio del rubro quimico,
          y estoy buscando mi primera experiencia profesional en el mundo de la
          programacion.
        </p>
        <div className="about__btn">
          <button className="btn  btn__general ">Trabaja conmigo</button>
          <button className="btn  btn__general ">
            Mira mis trabajos y proyectos
          </button>
          <a
            href="https://drive.google.com/file/d/1ZdIbHCnTxOWRo23VZPWxhuVg0Qn76cYF/view?usp=drive_link"
            className="btn  btn-cv "
          >
            Ver o descarga aqui mi Curriculum!
          </a>
        </div>
        <div className="about__social">
          <p>Puedes seguirme en mis redes sociales: </p>

          <div className="about__social-icons">
            <a href="https://www.linkedin.com/in/maximiliano-g%C3%B3mez-8442332a4/">
              <img src="./images/linkedin.png" alt="Linkedin" />
            </a>
            <a href="https://github.com/maximmusg">
              <img src="./images/ghlogo.png" alt="Github" />
            </a>
            <a href="https://www.instagram.com/maximmusg/">
              <img src="./images/iglogo.png" alt="instagram" />
            </a>
            {/* <a aria-label="Chat on WhatsApp" href="https://wa.me/3513740384">
              <img alt="Chat on WhatsApp" src="./images/wpp.png" />
            </a> */}
          </div>
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
