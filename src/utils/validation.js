// src/utils/validation.js
export const validateForm = (values) => {
    let errors = { nomeCompleto: "", email: "", telefone: "" };
    let isValid = true;

    if (!values.nomeCompleto || values.nomeCompleto.length < 3) {
        errors.nomeCompleto = "Nome deve ter pelo menos 3 caracteres.";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email || !emailRegex.test(values.email)) {
        errors.email = "Email inválido.";
        isValid = false;
    }

    const telefoneRegex = /^\d{2}\d{9}$/;
    if (!values.telefone || !telefoneRegex.test(values.telefone)) {
        errors.telefone = "Telefone inválido. Use o formato DDD+9 números.";
        isValid = false;
    }

    return { errors, isValid };
};
