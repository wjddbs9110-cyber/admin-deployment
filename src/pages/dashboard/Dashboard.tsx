import React from "react";
import { Space, Card, Row, Col, Statistic, Tag } from "antd";
import { FundOutlined, RiseOutlined, EyeOutlined, PercentageOutlined } from "@ant-design/icons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { CardTable, CardForm } from "@/components/card/CardUtil";
import { kpiData, barChartData, columnChartData, donutChartData, lineChartData, campaignColumns, campaignData } from "./DashboardUtil";
import type { KpiDataItem } from "./DashboardUtil";

const Dashboard: React.FC = () => {
    const getIcon = (item: KpiDataItem) => {
        const iconProps = {
            className: "dashboard-kpi-icon"
        };
        const iconStyle = { color: item.iconColor };

        switch (item.iconType) {
            case "fund":
                return <FundOutlined {...iconProps} style={iconStyle} />;
            case "rise":
                return <RiseOutlined {...iconProps} style={iconStyle} />;
            case "eye":
                return <EyeOutlined {...iconProps} style={iconStyle} />;
            case "percentage":
                return <PercentageOutlined {...iconProps} style={iconStyle} />;
            default:
                return null;
        }
    };

    // 다크모드에 어울리는 차트 색상
    const COLORS = ["#8b5cf6", "#4ade80", "#fbbf24", "#fb7185"];
    const chartColors = {
        primary: "#8b5cf6",
        success: "#4ade80",
        warning: "#fbbf24",
        danger: "#fb7185",
        info: "#60a5fa"
    };

    // 테이블 컬럼에 Tag 렌더링 추가
    const tableColumns = campaignColumns.map(col => {
        if (col.key === "status") {
            return {
                ...col,
                render: (status: string) => {
                    const color = status === "active" ? "green" : "default";
                    const text = status === "active" ? "활성" : "일시정지";
                    return <Tag color={color}>{text}</Tag>;
                }
            };
        }
        return col;
    });

    return (
        <Space direction="vertical" size={24}>
            {/* KPI 카드 4개 */}
            <Row gutter={[16, 16]}>
                {kpiData.map((item, index) => (
                    <Col key={index} xs={24} sm={12} md={6}>
                        <Card>
                            <Statistic
                                title={item.title}
                                value={item.value}
                                prefix={getIcon(item)}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* 차트 영역 2x2 */}
            <Row gutter={[16, 16]}>
                {/* 가로 막대 차트 */}
                <Col xs={24} md={12}>
                    <CardForm title="채널별 성과">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart layout="vertical" data={barChartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
                                <XAxis
                                    type="number"
                                    stroke="#9ca3af"
                                    tick={{ fill: "#d1d5db" }}
                                />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    stroke="#9ca3af"
                                    tick={{ fill: "#d1d5db" }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#252836",
                                        border: "1px solid #3f3f46",
                                        borderRadius: "8px",
                                        color: "#f3f4f6"
                                    }}
                                />
                                <Legend wrapperStyle={{ color: "#d1d5db" }} />
                                <Bar dataKey="value" fill={chartColors.primary} name="노출수" radius={[0, 8, 8, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardForm>
                </Col>

                {/* 세로 막대 차트 */}
                <Col xs={24} md={12}>
                    <CardForm title="월별 성과">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={columnChartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
                                <XAxis
                                    dataKey="name"
                                    stroke="#9ca3af"
                                    tick={{ fill: "#d1d5db" }}
                                />
                                <YAxis
                                    stroke="#9ca3af"
                                    tick={{ fill: "#d1d5db" }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#252836",
                                        border: "1px solid #3f3f46",
                                        borderRadius: "8px",
                                        color: "#f3f4f6"
                                    }}
                                />
                                <Legend wrapperStyle={{ color: "#d1d5db" }} />
                                <Bar dataKey="value" fill={chartColors.success} name="클릭수" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardForm>
                </Col>

                {/* 도넛 차트 */}
                <Col xs={24} md={12}>
                    <CardForm title="광고 유형별 분포">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={donutChartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    labelLine={{ stroke: "#9ca3af" }}
                                >
                                    {donutChartData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#252836",
                                        border: "1px solid #3f3f46",
                                        borderRadius: "8px",
                                        color: "#f3f4f6"
                                    }}
                                />
                                <Legend wrapperStyle={{ color: "#d1d5db" }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardForm>
                </Col>

                {/* 부드러운 곡선 차트 */}
                <Col xs={24} md={12}>
                    <CardForm title="주간 트렌드">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={lineChartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
                                <XAxis
                                    dataKey="name"
                                    stroke="#9ca3af"
                                    tick={{ fill: "#d1d5db" }}
                                />
                                <YAxis
                                    stroke="#9ca3af"
                                    tick={{ fill: "#d1d5db" }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#252836",
                                        border: "1px solid #3f3f46",
                                        borderRadius: "8px",
                                        color: "#f3f4f6"
                                    }}
                                />
                                <Legend wrapperStyle={{ color: "#d1d5db" }} />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke={chartColors.info}
                                    strokeWidth={3}
                                    name="전환수"
                                    dot={{ fill: chartColors.info, r: 5 }}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardForm>
                </Col>
            </Row>

            {/* 최근 캠페인 테이블 */}
            <CardTable
                title="최근 캠페인"
                columns={tableColumns}
                dataSource={campaignData}
            />
        </Space>
    );
};

export default Dashboard;
