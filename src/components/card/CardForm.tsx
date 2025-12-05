import React from "react";
import { Card, Flex, Divider, Row, Col, Form } from "antd";
import type { FormItemProps } from "antd";
import { CardHeader } from "./common/CardHeader";
import { CardFooter } from "./common/CardFooter";
import type { BaseCardProps } from "./common/CardType";

interface CardFormProps extends BaseCardProps {
    children?: React.ReactNode;
    columns?: 1 | 2;
    layout?: "horizontal" | "vertical";
}

interface CardFormItemProps extends FormItemProps {
    children?: React.ReactNode;
    direction?: "horizontal" | "vertical";
}

const CardFormItem: React.FC<CardFormItemProps> = ({ children, direction = "vertical", ...props }) => {
    return (
        <Form.Item {...props}>
            <Flex vertical gap={8}>
                <Flex vertical={direction === "vertical"} align={direction === "horizontal" ? "center" : undefined} gap={8} wrap>
                    {children}
                </Flex>
            </Flex>
        </Form.Item>
    );
};

const CardFormComponent: React.FC<CardFormProps> = ({ title, headerRight, children, columns = 1, layout = "horizontal", footerLeft, footerCenter, footerRight }) => {
    const hasFooter = footerLeft || footerCenter || footerRight;
    const colSpan = columns === 2 ? 12 : 24;
    const formItems = React.Children.toArray(children);
    const labelSpan = layout === "horizontal" ? (columns === 1 ? 2 : 4) : undefined;
    const wrapperSpan = layout === "horizontal" ? (columns === 1 ? 22 : 20) : undefined;
    const labelCol = labelSpan ? { span: labelSpan } : undefined;
    const wrapperCol = wrapperSpan ? { span: wrapperSpan } : undefined;
    const labelAlign = layout === "horizontal" ? "left" : undefined;

    return (
        <Card>
            <Flex vertical gap={16}>
                <CardHeader title={title} headerRight={headerRight} />
                <Divider className="card-divider" />
                <Form layout={layout} colon={false} labelCol={labelCol} wrapperCol={wrapperCol} labelAlign={labelAlign} className="box-body">
                    <Row gutter={[16, 16]}>
                        {formItems.map((item, index) => (
                            <Col key={index} xs={24} md={colSpan}>
                                {item}
                            </Col>
                        ))}
                    </Row>
                </Form>
                {hasFooter && <Divider className="card-divider" />}
                <CardFooter footerLeft={footerLeft} footerCenter={footerCenter} footerRight={footerRight} />
            </Flex>
        </Card>
    );
};

export const CardForm = Object.assign(CardFormComponent, {
    Item: CardFormItem
});

