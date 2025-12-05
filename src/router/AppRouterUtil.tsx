import React from "react";
import {
    HomeOutlined,
    AppstoreOutlined,
    FundOutlined,
    PictureOutlined,
    AimOutlined,
    BarChartOutlined,
    DollarOutlined,
    SettingOutlined,
    FolderOutlined,
    TeamOutlined,
    LineChartOutlined,
    CreditCardOutlined,
    UserOutlined
} from "@ant-design/icons";

export interface MenuItem {
    key: string;
    label: string;
    path: string;
    icon?: React.ReactNode;
    children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
    {
        key: "dashboard",
        label: "대시보드",
        path: "/dashboard",
        icon: <HomeOutlined />,
        children: [
            {
                key: "dashboard-realtime",
                label: "실시간 리포트",
                path: "/dashboard/realtime",
                icon: <LineChartOutlined />
            }
        ]
    },
    {
        key: "campaign",
        label: "캠페인 관리",
        path: "/campaign",
        icon: <FundOutlined />,
        children: [
            {
                key: "campaign-all",
                label: "전체 캠페인",
                path: "/campaign/all",
                icon: <FolderOutlined />
            }
        ]
    },
    {
        key: "creative",
        label: "광고 소재 관리",
        path: "/creative",
        icon: <PictureOutlined />,
        children: [
            {
                key: "creative-list",
                label: "소재 리스트",
                path: "/creative/list",
                icon: <AppstoreOutlined />
            }
        ]
    },
    {
        key: "targeting",
        label: "타겟팅 & 오디언스",
        path: "/targeting",
        icon: <AimOutlined />,
        children: [
            {
                key: "targeting-segment",
                label: "오디언스 세그먼트",
                path: "/targeting/segment",
                icon: <TeamOutlined />
            }
        ]
    },
    {
        key: "report",
        label: "리포트 & 분석",
        path: "/report",
        icon: <BarChartOutlined />,
        children: [
            {
                key: "report-performance",
                label: "성과 분석",
                path: "/report/performance",
                icon: <LineChartOutlined />
            }
        ]
    },
    {
        key: "billing",
        label: "결제 & 예산",
        path: "/billing",
        icon: <DollarOutlined />,
        children: [
            {
                key: "billing-charge",
                label: "충전 내역",
                path: "/billing/charge",
                icon: <CreditCardOutlined />
            }
        ]
    },
    {
        key: "system",
        label: "시스템 설정",
        path: "/system",
        icon: <SettingOutlined />,
        children: [
            {
                key: "system-team",
                label: "팀원 관리",
                path: "/system/team",
                icon: <UserOutlined />
            }
        ]
    },
    {
        key: "component-samples",
        label: "컴포넌트 샘플",
        path: "/component-samples",
        icon: <AppstoreOutlined />
    }
];

