import React from "react";
import { Typography, Space } from "antd";

const { Title, Text } = Typography;

const App: React.FC = () => {
    return (
        <Space direction="vertical" size={24}>
            <Title level={1}>광고 솔루션 어드민</Title>
            <Text>프로젝트 초기 설정이 완료되었습니다.</Text>
        </Space>
    );
};

export default App;

