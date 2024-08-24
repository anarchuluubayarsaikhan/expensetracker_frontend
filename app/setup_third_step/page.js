import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";

export default function SetupThirdStep () {
    return (
        <div>
             <div className="flex flex-col gap-36  max-w-[1440px] m-auto  items-center">
             <div className="flex flex-col gap-12 items-center">
                <Image src="/allpics/Logo.png" height={40} width={107} className="h-10 w-28"/>
                <ul className="steps">
                    <li className="step step-primary">Currency</li>
                    <li className="step step-primary">Balance</li>
                    <li className="step step-primary">Finish</li>
                </ul>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/allpics/step3.png" height={48} width={48} className="h-12 w-12"/>
                        <div className="text-primary-text-slate-900 font-semibold text-2xl">Good Job!</div>
                    </div>
                 
                    <div className="text-primary-text-slate-600 text-xs font-normal">Your very first account has been created. Now continue to dashboard and start tracking </div>
                    
                    
                </div>
                <Link href="/dashboard">
                    <Button className="bg-primary-main-blue rounded-3xl text-white py-4 text-center text-xl font-normal w-96 h-12 hover:bg-primary-main-blue">Go to Dashboard</Button>
                </Link>
                
            </div>
        </div>
        </div>
    )
}