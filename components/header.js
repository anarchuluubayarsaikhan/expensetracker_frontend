"use client"
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'



export function Header() {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <div className="flex place-content-between py-4">
            <div className="flex gap-6 items-center">
                <Image src="/allpics/Logo2.png" width={27} height={27} className="w-10 h-10" alt="Logo"/>
            </div>
            <div className="flex gap-6 items-center">
                <Button className="bg-primary-main-blue hover:bg-blue-900 text-white rounded-3xl" onClick={()=> router.push(`?show=dialog`)}>+ Record</Button>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" className="w-7 h-7 rounded-xl" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )


}