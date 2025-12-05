export const selectOptions = [
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" }
];

export const checkboxOptions = [
    { label: "체크박스 1", value: "checkbox1" },
    { label: "체크박스 2", value: "checkbox2" },
    { label: "체크박스 3", value: "checkbox3" }
];

export const radioOptions = [
    { label: "라디오 1", value: "radio1" },
    { label: "라디오 2", value: "radio2" },
    { label: "라디오 3", value: "radio3" }
];

export const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info: any) {
        if (info.file.status === "done") {
            console.log(`${info.file.name} 파일 업로드 성공`);
        } else if (info.file.status === "error") {
            console.log(`${info.file.name} 파일 업로드 실패`);
        }
    }
};

