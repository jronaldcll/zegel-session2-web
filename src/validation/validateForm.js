export default function validateForm(values) {
    let errors = {};

    if (!values.nombre_apellidos) {
        errors.nombre_apellidos = 'Los nombres y apellidos son obligatorios';
    }
    if (!values.correo) {
        errors.correo = 'El correo es obligatorio';
    }
    if (!values.describir_pregunta) {
        errors.describir_pregunta = 'La pregunta es obligatoria';
    }
    // if (!values.password) {
    //     errors.password = 'La contraseña es obligatoria';
    // } else if (values.password.length < 3) {
    //     errors.password = 'La contraseña debe tener al menos 4 caracteres';
    // }

    return errors;
}