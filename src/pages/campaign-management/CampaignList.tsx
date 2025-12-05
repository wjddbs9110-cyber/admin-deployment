import React, { useState } from "react";
import { Space, Button, Input, Select, DatePicker, Tag, Switch, Modal, message, Flex } from "antd";
import { SearchOutlined, PlusOutlined, DeleteOutlined, EditOutlined, EyeOutlined, ExclamationCircleOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { CardTable } from "@/components/card/CardUtil";
import type { CampaignStatus } from "./CampaignListUtil";
import { campaignData, campaignTypeOptions, campaignStatusOptions, statusLabels, typeLabels, statusColors, formatNumber, formatCurrency, formatPercent, Campaign } from "./CampaignListUtil";

const { RangePicker } = DatePicker;

const CampaignList: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [dataSource, setDataSource] = useState<Campaign[]>(campaignData);

    const handleStatusToggle = (record: Campaign, checked: boolean) => {
        const newData = dataSource.map(item => {
            if (item.key === record.key) {
                const newStatus: CampaignStatus = checked ? "active" : "paused";
                return {
                    ...item,
                    isActive: checked,
                    status: newStatus
                };
            }
            return item;
        });
        setDataSource(newData);
        message.success(`${record.name} 캠페인이 ${checked ? "활성화" : "비활성화"}되었습니다.`);
    };

    const handleViewDetail = (record: Campaign) => {
        message.info(`${record.name} 캠페인 상세 페이지로 이동합니다.`);
    };

    const handleEdit = (record: Campaign) => {
        message.info(`${record.name} 캠페인 수정 페이지로 이동합니다.`);
    };

    const handleDelete = (record: Campaign) => {
        Modal.confirm({
            title: "캠페인 삭제",
            icon: <ExclamationCircleOutlined />,
            content: `${record.name} 캠페인을 삭제하시겠습니까?`,
            okText: "삭제",
            okType: "danger",
            onOk() {
                const newData = dataSource.filter(item => item.key !== record.key);
                setDataSource(newData);
                message.success(`${record.name} 캠페인이 삭제되었습니다.`);
            }
        });
    };

    const handleCreateCampaign = () => {
        message.info("캠페인 생성 페이지로 이동합니다.");
    };

    const columns = [
        {
            title: "캠페인 ID",
            dataIndex: "id",
            key: "id",
            width: 100
        },
        {
            title: "캠페인명",
            dataIndex: "name",
            key: "name",
            width: 200
        },
        {
            title: "타입",
            dataIndex: "type",
            key: "type",
            width: 100,
            render: (type: Campaign["type"]) => (
                <Tag color="blue">{typeLabels[type]}</Tag>
            )
        },
        {
            title: "상태",
            dataIndex: "status",
            key: "status",
            width: 100,
            render: (status: Campaign["status"]) => (
                <Tag color={statusColors[status]}>{statusLabels[status]}</Tag>
            )
        },
        {
            title: "예산",
            dataIndex: "budget",
            key: "budget",
            width: 120,
            align: "right" as const,
            render: (budget: number) => formatCurrency(budget)
        },
        {
            title: "지출",
            dataIndex: "spend",
            key: "spend",
            width: 120,
            align: "right" as const,
            render: (spend: number) => formatCurrency(spend)
        },
        {
            title: "노출수",
            dataIndex: "impressions",
            key: "impressions",
            width: 100,
            align: "right" as const,
            render: (impressions: number) => formatNumber(impressions)
        },
        {
            title: "클릭수",
            dataIndex: "clicks",
            key: "clicks",
            width: 100,
            align: "right" as const,
            render: (clicks: number) => formatNumber(clicks)
        },
        {
            title: "전환수",
            dataIndex: "conversions",
            key: "conversions",
            width: 100,
            align: "right" as const,
            render: (conversions: number) => formatNumber(conversions)
        },
        {
            title: "CTR",
            dataIndex: "ctr",
            key: "ctr",
            width: 80,
            align: "right" as const,
            render: (ctr: number) => formatPercent(ctr)
        },
        {
            title: "CPC",
            dataIndex: "cpc",
            key: "cpc",
            width: 100,
            align: "right" as const,
            render: (cpc: number) => formatCurrency(cpc)
        },
        {
            title: "시작일",
            dataIndex: "startDate",
            key: "startDate",
            width: 110
        },
        {
            title: "종료일",
            dataIndex: "endDate",
            key: "endDate",
            width: 110
        },
        {
            title: "활성화",
            dataIndex: "isActive",
            key: "isActive",
            width: 80,
            align: "center" as const,
            render: (isActive: boolean, record: Campaign) => (
                <Switch
                    checked={isActive}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    onChange={(checked) => handleStatusToggle(record, checked)}
                />
            )
        },
        {
            title: "액션",
            key: "action",
            width: 180,
            fixed: "right" as const,
            render: (_: any, record: Campaign) => (
                <Flex gap={8} wrap>
                    <Button size="small" icon={<EyeOutlined />} onClick={() => handleViewDetail(record)}>
                        상세
                    </Button>
                    <Button size="small" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
                        수정
                    </Button>
                    <Button size="small" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record)}>
                        삭제
                    </Button>
                </Flex>
            )
        }
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: (newSelectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(newSelectedRowKeys);
        }
    };

    return (
        <Space direction="vertical" size={24}>
            <CardTable
                title="캠페인 목록"
                headerRight={
                    <>
                        <Button type="primary" icon={<PlusOutlined />} onClick={handleCreateCampaign}>
                            캠페인 생성
                        </Button>
                    </>
                }
                filterItems={[
                    {
                        label: "캠페인명",
                        component: (
                            <Input
                                placeholder="캠페인명을 입력하세요"
                                prefix={<SearchOutlined />}
                                className="w-200"
                            />
                        )
                    },
                    {
                        label: "캠페인 타입",
                        component: (
                            <Select
                                placeholder="타입 선택"
                                className="w-200"
                                options={campaignTypeOptions}
                            />
                        )
                    },
                    {
                        label: "상태",
                        component: (
                            <Select
                                placeholder="상태 선택"
                                className="w-200"
                                options={campaignStatusOptions}
                            />
                        )
                    },
                    {
                        label: "기간",
                        component: (
                            <RangePicker className="w-300" />
                        )
                    },
                    {
                        component: (
                            <Button type="primary" icon={<SearchOutlined />}>
                                검색
                            </Button>
                        )
                    }
                ]}
                columns={columns}
                dataSource={dataSource}
                rowSelection={rowSelection}
                scroll={{ x: 1800 }}
            />
        </Space>
    );
};

export default CampaignList;

