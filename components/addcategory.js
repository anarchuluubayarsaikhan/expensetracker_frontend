import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { MdHomeFilled } from "react-icons/md";
  import { PiHouseLineFill } from "react-icons/pi";
  import { FaAddressCard } from "react-icons/fa";
  import { IoIdCardSharp } from "react-icons/io5";
  import { TbStairs } from "react-icons/tb";
  import { TbPhoto } from "react-icons/tb";
  import { TbZoomInFilled } from "react-icons/tb";
  import { TbMicrophoneFilled } from "react-icons/tb";
  import { PiPencilFill } from "react-icons/pi";
  import { PiToiletPaperFill } from "react-icons/pi";

  import { Button } from "./ui/button";
const icons = [
    {value: "home",
     iconi : <MdHomeFilled />
    },
    {value: "house",
    iconi : <PiHouseLineFill />
    },
    {value: "card",
    iconi : <FaAddressCard />
    },
    {value: "nametag",
    iconi : <IoIdCardSharp />
    },
    {value: "stairs",
    iconi : <TbStairs />
    },
    {value: "photo",
    iconi : <TbPhoto />
    },
    {value: "zoom",
    iconi : <TbZoomInFilled />
    },
    {value: "join",
    iconi : <TbMicrophoneFilled />
    },
    {value: "join",
    iconi : <PiPencilFill />
    },
    {value: "toiletpaper",
    iconi : <PiToiletPaperFill />
    },
    {value: "join",
    iconi : <PiPencilFill />
    },
    

]
 


export function Addcategory () {
    return (
        <Dialog>
        <DialogTrigger> <Button >Add category</Button></DialogTrigger>
        <DialogContent className="bg-white">
            <DialogHeader>
            <DialogTitle>Add category</DialogTitle>
            <DialogDescription>


            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    {icons.map ((icon) => {
                        <SelectItem value={icon.value}>{icon.iconi}</SelectItem>
                    })}
                </SelectContent>
            </Select>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
    )
}