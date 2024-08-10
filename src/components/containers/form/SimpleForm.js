import React, { useState } from "react";
import { db } from "../../../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import {
  TextContainer,
  ContactContainer,
  FormGroup,
  Span,
  ButtonContainer,
} from "./styles.js";
import { Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { Input } from "../../../common/Input.js";
import { Button } from "../../../common/Button.js";
import { notification } from "antd";
import { validateForm } from "../../../utils/validation.js";
import { useNavigate } from "react-router-dom";

export const SimpleForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
    setFormData({
      ...formData,
      [name]: value,
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
          description: "Cadastrado com sucesso!",
        });
        navigate("/novoproduto");
        setFormData({ nomeCompleto: "", email: "", telefone: "" });
      } catch (error) {
        notification.error({
          message: "Erro",
          description: "Falha ao cadastrar registrar.",
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
      <TextContainer>
        <Slide direction="left" triggerOnce>
          <h2>Acesse agora</h2>
          <p>Preencha o formulário abaixo para ter acesso gratuito ao seu rico material</p>
        </Slide>
      </TextContainer>
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
            <Button type="submit">Receber conteúdo gratuito</Button>
          </ButtonContainer>
        </FormGroup>
      </Slide>
    </ContactContainer>
  );
};
export default SimpleForm;
