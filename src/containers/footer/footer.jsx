import { NavLink } from "../../components/link/link";

export default function Footer() {
    return (
        <footer className="py-5 flex flex-col md:flex-row text-center md:text-left justify-between">
            <div>
                <p>Nedim Akar - {new Date().getFullYear()}</p>
            </div>
            <ul className="flex justify-center my-2 md:my-0 md:justify-start">
                <NavLink url="www.github.com" url="mailTo:nedim.akar53411@gmail.com" label="Contact" />
                <NavLink url="https://www.linkedin.com/in/nedim-akar/" label="LinkedIn" />
                <NavLink url="https://github.com/jack5341/personal-website" label="Github" />
            </ul>
        </footer>
    );
}
