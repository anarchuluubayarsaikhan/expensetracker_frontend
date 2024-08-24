import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
 
export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}
export default function Login () {
    return (
       <div className="flex max-w-[1440px] m-auto ">
            <div className="flex-1 flex flex-col gap-10  items-center py-[276px]">
               <Logo/>
                <div className="text-center flex flex-col gap-2">
                    <div className="text-2xl font-semibold text-primary-text-slate-900">Welcome Back</div>
                    <div className="font-normal text-base text-primary-text-slate-700">Welcome back, Please enter your details</div>
                </div>
                <div className="flex flex-col gap-4">
                    <Input placeholder="Email" className="w-96 h-12 rounded-xl  text-primary-text-neutral-400 bg-primary-main-gray border border-primary-border-gray p-4   text-base font-normal"/>
                    <Input placeholder="Password" className="w-96 h-12 rounded-xl  text-primary-text-neutral-400 bg-primary-main-gray border border-primary-border-gray p-4   text-base font-normal"/>
                    <Link href="/loading">
                        <Button className="bg-primary-main-blue rounded-3xl text-white py-4 text-center text-xl font-normal w-96 h-12 hover:bg-primary-main-blue">Log in</Button>
                    </Link>
                </div>
                <div className="flex gap-3">
                    <div className="font-normal text-base text-primary-text-slate-900">Don't have account?</div>
                    <Link href="/signup" className="font-normal text-base text-primary-main-blue" >
                        Sign up
                    </Link>
                </div>
            </div>
            <div className="flex-1 bg-primary-main-blue"></div>
       </div>
    )
}