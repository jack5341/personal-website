import { useState } from "react";
import { HamburgerIcon } from "../../components/icon";
import { NavLink } from "../../components/link/link";
import { NavLogo } from "../../components/logo/logo";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Navbar() {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const isTablet = useMediaQuery("(max-width: 768px)");

    return hamburgerMenu ? (
        <div className="absolute w-full h-screen bg-white">
            <div className="cursor-pointer" onClick={() => setHamburgerMenu(false)}>
                <HamburgerIcon className="w-10 h-10 absolute right-0 m-5 mt-16" />
            </div>
            <ul className="flex h-screen items-center justify-center flex-col">
                <NavLink classnames="my-3 text-4xl font-bold" url="mailTo:nedim.akar53411@gmail.com" label="Contact" />
                <NavLink classnames="my-3 text-4xl font-bold" url="https://www.linkedin.com/in/nedim-akar/" label="LinkedIn" />
                <NavLink classnames="my-3 text-4xl font-bold" url="https://github.com/jack5341/personal-website" label="Github" />
            </ul>
        </div>
    ) : (
        <nav className="flex justify-between py-10 items-center">
            <NavLogo classnames="ml-5 md:ml-0">na.</NavLogo>
            {isTablet ? (
                <div className="cursor-pointer" onClick={() => setHamburgerMenu(true)}>
                    <HamburgerIcon className="w-10 h-10 mr-5" />
                </div>
            ) : (
                <ul className="flex">
                    <NavLink url="www.github.com" url="mailTo:nedim.akar53411@gmail.com" label="Contact" />
                    <NavLink url="https://www.linkedin.com/in/nedim-akar/" label="LinkedIn" />
                    <NavLink url="https://github.com/jack5341/personal-website" label="Github" />
                </ul>
            )}
        </nav>
    );
}
