import React from "react";
import { Layout } from "antd";
import { TopSection } from "../components/containers/topoPagina/TopSection"
import { AboutSection } from "../components/containers/about/AboutSection"
import { FooterSection } from "../components/containers/footer/FooterSection"
import { Header } from "../components/containers/header/Header"

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
