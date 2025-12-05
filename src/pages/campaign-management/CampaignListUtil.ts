// 캠페인 상태 타입
export type CampaignStatus = "active" | "paused" | "completed" | "draft";

// 캠페인 타입
export type CampaignType = "search" | "display" | "video" | "shopping";

// 캠페인 데이터 타입
export interface Campaign {
    key: string;
    id: string;
    name: string;
    type: CampaignType;
    status: CampaignStatus;
    budget: number;
    spend: number;
    impressions: number;
    clicks: number;
    conversions: number;
    ctr: number;
    cpc: number;
    startDate: string;
    endDate: string;
    isActive: boolean;
}

// 캠페인 목록 데이터
export const campaignData: Campaign[] = [
    {
        key: "1",
        id: "CMP001",
        name: "2024 봄 신상품 프로모션",
        type: "search",
        status: "active",
        budget: 5000000,
        spend: 3200000,
        impressions: 125000,
        clicks: 3500,
        conversions: 245,
        ctr: 2.8,
        cpc: 914,
        startDate: "2024-03-01",
        endDate: "2024-03-31",
        isActive: true
    },
    {
        key: "2",
        id: "CMP002",
        name: "여름 시즌 브랜드 캠페인",
        type: "display",
        status: "active",
        budget: 8000000,
        spend: 4500000,
        impressions: 250000,
        clicks: 5000,
        conversions: 320,
        ctr: 2.0,
        cpc: 900,
        startDate: "2024-06-01",
        endDate: "2024-08-31",
        isActive: true
    },
    {
        key: "3",
        id: "CMP003",
        name: "가을 세일 특가 이벤트",
        type: "video",
        status: "paused",
        budget: 3000000,
        spend: 1800000,
        impressions: 95000,
        clicks: 2100,
        conversions: 156,
        ctr: 2.2,
        cpc: 857,
        startDate: "2024-09-01",
        endDate: "2024-09-30",
        isActive: false
    },
    {
        key: "4",
        id: "CMP004",
        name: "연말 쇼핑 페스티벌",
        type: "shopping",
        status: "draft",
        budget: 10000000,
        spend: 0,
        impressions: 0,
        clicks: 0,
        conversions: 0,
        ctr: 0,
        cpc: 0,
        startDate: "2024-12-01",
        endDate: "2024-12-31",
        isActive: false
    },
    {
        key: "5",
        id: "CMP005",
        name: "신규 고객 유치 캠페인",
        type: "search",
        status: "active",
        budget: 6000000,
        spend: 5200000,
        impressions: 180000,
        clicks: 4800,
        conversions: 380,
        ctr: 2.7,
        cpc: 1083,
        startDate: "2024-01-15",
        endDate: "2024-12-31",
        isActive: true
    },
    {
        key: "6",
        id: "CMP006",
        name: "리타겟팅 전환 캠페인",
        type: "display",
        status: "completed",
        budget: 4000000,
        spend: 4000000,
        impressions: 150000,
        clicks: 3200,
        conversions: 280,
        ctr: 2.1,
        cpc: 1250,
        startDate: "2024-02-01",
        endDate: "2024-02-29",
        isActive: false
    },
    {
        key: "7",
        id: "CMP007",
        name: "모바일 앱 설치 캠페인",
        type: "video",
        status: "active",
        budget: 7000000,
        spend: 3800000,
        impressions: 200000,
        clicks: 5500,
        conversions: 420,
        ctr: 2.8,
        cpc: 691,
        startDate: "2024-04-01",
        endDate: "2024-06-30",
        isActive: true
    },
    {
        key: "8",
        id: "CMP008",
        name: "주말 한정 특가 프로모션",
        type: "shopping",
        status: "paused",
        budget: 2000000,
        spend: 1200000,
        impressions: 80000,
        clicks: 1800,
        conversions: 145,
        ctr: 2.3,
        cpc: 667,
        startDate: "2024-05-10",
        endDate: "2024-05-12",
        isActive: false
    }
];

// 캠페인 타입 옵션
export const campaignTypeOptions = [
    { value: "all", label: "전체" },
    { value: "search", label: "검색" },
    { value: "display", label: "디스플레이" },
    { value: "video", label: "동영상" },
    { value: "shopping", label: "쇼핑" }
];

// 캠페인 상태 옵션
export const campaignStatusOptions = [
    { value: "all", label: "전체" },
    { value: "active", label: "활성" },
    { value: "paused", label: "일시정지" },
    { value: "completed", label: "완료" },
    { value: "draft", label: "임시저장" }
];

// 캠페인 상태 라벨 매핑
export const statusLabels: Record<CampaignStatus, string> = {
    active: "활성",
    paused: "일시정지",
    completed: "완료",
    draft: "임시저장"
};

// 캠페인 타입 라벨 매핑
export const typeLabels: Record<CampaignType, string> = {
    search: "검색",
    display: "디스플레이",
    video: "동영상",
    shopping: "쇼핑"
};

// 캠페인 상태 색상 매핑
export const statusColors: Record<CampaignStatus, "success" | "warning" | "default" | "processing"> = {
    active: "success",
    paused: "warning",
    completed: "default",
    draft: "processing"
};

// 숫자 포맷팅 함수
export const formatNumber = (num: number): string => {
    return num.toLocaleString("ko-KR");
};

// 통화 포맷팅 함수
export const formatCurrency = (num: number): string => {
    return `${num.toLocaleString("ko-KR")}원`;
};

// 퍼센트 포맷팅 함수
export const formatPercent = (num: number): string => {
    return `${num.toFixed(1)}%`;
};


