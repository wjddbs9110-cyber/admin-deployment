import React from "react";
import { Card, Flex, Divider, Table, Empty, Form } from "antd";
import type { TableProps } from "antd";
import { CardHeader } from "./common/CardHeader";
import { CardFooter } from "./common/CardFooter";
import { Pagination } from "./common/Pagination";
import type { BaseCardProps } from "./common/CardType";

export interface FilterItem {
    label?: string;
    component: React.ReactNode;
}

interface CardTableProps extends BaseCardProps, Omit<TableProps<any>, "title"> {
    children?: React.ReactNode;
    filterItems?: FilterItem[];
    filterLayout?: "horizontal" | "vertical";
    paginationAlign?: "start" | "center" | "end";
    showPagination?: boolean;
    emptyDescription?: string;
}

export const CardTable: React.FC<CardTableProps> = ({ title, headerRight, children, filterItems, filterLayout = "horizontal", paginationAlign = "end", showPagination = true, pagination, emptyDescription, footerLeft, footerCenter, footerRight, ...tableProps }) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);

    const handlePageChange = (page: number, newPageSize?: number) => {
        setCurrentPage(page);
        if (newPageSize) {
            setPageSize(newPageSize);
        }
    };

    const tableLocale = emptyDescription ? { emptyText: <Empty description={emptyDescription} /> } : tableProps.locale;
    const hasFooter = footerLeft || footerCenter || footerRight;

    return (
        <Card>
            <Flex vertical gap={16}>
                <CardHeader title={title} headerRight={headerRight} />
                <Divider className="card-divider" />
                {filterItems && (
                    <>
                        <Form layout={filterLayout === "horizontal" ? "inline" : "vertical"} colon={false} className="box-body">
                            <Flex gap={16} wrap="wrap" align="flex-end">
                                {filterItems.map((item, index) => (
                                    <Form.Item key={index} label={item.label} className="card-filter-item">
                                        {item.component}
                                    </Form.Item>
                                ))}
                            </Flex>
                        </Form>
                        <Divider className="card-divider" />
                    </>
                )}
                {children && (
                    <>
                        {children}
                        <Divider className="card-divider" />
                    </>
                )}
                <Table {...tableProps} locale={tableLocale} pagination={false} className="box-body" />
                {showPagination && (
                    <>
                        <Divider className="card-divider" />
                        <Pagination
                            {...(typeof pagination === "object" ? pagination : {})}
                            className="box-footer"
                            align={paginationAlign}
                            current={currentPage}
                            pageSize={pageSize}
                            total={typeof tableProps.dataSource === "object" && Array.isArray(tableProps.dataSource) ? tableProps.dataSource.length : 0}
                            onChange={handlePageChange}
                        />
                    </>
                )}
                {hasFooter && !showPagination && <Divider className="card-divider" />}
                <CardFooter footerLeft={footerLeft} footerCenter={footerCenter} footerRight={footerRight} />
            </Flex>
        </Card>
    );
};

