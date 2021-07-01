import { FC } from "react";
import styled from "styled-components";

import { SimpleHeader } from "./components/SimpleHeader";
import { Dropdown } from "./components/Dropdown";

const AppContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  min-width: 1110px;
  margin: 0 auto;
  padding: 80px 92px;

  .dropdowns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }
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
    title: "Пункт disabled",
    type: "disabled",
    checked: false,
  },
  {
    id: "item4",
    group: "Группа в списке 2",
    title: "Danger пункт",
    type: "danger",
    checked: false,
  },
  {
    id: "item5",
    group: "Группа в списке 2",
    title: "Danger пункт",
    type: "danger",
    checked: true,
  },
  {
    id: "item6",
    group: "Группа в списке 2",
    title: "Пункт disabled checked",
    type: "disabled",
    checked: true,
  },
];

const fakeDataLong = [
  {
    id: "item1",
    group: "Длинное название для группы, которое занимает несколько строк",
    title: "Длинное название пункта, которое занимает сразу несколько строк",
    type: "normal",
    checked: false,
  },
  {
    id: "item2",
    group: "Ещё одна группа",
    title: "Длинное название пункта, которое занимает сразу несколько строк",
    type: "danger",
    checked: false,
  },
  {
    id: "item3",
    group: "Ещё одна группа",
    title:
      "Еще более длинное название пункта, которое занимает сразу несколько строк",
    type: "normal",
    checked: false,
  },
];

const fakeDataShort = [
  {
    id: "item1",
    group: "1",
    title: "А",
    type: "normal",
    checked: false,
  },
  {
    id: "item2",
    group: "1",
    title: "Б",
    type: "normal",
    checked: false,
  },
  {
    id: "item3",
    group: "2",
    title: "В",
    type: "normal",
    checked: false,
  },
  {
    id: "item4",
    group: "2",
    title: "Г",
    type: "danger",
    checked: false,
  },
];

const doSomeAjaxOnChange = (updList: IItem[]) => {
  // some Saga/Thunk/Axios/Fetch/Whatever magic here
  return;
};

export const App: FC = () => {
  return (
    <AppContainer>
      <SimpleHeader title="Дропдаун " />

      <section className="dropdowns">
        <Dropdown
          data={fakeData}
          title="Дропдаун fit-content"
          doSomeAjaxOnChange={doSomeAjaxOnChange}
        />

        <Dropdown
          data={fakeDataShort}
          title="Дропдаун lite"
          doSomeAjaxOnChange={doSomeAjaxOnChange}
        />

        <Dropdown
          data={fakeDataLong}
          maxWidth="340px"
          title="Дропдаун 340"
          doSomeAjaxOnChange={doSomeAjaxOnChange}
        />
      </section>

      <section className="dropdowns">
        <Dropdown
          data={fakeData}
          title="Дропдаун disabled"
          disabled
          doSomeAjaxOnChange={doSomeAjaxOnChange}
        />
      </section>
    </AppContainer>
  );
};
