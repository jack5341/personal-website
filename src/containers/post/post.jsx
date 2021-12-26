import propTypes from "prop-types";
import Label from "../../components/label/label";
import { Link } from "../../components/link/link";

export default function Post() {
    return (
        <div className={"h-auto lg:h-120 w-full border-b-2 grid grid-cols-1 lg:grid-cols-4 pl-5 md:pl-0"}>
            <div className="col-span-1 xl:col-span-2 m-10 ml-0 mx-4">
                <div>
                    <Label>{"02/07/2001"}</Label>
                </div>
                <div>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="text-xl lg:text-3xl hover:underline">
                        {"Goblin concept digital sculpture with human-like."}
                    </a>
                </div>
                <Label>{"Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development."}</Label>
                <div className="mt-5">
                    <Link
                        url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"}
                        label={"More shots from this project"}
                        withArrow
                    />
                </div>
            </div>
            <div className="col-span-3 xl:col-span-2 hidden lg:block">
                <div className="lg:m-10 flex lg:justify-center">
                    <img src={"https://www.fillmurray.com/640/360"} alt="thumbnail" className="rounded-md" />
                </div>
            </div>
        </div>
    );
}

Post.prototype = {
    post: propTypes.object,
};
