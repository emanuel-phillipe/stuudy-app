"use client"

import { Book, Calendar, Gear, List, Person, PersonSimple, User } from "@phosphor-icons/react/dist/ssr";
import Subject from "./components/Subject";
import HomeButton from "./components/HomeButton";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/context";
import { getCookie } from "cookies-next";

const subjects = [
  {
    subjectName: "Ciências da Natureza",
    maxPoints: 30,
    components: ["Biologia", "Física", "Química"],
    currentGrade: 6.3
  },
  {
    subjectName: "Literatura Brasileira",
    maxPoints: 30,
    components: [],
    currentGrade: 2.3
  }
]

export default function Home() {

  const {state, dispatch} = useContext(AppContext)
  useEffect(() => {
    dispatch({type: "FETCH_INFO"})
  })

  return (
    <main className="px-10 py-5 ">
      <div className="fixed w-full top-0 py-7 bg-white">
        <h1 className="text-3xl font-bold">Bom dia, {getCookie('user_token')}!</h1>
        <p className="text-zinc-500">Aqui está um resumo do seu currículo :)</p>
      </div>

      <main className="mt-[6.5rem] mb-20">

        <div className="flex gap-2 mb-10">
          <div>
            <HomeButton icon={<Gear size={30} className="" />} title="Configurações" otherClass="h-[100%] flex-col items-center justify-center px-5"/>
          </div>
          <div className="flex flex-col gap-2">
            <HomeButton icon={<User size={30} className="" />} title="Perfil"/>
            <HomeButton icon={<List size={30} className="" />} title="Etapas"/>
          </div>
          <div>
            <HomeButton icon={<Calendar size={30} className="" />} title="Calendário" otherClass="h-[100%] flex-col items-center justify-center px-10"/>
          </div>
          <div className="flex flex-col gap-2">
            <HomeButton icon={<Book size={30} className="" />} title="Lista de Tarefas"/>
            <HomeButton icon={<Book size={30} className="" />} title="Lista de Tarefas"/>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {
            subjects.map((currentSubject, index) => {
              return (<Subject key={index} subjectName={currentSubject.subjectName} components={currentSubject.components} maxPoints={30} currentGrade={currentSubject.currentGrade}/>)
            })
          }
        </div>

        <div>
        </div>
      </main>
      {/* <Footer /> */}
    </main>
  );
}
