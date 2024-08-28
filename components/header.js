"use client"
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Dialogs } from "./dialog";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const navs = [
    {
        name: "Dashboard",
        value: "dashboard",
        route: "/dashboard"
    },
    {
        name: "Records",
        value: "records",
        route: "/records"
    }]

export function Header() {
    const pathname = usePathname()

    return (
        <div className="flex place-content-between py-4 px-[120px]">
            <div className="flex gap-6 items-center">
                <Image src="/allpics/Logo2.png" width={27} height={27} className="w-10 h-10" />
                <div className="flex gap-6 items-center">
                    {navs.map((nav) =>
                        <Link href={nav.route} className={`${pathname == nav.route ? "text-orange-800" : "text-slate-200"} text-base  `} >{nav.name}</Link>
                    )}
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <Dialogs />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" className="w-7 h-7 rounded-xl" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )


}