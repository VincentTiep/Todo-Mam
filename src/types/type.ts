import rootReducer from "../Redux/store/index";

export interface Object {
  id: {};
  dateCreate: {};
  edit: boolean;
  isComplete: boolean;
  isImportance: number;
  isShowStar: boolean;
  text: string;
  deadline: any;
}

export const iniValue = {
  id: {},
  dateCreate: {},
  edit: false,
  isComplete: false,
  isImportance: 0,
  isShowStar: false,
  text: "",
  deadline: {},
};

export type IRootState = ReturnType<typeof rootReducer>;
