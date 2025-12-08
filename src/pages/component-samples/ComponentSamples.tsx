import React, { useState } from "react";
import { Space, Typography, Button, Input, Select, DatePicker, Upload, Checkbox, Radio, Switch, Modal, Alert, message, notification, Row, Col, Flex } from "antd";
import {
    SearchOutlined,
    UserOutlined,
    LockOutlined,
    UploadOutlined,
    InboxOutlined,
    CheckOutlined,
    CloseOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined
} from "@ant-design/icons";
import { CardForm, CardFilter, CardTable } from "@/components/card/CardUtil";
import { selectOptions, checkboxOptions, radioOptions, uploadProps } from "./ComponentSamplesUtil";

const { Title, Text } = Typography;
const { TextArea, Password } = Input;
const { RangePicker } = DatePicker;
const { Dragger } = Upload;

const ComponentSamples: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [customModalOpen, setCustomModalOpen] = useState(false);

    // CardTable용 데이터
    const columns = [
        { title: "이름", dataIndex: "name", key: "name" },
        { title: "나이", dataIndex: "age", key: "age" },
        { title: "주소", dataIndex: "address", key: "address" },
        {
            title: "액션",
            key: "action",
            render: () => (
                <Flex gap={8} wrap>
                    <Button size="small" icon={<EditOutlined />}>수정</Button>
                    <Button size="small" danger icon={<DeleteOutlined />}>삭제</Button>
                </Flex>
            )
        }
    ];

    const dataSource = [
        { key: "1", name: "홍길동", age: 32, address: "서울시 강남구" },
        { key: "2", name: "김철수", age: 28, address: "서울시 서초구" },
        { key: "3", name: "이영희", age: 35, address: "서울시 송파구" },
        { key: "4", name: "박민수", age: 29, address: "서울시 강동구" },
        { key: "5", name: "정수진", age: 31, address: "서울시 마포구" }
    ];

    const buttonGroup = (
        <>
            <Button type="primary" icon={<PlusOutlined />}>추가</Button>
            <Button icon={<EditOutlined />}>수정</Button>
            <Button danger icon={<DeleteOutlined />}>삭제</Button>
        </>
    );

    const showMessage = (type: string) => {
        switch (type) {
            case "success":
                message.success("성공 메시지입니다");
                break;
            case "error":
                message.error("에러 메시지입니다");
                break;
            case "warning":
                message.warning("경고 메시지입니다");
                break;
            case "info":
                message.info("정보 메시지입니다");
                break;
            case "loading":
                message.loading("로딩 중...");
                break;
        }
    };

    const showNotification = (type: string, placement: any) => {
        switch (type) {
            case "success":
                notification.success({ message: "성공", description: "작업이 성공적으로 완료되었습니다.", placement });
                break;
            case "error":
                notification.error({ message: "오류", description: "작업 중 오류가 발생했습니다.", placement });
                break;
            case "warning":
                notification.warning({ message: "경고", description: "주의가 필요합니다.", placement });
                break;
            case "info":
                notification.info({ message: "정보", description: "새로운 정보가 있습니다.", placement });
                break;
        }
    };

    const showConfirm = (type: string) => {
        const config = {
            title: "확인",
            content: "이 작업을 진행하시겠습니까?",
            onOk() {
                console.log("확인");
            },
            onCancel() {
                console.log("취소");
            }
        };

        switch (type) {
            case "confirm":
                Modal.confirm(config);
                break;
            case "warning":
                Modal.warning({ title: "경고", content: "주의가 필요한 작업입니다." });
                break;
            case "error":
                Modal.error({ title: "오류", content: "오류가 발생했습니다." });
                break;
            case "success":
                Modal.success({ title: "성공", content: "작업이 완료되었습니다." });
                break;
        }
    };

    return (
        <Space direction="vertical" size={24}>
            {/* 1. Typography */}
            <CardForm title="1. Typography" columns={2}>
                <CardForm.Item label="Title (level 1-5)">
                    <Flex gap={8} wrap>
                        <Title level={1}>Title level 1</Title>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Title level={2}>Title level 2</Title>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Title level={3}>Title level 3</Title>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Title level={4}>Title level 4</Title>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Title level={5}>Title level 5</Title>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Text (기본, strong, disabled, 색상)">
                    <Flex gap={8} wrap>
                        <Text>기본 텍스트</Text>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Text strong>강조 텍스트</Text>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Text disabled>비활성 텍스트</Text>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Text type="secondary">보조 텍스트</Text>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Text type="success">성공 텍스트</Text>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Text type="warning">경고 텍스트</Text>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Text type="danger">위험 텍스트</Text>
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 2. Button */}
            <CardForm title="2. Button" columns={2}>
                <CardForm.Item label="Button Type">
                    <Flex gap={8} wrap>
                        <Button type="primary">Primary</Button>
                        <Button>Default</Button>
                        <Button type="dashed">Dashed</Button>
                        <Button type="text">Text</Button>
                        <Button type="link">Link</Button>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Button Size">
                    <Flex gap={8} wrap>
                        <Button type="primary" size="large">Large</Button>
                        <Button type="primary" size="middle">Middle</Button>
                        <Button type="primary" size="small">Small</Button>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Button State">
                    <Flex gap={8} wrap>
                        <Button type="primary" danger>Danger</Button>
                        <Button type="primary" ghost>Ghost</Button>
                        <Button type="primary" disabled>Disabled</Button>
                        <Button type="primary" loading>Loading</Button>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Button with Icon">
                    <Flex gap={8} wrap>
                        <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                        <Button type="primary" icon={<UserOutlined />} />
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 3. Input */}
            <CardForm title="3. Input" columns={2}>
                <CardForm.Item label="Input (활성)">
                    <Flex gap={8} wrap>
                        <Input placeholder="기본 입력" className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Input (disabled)">
                    <Flex gap={8} wrap>
                        <Input placeholder="비활성 입력" disabled className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Input with prefix/suffix (활성)">
                    <Flex gap={8} wrap>
                        <Input placeholder="사용자명" prefix={<UserOutlined />} className="w-300" />
                        <Input placeholder="검색" suffix={<SearchOutlined />} className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Input with prefix/suffix (disabled)">
                    <Flex gap={8} wrap>
                        <Input placeholder="사용자명" prefix={<UserOutlined />} disabled className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="TextArea (활성)">
                    <Flex gap={8} wrap>
                        <TextArea rows={4} placeholder="여러 줄 입력" className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="TextArea (disabled)">
                    <Flex gap={8} wrap>
                        <TextArea rows={4} placeholder="여러 줄 입력" disabled className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Password (활성)">
                    <Flex gap={8} wrap>
                        <Password placeholder="비밀번호" prefix={<LockOutlined />} className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Password (disabled)">
                    <Flex gap={8} wrap>
                        <Password placeholder="비밀번호" prefix={<LockOutlined />} disabled className="w-300" />
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 4. Select */}
            <CardForm title="4. Select" columns={2}>
                <CardForm.Item label="Single Select (활성)">
                    <Flex gap={8} wrap>
                        <Select placeholder="옵션 선택" options={selectOptions} className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Single Select (disabled)">
                    <Flex gap={8} wrap>
                        <Select placeholder="옵션 선택" options={selectOptions} disabled className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Multiple Select (활성)">
                    <Flex gap={8} wrap>
                        <Select mode="multiple" placeholder="다중 선택" options={selectOptions} className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Multiple Select (disabled)">
                    <Flex gap={8} wrap>
                        <Select mode="multiple" placeholder="다중 선택" options={selectOptions} disabled className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Searchable Select (활성)">
                    <Flex gap={8} wrap>
                        <Select showSearch placeholder="검색 가능" options={selectOptions} className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Searchable Select (disabled)">
                    <Flex gap={8} wrap>
                        <Select showSearch placeholder="검색 가능" options={selectOptions} disabled className="w-300" />
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 5. DatePicker */}
            <CardForm title="5. DatePicker" columns={2}>
                <CardForm.Item label="DatePicker (활성)">
                    <Flex gap={8} wrap>
                        <DatePicker placeholder="날짜 선택" className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="DatePicker (disabled)">
                    <Flex gap={8} wrap>
                        <DatePicker placeholder="날짜 선택" disabled className="w-300" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="RangePicker (활성)">
                    <Flex gap={8} wrap>
                        <RangePicker className="w-400" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="RangePicker (disabled)">
                    <Flex gap={8} wrap>
                        <RangePicker disabled className="w-400" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="RangePicker + Time (활성)">
                    <Flex gap={8} wrap>
                        <RangePicker showTime className="w-500" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="RangePicker + Time (disabled)">
                    <Flex gap={8} wrap>
                        <RangePicker showTime disabled className="w-500" />
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 6. Upload */}
            <CardForm title="6. Upload" columns={2}>
                <CardForm.Item label="Upload (활성)">
                    <Flex gap={8} wrap>
                        <Upload {...uploadProps}>
                            <Button icon={<UploadOutlined />}>파일 업로드</Button>
                        </Upload>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Upload (disabled)">
                    <Flex gap={8} wrap>
                        <Upload {...uploadProps} disabled>
                            <Button icon={<UploadOutlined />} disabled>파일 업로드</Button>
                        </Upload>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Upload + 파일 목록 (활성)">
                    <Flex gap={8} wrap>
                        <Upload {...uploadProps} listType="text">
                            <Button icon={<UploadOutlined />}>파일 업로드</Button>
                        </Upload>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Upload + 썸네일 목록 (활성)">
                    <Flex gap={8} wrap>
                        <Upload {...uploadProps} listType="picture">
                            <Button icon={<UploadOutlined />}>이미지 업로드</Button>
                        </Upload>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Dragger (활성)">
                    <Flex gap={8} wrap>
                        <Dragger {...uploadProps} className="w-400">
                            <Flex vertical align="center">
                                <InboxOutlined />
                                <Text>클릭 또는 드래그하여 파일 업로드</Text>
                            </Flex>
                        </Dragger>
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 7. Checkbox */}
            <CardForm title="7. Checkbox" columns={2}>
                <CardForm.Item label="Checkbox 수평 (활성)">
                    <Flex gap={8} wrap>
                        <Checkbox>체크박스 1</Checkbox>
                        <Checkbox>체크박스 2</Checkbox>
                        <Checkbox>체크박스 3</Checkbox>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Checkbox 수평 (disabled)">
                    <Flex gap={8} wrap>
                        <Checkbox disabled>체크박스 1</Checkbox>
                        <Checkbox disabled>체크박스 2</Checkbox>
                        <Checkbox disabled>체크박스 3</Checkbox>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Checkbox 수직 (활성)">
                    <Flex vertical gap={8}>
                        <Checkbox>체크박스 1</Checkbox>
                        <Checkbox>체크박스 2</Checkbox>
                        <Checkbox>체크박스 3</Checkbox>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Checkbox 수직 (disabled)">
                    <Flex vertical gap={8}>
                        <Checkbox disabled>체크박스 1</Checkbox>
                        <Checkbox disabled>체크박스 2</Checkbox>
                        <Checkbox disabled>체크박스 3</Checkbox>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Checkbox Group (활성)">
                    <Flex gap={8} wrap>
                        <Checkbox.Group options={checkboxOptions} />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Checkbox Group (disabled)">
                    <Flex gap={8} wrap>
                        <Checkbox.Group options={checkboxOptions} disabled />
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 8. Radio */}
            <CardForm title="8. Radio" columns={2}>
                <CardForm.Item label="Radio Group 수평 (활성)">
                    <Flex gap={8} wrap>
                        <Radio.Group options={radioOptions} />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Radio Group 수평 (disabled)">
                    <Flex gap={8} wrap>
                        <Radio.Group options={radioOptions} disabled />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Radio Group 수직 (활성)">
                    <Flex vertical gap={8}>
                        <Radio.Group>
                            <Flex vertical gap={8}>
                                <Radio value="radio1">라디오 1</Radio>
                                <Radio value="radio2">라디오 2</Radio>
                                <Radio value="radio3">라디오 3</Radio>
                            </Flex>
                        </Radio.Group>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Radio Group 수직 (disabled)">
                    <Flex vertical gap={8}>
                        <Radio.Group disabled>
                            <Flex vertical gap={8}>
                                <Radio value="radio1">라디오 1</Radio>
                                <Radio value="radio2">라디오 2</Radio>
                                <Radio value="radio3">라디오 3</Radio>
                            </Flex>
                        </Radio.Group>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Radio Button (활성)">
                    <Flex gap={8} wrap>
                        <Radio.Group optionType="button" options={radioOptions} />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Radio Button (disabled)">
                    <Flex gap={8} wrap>
                        <Radio.Group optionType="button" options={radioOptions} disabled />
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 9. Switch */}
            <CardForm title="9. Switch" columns={2}>
                <CardForm.Item label="Switch (활성)">
                    <Flex gap={8} wrap>
                        <Switch />
                        <Switch defaultChecked />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Switch (disabled)">
                    <Flex gap={8} wrap>
                        <Switch disabled />
                        <Switch defaultChecked disabled />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Switch with Text (활성)">
                    <Flex gap={8} wrap>
                        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
                        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Switch with Text (disabled)">
                    <Flex gap={8} wrap>
                        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} disabled />
                        <Switch checkedChildren="ON" unCheckedChildren="OFF" disabled />
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 10. Modal */}
            <CardForm title="10. Modal" columns={2}>
                <CardForm.Item label="기본 Modal">
                    <Flex gap={8} wrap>
                        <Button type="primary" onClick={() => setModalOpen(true)}>모달 열기</Button>
                        <Modal
                            title="기본 모달"
                            open={modalOpen}
                            onOk={() => setModalOpen(false)}
                            onCancel={() => setModalOpen(false)}
                        >
                            <Text>모달 콘텐츠</Text>
                        </Modal>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="푸터 커스텀 Modal">
                    <Flex gap={8} wrap>
                        <Button type="primary" onClick={() => setCustomModalOpen(true)}>커스텀 모달</Button>
                        <Modal
                            title="커스텀 모달"
                            open={customModalOpen}
                            onCancel={() => setCustomModalOpen(false)}
                            footer={[
                                <Button key="cancel" onClick={() => setCustomModalOpen(false)}>취소</Button>,
                                <Button key="ok" type="primary" onClick={() => setCustomModalOpen(false)}>확인</Button>
                            ]}
                        >
                            <Text>커스텀 푸터 모달</Text>
                        </Modal>
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 11. Confirm */}
            <CardForm title="11. Confirm" columns={2}>
                <CardForm.Item label="Modal.confirm">
                    <Flex gap={8} wrap>
                        <Button type="primary" onClick={() => showConfirm("confirm")}>확인 대화상자</Button>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Modal.warning">
                    <Flex gap={8} wrap>
                        <Button type="primary" onClick={() => showConfirm("warning")}>경고 대화상자</Button>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Modal.error">
                    <Flex gap={8} wrap>
                        <Button danger onClick={() => showConfirm("error")}>에러 대화상자</Button>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Modal.success">
                    <Flex gap={8} wrap>
                        <Button type="primary" onClick={() => showConfirm("success")}>성공 대화상자</Button>
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 12. Alert */}
            <CardForm title="12. Alert" columns={2}>
                <CardForm.Item label="Alert Types">
                    <Flex vertical gap={8}>
                        <Alert message="Success" type="success" />
                        <Alert message="Info" type="info" />
                        <Alert message="Warning" type="warning" />
                        <Alert message="Error" type="error" />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Alert with Close">
                    <Flex vertical gap={8}>
                        <Alert message="Closable Success" type="success" closable />
                        <Alert message="Closable Info" type="info" closable />
                        <Alert message="Closable Warning" type="warning" closable />
                        <Alert message="Closable Error" type="error" closable />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Alert with Icon">
                    <Flex vertical gap={8}>
                        <Alert message="Success with Icon" type="success" showIcon />
                        <Alert message="Info with Icon" type="info" showIcon />
                        <Alert message="Warning with Icon" type="warning" showIcon />
                        <Alert message="Error with Icon" type="error" showIcon />
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Alert with Description">
                    <Flex vertical gap={8}>
                        <Alert message="Success" description="Detailed success message" type="success" showIcon />
                        <Alert message="Error" description="Detailed error message" type="error" showIcon />
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 13. Toast & Notification */}
            <CardForm title="13. Toast & Notification" columns={2}>
                <CardForm.Item label="Message (Toast)">
                    <Flex gap={8} wrap>
                        <Button type="primary" onClick={() => showMessage("success")}>Success</Button>
                        <Button type="primary" onClick={() => showMessage("error")}>Error</Button>
                        <Button type="primary" onClick={() => showMessage("warning")}>Warning</Button>
                        <Button type="primary" onClick={() => showMessage("info")}>Info</Button>
                        <Button type="primary" onClick={() => showMessage("loading")}>Loading</Button>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Notification (Top Right)">
                    <Flex gap={8} wrap>
                        <Button type="primary" onClick={() => showNotification("success", "topRight")}>Success</Button>
                        <Button type="primary" onClick={() => showNotification("error", "topRight")}>Error</Button>
                        <Button type="primary" onClick={() => showNotification("warning", "topRight")}>Warning</Button>
                        <Button type="primary" onClick={() => showNotification("info", "topRight")}>Info</Button>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Notification (Top Left)">
                    <Flex gap={8} wrap>
                        <Button onClick={() => showNotification("success", "topLeft")}>Top Left</Button>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Notification (Bottom Right)">
                    <Flex gap={8} wrap>
                        <Button onClick={() => showNotification("success", "bottomRight")}>Bottom Right</Button>
                    </Flex>
                </CardForm.Item>

                <CardForm.Item label="Notification (Bottom Left)">
                    <Flex gap={8} wrap>
                        <Button onClick={() => showNotification("success", "bottomLeft")}>Bottom Left</Button>
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 14. CardTable */}
            <Title level={3}>14. CardTable</Title>

            {/* CardTable - 기본 그리드 (그리드 + 페이지네이션) */}
            <CardTable
                title="CardTable - 기본 그리드 (그리드 + 페이지네이션)"
                headerRight={buttonGroup}
                columns={columns}
                dataSource={dataSource}
            />

            {/* CardTable - 기본 그리드 (필터 + 그리드 + 페이지네이션) */}
            <CardTable
                title="CardTable - 기본 그리드 (필터 + 그리드 + 페이지네이션)"
                headerRight={buttonGroup}
                filterItems={[
                    {
                        label: "검색어",
                        component: (
                            <Input
                                placeholder="검색어를 입력하세요"
                                prefix={<SearchOutlined />}
                                className="w-200"
                            />
                        )
                    },
                    {
                        label: "상태",
                        component: (
                            <Select
                                placeholder="상태"
                                className="w-200"
                                options={[
                                    { value: "all", label: "전체" },
                                    { value: "active", label: "활성" },
                                    { value: "inactive", label: "비활성" }
                                ]}
                            />
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
            />

            {/* CardTable - Empty 상태 (그리드 + 페이지네이션) */}
            <CardTable
                title="CardTable - Empty 상태 (그리드 + 페이지네이션)"
                headerRight={buttonGroup}
                columns={columns}
                dataSource={[]}
                emptyDescription="데이터가 없습니다"
            />

            {/* 15. CardFilter */}
            <Title level={3}>15. CardFilter</Title>

            {/* CardFilter (세로 라벨) */}
            <CardFilter
                title="CardFilter (세로 라벨)"
                headerRight={buttonGroup}
                filterItems={[
                    {
                        label: "검색어",
                        component: (
                            <Input
                                placeholder="검색어를 입력하세요"
                                prefix={<SearchOutlined />}
                                className="w-200"
                            />
                        )
                    },
                    {
                        component: (
                            <Select
                                placeholder="상태"
                                className="w-200"
                                options={[
                                    { value: "all", label: "전체" },
                                    { value: "active", label: "활성" },
                                    { value: "paused", label: "일시정지" }
                                ]}
                            />
                        )
                    },
                    {
                        label: "타입",
                        component: (
                            <Select
                                placeholder="타입"
                                className="w-200"
                                options={[
                                    { value: "all", label: "전체" },
                                    { value: "search", label: "검색" },
                                    { value: "display", label: "디스플레이" }
                                ]}
                            />
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
            />

            {/* CardFilter (가로 라벨) */}
            <CardFilter
                title="CardFilter (가로 라벨)"
                headerRight={buttonGroup}
                labelLayout="horizontal"
                filterItems={[
                    {
                        label: "검색어",
                        component: (
                            <Input
                                placeholder="검색어를 입력하세요"
                                prefix={<SearchOutlined />}
                                className="w-200"
                            />
                        )
                    },
                    {
                        component: (
                            <Select
                                placeholder="상태"
                                className="w-200"
                                options={[
                                    { value: "all", label: "전체" },
                                    { value: "active", label: "활성" },
                                    { value: "paused", label: "일시정지" }
                                ]}
                            />
                        )
                    },
                    {
                        label: "타입",
                        component: (
                            <Select
                                placeholder="타입"
                                className="w-200"
                                options={[
                                    { value: "all", label: "전체" },
                                    { value: "search", label: "검색" },
                                    { value: "display", label: "디스플레이" }
                                ]}
                            />
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
            />

            {/* 16. CardForm */}
            <Title level={3}>16. CardForm</Title>

            {/* CardForm (가로 라벨 - 1컬럼) */}
            <CardForm
                title="CardForm - (가로 라벨 - 1컬럼)"
                headerRight={buttonGroup}
                footerLeft={buttonGroup}
                footerCenter={buttonGroup}
                footerRight={buttonGroup}
            >
                <CardForm.Item label="폼 그룹 - 세로 나열 - 텍스트 유">
                    <Text>텍스트</Text>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 가로 나열 - 텍스트 유" direction="horizontal">
                    <Text>텍스트</Text>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 세로 나열 - 텍스트 무">
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 가로 나열 - 텍스트 무" direction="horizontal">
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* CardForm (가로 라벨 - 2컬럼) */}
            <CardForm
                title="CardForm (가로 라벨 - 2컬럼)"
                columns={2}
                headerRight={buttonGroup}
                footerLeft={buttonGroup}
            >
                <CardForm.Item label="폼 그룹 - 세로 나열 - 텍스트 유">
                    <Text>텍스트</Text>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 가로 나열 - 텍스트 유" direction="horizontal">
                    <Text>텍스트</Text>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 세로 나열 - 텍스트 무">
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 가로 나열 - 텍스트 무" direction="horizontal">
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* CardForm (세로 라벨 - 1컬럼) */}
            <CardForm
                title="CardForm (세로 라벨 - 1컬럼)"
                layout="vertical"
                headerRight={buttonGroup}
                footerCenter={buttonGroup}
            >
                <CardForm.Item label="폼 그룹 - 세로 나열 - 텍스트 유">
                    <Text>텍스트</Text>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 가로 나열 - 텍스트 유" direction="horizontal">
                    <Text>텍스트</Text>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 세로 나열 - 텍스트 무">
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 가로 나열 - 텍스트 무" direction="horizontal">
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* CardForm (세로 라벨 - 2컬럼) */}
            <CardForm
                title="CardForm (세로 라벨 - 2컬럼)"
                columns={2}
                layout="vertical"
                headerRight={buttonGroup}
                footerRight={buttonGroup}
            >
                <CardForm.Item label="폼 그룹 - 세로 나열 - 텍스트 유">
                    <Text>텍스트</Text>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 가로 나열 - 텍스트 유" direction="horizontal">
                    <Text>텍스트</Text>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 세로 나열 - 텍스트 무">
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
                <CardForm.Item label="폼 그룹 - 가로 나열 - 텍스트 무" direction="horizontal">
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                    <Flex gap={8} wrap>
                        <Button type="primary">저장</Button>
                        <Button type="primary" icon={<PlusOutlined />}>추가</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>다운로드</Button>
                        <Button type="primary" disabled>비활성화</Button>
                    </Flex>
                </CardForm.Item>
            </CardForm>

            {/* 17. Grid */}
            <Title level={3}>17. Grid</Title>

            {/* Grid 2컬럼 */}
            <CardForm title="Grid 2컬럼">
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <CardForm title="Grid 1">
                            <CardForm.Item label="내용">
                                <Text>샘플 내용 1</Text>
                            </CardForm.Item>
                        </CardForm>
                    </Col>
                    <Col xs={24} md={12}>
                        <CardForm title="Grid 2">
                            <CardForm.Item label="내용">
                                <Text>샘플 내용 2</Text>
                            </CardForm.Item>
                        </CardForm>
                    </Col>
                </Row>
            </CardForm>

            {/* Grid 3컬럼 */}
            <CardForm title="Grid 3컬럼">
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={8}>
                        <CardForm title="Grid 1">
                            <CardForm.Item label="내용">
                                <Text>샘플 내용 1</Text>
                            </CardForm.Item>
                        </CardForm>
                    </Col>
                    <Col xs={24} md={8}>
                        <CardForm title="Grid 2">
                            <CardForm.Item label="내용">
                                <Text>샘플 내용 2</Text>
                            </CardForm.Item>
                        </CardForm>
                    </Col>
                    <Col xs={24} md={8}>
                        <CardForm title="Grid 3">
                            <CardForm.Item label="내용">
                                <Text>샘플 내용 3</Text>
                            </CardForm.Item>
                        </CardForm>
                    </Col>
                </Row>
            </CardForm>

            {/* Grid 4컬럼 */}
            <CardForm title="Grid 4컬럼">
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={6}>
                        <CardForm title="Grid 1">
                            <CardForm.Item label="내용">
                                <Text>샘플 내용 1</Text>
                            </CardForm.Item>
                        </CardForm>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <CardForm title="Grid 2">
                            <CardForm.Item label="내용">
                                <Text>샘플 내용 2</Text>
                            </CardForm.Item>
                        </CardForm>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <CardForm title="Grid 3">
                            <CardForm.Item label="내용">
                                <Text>샘플 내용 3</Text>
                            </CardForm.Item>
                        </CardForm>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <CardForm title="Grid 4">
                            <CardForm.Item label="내용">
                                <Text>샘플 내용 4</Text>
                            </CardForm.Item>
                        </CardForm>
                    </Col>
                </Row>
            </CardForm>
        </Space>
    );
};

export default ComponentSamples;
