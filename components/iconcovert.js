"use client"
import { Anchor, Binary, BookCheck, ChartNoAxesColumnIncreasing, Check, ChevronDown, CircleAlert, CircleGauge, CircleHelp, Citrus, Contact, ContactRound, FileDigit, FileImage, Globe, Hourglass, House, HousePlus, Leaf, ListPlus, LoaderPinwheel, MessagesSquare, Mic, NotepadText, Pencil, PlayIcon, Plus, Scroll, Sheet, TrainTrack, Watch, Waypoints, Wine,  X,  ZoomIn } from "lucide-react";
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

export function IconConverter ({iconname}) {

    
    const convertedIcon = icons.find (item => item.value === iconname)
    const icon = convertedIcon.iconi
    return (
        icon
    )
}