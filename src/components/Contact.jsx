const Contact = () => {
  return (
    <div className="contact__container">
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
        <h4>NUMERO DE TELÉFONO:</h4>
        <p>351-3740384</p>
        <h4>DIRECCION:</h4>
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
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre y apellido:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">
              Motivo:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1">Mensaje:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
