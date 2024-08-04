"use client"

import React, { useState } from 'react'
import HomeButton from '../components/HomeButton'
import { Plus, User } from '@phosphor-icons/react/dist/ssr'
import Login from './components/Login'
import Registro from './components/Registro'
import ShapeImg from "../../public/Shapes.png"
import ShapeImgWhite from "../../public/ShapesWhite.png"

interface IHandleUserLogin {
  (info: {
    email: string
    password: string
  }): void
}

function Auth() {

  const [page, setPage] = useState("login")

  const handleUserLogin:IHandleUserLogin = (info) => {
    console.log(info);
  }
 
  return (
    <div style={{backgroundImage: `url(${ShapeImg.src})`}} className={`grid bg-zinc-950 grid-cols-2 w-full h-screen justify-center flex-col items-center`}>

      <div style={{backgroundImage: `url(${ShapeImgWhite.src})`}} className='bg-zinc-50 flex-col m-7 rounded-2xl h-[95%] flex items-center justify-center'>
        <div>
          <div className='mb-10'>
            <h1 className='text-3xl font-bold'>Bem-vindo!</h1>
            <p className='text-zinc-500'>Insira as informações para continuar :)</p>
          </div>
          {
            page==="login" && <Login loginFunction={handleUserLogin}/>
          }
          { 
          page==="registro" && <Registro />
          }
        </div>
        <div className='absolute transition-all backdrop-blur-sm bottom-14'>
          <div className='border-[0.7px] flex gap-2 transition-all border-zinc-300 p-2 rounded-lg'>
            <button onClick={() => {setPage("login")}} className={`w-28 py-2 font-medium ${page=="login" ? 'bg-zinc-800 shadow-2xl text-zinc-50' : 'text-zinc-500 hover:text-zinc-950'} rounded-md transition-all`}>Login</button>
            <button onClick={() => {setPage("registro")}} className={`w-28 py-2 ${page=="registro" ? 'bg-zinc-800 shadow-2xl text-zinc-50' : 'text-zinc-500 hover:text-zinc-950'} font-medium rounded-md`}>Registro</button>
          </div>
        </div>
      </div>
      
      <div className='w-full flex flex-col items-center justify-center'>
        <svg width="180" height="60" viewBox="0 0 96 34" className='backdrop-blur-[4px]' fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9893 34H0V30.3043H7.9929V11.087H0V0H11.9893V3.69565H3.99645V7.3913H11.9893V34Z" fill="#FAFAFA"/>
          <path d="M27.9751 0V3.69565H23.9787V34H19.9822V3.69565H15.9858V0H27.9751Z" fill="#FAFAFA"/>
          <path d="M58.0284 34H31.9716V0H35.968V30.3043H54.032V0H58.0284V34Z" fill="#FAFAFA"/>
          <path d="M75.6181 3.69565H66.0213V30.3043H67.581L75.6181 3.69565ZM62.0249 34V0H79.9343L71.3377 34H62.0249Z" fill="#FAFAFA"/>
          <path d="M96 11.087H92.0036V34H88.0071V11.087H84.0107V0H88.0071V7.3913H92.0036V0H96V11.087Z" fill="#FAFAFA"/>
        </svg>

        <div className='text-center absolute backdrop-blur-sm bottom-0 mb-7'>
          <p className='text-zinc-500 mb-1 font-semibold'>Desenvolvimento</p>
          <p className='text-zinc-200 font-medium'>Emanuel Phillipe Ribeiro Ferreira de Carvalho</p>
        </div>
      </div>

    </div>
  )
}

export default Auth