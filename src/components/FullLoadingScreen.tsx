import { Loading } from "./Loading"

export function FullLoadingScreen(){
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="flex justify-center items-center space-x-1  h-full ">
                <Loading />
               
                <span className="text-xl font-semibold text-gray-700">
                    Loading ...
                </span>
            </div>
        </div>
    )
}