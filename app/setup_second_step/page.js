import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";

export default function SetupSecondStep () {
    return (
        <div>
             <div className="flex flex-col gap-36  max-w-[1440px] m-auto  items-center">
             <div className="flex flex-col gap-12 items-center">
                <Image src="/allpics/Logo.png" height={40} width={107} className="h-10 w-28"/>
                <ul className="steps">
                    <li className="step step-primary">Currency</li>
                    <li className="step step-primary">Balance</li>
                    <li className="step">Finish</li>
                </ul>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/allpics/step2.png" height={48} width={48} className="h-12 w-12"/>
                        <div className="text-primary-text-slate-900 font-semibold text-2xl">Set up your cash Balance</div>
                    </div>
                    <div className="flex flex-col gap-3  flex-wrap w-[384px]">
                        <Input placeholder="Email" className="w-96 h-12 rounded-xl  text-primary-text-neutral-400 bg-primary-main-gray border border-primary-border-gray p-4   text-base font-normal m-auto"/> 
                        <div className="text-primary-text-slate-600 text-xs font-normal">How much cash do you have in your wallet? </div>
                    </div>
                    
                </div>
                <Link href="/setup_third_step">
                    <Button className="bg-primary-main-blue rounded-3xl text-white py-4 text-center text-xl font-normal w-96 h-12 hover:bg-primary-main-blue">Confirm</Button>
                </Link>
                
            </div>
        </div>
        </div>
    )
}