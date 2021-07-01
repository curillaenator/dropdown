import { FC } from "react";
import styled from "styled-components";

import { colors } from "../../utils/colors";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 99px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 152px;
    line-height: 140px;
    letter-spacing: 0.25px;
    color: ${colors.fontBlack};
  }
`;

interface ISimpleHeader {
  title: string;
}

export const SimpleHeader: FC<ISimpleHeader> = ({ title }) => {
  return (
    <HeaderStyled>
      <h1 className="title">{title}</h1>
    </HeaderStyled>
  );
};
