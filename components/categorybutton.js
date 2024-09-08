"use client"
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
export function Addcategorybutton () {
    const router = useRouter()
    return(
        <button onClick={() => router.push(`?add=category`)} className="flex gap-2 text-base font-normal text-primary-text-base items-center"><Plus size={20} color="#0166FF" />Add category</button>
    )
}