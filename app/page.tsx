'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { allDocs } from "contentlayer/generated"


export default function Home() {

  allDocs.map((value)=>{
    console.log(value)
  })

  const router = useRouter()
  const pathname = usePathname()
  console.log(pathname)
  return (
    <>
        <button type="button" onClick={() => router.push(`${pathname}blog/Elon`)}>
      Dashboard
    </button>
    </>
  )
}
