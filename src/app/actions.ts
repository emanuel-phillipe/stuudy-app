'use server'
 
import { redirect, RedirectType } from 'next/navigation'
 
export async function navigate() {
  redirect(`/subject`, RedirectType.replace)
}