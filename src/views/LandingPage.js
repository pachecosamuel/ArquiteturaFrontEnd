import React from "react";
import { Layout } from "antd";
import { SimpleForm } from "../components/form/SimpleForm"
import { TopSection } from "../components/containers/TopSection"
import { AboutSection } from "../components/containers/AboutSection"
import { FooterSection } from "../components/containers/FooterSection"
import { Header } from "../components/containers/Header"

const { Content } = Layout;

export const LandingPage = () => {
    return (
        <Layout>
            <Content>
                    <Header />
                    <TopSection />
                    <AboutSection />
                    <FooterSection />
            </Content>
        </Layout>
    );
};

export default LandingPage;
