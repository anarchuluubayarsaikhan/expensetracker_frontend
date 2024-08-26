"use client"
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback} from "@radix-ui/react-avatar";
import { useState } from "react";
import { Dialogs } from "./dialog";
const navs = ["Dashboard", "Records"] 

export function Header () {
    const {chosen, Setchosen} = useState ()
    return (
        <div className="flex place-content-between py-4 px-[120px]">
            <div className="flex gap-6 items-center">
                    <Image src="/allpics/Logo2.png" width={27} height={27} className="w-10 h-10" />
                <div className="flex gap-6 items-center">
                        {navs.map((nav,index) =>
                            <div key={index} className={`font-semibold text-base text-primary-text-slate-900 ${chosen? "font-bold" : ""}`} onClick={() => nav=== navs[index] && Setchosen(navs[index])}>{nav}</div>
                        )}
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <Dialogs/>
                
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"className="w-7 h-7 rounded-xl"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
       
    
}