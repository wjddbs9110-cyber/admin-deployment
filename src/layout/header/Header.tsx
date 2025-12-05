import React, { useState } from "react";
import { Layout, Flex, Typography, Badge, Avatar, Dropdown, List, Space, Button, Tag } from "antd";
import type { MenuProps } from "antd";
import { BellOutlined, UserOutlined, SettingOutlined, LogoutOutlined, ProfileOutlined } from "@ant-design/icons";
import { userInfo, notifications } from "./HeaderUtil";
import type { NotificationItem } from "./HeaderUtil";

const { Header: AntHeader } = Layout;
const { Title, Text } = Typography;

const Header: React.FC = () => {
    const [notificationList, setNotificationList] = useState<NotificationItem[]>(notifications);

    const unreadCount = notificationList.filter(item => !item.isRead).length;

    const handleMarkAsRead = (key: string) => {
        setNotificationList(prev =>
            prev.map(item =>
                item.key === key ? { ...item, isRead: true } : item
            )
        );
    };

    const handleMarkAllAsRead = () => {
        setNotificationList(prev =>
            prev.map(item => ({ ...item, isRead: true }))
        );
    };

    const getNotificationColor = (type: NotificationItem["type"]) => {
        switch (type) {
            case "success":
                return "#86efac";
            case "warning":
                return "#fbbf24";
            case "error":
                return "#f87171";
            case "info":
            default:
                return "#60a5fa";
        }
    };

    const notificationContent = (
        <Flex vertical gap={0} className="notification-dropdown">
            <Flex justify="space-between" align="center" className="notification-header">
                <Text strong>알림</Text>
                {unreadCount > 0 && (
                    <Button type="link" size="small" onClick={handleMarkAllAsRead}>
                        모두 읽음
                    </Button>
                )}
            </Flex>
            <Flex vertical className="notification-list-wrapper">
                <List
                    dataSource={notificationList}
                    locale={{ emptyText: "알림이 없습니다" }}
                    renderItem={(item) => (
                        <List.Item
                            key={item.key}
                            onClick={() => handleMarkAsRead(item.key)}
                            className={`notification-item ${!item.isRead ? "unread" : ""}`}
                        >
                            <Flex vertical gap={4} className="w-full">
                                <Flex justify="space-between" align="center">
                                    <Text strong>{item.title}</Text>
                                    {!item.isRead && (
                                        <Tag color="purple">NEW</Tag>
                                    )}
                                </Flex>
                                <Text type="secondary">{item.description}</Text>
                                <Flex justify="space-between" align="center">
                                    <Text type="secondary" className="notification-time">
                                        {item.time}
                                    </Text>
                                    <Flex
                                        className="notification-type-badge"
                                        style={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            backgroundColor: getNotificationColor(item.type)
                                        }}
                                    />
                                </Flex>
                            </Flex>
                        </List.Item>
                    )}
                />
            </Flex>
        </Flex>
    );

    const userMenuItems: MenuProps["items"] = [
        {
            key: "profile",
            icon: <ProfileOutlined />,
            label: "프로필"
        },
        {
            key: "settings",
            icon: <SettingOutlined />,
            label: "설정"
        },
        {
            type: "divider"
        },
        {
            key: "logout",
            icon: <LogoutOutlined />,
            label: "로그아웃",
            danger: true
        }
    ];

    const handleUserMenuClick: MenuProps["onClick"] = ({ key }) => {
        switch (key) {
            case "profile":
                console.log("프로필 클릭");
                break;
            case "settings":
                console.log("설정 클릭");
                break;
            case "logout":
                console.log("로그아웃 클릭");
                break;
        }
    };

    return (
        <AntHeader>
            <Flex align="center" justify="space-between">
                <Title level={3}>광고 솔루션 어드민</Title>
                <Space size={16}>
                    <Dropdown
                        dropdownRender={() => notificationContent}
                        trigger={["click"]}
                        placement="bottomRight"
                        getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
                    >
                        <Badge count={unreadCount} size="small" offset={[-4, 4]}>
                            <Button
                                type="text"
                                icon={<BellOutlined />}
                                className="header-icon-btn"
                            />
                        </Badge>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items: userMenuItems,
                            onClick: handleUserMenuClick
                        }}
                        trigger={["click"]}
                        placement="bottomRight"
                    >
                        <Flex align="center" gap={8} className="user-info-wrapper">
                            <Avatar
                                icon={<UserOutlined />}
                                className="user-avatar"
                            />
                            <Flex vertical gap={0}>
                                <Text strong>{userInfo.name}</Text>
                                <Text type="secondary" className="user-email">
                                    {userInfo.email}
                                </Text>
                            </Flex>
                        </Flex>
                    </Dropdown>
                </Space>
            </Flex>
        </AntHeader>
    );
};

export default Header;

