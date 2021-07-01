import { FC, useReducer, Reducer } from "react";
import styled from "styled-components";

import { colors } from "../../utils/colors";

import type { TList } from "../App";

// TYPES
// styles
interface IDropdownTitle {
  open: boolean;
}
interface IDropdownList {
  open: boolean;
  maxWidth: string;
}
interface IDropdownListItem {
  look: string;
  selected: boolean;
}

// state
interface Action {
  type: string;
  payload: any;
}
type TState = {
  open: boolean;
  selected: string | null;
};
type TAction<T> = (payload: T) => { type: string; payload: T };

// components
interface IDropdown {
  list: TList;
  maxWidth?: string;
}

// STYLES

const DropdownTitle = styled.div<IDropdownTitle>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  min-width: 294px;
  height: 40px;
  padding: 0 20px;
  background-color: ${({ open }) =>
    open ? colors.backBlueDark : colors.backWhite};
  border-radius: 20px;
  transition: 0.08s linear;
  cursor: pointer;

  & > span {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: ${({ open }) => (open ? colors.fontWhite : colors.fontDark)};
    user-select: none;
  }

  & > svg {
    fill: ${({ open }) => (open ? colors.fontWhite : colors.fontDark)};
    transition: 0.08s linear;
    transform: rotate(${({ open }) => (open ? "180deg" : "0")});
  }

  &:hover {
    background-color: ${colors.backBlue};

    & > span {
      color: ${colors.fontWhite};
    }

    & > svg {
      fill: ${colors.fontWhite};
    }
  }

  &:active {
    background-color: ${colors.backBlueDark};

    & > span {
      color: ${colors.fontWhite};
    }

    & > svg {
      fill: ${colors.fontWhite};
    }
  }
`;

const DropdownList = styled.div<IDropdownList>`
  position: absolute;
  top: calc(40px + 16px);
  right: 0;
  width: fit-content;
  border-radius: 8px;
  box-shadow: 0px 19px 38px rgba(33, 38, 44, 0.15),
    0px 15px 12px rgba(33, 38, 44, 0.11);

  .listgroup {
    &_title {
      display: flex;
      align-items: center;
      position: relative;
      width: fit-content;
      height: 36px;
      padding: 0 16px;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.2px;
      color: ${colors.fontGray};
      user-select: none;

      &::after {
        position: absolute;
        content: "";
        width: calc(100% - 16px);
        height: 1px;
        right: 0;
        bottom: 0;
        background-color: ${colors.backGray};
      }
    }
  }
`;

const DropdownListItem = styled.button<IDropdownListItem>`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  cursor: pointer;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: ${({ look }) => {
    switch (look) {
      case "danger":
        return colors.fontDanger;

      case "disabled":
        return colors.fontGray;

      default:
        return colors.fontDark;
    }
  }};
`;

const DropdownStyled = styled.div`
  position: relative;
  width: fit-content;
`;

// STATE

const SET_OPEN = "dropdown/SET_OPEN";

const initialState = {
  open: false,
  selected: null,
};

const reducer: Reducer<TState, Action> = (state, action) => {
  switch (action.type) {
    case SET_OPEN:
      return { ...state, open: action.payload };

    default:
      return state;
  }
};

const setOpen: TAction<boolean> = (payload) => ({ type: SET_OPEN, payload });

// UTILS

const icons = {
  arrow: (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.706206 2.41374L3.29621 5.00374C3.68621 5.39374 4.31621 5.39374 4.70621 5.00374L7.29621 2.41374C7.92621 1.78374 7.47621 0.703735 6.58621 0.703735H1.40621C0.516206 0.703735 0.0762062 1.78374 0.706206 2.41374Z" />
    </svg>
  ),
  check: (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.32915 9.22918L1.43749 6.33751C1.28179 6.18146 1.07042 6.09377 0.849988 6.09377C0.629556 6.09377 0.418181 6.18146 0.262488 6.33751C-0.0625122 6.66251 -0.0625122 7.18751 0.262488 7.51251L3.74582 10.9958C4.07082 11.3208 4.59582 11.3208 4.92082 10.9958L13.7375 2.17917C14.0625 1.85417 14.0625 1.32917 13.7375 1.00418C13.5818 0.848131 13.3704 0.760437 13.15 0.760437C12.9296 0.760437 12.7182 0.848131 12.5625 1.00418L4.32915 9.22918Z" />
    </svg>
  ),
};

export const Dropdown: FC<IDropdown> = ({ list, maxWidth = "340px" }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { open, selected } = state;

  return (
    <DropdownStyled>
      <DropdownTitle open={open} onClick={() => dispatch(setOpen(!open))}>
        <span>Дропдаун</span>

        {icons.arrow}
      </DropdownTitle>

      <DropdownList open={open} maxWidth={maxWidth}>
        {list.map((group) => (
          <div className="listgroup" key={group.title}>
            <h3 className="listgroup_title">{group.title}</h3>

            {group.content.map((item) => (
              <DropdownListItem
                look={item.type}
                key={item.id}
                selected={item.id === selected}
              >
                <span>{item.title}</span>
                {item.id === selected && icons.check}
              </DropdownListItem>
            ))}
          </div>
        ))}
      </DropdownList>
    </DropdownStyled>
  );
};
