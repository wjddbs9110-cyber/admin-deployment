import React from "react";
import { Flex, Typography } from "antd";

const { Text } = Typography;

const ContentFooter: React.FC = () => {
    return (
        <Flex justify="center" className="content-footer">
            <Text type="secondary">© 2024 Company Name. All rights reserved.</Text>
        </Flex>
    );
};

export default ContentFooter;

