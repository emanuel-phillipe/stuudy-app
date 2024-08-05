import React, { type ReactNode } from "react";

interface IHomeButtonProps{
  title: string
  icon: ReactNode
  otherClass?: string
  clickFunction?: () => void
}

function HomeButton({title, icon, otherClass, clickFunction}:IHomeButtonProps) {
  return (
    <button onClick={clickFunction} className={` rounded-lg text-zinc-600 hover:text-zinc-950 cursor-pointer transition-all border-[0.7px] hover:border-zinc-400 flex items-center gap-2 p-3 ${otherClass}`}>
      {icon}
      <p>{title}</p>
    </button>
  );
}

export default HomeButton;
