import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./containers/footer/footer";
import Navbar from "./containers/navbar/navbar";
import Homepage from "./pages/homepage";

function App() {
    // const [posts, setposts] = useState([
    //     {
    //         subject: "Goblin concept digital sculpture with human-like.",
    //         date: "02/07/2001",
    //         label: "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    //         link: {
    //             href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    //             label: "More shots from this project",
    //         },
    //         thumnail: "https://www.fillmurray.com/640/360",
    //     },
    // ]);
    const [navLinks, setnavLinks] = useState([
        {
            label: "Contact",
            href: "mailTo:nedim.akar53411@gmail.com",
        },
        { label: "Linkedin", href: "https://www.linkedin.com/in/nedim-akar/" },
        { label: "Github", href: "https://github.com/jack5341/personal-website" },
    ]);

    return (
        <div className="container mx-auto md:container-xl">
            <Navbar links={navLinks} />
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
