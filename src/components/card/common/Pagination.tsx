import React from "react";
import { Pagination as AntPagination, Flex } from "antd";
import type { PaginationProps as AntPaginationProps } from "antd";

interface PaginationProps extends AntPaginationProps {
    align?: "left" | "center" | "right";
}

export const Pagination: React.FC<PaginationProps> = ({ align = "center", ...props }) => {
    const justifyContent = align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center";

    return (
        <Flex justify={justifyContent}>
            <AntPagination {...props} />
        </Flex>
    );
};

