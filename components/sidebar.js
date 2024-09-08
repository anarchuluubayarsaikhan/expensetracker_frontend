"use client"
import { useRouter } from 'next/navigation'
export function Sidebar () {
    const router = useRouter()
    return (
        <button className="text-white text-base font-normal py-1 px-[98px] rounded-2xl bg-primary-main-blue" onClick={() => router.push(`?show=dialog`)}>+ Add</button>
    )
   
}