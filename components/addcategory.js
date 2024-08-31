"use client"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


import { Input } from "@/components/ui/input"
import { Anchor, Binary, BookCheck, ChartNoAxesColumnIncreasing, Check, ChevronDown, CircleAlert, CircleGauge, CircleHelp, Citrus, Contact, ContactRound, FileDigit, FileImage, Globe, Hourglass, House, HousePlus, Leaf, ListPlus, LoaderPinwheel, MessagesSquare, Mic, NotepadText, Pencil, Scroll, Sheet, TrainTrack, Watch, Waypoints, Wine, X, ZoomIn } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button"

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




export function Category() {

    const [selectedIcon, setSelectedicon] = useState(<CircleHelp strokeWidth={3} />)
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedColorValue, setSelectedColorValue] = useState("")
    const [selectedIconi, setSelectedIconi] = useState("")
    const [selectedName, setselectedName] = useState("")
    const [open, setOpen] =useState ("")

    function Addcategories () {
        fetch("http://localhost:4000/", {
            method: "POST",
            body: JSON.stringify (
                {name: selectedName},
                {icon: selectedIconi},
                {color: selectedColor}
            ),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        })
    }


    return (
        <div>
            <Button variant="outline" onClick={()=> setOpen(true)}>Add category</Button>
            <Dialog open={open} >
                <DialogContent className="bg-white border rounded-xl max-w-[494px]">
                    <DialogHeader  className=" border-b border-primary-border-slate-200 py-5 px-4 flex justify-between">
                        <DialogTitle>Add category</DialogTitle>
                        <X onClick={()=> setOpen(false)} className="hover:cursor-pointer"/>
                    </DialogHeader>

                    <div className="flex gap-3">
                        <Popover >
                            <PopoverTrigger className="py-3 px-4 border rounded-xl flex gap-2" style={{color: selectedColorValue}}>{selectedIcon} <ChevronDown /></PopoverTrigger>
                            <PopoverContent className="bg-white p-6 flex flex-col gap-6">
                                <div className=" grid grid-cols-6 gap-6 ">
                                    {icons.map((icon) => (
                                        <div value={icon.value} onClick={() => {
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
                                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color.value }} onClick={() => {setSelectedColor(color.name), setSelectedColorValue(color.value)}}>{selectedColor === color.name && <Check />}</div>
                                    )}
                                </div>
                                
                            </PopoverContent>
                        </Popover>
                        <Input type="text" placeholder="Name"  value={selectedName} id="Name" onChange ={(e) => setselectedName(e.target.value)} className="py-3 pl-4 pr-[170px]" />
                    </div>
                
                    <Button variant="outline" className="bg-primary-green-600 rounded-xl hover:bg-green-900 text-white hover:text-white">Add category</Button>
               
                </DialogContent>
            </Dialog>
        </div>
       
    )
}