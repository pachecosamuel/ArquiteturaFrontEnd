// src/hooks/useLeadForm.js
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { notification } from "antd";
import { validateForm } from "../utils/validation";

export const useLeadForm = () => {
    const [formState, setFormState] = useState({
        nomeCompleto: "",
        email: "",
        telefone: "",
    });
    const [errors, setErrors] = useState({
        nomeCompleto: "",
        email: "",
        telefone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { errors, isValid } = validateForm(formState);

        setErrors(errors);

        if (isValid) {
            try {
                await addDoc(collection(db, "leads"), formState);
                notification.success({
                    message: "Sucesso",
                    description: "Lead cadastrada com sucesso!",
                });
                setFormState({ nomeCompleto: "", email: "", telefone: "" });
            } catch (error) {
                notification.error({
                    message: "Erro",
                    description: "Falha ao cadastrar lead.",
                });
            }
        } else {
            notification.error({
                message: "Erro de validação",
                description: "Preencha todos os campos corretamente.",
            });
        }
    };

    return {
        formState,
        errors,
        handleChange,
        handleSubmit,
    };
};
