import React, { useState } from 'react';
import "../App.css";

function User() {
  const [formData, setFormData] = useState({
    nombre_apellidos: '',
    correo: '',
    password: ''
  });

  const [contador, setCount] = useState(10);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.nombre_apellidos,
          email: formData.correo,
          password: formData.password,
          avatar: 'https://picsum.photos/800'
        })
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario.');
      }
      
      console.log("Inicio de pruebas");
      console.log(`Request => ${JSON.stringify(formData)}`);
      const responseData = await response.json();
      console.log(`Response => ${JSON.stringify(responseData)}`);

      // Obtener el id del usuario creado desde la respuesta del servidor
      const userId = responseData.id;
      console.log("El id del usuario creado es: ", userId)
      const role = responseData.role;

      // Limpiar el formulario después del envío exitoso
      setFormData({
        nombre_apellidos: '',
        correo: '',
        password: ''
      });

      // Mostrar un alert con el id del usuario creado
      alert(`¡Formulario enviado con éxito! El id del usuario creado es: ${userId} y su rol es ${role}`);
    } catch (error) {
      alert('Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="form_container_contact">
      <div className="form_header">
        <h1 className="form_title">Registrar usuario</h1>
      </div>
      <div className="form_body">
        <p>Estas en el contador, y vas en el número: {contador}</p>
        <button onClick={() => setCount(contador + 1)} >Incrementar Contador (1)</button>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <label className="form_label">NOMBRES Y APELLIDOS:</label>
            <div className="form_input-ico">
              <input
                className="form_input"
                id="nombre_apellidos"
                name="nombre_apellidos"
                value={formData.nombre_apellidos}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form">
            <label className="form_label">Ingresar Correo:</label>
            <div className="form_input-ico">
              <input
                className="form_input"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form">
            <label className="form_label">Contraseña:</label>
            <div className="form_input-ico">
              <input
                type="password"
                className="form_input"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
