import React from "react";
import { Flex } from "antd";

interface CardFooterProps {
    footerLeft?: React.ReactNode;
    footerCenter?: React.ReactNode;
    footerRight?: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ footerLeft, footerCenter, footerRight }) => {
    const hasFooter = footerLeft || footerCenter || footerRight;

    if (!hasFooter) return null;

    return (
        <Flex justify="space-between" align="center" className="box-footer">
            <Flex gap={8} wrap>{footerLeft}</Flex>
            <Flex gap={8} wrap>{footerCenter}</Flex>
            <Flex gap={8} wrap>{footerRight}</Flex>
        </Flex>
    );
};

