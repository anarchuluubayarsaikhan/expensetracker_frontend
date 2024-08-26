"use client"
import { cn } from "@/lib/utils"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


  import { Calendar } from "@/components/ui/calendar"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { useState } from "react"
import { Addcategory } from "./addcategory"

  

export function Tabscontents () { 
    const [date, setDate] = useState()
    return (
        <div className="flex-1 flex flex-col gap-6">
            <Textarea  placeholder="Amount $ 000.00" />
            <Select>
                <SelectTrigger >
                    <SelectValue placeholder="Find or choose category" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectGroup>
                    <SelectLabel>
                        <Addcategory/>
                    </SelectLabel>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="gift">Gift</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="drink">Drink</SelectItem>
                    <SelectItem value="taxi">Taxi</SelectItem>
                    <SelectItem value="shopping">Shopping</SelectItem>
                    </SelectGroup>                     
                </SelectContent>
            </Select>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                    >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
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
            <Button> Add record </Button>
</div>
    )
}

