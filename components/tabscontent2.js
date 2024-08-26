import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Tabscontents2(){
    return (
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
    )
}
