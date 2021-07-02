import { useEffect } from "react";
import { FC, useRef, useReducer, Reducer } from "react";
import styled from "styled-components";

import { colors } from "../../utils/colors";

import type { IItem } from "../App";

// TYPES
// styles
interface IDropdownTitle {
  open: boolean;
  disabled: boolean;
}

interface IDropdownList {
  maxWidth: string | undefined;
}

interface IDropdownListItem {
  checked: boolean;
  look: string;
}

// state
interface Action {
  type: string;
  payload: any;
}

interface TState {
  list: IItem[];
  open: boolean;
}

type TAction<T> = (payload: T) => { type: string; payload: T };

// components
interface IDropdown {
  data: IItem[];
  title: string;
  maxWidth?: string;
  disabled?: boolean;
  doSomeAjaxOnChange: (updList: IItem[]) => void;
}

// CSS STYLES

const DropdownTitle = styled.div<IDropdownTitle>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  min-width: 294px;
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  transition: 0.08s linear;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  background-color: ${({ open, disabled }) => {
    switch (true) {
      case disabled:
        return colors.backDisabled;
      case open:
        return colors.backBlueDark;
      default:
        return colors.backWhite;
    }
  }};

  & > span {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    user-select: none;
    color: ${({ open, disabled }) => {
      switch (true) {
        case disabled:
          return colors.fontDisabled;
        case open:
          return colors.fontWhite;
        default:
          return colors.fontDark;
      }
    }};
  }

  & > svg {
    margin-left: 16px;
    transition: 0.08s linear;
    transform: rotate(${({ open }) => (open ? "180deg" : "0")});
    fill: ${({ open, disabled }) => {
      switch (true) {
        case disabled:
          return colors.fontDisabled;
        case open:
          return colors.fontWhite;
        default:
          return colors.fontDark;
      }
    }};
  }

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? colors.backDisabled : colors.backBlue};

    & > span {
      color: ${({ disabled }) =>
        disabled ? colors.fontDisabled : colors.fontWhite};
    }

    & > svg {
      fill: ${({ disabled }) =>
        disabled ? colors.fontDisabled : colors.fontWhite};
    }
  }

  &:active {
    background-color: ${({ disabled }) =>
      disabled ? colors.backDisabled : colors.backBlueDark};

    & > span {
      color: ${({ disabled }) =>
        disabled ? colors.fontDisabled : colors.fontWhite};
    }

    & > svg {
      fill: ${({ disabled }) =>
        disabled ? colors.fontDisabled : colors.fontWhite};
    }
  }
