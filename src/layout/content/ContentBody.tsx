import React from "react";
import { Flex } from "antd";

interface ContentBodyProps {
    children: React.ReactNode;
}

const ContentBody: React.FC<ContentBodyProps> = ({ children }) => {
    return (
        <Flex vertical gap={24} className="content-body">
            {children}
        </Flex>
    );
};

export default ContentBody;

