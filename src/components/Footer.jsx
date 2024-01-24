const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container-text">
        Página creada por
        <a href="https://github.com/maximmusg"> Gómez Maximiliano Ezequiel.</a>
      </div>
      <div className="footer__container-icons">
        <a href="https://www.linkedin.com/in/maximiliano-g%C3%B3mez-8442332a4/">
          <img src="./images/linkedin.png" alt="Linkedin" />
        </a>
        <a href="https://github.com/maximmusg">
          <img src="./images/ghlogo.png" alt="Github" />
        </a>
        <a href="https://www.instagram.com/maximmusg/">
          <img src="./images/iglogo.png" alt="instagram" />
        </a>
        <a aria-label="Chat on WhatsApp" href="https://wa.me/3513740384">
          <img alt="Chat on WhatsApp" src="./images/wpp.png" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
