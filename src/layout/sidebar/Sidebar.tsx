import React, { useState } from "react";
import { Layout, Menu, Button, Flex } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { menuItems } from "@/router/AppRouterUtil";
import type { MenuProps } from "antd";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const convertMenuItems = (items: typeof menuItems): MenuProps["items"] => {
        return items.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            children: item.children ? convertMenuItems(item.children) : undefined,
            onClick: !item.children ? () => navigate(item.path) : undefined
        }));
    };

    const getSelectedKeys = () => {
        const path = location.pathname;
        const findKey = (items: typeof menuItems): string | null => {
            for (const item of items) {
                if (item.path === path) return item.key;
                if (item.children) {
                    const childKey = findKey(item.children);
                    if (childKey) return childKey;
                }
            }
            return null;
        };
        const key = findKey(menuItems);
        return key ? [key] : [];
    };

    const getOpenKeys = () => {
        const path = location.pathname;
        const openKeys: string[] = [];
        
        const findOpenKeys = (items: typeof menuItems) => {
            for (const item of items) {
                if (item.children) {
                    const hasActiveChild = item.children.some(child => child.path === path);
                    if (hasActiveChild) {
                        openKeys.push(item.key);
                    }
                    findOpenKeys(item.children);
                }
            }
        };
        
        findOpenKeys(menuItems);
        return openKeys;
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} trigger={null} width={280} collapsedWidth={80}>
            <Flex vertical gap={0} className="sidebar-container">
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={getSelectedKeys()}
                    defaultOpenKeys={getOpenKeys()}
                    items={convertMenuItems(menuItems)}
                    className="sidebar-menu"
                />
                <Flex justify="center" className="sidebar-toggle-wrapper">
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={toggleCollapsed}
                        className="sidebar-toggle-btn"
                    />
                </Flex>
            </Flex>
        </Sider>
    );
};

export default Sidebar;

