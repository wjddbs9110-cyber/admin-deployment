import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import ContentHeader from "./content/ContentHeader";
import ContentBody from "./content/ContentBody";
import ContentFooter from "./content/ContentFooter";

const { Content } = Layout;

const Layout01: React.FC = () => {
    return (
        <Layout>
            <Header />
            <Layout>
                <Sidebar />
                <Content>
                    <ContentHeader />
                    <ContentBody>
                        <Outlet />
                    </ContentBody>
                    <ContentFooter />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Layout01;

