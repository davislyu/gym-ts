
import { useEffect, useState } from "react"
import {Bars3Icons,XmarkIcon} from "@heroicons/react/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"


type Props = {
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage) => void;
}


const Navbar = ({selectedPage,setSelectedPage}:Props) => {
    const flexBetween = "flex items-center justify-between";
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6 gap-4`}>
                    <div className={`${flexBetween} w-full gap-16`} > <img src={Logo} alt="logo" />

                    {/* Navigation and Action Items */}
                    <div className="flex justify-between w-full gap-16"> 
                        {/* Navigation Links */}
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>

                            <Link page="Benefits" selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>

                            <Link page="Contact" selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>

                            <Link page="Our Classes" selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                        </div>

                        {/* Sign In and Member Button */}
                        <div className="flex gap-8">
                            <p>Sign In</p>
                            <button>Become a member</button>
                        </div></div>
                    {/* Logo Section */}
                   
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar