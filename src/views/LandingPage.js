import React from "react";
import { Layout } from "antd";
import { TopSection } from "../components/containers/topoPagina/TopSection"
import { AboutSection } from "../components/containers/about/AboutSection"
import { FooterSection } from "../components/containers/footer/FooterSection"
import { Header } from "../components/containers/header/Header"
import { HeaderLogo } from "../components/containers/headerLogo/HeaderLogo"
import { TimelineSection } from "../components/containers/timeLineSection/TimelineSection"

const { Content } = Layout;

export const LandingPage = () => {
    return (
        <Layout>
            <Content>
                    <HeaderLogo />
                    <Header />
                    <TopSection />
                    <TimelineSection />
                    <AboutSection />
                    <FooterSection />
            </Content>
        </Layout>
    );
};

export default LandingPage;
