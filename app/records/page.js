"use client"
import { Anchor, Binary, BookCheck, ChartNoAxesColumnIncreasing, Check, ChevronDown, CircleAlert, CircleGauge, CircleHelp, Citrus, Contact, ContactRound, FileDigit, FileImage, Globe, Hourglass, House, HousePlus, Leaf, ListPlus, LoaderPinwheel, MessagesSquare, Mic, NotepadText, Pencil, PlayIcon, Plus, Scroll, Sheet, TrainTrack, Trash2, Watch, Waypoints, Wine, X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"

import { Checkbox } from "@/components/ui/checkbox"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const icons = [
    {
        value: "house",
        iconi: <HousePlus strokeWidth={3} />
    },
    {
        value: "home",
        iconi: <House strokeWidth={3} />
    },
    {
        value: "nametag",
        iconi: <Contact strokeWidth={3} />
    },
    {
        value: "card",
        iconi: <ContactRound strokeWidth={3} />
    },
    {
        value: "stairs",
        iconi: <ChartNoAxesColumnIncreasing strokeWidth={3} />
    },
    {
        value: "join",
        iconi: <MessagesSquare strokeWidth={3} />
    },
    {
        value: "picture",
        iconi: <FileImage strokeWidth={3} />
    },
    {
        value: "zoom",
        iconi: <ZoomIn strokeWidth={3} />
    },
    {
        value: "microphone",
        iconi: <Mic strokeWidth={3} />
    },
    {
        value: "excel",
        iconi: <Sheet strokeWidth={3} />
    },
    {
        value: "notepad",
        iconi: <NotepadText strokeWidth={3} />
    },
    {
        value: "listplus",
        iconi: <ListPlus strokeWidth={3} />
    },
    {
        value: "leaf",
        iconi: <Leaf strokeWidth={3} />
    },
    {
        value: "five",
        iconi: <FileDigit strokeWidth={3} />
    },
    {
        value: "seven",
        iconi: <Binary strokeWidth={3} />
    },
    {
        value: "road",
        iconi: <TrainTrack strokeWidth={3} />
    },
    {
        value: "hourglass",
        iconi: <Hourglass strokeWidth={3} />
    },
    {
        value: "anchor",
        iconi: <Anchor strokeWidth={3} />
    },
    {
        value: "bezier",
        iconi: <Waypoints strokeWidth={3} />
    },
    {
        value: "exclude",
        iconi: <CircleAlert strokeWidth={3} />
    },
    {
        value: "photo",
        iconi: <Wine strokeWidth={3} />
    },
    {
        value: "baseball",
        iconi: <LoaderPinwheel strokeWidth={3} />
    },
    {
        value: "question",
        iconi: <CircleHelp strokeWidth={3} />
    },
    {
        value: "exam",
        iconi: <BookCheck strokeWidth={3} />
    },
    {
        value: "watch",
        iconi: <Watch strokeWidth={3} />
    },
    {
        value: "globe",
        iconi: <Globe strokeWidth={3} />
    },
    {
        value: "juice",
        iconi: <Citrus strokeWidth={3} />
    },
    {
        value: "peace",
        iconi: <CircleGauge strokeWidth={3} />
    },
    {
        value: "toiletpaper",
        iconi: <Scroll strokeWidth={3} />
    },
    {
        value: "signature",
        iconi: <Pencil strokeWidth={3} />
    }
]

const colors = [

    {
        name: "blue",
        value: "#0166FF"
    },
    {
        name: "sky",
        value: "#01B3FF"
    },
    {
        name: "green",
        value: "#41CC00"
    },
    {
        name: "yellow",
        value: "#F9D100"
    },
    {
        name: "orange",
        value: "#FF7B01"
    },
    {
        name: "violet",
        value: "#AE01FF"
    },
    {
        name: "red",
        value: "#FF0101"
    },
]

import { Textarea } from "@/components/ui/textarea"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Header } from "@/components/header";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog"

import { cn } from "@/lib/utils"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

import { CirclePlus } from "lucide-react"

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import dayjs from "dayjs"
import { IconConverter } from "@/components/iconcovert";
import { IconConverterSecond, IconNameConverter } from "@/components/iconname";

