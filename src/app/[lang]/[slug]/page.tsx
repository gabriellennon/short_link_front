"use client"
import { useEffect } from "react";
import { usePathname } from 'next/navigation'
import { getShortnerUrl } from "@/services/shortner.service";
import { FullLoadingScreen } from "@/components/FullLoadingScreen";

export default function RedirectLink() {
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
    const pathNameFormatted = pathname.split(pathname.includes('pt-BR/') ? 'pt-BR/' : '/')
    getShortnerUrl(pathNameFormatted[1]).then(response => {
      window.location.href = response.data.url;
    }).catch(error => {
      console.log(error);
      window.location.href = 'https://www.icut.li/';
    })
  },[pathname])

  return (
    <section className='py-24'>
      <FullLoadingScreen />
    </section>
  )
}
