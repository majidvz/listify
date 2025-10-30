import { Card } from "antd";
import styled from "styled-components";

export const CardWrapper = styled(Card)`
  width: 100%;

  .description {
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colorTextLabel};
  }

  .footer {
    margin-top: 16px;
    .create-at {
      font-size: 14px;
      line-height: 22px;
      color: ${({ theme }) => theme.colorTextDescription};
    }
  }
`;
