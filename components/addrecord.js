"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
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
import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

import { CirclePlus, X } from "lucide-react"

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import { useState } from "react"
import dayjs from "dayjs"

const types = [
    {name: "Expense",
     value: "expense",
     color: "#0166FF",
     basecolor: "#F3F4F6"
    },
    {name: "Income",
    value: "income",
    color: "#16A34A",
    basecolor: "#F3F4F6"
}
]
import { Textarea } from "@/components/ui/textarea"
  
export function  Record () {
    const [open, setOpen] = useState (false)
    const [active, setActive] =useState()
    const [date, setDate] = useState()

    
    return (
        <div>
            <button className="text-white text-base font-normal py-1 px-[98px] rounded-2xl bg-primary-main-blue"  onClick={()=> setOpen(true)}>+ Add</button>
            <Dialog open ={open}>
            <DialogContent className = "bg-white max-w-[792px] rounded-xl">
                <DialogHeader className="border-b border-primary-border-slate-200 py-5 px-6 flex justify-between">
                    <DialogTitle className="text-xl font-semibold">Add record</DialogTitle>
                    <X onClick={()=> setOpen(false)} className="hover:cursor-pointer"/>
                    
                </DialogHeader>
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-6">
                                <div className="flex">
                                {types.map ((type) => 
                                <button key={type.value}  style={active === type.value? {backgroundColor:type.color} : {backgroundColor:type.basecolor}}    className="py-2 px-14 rounded-[20px] text-base font-normal -primary-text-100 text-primary-text-base" onClick={()=> setActive(type.value)} value={type.color}> {type.name} </button>)}
                                </div>
                                <div className="flex  flex-col gap-6">
                                        <Input type="number"  placeholder="₮ 000.00" className="pt-6 pr-[62px] pb-3 pl-4 w-[348px]"/>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="category">Category</Label>
                                            <Select>
                                                <SelectTrigger className="w-[348px] py-3">
                                                    <SelectValue placeholder="Find or choose category" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white w-[348px]">
                                                    <SelectGroup>
                                                    <SelectLabel>
                                                        <button className="flex gap-3 items-center"> <CirclePlus className="text-primary-main-blue"/> Add category</button>
                                                    </SelectLabel>
                                                        <SelectItem value="apple">Apple</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex gap-3 w-[348px]">
                                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                                <Label htmlFor="category">Date</Label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[168px] h-[48px] justify-start text-left font-normal rounded-xl",
                                                            !date && "text-muted-foreground"
                                                        )}
                                                        >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP") : <span>{dayjs().format('MMM DD, YYYY')}</span>}
                                                        </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0 bg-white">
                                                            <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                                <Label htmlFor="category">Time</Label>
                                                <input type="time" className="w-[168px] py-3 pl-4 border border-black rounded-xl " placeholder={dayjs().format(`HH.mm.A`)}></input>
                                            </div>
                                        </div>
                                </div>
                                <div> 
                                        <button className="py-2 px-[132.5px] rounded-xl text-white bg-primary-main-blue">Add record</button>  
                                </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="category">Payee</Label>
                                    <Input type="text" placeholder="Write here" className="w-[348px] py-3 pl-4"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="category">Note</Label>
                                    <Textarea placeholder="Write here" className="pb-[210px] rounded-xl"/>
                            </div>
                        </div>
                    </div>
            </DialogContent>
            </Dialog>
        </div>
    )
   
}