`;

const DropdownList = styled.div<IDropdownList>`
  position: absolute;
  top: calc(40px + 16px);
  right: 50%;
  width: ${({ maxWidth }) => (maxWidth ? maxWidth : "fit-content")};
  border-radius: 8px;
  background-color: ${colors.backWhite};
  transform: translateX(50%);
  overflow: hidden;
  box-shadow: 0px 19px 38px rgba(33, 38, 44, 0.15),
    0px 15px 12px rgba(33, 38, 44, 0.11);
  z-index: 10;

  .listgroup {
    &_title {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      min-height: 36px;
      padding: 12px 16px;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 36px;
  padding: 9px 16px;
  transition: 0.08s linear;
  cursor: ${({ look }) => (look === "disabled" ? "default" : "pointer")};
  background-color: ${({ look, checked }) => {
    switch (true) {
      case look === "disabled":
        return colors.backDisabled;

      case checked:
        return colors.backChecked;

      default:
        return "tranparent";
    }
  }};

  & > span {
    width: calc(100% - 24px);
    text-align: start;
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
  }

  & > svg {
    flex-shrink: 0;
    margin: 0 3px 0 7px;
    opacity: ${({ checked }) => (checked ? "1" : "0")};
    transition: 0.08s linear;
    fill: ${({ look }) => {
      switch (look) {
        case "danger":
          return colors.fontDanger;

        case "disabled":
          return colors.fontGray;

        default:
          return colors.fontDark;
      }
    }};
  }

  &:hover {
    background-color: ${({ look }) => {
      switch (look) {
        case "danger":
          return colors.backDanger;

        case "disabled":
          return colors.backDisabled;

        default:
          return colors.backBlue;
      }
    }};

    & > span {
      color: ${({ look }) => {
        switch (look) {
          case "disabled":
            return colors.fontGray;

          default:
            return colors.fontWhite;
        }
      }};
    }

    & > svg {
      fill: ${({ look }) => {
        switch (look) {
          case "disabled":
            return colors.fontGray;

          default:
            return colors.fontWhite;
        }
      }};
    }
  }

  &:active {
    background-color: ${({ look }) => {
      switch (look) {
        case "danger":
          return colors.backDangerDark;

        case "disabled":
          return colors.backDisabled;

        default:
          return colors.backBlueDark;
      }
    }};
  }
`;

const DropdownStyled = styled.div`
  position: relative;
`;

// STATE MANAGEMENT

const SET_OPEN = "dropdown/SET_OPEN";
const SET_LIST = "dropdown/SET_LIST";

const initialState: TState = { list: [], open: false };

const reducer: Reducer<TState, Action> = (state, action) => {
  switch (action.type) {
    case SET_LIST:
      return { ...state, list: action.payload };

    case SET_OPEN:
      return { ...state, open: action.payload };

    default:
      return state;
  }
};

const setOpen: TAction<boolean> = (payload) => ({ type: SET_OPEN, payload });
const setList: TAction<IItem[]> = (payload) => ({ type: SET_LIST, payload });

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

// JSX COMPONENT

export const Dropdown: FC<IDropdown> = ({
  data,
  title,
  maxWidth,
  disabled = false,
  doSomeAjaxOnChange,
}) => {
  const ref = useRef(null);

  const [state, dispatch] = useReducer(reducer, initialState);
  // Для state для простоты кода можно/нужно было реализовать простой useState вместо useReducer:
  // const [list, setList] = useState([]),
  // const [open, setOpen] = useState(false),
  // useReducer был использован для демонстрации работы с Redux-подобным state-менеджментом и его типизацией:

  useEffect(() => dispatch(setList(data)), [data]);

  // console.log(data);

  useEffect(() => {
    const handleClose = (e: any) => {
      // @ts-ignore
      if (ref.current && !ref.current!.contains(e.target)) {
        dispatch(setOpen(false));
      }
    };

    document.addEventListener("click", handleClose);
    return () => document.removeEventListener("click", handleClose);
  }, []);

  const { list, open } = state;

  const groups = [...new Set(list.map((item) => item.group))];

  // handlers

  const handleOpen = (): void => {
    if (disabled) return;
    dispatch(setOpen(!open));
  };

  const handleCheck = (item: IItem, index: number): void => {
    if (item.type === "disabled") return;

    const updItem = { ...item, checked: !item.checked };
    const updList = [...list];
    updList?.splice(index, 1, updItem);

    doSomeAjaxOnChange(updList); // This should be Promise, then
    dispatch(setList(updList));
  };

  return (
    <DropdownStyled ref={ref}>
      <DropdownTitle open={open} disabled={disabled} onClick={handleOpen}>
        <span>{title}</span>
        {icons.arrow}
      </DropdownTitle>

      {open && (
        <DropdownList maxWidth={maxWidth}>
          {groups.map((group) => (
            <div className="listgroup" key={group}>
              <h3 className="listgroup_title">{group}</h3>

              {list.map((item, i) => {
                if (item.group === group) {
                  return (
                    <DropdownListItem
                      look={item.type}
                      checked={item.checked}
                      key={item.id}
                      onClick={() => handleCheck(item, i)}
                    >
                      <span>{item.title}</span>
                      {icons.check}
                    </DropdownListItem>
                  );
                }

                return null;
              })}
            </div>
          ))}
        </DropdownList>
      )}
    </DropdownStyled>
  );
};
