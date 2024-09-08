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


import { CheckIcon, ChevronDown,  Calendar as  X, XIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useSearchParams } from 'next/navigation'




export function Addcategory ({icons, colors, addcategories,selectedColorValue,selectedIcon,selectedColor,selectedName,setSelectedicon,setSelectedIconi, setSelectedColor,setSelectedColorValue, setselectedName}) {
    const searchParams = useSearchParams()
    const add = searchParams.get('add')
    const id = searchParams.get('id')
    const router = useRouter()
    
            return (
                <Dialog  open={add==="category"}>
                <DialogContent className="bg-white border rounded-xl max-w-[494px]">
                    <DialogHeader className=" border-b border-primary-border-slate-200 py-5 px-4 flex justify-between">
                        <DialogTitle>Add category</DialogTitle>
                        <DialogDescription>
                            <XIcon onClick={() => router.push(`?`)} className="hover:cursor-pointer" />
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex gap-3">
                        <Popover >
                            <PopoverTrigger className="py-3 px-4 border rounded-xl flex gap-2" style={{ color: selectedColorValue }}>{selectedIcon} <ChevronDown /></PopoverTrigger>
                            <PopoverContent className="bg-white p-6 flex flex-col gap-6">
                                <div className=" grid grid-cols-6 gap-6 ">
                                    {icons.map((icon) => (
                                        <div key={icon.id} value={icon.value} onClick={() => {
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
                                        <div key={color.id} className="w-6 h-6 rounded-full" style={{ backgroundColor: color.value }} onClick={() => { setSelectedColor(color.name), setSelectedColorValue(color.value) }}>{selectedColor === color.name && <CheckIcon/>}</div>
                                    )}
                                </div>

                            </PopoverContent>
                        </Popover>
                        <Input type="text" placeholder="Name" value={selectedName} id="Name" onChange={(e) => setselectedName(e.target.value)} className="py-3 pl-4 pr-[170px]" />
                    </div>

                    <button className="bg-primary-green-600 rounded-xl hover:bg-green-900 text-white hover:text-white py-3" onClick={addcategories}>Add category</button>

                </DialogContent>
            </Dialog>
            )
        }
