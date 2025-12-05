import React from "react";
import { Flex, Typography, Breadcrumb } from "antd";
import type { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { menuItems } from "@/router/AppRouterUtil";
import type { MenuItem } from "@/router/AppRouterUtil";

const { Title } = Typography;

const ContentHeader: React.FC = () => {
    const location = useLocation();

    const findMenuItem = (path: string, items: MenuItem[]): MenuItem | null => {
        for (const item of items) {
            if (item.path === path) return item;
            if (item.children) {
                const found = findMenuItem(path, item.children);
                if (found) return found;
            }
        }
        return null;
    };

    const getBreadcrumbItems = (): BreadcrumbItemType[] => {
        const currentItem = findMenuItem(location.pathname, menuItems);

        if (!currentItem) {
            return [
                { title: <HomeOutlined />, href: "/" },
                { title: "페이지" }
            ];
        }

        const items: BreadcrumbItemType[] = [{ title: <HomeOutlined />, href: "/" }];

        const findParent = (targetPath: string, items: MenuItem[]): MenuItem | null => {
            for (const item of items) {
                if (item.children) {
                    const found = item.children.find(child => child.path === targetPath);
                    if (found) return item;
                    const parentFound = findParent(targetPath, item.children);
                    if (parentFound) return parentFound;
                }
            }
            return null;
        };

        const parent = findParent(location.pathname, menuItems);
        if (parent) {
            items.push({ title: parent.label as React.ReactNode });
        }

        items.push({ title: currentItem.label as React.ReactNode });

        return items;
    };

    const getPageTitle = () => {
        const currentItem = findMenuItem(location.pathname, menuItems);
        return currentItem ? currentItem.label : "페이지";
    };

    return (
        <Flex vertical gap={16} className="content-header">
            <Breadcrumb items={getBreadcrumbItems()} />
            <Title level={2}>{getPageTitle()}</Title>
        </Flex>
    );
};

export default ContentHeader;

