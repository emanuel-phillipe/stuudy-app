"use client"

import { setCookie } from "cookies-next";
import { createContext, useReducer, type Dispatch, type ReactNode } from "react";

interface IInitialState{
  user_info: {}
}

const initialState:IInitialState = {
  user_info: {}
}

interface IReducerActions {
  type: string;
  payload?: {data: any};
}

interface Props {
  children?: ReactNode
  // any props that come into the component
}

interface IAppContext {
  state: IInitialState;
  dispatch: React.Dispatch<IReducerActions>
}

const appReducer = (state:IInitialState, action:IReducerActions) => {
  
  switch(action.type) {
    case "SET_TOKEN":

      if(action.payload) setCookie("user_token", action.payload.data)

      return {
        ...state,
      }
    case "FETCH_INFO":

      
    default:
      return state
  }
}

export const AppContext = createContext<IAppContext>({state: initialState, dispatch: () => {}});

export const AppProvider = ({ children }:Props) => {

  const [state, dispatch] = useReducer(appReducer, initialState)

  return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>
}