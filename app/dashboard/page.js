"use client"

import { Anchor, ArrowDown, ArrowUp, Binary, BookCheck, ChartNoAxesColumnIncreasing, CircleAlert, CircleGauge, CircleHelp, Citrus, Contact, ContactRound, FileDigit, FileImage, Globe, Hourglass, House, HousePlus, Leaf, ListPlus, LoaderPinwheel, MessagesSquare, Mic, NotepadText, Pencil, Scroll, Sheet, TrainTrack, Watch, Waypoints, Wine,  ZoomIn } from "lucide-react";
import { Header } from "@/components/header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";



const cards =[
    {color: "#84CC16",
     icon: <ArrowUp size={16}/>
    },
    {color: "#0166FF",
    icon: <ArrowDown size={16} />
    },
]

export default function Dashboard () {
    return (
        <div className=" max-w-screen-lg m-auto flex flex-col gap-6">
            <Header/>
            <div className="flex gap-6">
                <Card className="bg-primary-main-blue rounded-xl flex-1 ">
                    <CardHeader>
                        <CardTitle>
                            <Image src="/allpics/Logowhite.png" width={80} height={30}/>
                        </CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image src="/allpics/Shape.png" width={212} height={189} />
                        <div className="flex justify-between">
                            <div >
                                <p className="font-normal text-base text-white/50">Cash</p>
                                <div className="font-semibold text-2xl text-white">10000</div>
                            </div>
                            <Image src="/allpics/noise.png" width={40} height={40}/>
                        </div>
                        
                        
                    </CardContent>
                </Card>
                <div className="flex gap-6">
                    {cards.map ((card) =>
                         <Card className="bg-white rounded-xl flex-1">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 border-b-2 pb-4">
                                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: card.color}}></div>
                                    <div className="font-semibold text-base placeholder-primary-text-slate-900">Your income</div>
                                </CardTitle>
                                <CardDescription></CardDescription>
                            </CardHeader>
                            <CardContent className="flex gap-4 flex-col">
                             <div className="flex flex-col gap-1">
                                <p className="text-4xl font-semibold text-black">1,200,000 ₮</p>
                                <div className="text-lg font-normal text-primary-text-500">Your Income Amount</div>
                             </div>
                             <div className="flex gap-2">
                                <div className="p-1 aspect-video flex items-center justify-center rounded-full text-white" style={{backgroundColor: card.color}}>{card.icon} </div>
                                <div> 32% from last month</div>
                             </div>
                         </CardContent>
                        </Card>
                    )}
                </div>
            </div>
            <div className="flex gap-6">
                <Card className="bg-white rounded-xl flex-1">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 border-b-2 pb-4">
                                        <div className="font-semibold text-base placeholder-primary-text-slate-900">Income - Expense</div>
                                    </CardTitle>
                                    <CardDescription></CardDescription>
                                </CardHeader>
                                <CardContent className="flex gap-4 flex-col">
                                </CardContent>
                </Card>
                <Card className="bg-white rounded-xl flex-1">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 border-b-2 pb-4 justify-between">
                                        <div className="font-semibold text-base placeholder-primary-text-slate-900">Income - Expense</div>
                                        <div className="text-base font-normal text-primary-text-gray-500">Jun 1 - Nov 30</div>
                                    </CardTitle>
                                    <CardDescription></CardDescription>
                                </CardHeader>
                                <CardContent >
                               
                                </CardContent>
                </Card>
            </div>
            <Card className="bg-white rounded-xl flex-1">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 border-b-2 pb-4">
                        <div className="font-semibold text-base placeholder-primary-text-slate-900">Last records</div>
                    </CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between">
                    <div className="flex gap-4">
                        <div className="p-1 rounded-full aspect-video flex justify-between items-center bg-primary-main-blue"><ArrowUp size={16}/></div>
                        <div className="flex flex-col gap-2">
                            <div className="font-normal text-base text-black">
                                Lending & Renting
                            </div>
                            <div className="font-normal text-xs">
                                3 hours ago
                            </div>
                        </div>
                    </div>
                    <div className="font-semibold text-base text-primary-text-lime-500">1,000₮</div>
                   
                </CardContent>
            </Card>
            
            

        </div>


    )
}