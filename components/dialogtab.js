import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tabscontents } from "./tabscontent"
import { Tabscontents2 } from "./tabscontent2"

export function Tab (){
    return (
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

