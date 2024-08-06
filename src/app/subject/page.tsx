"use client"

import React, { useEffect } from 'react'
import { IAction, initialState, IState, reducer } from '../context/context';

function Subject() {

  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state])

  return (
    <div>{state.current_subject?.name}</div>
  )
}

export default Subject