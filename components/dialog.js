"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
 
  

  import { Button } from "./ui/button";

import { Tab } from "./dialogtab"

export function Dialogs () {
    
    return (
        <Dialog>
            <DialogTrigger >
                <Button className="bg-primary-main-blue text-white rounded-3xl">+ Record</Button>
            </DialogTrigger>
            <DialogContent className="bg-white rounded-3xl sm:rounded-xl max-w-[792px]">
                <DialogTitle className="bg-white font-semibold text-xl">Add record</DialogTitle>
                <DialogDescription className="bg-white ">
                    <Tab/>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}
