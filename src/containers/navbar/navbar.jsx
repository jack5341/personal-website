import propTypes from "prop-types";
import { useState } from "react";
import { HamburgerIcon } from "../../components/icon";
import { NavLink } from "../../components/link/link";
import { NavLogo } from "../../components/logo/logo";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Navbar({ links }) {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const isTablet = useMediaQuery("(max-width: 768px)");

    return hamburgerMenu ? (
        <div className="absolute w-full h-screen bg-white">
            <div className="cursor-pointer" onClick={() => setHamburgerMenu(false)}>
                <HamburgerIcon className="w-10 h-10 absolute right-0 m-5 mt-16" />
            </div>
            {links && (
                <ul className="flex h-screen items-center justify-center flex-col">
                    {links.map((link, index) => (
                        <NavLink classnames="my-3 text-4xl font-bold" key={index} url={link.href} label={link.label} />
                    ))}
                </ul>
            )}
        </div>
    ) : (
        <nav className="flex justify-between py-10 items-center">
            <NavLogo classnames="ml-5 md:ml-0">na.</NavLogo>
            {links && (
                <>
                    {isTablet ? (
                        <div className="cursor-pointer" onClick={() => setHamburgerMenu(true)}>
                            <HamburgerIcon className="w-10 h-10 mr-5" />
                        </div>
                    ) : (
                        <ul className="flex">
                            {links.map((link, index) => (
                                <NavLink key={index} url={link.href} label={link.label} />
                            ))}
                        </ul>
                    )}
                </>
            )}
        </nav>
    );
}

Navbar.prototype = {
    links: propTypes.array,
};
