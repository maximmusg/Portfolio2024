const Contact = () => {
  return (
    <div className="contact__container">
      <div className="contact__info--container">
        <h2>Datos Personales:</h2>
        <h3>NOMBRE Y APELLIDO:</h3>
        <p>Gómez Maximiliano Ezequiel.</p>
        <h3>DNI:</h3>
        <p>38.502.162</p>
        <h3>LUGAR Y FECHA DE NACIMIENTO</h3>
        <p>Córdoba, Argentina - 25 de Octubre de 1994</p>
        <h3>CORREO ELECTRÓNICO</h3>
        <p>mmsg.2594@gmail.com</p>
        <h3>NUMERO DE TELÉFONO</h3>
        <p>351-3740384</p>
        <h3>DIRECCION</h3>
        <p>Barrio Colinas del Cerro, Córdoba </p>
        <h3>ESTADO CIVIL</h3>
        <p>Soltero</p>
      </div>
      <div className="contact__form--container">
        <form name="contact">
          <h2>Trabaja Conmigo!</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
            asperiores? Doloremque quia, amet perspiciatis ex ipsam dolorem
            similique quasi dolores, sit eum, facilis voluptatum alias at
            obcaecati quaerat perferendis unde.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
