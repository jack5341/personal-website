import { Routes, Route } from "react-router-dom";
import Footer from "./containers/footer/footer";
import Navbar from "./containers/navbar/navbar";
import Homepage from "./pages/homepage";

function App() {
    return (
        <div className="container mx-auto md:container-xl">
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
