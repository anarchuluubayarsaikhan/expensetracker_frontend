"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
 
  

  import { Button } from "./ui/button";
import { Tabscontents } from "./tabscontent"

export function Dialogs () {
    
    return (
        <Dialog >
            <DialogTrigger >
                <Button className="bg-primary-main-blue text-white rounded-3xl">+ Record</Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader className="bg-white ">
                <DialogTitle className="bg-white ">Add record</DialogTitle>
                <DialogDescription className="bg-white ">
                    <Tabs defaultValue="account">
                        <div className="flex gap-2">
                            <div>
                                <TabsList>
                                    <TabsTrigger value="expense" >Expense</TabsTrigger>
                                    <TabsTrigger value="income">Income</TabsTrigger>
                                </TabsList>
                                <TabsContent value="expense"  className="bg-white flex">
                                    <Tabscontents/>
                                </TabsContent>
                            </div>
                            <TabsContent value="expense"  className="bg-white flex-1">
                                <div className="flex flex-col gap-6">
                                        <div className="grid max-w-sm items-center gap-1.5">
                                            <Label htmlFor="payee">Payee</Label>
                                            <Input type="email" id="payee" placeholder="Write here" />
                                        </div>
                                        <div className="grid  gap-1.5">
                                            <Label htmlFor="note">Note</Label>
                                            <Textarea placeholder="Write here" id="note" className="h-48" />
                                        </div>
                                    </div>
                            </TabsContent>
                        </div>
                        <TabsContent value="income"  className="bg-white ">
                            <Tabscontents/>
                        </TabsContent>
                        <TabsContent value="income"  className="bg-white flex-1">
                                <div className="flex flex-col gap-6">
                                        <div className="grid max-w-sm items-center gap-1.5">
                                            <Label htmlFor="payee">Payee</Label>
                                            <Input type="email" id="payee" placeholder="Write here" />
                                        </div>
                                        <div className="grid  gap-1.5">
                                            <Label htmlFor="note">Note</Label>
                                            <Textarea placeholder="Write here" id="note" className="h-48" />
                                        </div>
                                    </div>
                        </TabsContent>
                    </Tabs>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
