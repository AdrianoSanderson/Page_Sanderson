import { useState } from "react"
import Links from "./Links"

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    function togleMenu() {
        setOpenMenu(!openMenu)
    }


    return (
        <header className="bg-neutral-900 font-medium text-2xl text-slate-200 flex justify-center w-full fixed">
            <div className="w-11/12">
                <div className="flex justify-between items-center">
                    <div className=" text-sky-600 "> DEV SANDERSON</div>

                    <div className="hidden m-5 gap-4 md:flex ">
                        <Links />
                    </div>
                    <div className="md:hidden">
                        <img src="./icons.png" alt="" onClick={togleMenu} />
                    </div>
                </div>
                {openMenu && (
                    <div className="bg-neutral-900 h-80 w-full  rounded-b-md flex flex-col justify-center absolute gap-8 items-center md:hidden">
                        <Links togle={togleMenu} />
                    </div>
                )}
            </div>
        </header>
    )
}