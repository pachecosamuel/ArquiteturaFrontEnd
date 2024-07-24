import React from "react";
import { Layout } from "antd";
import { SimpleForm } from "../components/form/SimpleForm"
// import { ContentContainer } from "./styles"; // Estilo da página

const { Content } = Layout;

export const LandingPage = () => {
    return (
        <Layout>
            <Content>
                    {/* <LeadForm /> */}
                    <SimpleForm />
            </Content>
        </Layout>
    );
};

export default LandingPage;