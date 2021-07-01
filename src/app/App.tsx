import { FC } from "react";
import styled from "styled-components";

import { SimpleHeader } from "./components/SimpleHeader";
import { Dropdown } from "./components/Dropdown";

const AppContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 92px;
`;

export type TList = typeof dropdownNormal;

const dropdownNormal = [
  {
    title: "Группа в списке 1",
    content: [
      { id: "item1", title: "item1", type: "normal" },
      { id: "item2", title: "item2", type: "normal" },
      { id: "item3", title: "item3", type: "disabled" },
    ],
  },
  {
    title: "Группа в списке 2",
    content: [
      { id: "item4", title: "item4", type: "danger" },
      { id: "item5", title: "item5", type: "danger" },
      { id: "item6", title: "item6", type: "disabled" },
    ],
  },
];

const dropdownLong = {
  group1: {
    title: "Длинное название для группы, которое занимает несколько строк",
    content: [
      {
        title:
          "Длинное название пункта, которое занимает сразу несколько строк",
        type: "normal",
      },
    ],
  },
  group2: {
    title: "Ещё одна группа",
    content: [
      {
        title:
          "Длинное название пункта, которое занимает сразу несколько строк",
        type: "normal",
      },
      {
        title:
          "Еще более длинное название пункта, которое занимает сразу несколько строк",
        type: "normal",
      },
    ],
  },
};

export const App: FC = () => {
  return (
    <AppContainer>
      <SimpleHeader title="Дропдаун" />

      <Dropdown list={dropdownNormal} />
    </AppContainer>
  );
};
