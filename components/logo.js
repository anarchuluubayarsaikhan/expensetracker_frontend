import Image from "next/image"
import Link from "next/link"

export function Logo () {
    return (
        <Link href="/" className="m-auto">
            <Image src="/allpics/Logo.png" width={92} height={34} className="w-24 h-9"/>
        </Link>
    )
}