import React from "react";
import { Pagination as AntPagination, Flex } from "antd";
import type { PaginationProps as AntPaginationProps } from "antd";

interface PaginationProps extends AntPaginationProps {
    align?: "start" | "center" | "end";
}

export const Pagination: React.FC<PaginationProps> = ({ align = "center", ...props }) => {
    const justifyContent = align === "start" ? "flex-start" : align === "end" ? "flex-end" : "center";

    return (
        <Flex justify={justifyContent}>
            <AntPagination {...props} />
        </Flex>
    );
};

