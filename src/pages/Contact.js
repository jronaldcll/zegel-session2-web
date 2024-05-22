import "../App.css";
import validateForm from '../validation/validateForm';
import useForm from '../hooks/useForm';
function Contact() {
  const initialValues = {
    nombre_apellidos: '',
    correo: '',
    describir_pregunta: ''
  }

  const onSubmit = () => {
    alert('Registro realizado con éxito!!')
  }

  const { values, errors, handleChange, handleSubmit } = useForm(initialValues, validateForm, onSubmit)

  return (
    <div className="form_container_contact">
      <div className="form_header">
        <h1 className="form_title">Contacto</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form_body">
          <div className="form">
            <label className="form_label">NOMBRES Y APELLIDOS:</label>
            <div className="form_input-ico">
              <i className="fa fa-user form_ico" aria-hidden="true">
                <input
                  className="form_input"
                  id="nombre_apellidos"
                  name="nombre_apellidos"
                  value={values.nombre_apellidos}
                  onChange={handleChange}
                ></input>
                {errors.nombre_apellidos && <p>{errors.nombre_apellidos}</p>}
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
                  value={values.describir_pregunta}
                  onChange={handleChange}
                ></input>
                {errors.describir_pregunta && <p>{errors.describir_pregunta}</p>}
              </i>
            </div>
          </div>
          <div className="form">
            <label className="form_label">Ingresar Correo:</label>
            <div className="form_input-ico">
              <i className="fa fa-user form_ico" aria-hidden="true">
                <input 
                  className="form_input" 
                  id="correo" 
                  name="correo" 
                  value={values.correo}
                  onChange={handleChange}></input>
                  {errors.correo && <p>{errors.correo}</p>}
              </i>
            </div>
          </div>
          <div className="form">
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
