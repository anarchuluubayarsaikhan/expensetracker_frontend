"use client"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


import { Input } from "@/components/ui/input"
import { Anchor, Binary, BookCheck, ChartNoAxesColumnIncreasing, Check, CircleAlert, CircleGauge, CircleHelp, Citrus, Contact, ContactRound, FileDigit, FileImage, Globe, Hourglass, House, HousePlus, Leaf, ListPlus, LoaderPinwheel, MessagesSquare, Mic, NotepadText, Pencil, Scroll, Sheet, TrainTrack, Watch, Waypoints, Wine, ZoomIn } from "lucide-react";
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




export function Addcategory() {

    const [selectedIcon, setSelectedicon] = useState(<CircleHelp strokeWidth={3} />)
    const [selectedColor, setSelectedColor] = useState("")
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
        <Dialog open={open}>
            <DialogTrigger> 
                <Button  onClick= {() => setOpen(true)}>Add category</Button>
            </DialogTrigger>
            <DialogContent className="bg-white border rounded-full">
                <DialogHeader>
                    <DialogTitle>Add category</DialogTitle>
                </DialogHeader>

                <div className="flex gap-3">
                    <Popover>
                        <PopoverTrigger>{selectedIcon}</PopoverTrigger>

                        <PopoverContent className="bg-white grid grid-cols-6 gap-6">
                            {icons.map((icon) => (
                                <div value={icon.value} onClick={() => {
                                    setSelectedicon(icon.iconi),
                                    setSelectedIconi(icon.value)
                                }
                                }>
                                    {icon.iconi}
                                </div>
                            ))}
                            {colors.map((color) =>
                                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color.value }} onClick={() => setSelectedColor(color.name)}>{selectedColor === color.name && <Check />}</div>
                            )}
                        </PopoverContent>



                    </Popover>
                    <Input type="text" value={selectedName} id="Name" onChange ={(e) => setselectedName(e.target.value)} />
                </div>
                <DialogFooter>
                    <Button >Add category</Button>
                </DialogFooter>  
            </DialogContent>
        </Dialog>
    )
}