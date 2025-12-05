import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import AppRouter from "./router/AppRouter";
import { darkTheme } from "./theme/darkTheme";

// Pretendard 폰트 import
import "./assets/fonts/PretendardVariable/fonts.css";

// CSS 자동 import (변수 사용 안 함은 의도된 동작)
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = import.meta.glob('./assets/css/**/*.css', { eager: true });

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ConfigProvider theme={darkTheme}>
            <AppRouter />
        </ConfigProvider>
    </React.StrictMode>
);

