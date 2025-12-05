export interface NotificationItem {
    key: string;
    title: string;
    description: string;
    time: string;
    isRead: boolean;
    type: "info" | "success" | "warning" | "error";
}

export interface UserInfo {
    name: string;
    email: string;
    avatar?: string;
}

export const userInfo: UserInfo = {
    name: "홍길동",
    email: "hong@example.com"
};

export const notifications: NotificationItem[] = [
    {
        key: "1",
        title: "새 캠페인이 시작되었습니다",
        description: "2024 신년 특가 캠페인이 활성화되었습니다.",
        time: "5분 전",
        isRead: false,
        type: "success"
    },
    {
        key: "2",
        title: "예산 한도 경고",
        description: "일일 예산의 80%가 소진되었습니다.",
        time: "30분 전",
        isRead: false,
        type: "warning"
    },
    {
        key: "3",
        title: "시스템 점검 안내",
        description: "2024-01-15 새벽 2시-4시 시스템 점검이 예정되어 있습니다.",
        time: "1시간 전",
        isRead: true,
        type: "info"
    },
    {
        key: "4",
        title: "캠페인 승인 완료",
        description: "여름 시즌 프로모션 캠페인이 승인되었습니다.",
        time: "2시간 전",
        isRead: true,
        type: "success"
    },
    {
        key: "5",
        title: "결제 실패",
        description: "자동 결제가 실패했습니다. 결제 정보를 확인해주세요.",
        time: "3시간 전",
        isRead: false,
        type: "error"
    }
];

