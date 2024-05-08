import "../App.css";
function Contact() {
  return (
    <div className="form_container_contact">
      <div className="form_header">
        <h1 className="form_title">Contacto</h1>
      </div>
      <div className="form_body">
        <div className="form">
          <label className="form_label">NOMBRES Y APELLIDOS:</label>
          <div className="form_input-ico">
            <i className="fa fa-user form_ico" aria-hidden="true">
              <input
                className="form_input"
                id="nombre_apellidos"
                name="nombre_apellidos"
              ></input>
            </i>
          </div>
        </div>
        <div className="form">
          <label className="form_label">Describir pregunta:</label>
          <div className="form_input-ico">
            <i className="fa fa-user form_ico" aria-hidden="true">
              <input
                className="form_input"
                id="describir_pregunta"
                name="describir_pregunta"
              ></input>
            </i>
          </div>
        </div>
        <div className="form">
          <label className="form_label">Ingresar Correo:</label>
          <div className="form_input-ico">
            <i className="fa fa-user form_ico" aria-hidden="true">
              <input className="form_input" id="correo" name="correo"></input>
            </i>
          </div>
        </div>
        <div className="form">
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
