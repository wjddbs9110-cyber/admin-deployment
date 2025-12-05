// KPI 데이터 타입
export interface KpiDataItem {
    title: string;
    value: number | string;
    iconType: "fund" | "rise" | "eye" | "percentage";
    iconColor: string;
}

// KPI 카드 데이터
export const kpiData: KpiDataItem[] = [
    {
        title: "총 캠페인 수",
        value: 248,
        iconType: "fund",
        iconColor: "#1890ff"
    },
    {
        title: "활성 캠페인",
        value: 156,
        iconType: "rise",
        iconColor: "#52c41a"
    },
    {
        title: "총 노출수",
        value: "1,245,678",
        iconType: "eye",
        iconColor: "#722ed1"
    },
    {
        title: "평균 CTR",
        value: "3.42%",
        iconType: "percentage",
        iconColor: "#fa8c16"
    }
];

// 차트 데이터
export const barChartData = [
    { name: "Google", value: 4000 },
    { name: "Meta", value: 3000 },
    { name: "Kakao", value: 2000 },
    { name: "Naver", value: 2780 },
    { name: "Apple", value: 1890 }
];

export const columnChartData = [
    { name: "1월", value: 4000 },
    { name: "2월", value: 3000 },
    { name: "3월", value: 5000 },
    { name: "4월", value: 4500 },
    { name: "5월", value: 6000 },
    { name: "6월", value: 5500 }
];

export const donutChartData = [
    { name: "검색", value: 400 },
    { name: "디스플레이", value: 300 },
    { name: "비디오", value: 200 },
    { name: "쇼핑", value: 100 }
];

export const lineChartData = [
    { name: "1주", value: 4000 },
    { name: "2주", value: 3000 },
    { name: "3주", value: 5000 },
    { name: "4주", value: 4500 },
    { name: "5주", value: 6000 },
    { name: "6주", value: 5500 },
    { name: "7주", value: 7000 }
];

// 테이블 컬럼 정의
export const campaignColumns = [
    { title: "캠페인명", dataIndex: "name", key: "name" },
    {
        title: "상태",
        dataIndex: "status",
        key: "status"
    },
    { title: "노출수", dataIndex: "impressions", key: "impressions" },
    { title: "클릭수", dataIndex: "clicks", key: "clicks" },
    { title: "CTR", dataIndex: "ctr", key: "ctr" }
];

// 캠페인 샘플 데이터
export const campaignData = [
    { key: "1", name: "봄 시즌 프로모션", status: "active", impressions: "125,400", clicks: "4,230", ctr: "3.37%" },
    { key: "2", name: "신제품 런칭 캠페인", status: "active", impressions: "98,500", clicks: "3,890", ctr: "3.95%" },
    { key: "3", name: "브랜드 인지도 향상", status: "active", impressions: "156,700", clicks: "4,120", ctr: "2.63%" },
    { key: "4", name: "여름 세일 이벤트", status: "paused", impressions: "87,300", clicks: "2,980", ctr: "3.41%" },
    { key: "5", name: "재고 소진 프로모션", status: "active", impressions: "112,600", clicks: "3,560", ctr: "3.16%" },
    { key: "6", name: "신규 고객 유치", status: "active", impressions: "134,800", clicks: "4,780", ctr: "3.55%" },
    { key: "7", name: "리타겟팅 캠페인", status: "active", impressions: "76,400", clicks: "2,340", ctr: "3.06%" },
    { key: "8", name: "VIP 회원 혜택", status: "paused", impressions: "95,200", clicks: "3,120", ctr: "3.28%" },
    { key: "9", name: "모바일 전용 프로모션", status: "active", impressions: "103,500", clicks: "3,890", ctr: "3.76%" },
    { key: "10", name: "주말 특가 이벤트", status: "active", impressions: "118,900", clicks: "4,560", ctr: "3.84%" }
];

