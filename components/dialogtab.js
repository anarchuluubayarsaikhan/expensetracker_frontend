"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tabscontents } from "./tabscontent"
import { Tabscontents2 } from "./tabscontent2"
import { useState } from "react"

export function Tab (){
    return (
        <Tabs defaultValue="account">
            <div className="flex gap-12">
                <div className="flex flex-col gap-5 flex-1">
                    <TabsList>
                        <TabsTrigger value="expense" activeClassName="data-[state=active]:bg-primary-main-blue" className={`rounded-3xl py-2 px-12 font-normal text-base text-primary-text-base`}  >Expense</TabsTrigger>
                        <TabsTrigger value="income" className="rounded-3xl py-2 px-12 font-normal text-base text-primary-text-base" activeClassName="data-[state=active]:bg-primary-green-600">Income</TabsTrigger>
                    </TabsList>
                    <TabsContent value="expense"  className="bg-white flex">
                        <Tabscontents/>
                    </TabsContent>
                </div>
                <TabsContent value="expense"  className="bg-white flex-1">
                   <Tabscontents2/>
                </TabsContent>
            </div>
            <div className="flex">
                <TabsContent value="income"  className="bg-white ">
                    <Tabscontents/>
                </TabsContent>
                <TabsContent value="income"  className="bg-white flex-1">
                        <Tabscontents2/>
                </TabsContent>
            </div>
            
        </Tabs>
    )
}

