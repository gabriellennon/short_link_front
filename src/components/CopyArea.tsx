import { Files } from "lucide-react";
import { Button } from "./Button";
import toast, { Toaster } from 'react-hot-toast';

type TCopyProps = {
    title: string;
    textToCopy: string;
}

export function CopyArea({ title, textToCopy }: TCopyProps){
    function handleCopyText(){
        navigator.clipboard.writeText(textToCopy);
        toast.success("Link copied! 🤩");
    }

    return (
        <Button 
            title={title} 
            className="border-2 border-blue-400/70 text-sm font-semibold gap-0 flex items-center sm:gap-2 bg-blue-400/30 rounded-lg p-3 transition ease-in-out hover:bg-blue-400/20"
            onClick={handleCopyText}
        >
            <Files size={26} color="#004E87" className="inline"/>
        </Button>
    )
}