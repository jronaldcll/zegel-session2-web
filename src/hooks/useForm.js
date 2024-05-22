import { useState, useEffect } from 'react';

const useForm = (initialValues, validate, onSubmit) => {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)
    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                onSubmit();
                setIsSubmitting(true)
                // setValues(initialValues);
            } else {
                setIsSubmitting(false)
            }
        }
    }, [errors, isSubmitting, onSubmit])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        console.log(`Registro exitoso, estos son los datos de contacto: ${JSON.stringify(values)}`)
        setErrors(validationErrors);
        setIsSubmitting(true);
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    }
}

export default useForm