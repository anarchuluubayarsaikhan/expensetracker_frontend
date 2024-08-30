"use client"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
                        <RadioGroup defaultValue="comfortable">
                            <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">Default</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label htmlFor="r2">Comfortable</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">Compact</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button variant="outline" classname ={"py-14 px-2"}>Income</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
   
}