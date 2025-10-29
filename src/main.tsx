import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { StyledThemeProvider } from "./components/StyledThemeProvider.tsx";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider>
    <StyledThemeProvider>
      <App />
    </StyledThemeProvider>
  </ConfigProvider>
);
