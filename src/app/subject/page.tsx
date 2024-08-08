"use client"

import React, { useEffect, useState } from 'react'
import { ActionType, IAction, initialState, IState, reducer } from '../context/context';
import { useRouter, useSearchParams } from 'next/navigation';
import { getCookie } from 'cookies-next';
import axios from 'axios';
import type { ISubject } from '../app';

function Subject() {

  const [info, setInfo] = useState<IState>({user_data: undefined, user_subjects: undefined, current_subject: undefined})
  const [infoFetched, setInfoFetched] = useState(false)

  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {    

    if(!infoFetched){
      const info_not_parsed =searchParams.get("info")
      const info_parsed:IState = info_not_parsed && JSON.parse(info_not_parsed)
      const subject_id = searchParams.get("id")

      const subject_to_handle:ISubject = {subject: info_parsed.user_subjects?.find((subject) => {
        return subject.id === subject_id
      })}

      const new_information:IState = {...info_parsed, current_subject: subject_to_handle.subject}

      if(info) setInfo(new_information)

      setInfoFetched(true)
    }

  })  

  return (
    <div>{info.current_subject?.name}</div>
  )
}

export default Subject