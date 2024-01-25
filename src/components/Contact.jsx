const Contact = () => {
  return (
    <div id="contact" className="contact__container">
      <div className="contact__info--container">
        <h2 className="contact__title">DATOS PERSONALES:</h2>
        <h4>NOMBRE Y APELLIDO:</h4>
        <p>Gómez Maximiliano Ezequiel.</p>
        <h4>DNI:</h4>
        <p>38.502.162</p>
        <h4>LUGAR Y FECHA DE NACIMIENTO:</h4>
        <p>Córdoba, Argentina - 25 de Octubre de 1994</p>
        <h4>CORREO ELECTRÓNICO:</h4>
        <p>mmsg.2594@gmail.com</p>
        <h4>NÚMERO DE TELÉFONO:</h4>
        <p>351-3740384</p>
        <h4>DIRECCIÓN:</h4>
        <p>Barrio Colinas del Cerro, Córdoba </p>
        <h4>ESTADO CIVIL:</h4>
        <p>Soltero</p>
      </div>
      <div className="contact__form--container">
        <h2 className="contact__title">¡Trabaja Conmigo!</h2>
        <p>
          Si deseas comunicarte conmigo, completa el siguiente formulario y
          responderé a la brevedad.
        </p>
        <form
          action="https://formsubmit.co/82b604f54414bf24e14e4da919601f62 "
          method="POST"
        >
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre y apellido:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              aria-describedby="emailHelp"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="correo"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="motivo" className="form-label">
              Motivo:
            </label>
            <input
              type="text"
              className="form-control"
              id="motivo"
              aria-describedby="emailHelp"
              name="motivo"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contenidoDelMensaje">Mensaje:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="contenido"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>

          <input type="hidden" name="_next" value="http://localhost:5173" />
          {/* <input type="hidden" name="_captcha" value="false" /> */}
          {/* <input type="hidden" name="_next" value="web" /> */}
          {/* <input type="hidden" name="_captcha" value="web" /> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
