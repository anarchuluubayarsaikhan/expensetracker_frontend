import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Signup () {
    return (
        <div className="flex max-w-[1440px] m-auto ">
            <div className="flex-1 flex flex-col gap-10  items-center py-[276px]">
               <Logo/>
                <div className="text-center flex flex-col gap-2">
                    <div className="text-2xl font-semibold text-primary-text-slate-900">Create Geld account</div>
                    <div className="font-normal text-base text-primary-text-slate-700">Sign up below to create your Wallet account</div>
                </div>
                <div className="flex flex-col gap-4">
                    <Input placeholder="Name" className="w-96 h-12 rounded-xl  text-primary-text-neutral-400 bg-primary-main-gray border border-primary-border-gray p-4   text-base font-normal"/>
                    <Input placeholder="Email" className="w-96 h-12 rounded-xl  text-primary-text-neutral-400 bg-primary-main-gray border border-primary-border-gray p-4   text-base font-normal"/>
                    <Input placeholder="Password" className="w-96 h-12 rounded-xl  text-primary-text-neutral-400 bg-primary-main-gray border border-primary-border-gray p-4   text-base font-normal"/>
                    <Input placeholder="Re-password" className="w-96 h-12 rounded-xl  text-primary-text-neutral-400 bg-primary-main-gray border border-primary-border-gray p-4   text-base font-normal"/>
                    <Link href="/loading">
                        <Button className="bg-primary-main-blue rounded-3xl text-white py-4 text-center text-xl font-normal w-96 h-12 hover:bg-primary-main-blue">Sign up</Button>
                    </Link>
                    
                </div>
                <div className="flex gap-3">
                    <div className="font-normal text-base text-primary-text-slate-900">Already have account?</div>
                    <Link href="/login" className="font-normal text-base text-primary-main-blue" >
                        Log in
                    </Link>
                </div>
            </div>
            <div className="flex-1 bg-primary-main-blue"></div>
       </div>
    )
}