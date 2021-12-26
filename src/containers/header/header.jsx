import { Headline1, Headline2 } from "../../components/headline/headline";
import { DownIcon } from "../../components/icon";
import Label from "../../components/label/label";

export default function Header() {
    return (
        <div className="py-0 md:py-32 ml-5 md:ml-0 grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5 md:mb-0">
            <div className="flex justify-center flex-col mb-5 md:mb-0">
                <Headline1 classnames="mb-3">
                    Hello I'm <br /> Nedim Akar
                </Headline1>
                <Label>
                    Knowledge isn't free, you have to pay attention.
                    <br /> - Richard Feynman
                </Label>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
                <Headline2 classnames="text-gray-500">
                    Software Developer interested in <span className="text-blue-600">Cloud</span> <span className="text-red-600">Infrastructer</span>{" "}
                    <span className="text-yellow-500">Engineer</span> & <span className="text-green-600">Open Source</span> lover.
                </Headline2>
            </div>
        </div>
    );
}
