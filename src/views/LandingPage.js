import React from "react";
import { Layout } from "antd";
import { SimpleForm } from "../components/form/SimpleForm"
import { TopSection } from "../components/containers/TopSection"
import { AboutSection } from "../components/containers/AboutSection"
import { FooterSection } from "../components/containers/FooterSection"

const { Content } = Layout;

export const LandingPage = () => {
    return (
        <Layout>
            <Content>
                    <TopSection />
                    <AboutSection />
                    <FooterSection />
                    {/* <SimpleForm /> */}
            </Content>
        </Layout>
    );
};

export default LandingPage;
