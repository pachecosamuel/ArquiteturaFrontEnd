import React from "react";
import { Layout } from "antd";
import { LeadForm } from "../components/form/LeadForm"
// import { ContentContainer } from "./styles"; // Estilo da página

const { Content } = Layout;

export const LandingPage = () => {
    return (
        <Layout>
            <Content>
                {/* <ContentContainer> */}
                    <LeadForm />
                {/* </ContentContainer> */}
            </Content>
        </Layout>
    );
};

export default LandingPage;
