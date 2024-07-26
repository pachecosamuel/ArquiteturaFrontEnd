import React, { useState } from 'react';
import { db } from '../../../firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles.js";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { Input } from "../../../common/Input.js"
import { Button } from "../../../common/Button.js"
import { notification } from "antd";
import { validateForm } from '../../../utils/validation.js';

export const SimpleForm = () => {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        telefone: ''
    });

    const [errors, setErrors] = useState({
        nomeCompleto: "",
        email: "",
        telefone: "",
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
        const { errors, isValid } = validateForm(formData);

        setErrors(errors);

        if (isValid) {
            try {
                await addDoc(collection(db, "lead"), formData);
                notification.success({
                    message: "Sucesso",
                    description: "Lead cadastrada com sucesso!",
                });
                setFormData({ nomeCompleto: "", email: "", telefone: "" });
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
                                    placeholder="Seu Nome Completo"
                                    value={formData.nomeCompleto}
                                    onChange={handleChange}
                                />
                                <Span>{errors.nomeCompleto}</Span>
                            </Col>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="Seu Melhor Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Span>{errors.email}</Span>
                            </Col>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="telefone"
                                    placeholder="Telefone (DDD + 9 números)"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                />
                                <Span>{errors.telefone}</Span>
                            </Col>
                            <ButtonContainer>
                                <Button type="submit">Enviar</Button>
                                {/* <button type="submit">Enviar</button> */}
                            </ButtonContainer>
                        </FormGroup>
                    </Slide>
                </Col>
            </Row>
        </ContactContainer>
    );
};
export default SimpleForm;

