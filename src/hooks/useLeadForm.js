import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const useLeadForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};

        // Validate name (must be longer than 3 characters)
        if (!values.nomeCompleto || values.nomeCompleto.length <= 3) {
            newErrors.nomeCompleto = "Nome completo deve ter mais de 3 caracteres";
        }

        // Validate email (must match pattern)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.email || !emailRegex.test(values.email)) {
            newErrors.email = "Email inválido";
        }

        // Validate telefone (Brazilian phone number pattern)
        const telefoneRegex = /^\d{2}\d{9}$/;
        if (!values.telefone || !telefoneRegex.test(values.telefone)) {
            newErrors.telefone = "Telefone inválido. Deve seguir o padrão DDD + 9 números";
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                await addDoc(collection(db, "leads"), values);
                setValues(initialValues); // Reset form values after successful submission
            } catch (error) {
                console.error("Erro ao enviar os dados: ", error);
            }
        }
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };
};

export default useLeadForm;

// {/* <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Nome Completo:</label>
//                     <input
//                         type="text"
//                         name="nomeCompleto"
//                         value={formData.nomeCompleto}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Telefone:</label>
//                     <input
//                         type="text"
//                         name="telefone"
//                         value={formData.telefone}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button type="submit">Enviar</button>
//             </form> */}