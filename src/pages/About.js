import "../App.css";
import { useParams } from "react-router-dom";
function About() {

  const AboutRequest =() =>{
    let {slug} = useParams() 
  
  return (
    <div className="form_container_contact">
      <div className="form_header">
        <h1 className="form_title">Acerca de</h1>
      </div>
      <div className="form_body">
        <div className="form">
        <section className="AboutRequest">
          <p>Ahora estas en {slug}</p>
        </section>
          <label className="form_label">Simplificar y disfrutar más la vida es el propósito con el que trabajamos para quienes nos eligen todos los días. Esta visión común está en el centro de nuestras conversaciones y guía nuestros proyectos de transformación cultural y digital.</label>
        </div>
      </div>
    </div>
  );
}}

export default About;
