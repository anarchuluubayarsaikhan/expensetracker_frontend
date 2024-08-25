"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback} from "@radix-ui/react-avatar";
import { useState } from "react";
const navs = ["Dashboard", "Records"] 
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
 
  
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

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
            <Dialog >
                <DialogTrigger>
                    <Button className="bg-primary-main-blue text-white rounded-3xl">+ Record</Button>
                </DialogTrigger>
                <DialogContent className="bg-white">
                    <DialogHeader className="bg-white ">
                    <DialogTitle className="bg-white ">Add record</DialogTitle>
                    <DialogDescription className="bg-white">
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList>
                                <TabsTrigger value="expense" >Expense</TabsTrigger>
                                <TabsTrigger value="income">Income</TabsTrigger>
                            </TabsList>
                            <TabsContent value="expense"  className="bg-white ">
                                <Textarea className="w-[348px]"/>
                                <div>
                                <Select>
                                    <SelectTrigger className="w-[348px]">
                                        <SelectValue placeholder="Find or choose category" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectGroup>
                                        <SelectLabel>
                                        <Button >Add category</Button>
                                        </SelectLabel>
                                        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                        </SelectGroup>                     
                                    </SelectContent>
                                    </Select>
                                </div>
                            </TabsContent>
                            <TabsContent value="income"  className="bg-white ">Change your password here.</TabsContent>
                        </Tabs>
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
        </Dialog>
                
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"className="w-7 h-7 rounded-xl"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
       
    
}