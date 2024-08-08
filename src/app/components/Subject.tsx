"use client"

import { CaretRight } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"
import Link from 'next/link';
import type { IState } from "../app";

interface ISubjectProps {
  subjectName: string
  maxPoints: number
  currentGrade: number
  components: string[]
  handleClick: () => void
  id: string
  info: IState
}

function Subject({subjectName, maxPoints, currentGrade, components, handleClick, id, info}:ISubjectProps) {
  const [hovered, setHovered] = useState(false)

  const subjectDescription = components.length > 1 ? components.join(", ") : "Componente Único"

  return (
    <Link href={{pathname: "/subject", query: {info: JSON.stringify(info), id}}} onClick={handleClick} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}} className="py-2 px-3 border-[0.7px] items-center flex justify-between border-zinc-200 hover:border-zinc-400 transition-all cursor-pointer rounded-lg w-full">
      <div>
        <p className="font-semibold text-zinc-800">{subjectName}</p>
        <p className="font-normal text-[0.8rem] text-zinc-500">{subjectDescription}</p>
      </div>

      <div className="flex gap-3 items-center h-full">
        <p className="text-xl font-semibold">
          {currentGrade}
          <span className="text-[0.8rem] font-normal text-zinc-500">/{maxPoints}</span>
        </p>

        <CaretRight size={18} weight="regular" className={`${hovered ? 'text-zinc-950' : 'text-zinc-500'}`}/>
      </div>
    </Link>
  )
}

export default Subject