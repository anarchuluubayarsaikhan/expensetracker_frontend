import Image from "next/image";

export default function Loading () {
    return (
        <div className="flex flex-col gap-12 max-w-[1440px] m-auto items-center">
           <Image src="/Logo.png" width={172} height={64} className="w-44 h-16" />
           <div className="flex flex-col gap-11 items-center">
                <span className="loading loading-spinner loading-sm"></span>
                <div className="font-semibold text-base text-primary-text-slate-900">Түр хүлээнэ үү...</div>
            </div>
        </div>
    )
}