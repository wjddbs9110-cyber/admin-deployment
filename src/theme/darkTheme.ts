import type { ThemeConfig } from "antd";

export const darkTheme: ThemeConfig = {
    token: {
        // 색상 팔레트
        colorPrimary: "#8b5cf6",
        colorSuccess: "#4ade80",
        colorWarning: "#fbbf24",
        colorError: "#fb7185",
        colorInfo: "#60a5fa",

        // 배경 색상
        colorBgBase: "#141517",
        colorBgContainer: "#252836",
        colorBgElevated: "#252836",
        colorBgLayout: "#141517",
        colorBgSpotlight: "#2a2d3a",

        // 텍스트 색상 (가독성 개선)
        colorText: "#f3f4f6",
        colorTextSecondary: "#d1d5db",
        colorTextTertiary: "#9ca3af",
        colorTextQuaternary: "#6b7280",

        // 테두리
        colorBorder: "#3f3f46",
        colorBorderSecondary: "#27272a",

        // 링크
        colorLink: "#8b5cf6",
        colorLinkHover: "#a78bfa",
        colorLinkActive: "#7c3aed",

        // Border Radius
        borderRadius: 12,
        borderRadiusLG: 20,
        borderRadiusSM: 8,
        borderRadiusXS: 6,

        // 그림자
        boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.3)",
        boxShadowSecondary: "0 2px 8px 0 rgba(0, 0, 0, 0.2)",
        boxShadowTertiary: "0 8px 24px 0 rgba(0, 0, 0, 0.5)",

        // 폰트
        fontSize: 14,
        fontSizeHeading1: 32,
        fontSizeHeading2: 28,
        fontSizeHeading3: 24,
        fontSizeHeading4: 20,
        fontSizeHeading5: 16,
        fontWeightStrong: 600,

        // 간격
        padding: 16,
        paddingLG: 24,
        paddingSM: 12,
        paddingXS: 8,
        paddingXXS: 4,

        margin: 16,
        marginLG: 24,
        marginSM: 12,
        marginXS: 8,
        marginXXS: 4,

        // 레이아웃
        controlHeight: 40,
        controlHeightLG: 48,
        controlHeightSM: 32,

        // 투명도
        opacityLoading: 0.65,

        // Line
        lineWidth: 1,
        lineType: "solid"
    },
    components: {
        Layout: {
            headerBg: "#1f2128",
            headerColor: "#f3f4f6",
            headerPadding: "0 24px",
            headerHeight: 64,
            bodyBg: "#141517",
            siderBg: "#1f2128",
            triggerBg: "#252836",
            triggerColor: "#f3f4f6"
        },
        Menu: {
            darkItemBg: "#1f2128",
            darkSubMenuItemBg: "#1a1d29",
            darkItemSelectedBg: "#8b5cf6",
            darkItemHoverBg: "#252836",
            itemBg: "#1f2128",
            subMenuItemBg: "#1a1d29",
            itemSelectedBg: "#8b5cf6",
            itemHoverBg: "#252836",
            itemColor: "#d1d5db",
            itemSelectedColor: "#ffffff",
            itemHoverColor: "#f3f4f6",
            itemMarginInline: 8,
            itemMarginBlock: 4,
            itemBorderRadius: 8
        },
        Card: {
            colorBgContainer: "#252836",
            colorBorderSecondary: "#3f3f46",
            boxShadowTertiary: "0 4px 16px 0 rgba(0, 0, 0, 0.3)",
            paddingLG: 24,
            borderRadiusLG: 20,
            headerBg: "transparent",
            headerFontSize: 20,
            headerFontSizeSM: 18
        },
        Table: {
            headerBg: "#1f2128",
            headerColor: "#d1d5db",
            headerSortActiveBg: "#252836",
            headerSortHoverBg: "#252836",
            rowHoverBg: "#2a2d3a",
            rowSelectedBg: "rgba(139, 92, 246, 0.12)",
            rowSelectedHoverBg: "rgba(139, 92, 246, 0.18)",
            bodySortBg: "#1a1d29",
            borderColor: "#3f3f46",
            headerSplitColor: "#3f3f46",
            cellPaddingBlock: 16,
            cellPaddingInline: 16,
            cellFontSize: 14
        },
        Button: {
            primaryColor: "#ffffff",
            primaryShadow: "0 2px 8px rgba(139, 92, 246, 0.25)",
            dangerShadow: "none",
            defaultBg: "#252836",
            defaultColor: "#f3f4f6",
            defaultBorderColor: "#3f3f46",
            defaultHoverBg: "#2a2d3a",
            defaultHoverColor: "#ffffff",
            defaultHoverBorderColor: "#52525b",
            defaultActiveBg: "#2a2d3a",
            defaultActiveBorderColor: "#52525b",
            borderRadius: 12,
            borderRadiusLG: 14,
            borderRadiusSM: 10,
            fontWeight: 500,
            controlHeight: 40,
            controlHeightLG: 48,
            controlHeightSM: 32
        },
        Input: {
            colorBgContainer: "#1f2128",
            colorBorder: "#3f3f46",
            colorText: "#f3f4f6",
            colorTextPlaceholder: "#9ca3af",
            hoverBorderColor: "#8b5cf6",
            activeBorderColor: "#8b5cf6",
            activeShadow: "0 0 0 2px rgba(139, 92, 246, 0.15)",
            borderRadius: 12,
            borderRadiusLG: 14,
            borderRadiusSM: 10,
            paddingBlock: 10,
            paddingInline: 16
        },
        Select: {
            colorBgContainer: "#1f2128",
            colorBgElevated: "#252836",
            colorBorder: "#3f3f46",
            colorText: "#f3f4f6",
            colorTextPlaceholder: "#9ca3af",
            optionSelectedBg: "#8b5cf6",
            optionSelectedColor: "#ffffff",
            optionActiveBg: "#2a2d3a",
            optionPadding: "8px 12px",
            borderRadius: 12,
            borderRadiusLG: 14,
            borderRadiusSM: 10,
            controlHeight: 40,
            controlHeightLG: 48,
            controlHeightSM: 32,
            selectorBg: "#1f2128"
        },
        DatePicker: {
            colorBgContainer: "#1f2128",
            colorBgElevated: "#252836",
            colorBorder: "#3f3f46",
            colorText: "#f3f4f6",
            cellHoverBg: "#2a2d3a",
            cellActiveWithRangeBg: "#8b5cf6",
            cellBgDisabled: "#1a1d29",
            borderRadius: 12,
            borderRadiusLG: 14,
            borderRadiusSM: 10
        },
        Switch: {
            colorPrimary: "#8b5cf6",
            colorPrimaryHover: "#a78bfa",
            colorTextQuaternary: "#52525b",
            colorTextTertiary: "#71717a"
        },
        Tag: {
            defaultBg: "#252836",
            defaultColor: "#f3f4f6",
            borderRadiusSM: 8
        },
        Alert: {
            colorInfoBg: "rgba(59, 130, 246, 0.1)",
            colorInfoBorder: "rgba(96, 165, 250, 0.3)",
            colorSuccessBg: "rgba(74, 222, 128, 0.1)",
            colorSuccessBorder: "rgba(74, 222, 128, 0.3)",
            colorWarningBg: "rgba(251, 191, 36, 0.1)",
            colorWarningBorder: "rgba(251, 191, 36, 0.3)",
            colorErrorBg: "rgba(251, 113, 133, 0.1)",
            colorErrorBorder: "rgba(251, 113, 133, 0.3)"
        },
        Modal: {
            contentBg: "#252836",
            headerBg: "#252836",
            titleColor: "#e5e7eb",
            borderRadiusLG: 20
        },
        Divider: {
            colorSplit: "#3f3f46",
            margin: 0,
            marginLG: 0
        },
        Typography: {
            colorText: "#f3f4f6",
            colorTextHeading: "#ffffff",
            colorTextSecondary: "#d1d5db",
            fontWeightStrong: 600,
            titleMarginBottom: 0,
            titleMarginTop: 0
        },
        Form: {
            labelColor: "#d1d5db",
            labelFontSize: 14,
            itemMarginBottom: 0,
            verticalLabelPadding: "0 0 8px"
        },
        Pagination: {
            itemBg: "transparent",
            itemActiveBg: "transparent",
            itemActiveColorDisabled: "#52525b",
            itemLinkBg: "transparent",
            itemInputBg: "transparent",
            colorPrimary: "#8b5cf6",
            colorPrimaryHover: "#a78bfa",
            colorBorder: "#3f3f46",
            colorText: "#d1d5db",
            colorTextDisabled: "#6b7280",
            borderRadius: 8
        },
        Dropdown: {
            colorBgElevated: "#252836",
            borderRadiusLG: 16,
            boxShadowSecondary: "0 8px 24px rgba(0, 0, 0, 0.5)"
        },
        Checkbox: {
            colorBorder: "#3f3f46",
            colorPrimary: "#8b5cf6",
            borderRadiusSM: 4
        },
        Radio: {
            colorBorder: "#3f3f46",
            colorPrimary: "#8b5cf6"
        },
        Upload: {
            colorBorder: "#3f3f46",
            colorFillAlter: "#1f2128"
        },
        Breadcrumb: {
            itemColor: "#d1d5db",
            lastItemColor: "#f3f4f6",
            linkColor: "#d1d5db",
            linkHoverColor: "#8b5cf6",
            separatorColor: "#9ca3af"
        },
        Statistic: {
            titleFontSize: 14,
            contentFontSize: 24
        },
        Empty: {
            colorTextDisabled: "#9ca3af"
        }
    },
    algorithm: undefined
};

