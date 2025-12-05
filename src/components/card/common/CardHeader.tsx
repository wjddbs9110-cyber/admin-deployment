import React from "react";
import { Flex, Typography } from "antd";

const { Title } = Typography;

interface CardHeaderProps {
    title?: string;
    headerRight?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, headerRight }) => {
    if (!title && !headerRight) return null;

    return (
        <Flex justify="space-between" align="center" className="box-header">
            {title && <Title level={4}>{title}</Title>}
            {headerRight && <Flex gap={8} wrap>{headerRight}</Flex>}
        </Flex>
    );
};

