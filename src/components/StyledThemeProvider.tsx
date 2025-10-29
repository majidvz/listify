import { theme } from "antd";
import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

export const StyledThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { token } = theme.useToken();
  return <ThemeProvider theme={token}>{children}</ThemeProvider>;
};
