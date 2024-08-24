import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from "next/link";

export default function SetupFirstStep () {
    return (
        <div className="flex flex-col gap-36  max-w-[1440px] m-auto  items-center">
            <div className="flex flex-col gap-12 items-center">
                <Image src="/allpics/Logo.png" height={40} width={107} className="h-10 w-28"/>
                <ul className="steps">
                    <li className="step step-primary">Currency</li>
                    <li className="step">Balance</li>
                    <li className="step">Finish</li>
                </ul>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/allpics/step1.png" height={48} width={48} className="h-12 w-12"/>
                        <div className="text-primary-text-slate-900 font-semibold text-2xl">Select base currency</div>
                    </div>
                    <div className="flex flex-col gap-3 items-center flex-wrap w-[384px] text-center">
                        <Select>
                        <SelectTrigger className="w-[384px] h-[64px] bg-primary-main-gray text-primary-text-base font-semibold text-base rounded-xl border-primary-border-gray">
                            <SelectValue placeholder="Currency" />
                        </SelectTrigger>
                        <SelectContent className="w-[384px] h-[64px] bg-primary-main-gray text-primary-text-base font-semibold text-base rounded-xl">
                            <SelectItem value="light">MNT - Mongolian Tugrik</SelectItem>
                            <SelectItem value="dark">USD- Dollar</SelectItem>
                        </SelectContent>
                        </Select>
                        <div className="text-primary-text-slate-600 text-xs font-normal">Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one </div>
                    </div>
                    
                </div>
                <Link href="/setup_second_step">
                    <Button className="bg-primary-main-blue rounded-3xl text-white py-4 text-center text-xl font-normal w-96 h-12 hover:bg-primary-main-blue">Confirm</Button>
                </Link>
                
            </div>
        </div>
    )
}