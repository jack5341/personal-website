import Label from "../components/label/label";
import { Link } from "../components/link/link";
import Header from "../containers/header/header";
import Navbar from "../containers/navbar/navbar";

export default function Homepage() {
    return (
        <>
            <Navbar />
            <Header />
            <Link url="www.github.com" label="More shots from this project " withArrow />
            <Label>School assignment, 2019</Label>
        </>
    );
}
