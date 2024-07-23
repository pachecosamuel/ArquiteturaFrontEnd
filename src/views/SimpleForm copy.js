import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { MoviesContainer } from "../styles/MovieContainer"

export const SimpleForm = () => {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        telefone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'lead'), formData);
            alert('Dados enviados com sucesso!');
            setFormData({
                nomeCompleto: '',
                email: '',
                telefone: ''
            });
        } catch (error) {
            console.error('Erro ao enviar os dados: ', error);
            alert('Erro ao enviar os dados.');
        }
    };

    return (
        <MoviesContainer>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome Completo:</label>
                    <input
                        type="text"
                        name="nomeCompleto"
                        value={formData.nomeCompleto}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </MoviesContainer>
    );
};

export default SimpleForm;
