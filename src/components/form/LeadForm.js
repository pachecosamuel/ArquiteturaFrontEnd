import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { Input } from "../../common/Input";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles.js";
import { useLeadForm } from "../../hooks/useLeadForm.js";

export const LeadForm = () => {
    const { t } = useTranslation();
    const initialValues = { nomeCompleto: "", email: "", telefone: "" };
    const { values, errors, handleChange, handleSubmit } = useLeadForm(initialValues);

    return (
        <ContactContainer>
            <Row justify="space-between" align="middle">
                <Col lg={12} md={11} sm={24} xs={24}>
                    <Slide direction="left" triggerOnce>
                        <h2>{t("Entre em Contato")}</h2>
                        <p>{t("Preencha o formulário abaixo para entrar em contato conosco.")}</p>
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
                                    value={values.nomeCompleto}
                                    onChange={handleChange}
                                />
                                {errors.nomeCompleto && <Span>{errors.nomeCompleto}</Span>}
                            </Col>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <Span>{errors.email}</Span>}
                            </Col>
                            <Col span={24}>
                                <Input
                                    type="text"
                                    name="telefone"
                                    placeholder="Telefone (DDD + 9 números)"
                                    value={values.telefone}
                                    onChange={handleChange}
                                />
                                {errors.telefone && <Span>{errors.telefone}</Span>}
                            </Col>
                            <ButtonContainer>
                                <Button name="submit">{t("Enviar")}</Button>
                            </ButtonContainer>
                        </FormGroup>
                    </Slide>
                </Col>
            </Row>
        </ContactContainer>
    );
};

export default LeadForm;
