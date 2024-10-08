"use client"

import { Anchor, ArrowDown, ArrowUp, Binary, BookCheck, ChartNoAxesColumnIncreasing, CircleAlert, CircleGauge, CircleHelp, Citrus, Contact, ContactRound, FileDigit, FileImage, Globe, Hourglass, House, HousePlus, Leaf, ListPlus, LoaderPinwheel, MessagesSquare, Mic, NotepadText, Pencil, Scroll, Sheet, TrainTrack, Watch, Waypoints, Wine,  ZoomIn } from "lucide-react";
import { Header } from "@/components/header";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Chart } from "@/components/chart";


const cards =[
    {color: "#84CC16",
     icon: <ArrowUp size={16}/>
    },
    {color: "#0166FF",
    icon: <ArrowDown size={16} />
    },
]



export default function Dashboard () {
    const [newestfirstrecordings, setNewestfFirstRecordings] = useState([])
    
   
    const nowHour = dayjs().format('HH:mm')
    const [amountTotal, setAmountTotal] =useState("")
    console.log (amountTotal)

  
    // const [expenseTotal, setExpenseTotal] =useState("")
    
    // function NewestFirst () {
    //     fetch(`http://localhost:4000/dashboard?${nowHour}`)
    //     .then((res) => {return res.json()})
    //     .then ((data) => setNewestfFirstRecordings(data))
    // } 

    // useEffect (() => {
    //     NewestFirst ()
    // }, [])

    // function TotalIncome () {
    //     fetch("http://localhost:4000/income")
    //     .then((res) => {return res.json()})
    //     .then ((data) => setAmountTotal(data))
    // } 

    // useEffect (() => {
    //     TotalIncome ()
    // }, [])

    // function TotalExpense () {
    //     fetch("http://localhost:4000/expense")
    //     .then((res) => {return res.json()})
    //     .then ((data) => setExpenseTotal(data))
    // } 

    // useEffect (() => {
    //     TotalExpense ()
    // }, [])

    return (
        <div className=" max-w-screen-lg m-auto flex flex-col gap-6">
            <Header/>
            <div className="flex gap-6">
                <Card className="bg-primary-main-blue rounded-xl flex-1 ">
                    <CardHeader>
                        <CardTitle>
                            <Image src="/allpics/Logowhite.png" width={80} height={30} alt="Logo"/>
                        </CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image src="/allpics/Shape.png" width={212} height={189} alt="Round shape on card"/>
                        <div className="flex justify-between">
                            <div >
                                <p className="font-normal text-base text-white/50">Cash</p>
                                <div className="font-semibold text-2xl text-white">10000</div>
                            </div>
                            <Image src="/allpics/noise.png" width={40} height={40} alt="Noise shape on card"/>
                        </div>
                        
                        
                    </CardContent>
                </Card>
                <div className="flex gap-6">
                
                    {cards.map ((card) =>
                         <Card className="bg-white rounded-xl flex-1" key={card.color}>
                            
                   
                            <>
                                <CardHeader>
                                <CardTitle className="flex items-center gap-2 border-b-2 pb-4">
                                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: card.color}}></div>
                                    <div className="font-semibold text-base placeholder-primary-text-slate-900">Your income</div>
                                </CardTitle>
                                <CardDescription></CardDescription>
                            </CardHeader>
                            <CardContent className="flex gap-4 flex-col">
                             <div className="flex flex-col gap-1">
                                <p className="text-4xl font-semibold text-black">1,200,000</p>
                                <div className="text-lg font-normal text-primary-text-500">Your Income Amount</div>
                             </div>
                             <div className="flex gap-2">
                                <div className="p-1 aspect-video flex items-center justify-center rounded-full text-white" style={{backgroundColor: card.color}}>{card.icon} </div>
                                <div> 32% from last month</div>
                             </div>
                            </CardContent>
                            </>
                        
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
                                <Chart/>
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
                
                <CardContent >
                    <div>
                {newestfirstrecordings.map((firstrec) =>(
                    <div className="flex justify-between border-b-2 py-5">
                        <div className="flex gap-4">
                        <div className="p-1 rounded-full aspect-video flex justify-between items-center bg-primary-main-blue"><ArrowUp size={16}/></div>
                        <div className="flex flex-col gap-2">
                            <div className="font-normal text-base text-black">
                                Lending & Renting
                            </div>
                            <div className="font-normal text-xs">
                                {firstrec.time}
                            </div>
                        </div>
                    </div>
                    <div className={`text-base font-semibold  ${firstrec.typesall == 'expense' ? "text-red-700" : "text-green-600"}`}>{firstrec.amount}</div>
                    </div>
                    ))}
                    </div>
                </CardContent>
               

            </Card>
            
            

        </div>


    )
}