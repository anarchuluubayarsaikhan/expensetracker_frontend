"use client"
import { Anchor, Binary, BookCheck, ChartNoAxesColumnIncreasing, Check, ChevronDown, CircleAlert, CircleGauge, CircleHelp, Citrus, Contact, ContactRound, FileDigit, FileImage, Globe, Hourglass, House, HousePlus, Leaf, ListPlus, LoaderPinwheel, MessagesSquare, Mic, NotepadText, Pencil, PlayIcon, Plus, Scroll, Sheet, TrainTrack, Trash2, Watch, Waypoints, Wine, X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { useQueryState } from 'nuqs'
import { useSearchParams } from 'next/navigation'


import { Checkbox } from "@/components/ui/checkbox"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
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
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import dayjs from "dayjs"
import { IconConverterSecond} from "@/components/iconname";
import { DatePickerWithRange } from "@/components/daterange";
import { Addrecord } from "@/components/dialog";
import { Addcategory } from "@/components/addcategory";
import { Sidebar } from "@/components/sidebar";
import { Addcategorybutton } from "@/components/categorybutton";
import { useRouter } from 'next/navigation'

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
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedColorValue, setSelectedColorValue] = useState("")
    const [selectedIconi, setSelectedIconi] = useState("")
    const [selectedName, setselectedName] = useState("")
    const [categories, setCategories] = useState([])
    const [selectedIcon, setSelectedicon] = useState(<CircleHelp strokeWidth={3} />)
    
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
    const [payee, setPayee] = useState("")
    const [note, setNote] = useState("")
    const [activestate, setActive] = useState("")
    const [time, setTime] = useState("")
    const [iconId, setIconId] = useState("")
    const formatedDate = dayjs(date).format('YYYY-MM-DD')
    const today = dayjs().format('YYYY-MM-DD')
    const yesterday = dayjs().subtract(1, 'day').format('YYYY-MM-DD')
    const [recordings, setRecordings] = useState([])
    const [selectedCheckbox, setSelectedCheckbox] = useState([])
    const [editingRecords, setEditingRecords] = useState()
    const [search, setSearch] = useState()

    

    // function sortByNewest() {
    //     const sortedRecordings = recordings.sort((a, b) => {
    //         if (a.date > b.date) {
    //             return -1
    //         }
    //     })
    //     setRecordings(sortedRecordings)
    //     }


    // function sortByLatest () {
    //     const sortedRecordings = recordings.sort((a, b) => {
    //         if (a.date < b.date) {
    //             return -1
    //         }
    //     })
    //     setRecordings(sortedRecordings)
    // }

    const totalPrice = recordings.reduce((accumulator ,recording) => {
        return accumulator += Number(recording.amount);
      }, 0)
     
    
    const searchParams = useSearchParams()
    const idedited = searchParams.get('id')
    const daterange = searchParams.get('daterange')
    

    const filterByDates = [
        {datefilter: "Newest lately", 
        value: "newest"
        },
        {datefilter: "Oldest lately",
        value: "oldest"
        }
    ]

    


    function toggleCheckbox(id) {
        if (selectedCheckbox.includes(id)) {

            const removed = selectedCheckbox.filter((itemId) => id !== itemId)
            setSelectedCheckbox(removed)
        }
        else {
            setSelectedCheckbox(s => [...s, id])

        }
    }

    function Allchecked () {
        if (recordings.length === selectedCheckbox.length){
            setSelectedCheckbox([])
           
        }
        else  {
            recordings.map ((rec) =>(
                setSelectedCheckbox(s =>[...s, rec.id])
            )
            )
        }
        
    }

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
                    alltype: activestate,
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
        resetRecords()

    }   
    useEffect (() => {
       
        if (editingRecords) {
            const add = router.push(`?show=dialog&id=${editingRecords.id}`)
            setActive(editingRecords.alltransactiontypes)
            setDate(editingRecords.date)
            setAmount(editingRecords.amount)
            setPayee(editingRecords.payee)
            setNote(editingRecords.note)
            setTime(editingRecords.time)
        }
        else{
            router.push(`?`)
        }
    },[editingRecords])


    const [typename, setTypeName] = useQueryState('typename')
    const [categoryname, setCategoryName] = useQueryState('categoryname')
    const [newest, setNewest] = useQueryState('date')
    const router = useRouter()

    function loadList() {

        if (typename === null) {
            fetch("http://localhost:4000/recordings")
                .then((res) => { return res.json() })
                .then((data) => setRecordings(data))

        }
        else  {
            fetch(`http://localhost:4000/types?typename=${typename ?? ''}&categoryname=${categoryname || ''}&daterange=${daterange || ''}`)
                .then((res) => { return res.json() })
                .then((data) => setRecordings(data))
                console.log(daterange)

        }

    }
    useEffect(() => {
        loadList()
    }, [typename, categoryname ])


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
    function deleteExpense(id) {
        fetch(`http://localhost:4000/recordings/${id}`, {
            method: "DELETE",
        })
    }

   

    function editExpense() {
       
        fetch(`http://localhost:4000/recordings/${idedited}`, {
            method: "PUT",
            body: JSON.stringify(
                {
                    alltype: activestate,
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
    }

    function changeDate(date) {
        if (date === today)
            return ("Today")
        else if (date === yesterday) {
            return ("Yesterday")
        }
        else {
            return (date)
        }
    }

    function searchBy() {
        fetch(`http://localhost:4000/search/:${search}`)
        .then((res) => { return res.json() })
        .then((data) => setRecordings(data))
    }

    const typessidebar = [
        {
            value: null,
            id: "r1",
            typename: "All",
        },
        {
            value: "income",
            id: "r2",
            typename: "Income",
        },
        {
            value: "expense",
            id: "r3",
            typename: "Expense",
        },
    ]

    return (
        <div className=" max-w-screen-lg m-auto flex flex-col gap-6">
            <Header />
            <div className="flex gap-6 bg-gray-50 py-6" >
                <div className="flex flex-col gap-6 py-4 px-8 bg-white rounded-xl border">
                    <div className="font-semibold text-2xl text-black">Records</div>
                    <div>
                        <Sidebar/>
                       <Addrecord types={types} amount={amount} setIconId={setIconId} categories={categories} addRecords={addRecords} activestate={activestate} setActive={setActive} date={date} setDate={setDate} time={time} payee={payee} note={note} setPayee={setPayee} setNote={setNote} setAmount={setAmount} setTime={setTime} editExpense={editExpense} editingRecords={editingRecords}/>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} onClick={()=> searchBy()}/>
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

                        <RadioGroup defaultValue={typename}>
                            {typessidebar.map((typesside) =>
                                <div key={typesside.id} className="flex items-center space-x-2" onClick={() => setTypeName(typesside.value)}>
                                    <RadioGroupItem value={typesside.value} id={typesside.id} />
                                    <Label htmlFor={typesside.id}>{typesside.typename}  </Label>
                                </div>
                            )}
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="text-base font-semibold placeholder-primary-text-base">Category</div>
                            <button className="font-normal text-base text-primary-text-base/20">Clear</button>
                        </div>
                        {categories.map((category) =>
                            <button key={category.id} className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <div style={{ color: category.color }}>
                                        <IconConverterSecond iconName={category.icon} />
                                    </div>

                                    <div className="text-base font-normal text-primary-text-base" onClick={() => setCategoryName(category.id)}>{category.name}</div>

                                </div>
                                <PlayIcon size={16} />
                            </button>
                        )}
                        <div>
                            <Addcategorybutton/>
                            <Addcategory icons={icons} colors={colors} addcategories={addcategories} selectedColorValue={selectedColorValue} selectedIcon={selectedIcon} selectedColor={selectedColor} selectedName={selectedName} setSelectedicon={setSelectedicon} setSelectedIconi={setSelectedIconi} setSelectedColor={setSelectedColor} setSelectedColorValue={setSelectedColorValue} setselectedName={setselectedName}/>

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
                        <DatePickerWithRange />
                        </div>
                        <div>
                            <Select onValueChange={setNewest} >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                   
                                    <SelectGroup>
                                    {filterByDates.map ((filterbydate) =>
                                        <SelectItem key={filterByDates.value} value={filterbydate.value}>{filterbydate.datefilter} </SelectItem>
                                    )}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>


                    </div>
                    <div className="flex justify-between items-center bg-white py-3 px-6 rounded-xl">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms"  onClick={() => Allchecked()} />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Select all
                            </label>
                        </div>
                        <div>{totalPrice}</div>
                    </div>
                    <div className="flex flex-col gap-3" >

                        <div>

                            {recordings.map((record, index, array) =>

                                <div key={record.id}>
                                    <div className={`text-base font-semibold text-black ${array[index].date !== (index > 0 ? array[index - 1].date : '') ? '' : 'hidden'}`}>{changeDate(record.date)}</div>
                                    <div className={`flex justify-between items-center bg-white py-3 px-6 rounded-xl `}>

                                        <div className="flex items-center gap-4">

                                            <Checkbox id={record.id} checked={selectedCheckbox.includes(record.id)} onClick={() => toggleCheckbox(record.id)} />


                                            <label
                                                htmlFor={record.id}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                <div className="flex gap-4 items-center">

                                                    <div className={`bg-primary-main-blue flex justify-center items-center p-3 rounded-full`} style={{ color: record.color }}>
                                                        <IconConverterSecond iconName={record.icon} />
                                                    </div>


                                                    <div className=" flex flex-col gap-1">
                                                        <div className="text-base font-normal text-black">{record.name}</div>
                                                        <div className="font-normal text-xs text-gray-500 ">{record.time}</div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>

                                        <div className={`${record.alltransactiontypes == 'expense' ? "text-red-700" : "text-green-600"}`}>{record.amount}₮</div>
                                        <div className={`flex gap-4 ${selectedCheckbox.includes(record.id) ? "block" : "hidden"}`}>
                                            <Pencil size={28} onClick={() => setEditingRecords(record)} />
                                            <Trash2 size={28} onClick={() => deleteExpense(record.id)} />
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

