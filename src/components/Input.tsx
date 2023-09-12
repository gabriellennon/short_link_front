import React, { ChangeEvent } from 'react';
import { LucideIcon } from 'lucide-react';

type TInputProps = {
    Icon?: LucideIcon;
    placeholder?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export function Input({ Icon, placeholder, onChange, value }: TInputProps){
    return(
        <div className=" lg:w-[440px]">
            <div className="relative mt-2 rounded-lg shadow-sm">
                {Icon && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span 
                            className="text-gray-500 sm:text-sm"
                        >
                            <Icon className="h-5 w-5 text-[#A0ACB2]" />
                        </span>
                    </div>
                )}
                <input 
                    type="text" 
                    className="block w-full rounded-lg border border-[#DCE2E5] bg-[#F5F8FA] py-4 pl-10 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-lg" 
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            </div>
        </div>
    )
}