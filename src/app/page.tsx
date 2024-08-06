"use client"

import { Book, Calendar, Gear, List, Person, PersonSimple, Plus, PlusCircle, User } from "@phosphor-icons/react/dist/ssr";
import Subject from "./components/Subject";
import HomeButton from "./components/HomeButton";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { ActionType, initialState, reducer, type IAction, type IState } from "./context/context";
import axios from "axios";

export default function Home() {
  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(reducer, initialState);
  const [infoFetched, setInfoFetched] = useState(false)

  useEffect(() => {

    if(infoFetched) return

    const jwt_token = getCookie("user_token")
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/user/find", {headers: {
      Authorization: "Bearer " + jwt_token
    }}).then((response) => {
      dispatch({type: ActionType.FetchInfo, payload: {data: response.data}})
    })

    axios.get(process.env.NEXT_PUBLIC_API_URL + "/subject/find", {headers: {
      Authorization: "Bearer " + jwt_token
    }}).then((response) => {
      dispatch({type: ActionType.FetchSubjects, payload: {data: response.data}})

      setInfoFetched(true)
    })
    
  })

  const selectSubject = (key:string) => {
    dispatch({type: ActionType.SelectSubject, payload: {data: key}})

  }

  return (
    <main className="px-10 py-5 ">
      <div className="fixed w-full top-0 py-7 bg-white">
        <h1 className="text-3xl font-bold">Bom dia, {state.user_data?.name.split(" ")[0]}!</h1>
        <p className="text-zinc-500">Aqui está um resumo do seu currículo :)</p>
      </div>

      <main className="mt-[6.5rem]">

        <div className="flex gap-2">
          <div>
            <HomeButton icon={<Gear size={24} className="" />} title="Configurações" otherClass="h-[100%] flex-col items-center justify-center px-5"/>
          </div>
          <div className="flex flex-col gap-2">
            <HomeButton icon={<User size={24} className="" />} title="Perfil"/>
            <HomeButton icon={<List size={24} className="" />} title="Etapas"/>
          </div>
          <div>
            <HomeButton icon={<Calendar size={24} className="" />} title="Calendário" otherClass="h-[100%] flex-col items-center justify-center px-10"/>
          </div>
          <div className="flex flex-col gap-2">
            <HomeButton icon={<Book size={24} className="" />} title="Lista de Tarefas"/>
            <HomeButton icon={<PlusCircle size={24} className="" />} title="Nova Matéria"/>
          </div>
        </div>

        <hr className="my-10"/>

        <div className="grid grid-cols-1 gap-2">
          {
            state.user_subjects ? state.user_subjects.map((currentSubject, index) => {
              return (<Subject handleClick={() => {selectSubject(currentSubject.id)}} key={currentSubject.id} subjectName={currentSubject.name} components={currentSubject.components} maxPoints={currentSubject.total || 0} currentGrade={currentSubject.grade || 0}/>)
            }) : ""
          }
        </div>

        <div>
        </div>
      </main>
      {/* <Footer /> */}
    </main>
  );
}
