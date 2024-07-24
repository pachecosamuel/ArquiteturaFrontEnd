import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles.js";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { Input } from "../../common/Input"


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
        <ContactContainer>
            <Row justify="space-between" align="middle">
                <Col lg={12} md={11} sm={24} xs={24}>
                    <Slide direction="left" triggerOnce>
                        <h2>{("Entre em Contato")}</h2>
                        <p>{("Preencha o formulário abaixo para entrar em contato conosco.")}</p>
                    </Slide>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <Slide direction="right" triggerOnce>
                        <FormGroup autoComplete="off" onSubmit={handleSubmit}>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="nomeCompleto"
                                    placeholder="Nome Completo"
                                    value={formData.nomeCompleto}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {/* {errors.email && <Span>{errors.email}</Span>} */}
                            </Col>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="telefone"
                                    placeholder="Telefone (DDD + 9 números)"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                />
                                {/* {errors.telefone && <Span>{errors.telefone}</Span>} */}
                            </Col>
                            <ButtonContainer>
                                <button type="submit">Enviar</button>
                            </ButtonContainer>
                        </FormGroup>
                    </Slide>
                </Col>
            </Row>
        </ContactContainer>
    );
};
export default SimpleForm;

{/* <form onSubmit={handleSubmit}>
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
            </form> */}