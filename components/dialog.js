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
        <Dialog >
            <DialogTrigger >
                <Button className="bg-primary-main-blue text-white rounded-3xl">+ Record</Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogTitle className="bg-white ">Add record</DialogTitle>
                <DialogDescription className="bg-white ">
                    <Tab/>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}
