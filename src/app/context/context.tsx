import axios from "axios"
import { getCookie, setCookie } from "cookies-next"

export enum ActionType {
  FetchInfo = 'FETCH_INFO',
  FetchSubjects = 'FETCH_SUBJECTS',
  SetKey = 'SET_KEY',
}

export interface IState {
  user_data: {
    id: string
    name: string
    email: string
    password: string
    slug: string
  } | undefined
  user_subjects: {
    id: string
    user_id: string
    name: string
    grade: number | null;
    total: number | null;
    slug: string;  
    components: string[]
  }[] | undefined
}

export interface IAction {
  type: ActionType;
  payload?: {
    data: any; 
  };
}

export const initialState: IState = {user_data: undefined, user_subjects: undefined};

export const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.FetchInfo:
      return {
        ...state,
        user_data: action.payload?.data
      }
    case ActionType.SetKey:

      setCookie("user_token", action.payload?.data)

      return {...state}
    case ActionType.FetchSubjects:

      return {
        ...state,
        user_subjects: action.payload?.data
      }
    default:
      throw new Error();
  }
}