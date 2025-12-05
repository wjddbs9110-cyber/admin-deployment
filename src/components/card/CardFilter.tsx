import React from "react";
import { Card, Flex, Divider, Form } from "antd";
import { CardHeader } from "./common/CardHeader";
import { CardFooter } from "./common/CardFooter";
import type { BaseCardProps } from "./common/CardType";

interface FilterItem {
    label?: string;
    component: React.ReactNode;
}

interface CardFilterProps extends BaseCardProps {
    children?: React.ReactNode;
    filterItems?: FilterItem[];
    labelLayout?: "horizontal" | "vertical";
}

export const CardFilter: React.FC<CardFilterProps> = ({ title, headerRight, children, filterItems, labelLayout = "vertical", footerLeft, footerCenter, footerRight }) => {
    const hasFooter = footerLeft || footerCenter || footerRight;

    return (
        <Card>
            <Flex vertical gap={16}>
                <CardHeader title={title} headerRight={headerRight} />
                <Divider className="card-divider" />
                {filterItems ? (
                    <Form layout={labelLayout === "horizontal" ? "inline" : "vertical"} colon={false} className="box-body">
                        <Flex gap={16} wrap="wrap" align="flex-end">
                            {filterItems.map((item, index) => (
                                <Form.Item key={index} label={item.label} className="card-filter-item">
                                    {item.component}
                                </Form.Item>
                            ))}
                        </Flex>
                    </Form>
                ) : (
                    children
                )}
                {hasFooter && <Divider className="card-divider" />}
                <CardFooter footerLeft={footerLeft} footerCenter={footerCenter} footerRight={footerRight} />
            </Flex>
        </Card>
    );
};

