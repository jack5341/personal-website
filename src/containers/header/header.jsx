import { Headline1, Headline2 } from "../../components/headline/headline";
import Label from "../../components/label/label";

export default function Header() {
    return (
        <div className="py-10 md:py-32 px-5 grid grid-cols-1 grid-flow-row-dense lg:grid-cols-3 gap-4">
            <div className="flex justify-center flex-col mb-5 md:mb-0">
                <Headline1>
                    Hello I'm <br /> Nedim Akar
                </Headline1>
                <Label>
                    Knowledge isn't free, you have to pay attention.
                    <br /> - Richard Feynman
                </Label>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
                <Headline2 classnames="text-gray-500">A senior-year design student who trying to specialize in 3D modeling & texturing.</Headline2>
            </div>
        </div>
    );
}
