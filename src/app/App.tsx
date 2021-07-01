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

export interface IItem {
  id: string;
  group: string;
  title: string;
  type: string;
  checked: boolean;
}

const fakeData = [
  {
    id: "item1",
    group: "Группа в списке 1",
    title: "Обычный пункт",
    type: "normal",
    checked: false,
  },
  {
    id: "item2",
    group: "Группа в списке 1",
    title: "Обычный пункт",
    type: "normal",
    checked: true,
  },
  {
    id: "item3",
    group: "Группа в списке 1",
    title: "Выключенный пункт",
    type: "disabled",
    checked: true,
  },
  {
    id: "item4",
    group: "Группа в списке 2",
    title: "Danger пункт меню",
    type: "danger",
    checked: false,
  },
  {
    id: "item5",
    group: "Группа в списке 2",
    title: "Danger пункт меню",
    type: "danger",
    checked: true,
  },
  {
    id: "item6",
    group: "Группа в списке 2",
    title: "Выключенный пункт",
    type: "disabled",
    checked: false,
  },
];

export const App: FC = () => {
  return (
    <AppContainer>
      <SimpleHeader title="Дропдаун" />

      <Dropdown data={fakeData} />
    </AppContainer>
  );
};
