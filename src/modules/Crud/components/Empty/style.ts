import { Flex } from "antd";
import styled from "styled-components";
import { ScreenBreakPoint } from "@/constants/ScreenBreakPoint";

export const EmptyWrapper = styled(Flex)`
  width: 100%;

  .title,
  .description {
    width: 100%;
    text-align: center;
  }

  .title {
    font-size: 24px;
    line-height: 32px;
  }

  .description {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: ${ScreenBreakPoint.Tablet}px) {
    height: calc(100dvh - 113.5px);
  }

  @media screen and (min-width: ${ScreenBreakPoint.Tablet}px) {
    height: calc(100dvh - 241.5px);
  }
`;