const types = [
    {
        name: "Expense",
        value: "expense",
        color: "#0166FF",
        basecolor: "#F3F4F6"
    },
    {
        name: "Income",
        value: "income",
        color: "#16A34A",
        basecolor: "#F3F4F6"
    }
]


export default function Records() {
    const [selectedIcon, setSelectedicon] = useState(<CircleHelp strokeWidth={3} />)
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedColorValue, setSelectedColorValue] = useState("")
    const [selectedIconi, setSelectedIconi] = useState("")
    const [selectedName, setselectedName] = useState("")
    const [opened, setOpened] = useState("")
    const [categories, setCategories] = useState([])






    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
    const [payee, setPayee] = useState("")
    const [note, setNote] = useState("")
    const [time, setTime] = useState("")
    const [iconId, setIconId] = useState("")
    const formatedDate = dayjs(date).format('MMM DD, YYYY')
    const today = dayjs().format('MMM DD, YYYY')
    const yesterday = dayjs().subtract(1, 'day').format('MMM DD, YYYY')
    const [recordings, setRecordings] = useState([])
    const [selectedCheckbox, setSelectedCheckbox] = useState([])
    const sortedRecordings = recordings.sort((a, b) => {
    if (a.date > b.date) {
        return -1
    }})

    function toggleCheckbox (id) {
        if (selectedCheckbox.includes(id)) {
            
            const removed = selectedCheckbox.filter((itemId)=> id !== itemId)
            setSelectedCheckbox (removed)
        }
     
        else {
            setSelectedCheckbox(s => [...s, id]) 
            
        }}

    

    
    console.log (selectedCheckbox)
    
    


    function loadCategories() {
        fetch("http://localhost:4000/categories")
            .then((res) => { return res.json() })
            .then((data) => setCategories(data))
    }

    useEffect(() => {
        loadCategories()
    }, [])


    function addcategories() {
        fetch("http://localhost:4000/categories", {
            method: "POST",
            body: JSON.stringify(
                {
                    name: selectedName,
                    icon: selectedIconi,
                    color: selectedColor
                }
            ),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        loadCategories()
        resetCategories()
        
    }


    function addRecords() {
        fetch("http://localhost:4000/recordings", {
            method: "POST",
            body: JSON.stringify(
                {
                    alltype: active,
                    amount: amount,
                    category: iconId,
                    date: formatedDate,
                    time: time,
                    payee: payee,
                    note: note
                }

            ),


            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            
        })
        loadRecords()
        resetRecords()
        
    }

    function loadRecords() {
        fetch("http://localhost:4000/recordings")
            .then((res) => { return res.json() })
            .then((data) => setRecordings(data))
    }

    useEffect(() => {
        loadRecords()
    }, [])






    function resetRecords() {
        setActive("")
        setDate("")
        setAmount("")
        setPayee("")
        setNote("")
        setTime("")
        setIconId("")
    }

    function resetCategories() {
        setSelectedColor("")
        setselectedName("")

    }
    function deleteExpense (id) {
        fetch(`http://localhost:4000/recordings/${id}`, {
            method: "DELETE",
        })
    }

    function editExpense (id) {
        const name = prompt('Enter name')
        
        fetch(`http://localhost:4000/recordings/${id}`, {
            method: "PUT",
            body: JSON.stringify(
                {
                    name: name
                }

            ),


            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    function changeDate (date){
        if (date === today)
            return ("Today")
         else if (date === yesterday) {
            return ("Yesterday")
        }
        else {
            return (date)
        }
    }
    
    

    
    
    

    return (
        <div className=" max-w-screen-lg m-auto flex flex-col gap-6">
            <Header />
            <div className="flex gap-6 bg-gray-50 py-6" >
                <div className="flex flex-col gap-6 py-4 px-8 bg-white rounded-xl border">
                    <div className="font-semibold text-2xl text-black">Records</div>
                    <div>
                        <button className="text-white text-base font-normal py-1 px-[98px] rounded-2xl bg-primary-main-blue" onClick={() => setOpen(true)}>+ Add</button>
                        <Dialog open={open}>
                            <DialogContent className="bg-white max-w-[792px] rounded-xl">
                                <DialogHeader className="border-b border-primary-border-slate-200 py-5 px-6 flex justify-between">
                                    <DialogTitle className="text-xl font-semibold">Add record</DialogTitle>
                                    <div>
                                        <X onClick={() => setOpen(false)} className="hover:cursor-pointer" />
                                        <DialogDescription></DialogDescription>
                                    </div>
                                </DialogHeader>
                                <div className="flex gap-6">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex">
                                            {types.map((type) =>
                                                <button key={type.key} style={active === type.value ? { backgroundColor: type.color } : { backgroundColor: type.basecolor }} className="py-2 px-14 rounded-[20px] text-base font-normal -primary-text-100 text-primary-text-base" onClick={() => { setActive(type.value) }}> {type.name} </button>)}
                                        </div>
                                        <div className="flex  flex-col gap-6">
                                            <Input type="number" placeholder="₮ 000.00" className="pt-6 pr-[62px] pb-3 pl-4 w-[348px]" onChange={(e) => setAmount(e.target.value)} value={amount} />
                                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                                <Label htmlFor="category">Category</Label>
                                                <Select  onValueChange={setIconId} >
                                        
                                                            <SelectTrigger className="w-[348px] py-3">
                                                                <SelectValue placeholder="Find or choose category" />
                                                            </SelectTrigger>
                                                            <SelectContent className="bg-white w-[348px]">
                                                                <SelectGroup>
                                                                <SelectLabel>
                                                                    <button className="flex gap-3 items-center"> <CirclePlus className="text-primary-main-blue"/> Add category</button>
                                                                </SelectLabel>

                                                                    {categories.map ((cat) => (
                                                                        <SelectItem key={cat.key} value={cat.id}>
                                                                        
                                                                            <div className="flex items-center gap-3" >
                                                                                <IconConverter iconname={cat.icon}  style={{color:cat.color}}/>
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
                                                    <input type="time" className="w-[168px] py-3 pl-4 border border-black rounded-xl " placeholder={dayjs().format(`HH.mm.A`)} onChange={(e) => setTime(e.target.value)} value={time} />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="py-2 px-[132.5px] rounded-xl text-white bg-primary-main-blue" onClick={addRecords}>Add record</button>
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
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <div className="flex flex-col gap-4">
                        <div className="text-base font-semibold placeholder-primary-text-base">Types</div>
                        <RadioGroup defaultValue="comfortable">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" />
                                <Label htmlFor="r1">All</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="comfortable" id="r2" />
                                <Label htmlFor="r2">Income</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="compact" id="r3" />
                                <Label htmlFor="r3">Expense</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="text-base font-semibold placeholder-primary-text-base">Category</div>
                            <button className="font-normal text-base text-primary-text-base/20">Clear</button>
                        </div>
                        {categories.map((category) =>
                            <button key={category.key} className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <div style={{color: category.color}}>
                                        <IconConverterSecond iconName ={category.icon}/>
                                    </div>

                                    <div className="text-base font-normal text-primary-text-base">{category.name}</div>

                                </div>
                                <PlayIcon size={16} />
                            </button>
                        )} 
                        <div>
                            <button onClick={() => setOpened(true)} className="flex gap-2 text-base font-normal text-primary-text-base items-center"><Plus size={20} color="#0166FF" />Add category</button>
                            <Dialog open={opened} >
                                <DialogContent className="bg-white border rounded-xl max-w-[494px]">
                                    <DialogHeader className=" border-b border-primary-border-slate-200 py-5 px-4 flex justify-between">
                                        <DialogTitle>Add category</DialogTitle>
                                        <DialogDescription>
                                            <X onClick={() => setOpened(false)} className="hover:cursor-pointer" />
                                        </DialogDescription>
                                    </DialogHeader>

                                    <div className="flex gap-3">
                                        <Popover >
                                            <PopoverTrigger className="py-3 px-4 border rounded-xl flex gap-2" style={{ color: selectedColorValue }}>{selectedIcon} <ChevronDown /></PopoverTrigger>
                                            <PopoverContent className="bg-white p-6 flex flex-col gap-6">
                                                <div className=" grid grid-cols-6 gap-6 ">
                                                    {icons.map((icon) => (
                                                        <div key={icon.key} value={icon.value} onClick={() => {
                                                            setSelectedicon(icon.iconi),
                                                                setSelectedIconi(icon.value)
                                                        }
                                                        } className="w-6 h-6">
                                                            {icon.iconi}
                                                        </div>
                                                    ))}
                                                </div>
                                                <hr></hr>
                                                <div className="flex gap-3">
                                                    {colors.map((color) =>
                                                        <div key={color.key} className="w-6 h-6 rounded-full" style={{ backgroundColor: color.value }} onClick={() => { setSelectedColor(color.name), setSelectedColorValue(color.value) }}>{selectedColor === color.name && <Check />}</div>
                                                    )}
                                                </div>

                                            </PopoverContent>
                                        </Popover>
                                        <Input type="text" placeholder="Name" value={selectedName} id="Name" onChange={(e) => setselectedName(e.target.value)} className="py-3 pl-4 pr-[170px]" />
                                    </div>

                                    <button className="bg-primary-green-600 rounded-xl hover:bg-green-900 text-white hover:text-white py-3" onClick={addcategories}>Add category</button>

                                </DialogContent>
                            </Dialog>

                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-base font-semibold placeholder-primary-text-base">Amount range</div>
                        <div className="flex gap-4">
                            <Input className=" py-3 pl-4 max-w-[114px] rounded-xl" placeholder="0" />
                            <Input className="py-3 pl-4 max-w-[114px] rounded-xl" placeholder="1000" />
                        </div>
                        <div>
                            <Slider defaultValue={[33]} max={100} step={1} className="text-primary-main-blue bg-primary-main-blue" />
                            <div className="flex justify-between">
                                <p>0</p> 1000</div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-6">
                    <div className="flex  justify-between">
                        <div className="pl-4">
                            <Carousel>
                                <CarouselContent>
                                    <CarouselItem>Last 30 days</CarouselItem>

                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                        <div>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select</SelectLabel>
                                        <SelectItem value="apple">Newest lately</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>


                    </div>
                    <div className="flex justify-between items-center bg-white py-3 px-6 rounded-xl">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" checked={selectedCheckbox.includes()}  />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Select all
                            </label>
                        </div>
                        <div>35500</div>
                    </div> 
                   <div className="flex flex-col gap-3" >
     
                      <div>
                          
                          {sortedRecordings.map((record, index, array) =>
                
                       <div>
                          
                       
                            <div className={`text-base font-semibold text-black ${array[index].date !== (index>0 ? array[index-1].date : '')? '' : 'hidden'}`}>{ changeDate (record.date)}</div>
                      
                            



                         <div className={`flex justify-between items-center bg-white py-3 px-6 rounded-xl `}>
                           
                           <div className="flex items-center gap-4">
                           
                               <Checkbox id={record.id} checked={selectedCheckbox.includes(record.id)} onClick={() => toggleCheckbox (record.id)} />
                           
                     
                               <label
                                   htmlFor={record.id}
                                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                               >
                                   <div className="flex gap-4 items-center">
                                      
                                       <div className={`bg-primary-main-blue flex justify-center items-center p-3 rounded-full`} style={{color: record.color}}>
                                           <IconConverterSecond iconName ={record.icon}/>
                                       </div>
   

                                       <div className=" flex flex-col gap-1">
                                           <div className="text-base font-normal text-black">{record.name}</div>
                                           <div className="font-normal text-xs text-gray-500 ">{record.time}</div>
                                       </div>
                                   </div>
                               </label>
                           </div>
                           
                           <div className={`${record.alltransactiontypes == 'expense' ? "text-red-700" : "text-green-600"}`}>{record.amount}₮</div>
                           <div className={`flex gap-4 ${selectedCheckbox.includes(record.id)? "block" : "hidden"}`}>
                               <Pencil size={28} onClick={()=> editExpense (record.id)}/>
                               <Trash2 size={28} onClick={() => deleteExpense (record.id)}/>
                           </div>
                       </div>
                       </div>
                          )}
                      </div>
                 
                   
                    </div>
                    
                </div>
            </div>

        </div>


    )
}

