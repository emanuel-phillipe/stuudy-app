"use client"

import { At, Key } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'

type info = {
  email: string
  password: string
}

interface ILoginProps {
  loginFunction: (info: info) => void
}

function Login({loginFunction}:ILoginProps) {

  const [focusedInput, setFocusedInput] = useState("email")
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })
  const isFormReadyToSend = () => {
    return inputs.email === "" || inputs.password === ""
  }  

  const handleLogin = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    loginFunction(inputs)
  }

  return (
    <div className=''> 
      <form className='flex gap-5 w-max flex-col'>
        <div className='flex flex-col gap-1'>
          <span>Email</span>
          <div className={`p-3 px-4 gap-3 backdrop-blur-[1px] border-[0.7px] ${focusedInput==="email" ? 'text-zinc-950 border-zinc-500' : 'text-zinc-400'} rounded-lg transition-all flex justify-center items-center`}>
            <At alt='Email' size={20}/>
            <input onChange={(event) => {setInputs((current) => {return {...current, email: event.target.value}})}} value={inputs.email} onBlur={() => {setFocusedInput("")}} onFocus={() => {setFocusedInput("email")}} autoFocus className='w-[15rem] bg-zinc-50 outline-none' type="text" placeholder='jorge.ferreira@hotmail.com'/>
          </div>
        </div>
 
        <div className='flex flex-col gap-1'>
          <span>Senha</span>
          <div className={`p-3 backdrop-blur-[1px] px-4 gap-3 border-[0.7px] ${focusedInput==="password" ? 'text-zinc-950 border-zinc-500' : 'text-zinc-400'} rounded-lg transition-all flex justify-center items-center`}>
            <Key alt='Senha' size={20}/>
            <input onChange={(event) => {setInputs((current) => {return {...current, password: event.target.value}})}} value={inputs.password} onBlur={() => {setFocusedInput("")}} onFocus={() => {setFocusedInput("password")}} className='w-[15rem] bg-zinc-50 outline-none' type="password" placeholder='xxxxxxxxxxxxx'/>
          </div>
        </div>

        <button disabled={isFormReadyToSend()} onClick={(event) => handleLogin(event)} className={`p-4 enabled:hover:shadow-2xl shadow-xl enabled:hover:bg-zinc-800 disabled:cursor-not-allowed transition-all rounded-lg mt-4 disabled:bg-zinc-500 text-zinc-50 bg-zinc-700`}>Entrar</button>
      </form>
    </div>
  )
}

export default Login