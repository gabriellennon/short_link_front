import { ReactNode } from "react";

type TBoxToolProps = {
    title: string;
    children: ReactNode;
}

export function BoxTool({ title, children }:TBoxToolProps){
    return (
        <div 
            className="bg-blue-300 border border-[#D2D8DE] rounded-lg py-6 sm:px-6 lg:px-8 mt-11 flex flex-col items-center justify-center gap-8 w-full"
        >
            <h1
                className="text-grey-400 font-semibold text-xl"
            >
                {title}
            </h1>
            {children}
        </div>
    )
}