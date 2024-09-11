"use client"
 
import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import dayjs from "dayjs"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useQueryState } from 'nuqs'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerWithRange({
    className
  } ) {
    const [date, setDate] = useQueryState('daterange')
   console.log (date)
     
   
    return (
      <div className={cn("grid gap-2", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal rounded-xl",
                !date && "text-muted-foreground"
              )} 
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ?  (
                date.to ? (
                  <>
                    {dayjs(date.from).format('YYYY-MM-DD')} -{" "}
                    {dayjs(date.to).format('YYYY-MM-DD')}
                  </>
                ) : (
                  dayjs(date.to).format('YYYY-MM-DD')
                )
              ) : (
                <span >Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }