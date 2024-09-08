"use client"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import dayjs from "dayjs"

import { cn } from "@/lib/utils"

import { format } from "date-fns"
import { Calendar as CalendarIcon, X } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

import { CirclePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { IconConverter } from "@/components/iconcovert";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSearchParams } from 'next/navigation'


export function Addrecord ({types, amount, setIconId, categories,addRecords, setActive, activestate, date, setDate, time, payee, note, setPayee, setNote, setAmount, setTime, editExpense,editingRecords} ) {

    const searchParams = useSearchParams()
    
    const show = searchParams.get('show')
    const router = useRouter()
    return (
        <Dialog open={show==="dialog"}>
        <DialogContent className="bg-white max-w-[792px] rounded-xl">
            <DialogHeader className="border-b border-primary-border-slate-200 py-5 px-6 flex justify-between">
                <DialogTitle className="text-xl font-semibold">Add record</DialogTitle>
                <div>
                    <X onClick={() => router.push(`?`)} className="hover:cursor-pointer" />
                    <DialogDescription></DialogDescription>
                </div>
            </DialogHeader>
            <div className="flex gap-6">
                <div className="flex flex-col gap-6">
                    <div className="flex">
                        {types.map((type) =>
                            <button key={type.id} style={activestate === type.value ? { backgroundColor: type.color } : { backgroundColor: type.basecolor }} className="py-2 px-14 rounded-[20px] text-base font-normal -primary-text-100 text-primary-text-base" onClick={() => { setActive(type.value) }}> {type.name} </button>)}
                    </div>
                    <div className="flex  flex-col gap-6">
                        <Input type="number" placeholder="₮ 000.00" className="pt-6 pr-[62px] pb-3 pl-4 w-[348px]" onChange={(e) => setAmount(e.target.value)} value={amount} />
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="category">Category</Label>
                            <Select onValueChange={setIconId} >

                                <SelectTrigger className="w-[348px] py-3">
                                    <SelectValue placeholder="Find or choose category" />
                                </SelectTrigger>
                                <SelectContent className="bg-white w-[348px]">
                                    <SelectGroup>
                                        <SelectLabel>
                                            <button className="flex gap-3 items-center" onClick={() => router.push(`?add=category`)}> <CirclePlus className="text-primary-main-blue" /> Add category</button>
                                        </SelectLabel>

                                        {categories.map((cat) => (
                                            <SelectItem key={cat.id} value={cat.id}>

                                                <div className="flex items-center gap-3" >
                                                    <div style={{ color: cat.color }}>
                                                        <IconConverter iconname={cat.icon}  />
                                                    </div>
                                                    
                                                    <div className="text-base font-normal">{cat.name}</div>
                                                </div>
                                            </SelectItem>
                                        )
                                        )}
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
                                            {date ? format(date, "PPP") : <span>{dayjs().format('YYYY-MM-DD')}</span>}
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
                                <input type="time" className="w-[168px] py-3 pl-4 border border-black rounded-xl " placeholder={dayjs().format(`HH.mm.A`)} onChange={(e) => setTime(e.target.value)} value={time} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={`py-2 px-[132.5px] rounded-xl text-white bg-primary-main-blue ${editingRecords && "hidden"}`} onClick={addRecords}>Add record</button>
                        <button className={`py-2 px-[132.5px] rounded-xl text-white bg-primary-main-blue ${!editingRecords && "hidden"} `} onClick={editExpense}>Edit record</button>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="category">Payee</Label>
                        <Input type="text" placeholder="Write here" className="w-[348px] py-3 pl-4" onChange={(e) => setPayee(e.target.value)} value={payee} />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="category">Note</Label>
                        <Textarea placeholder="Write here" className="pb-[210px] rounded-xl" onChange={(e) => setNote(e.target.value)} value={note} />
                    </div>
                </div>
            </div>
        </DialogContent>
    </Dialog>
    )
}