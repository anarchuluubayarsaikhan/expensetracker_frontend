"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useState } from "react"

  
export function  Addrecord () {
    const [open, setOpen] = useState (false)
    const [expenseActive, setExpenseActive] = useState ("")
    return (
        <div>
            <Button variant="outline" onClick={()=> setOpen(true)}>Add record</Button>
            <Dialog open ={open}>
                <DialogContent classname="bg-white">
                    <DialogHeader >
                    <DialogTitle>Add Record</DialogTitle>
                    </DialogHeader>
                    <div>
                        <Button variant="outline" classname ={`py-14 px-2 bg-primary-main-blue   ${expenseActive ==true}? ""`} onclick ={()=> setExpenseActive(true)}>Expense</Button>
                        <Button variant="outline" classname ={"py-14 px-2"}>Income</Button>
                    </div>
                    <Button variant="outline" classname ={"py-14 px-2"}>Income</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
   
}