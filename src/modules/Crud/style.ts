import styled from "styled-components";
import { ScreenBreakPoint } from "@/constants/ScreenBreakPoint";

export const CrudWrapper = styled.main`
  width: 100%;
  min-height: 100dvh;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colorBgLayout};

  .container {
    margin: auto;
  }

  @media screen and (max-width: ${ScreenBreakPoint.Tablet}px) {
    padding: 16px;
  }

  @media screen and (min-width: ${ScreenBreakPoint.Tablet}px) {
    padding: 80px 12%;
  }

  @media screen and (min-width: ${ScreenBreakPoint.Desktop}px) {
    padding: 80px 25%;
  }
`;
