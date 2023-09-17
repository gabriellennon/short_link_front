
type TSwitchProps = {
    onChange: () => void;
    checked: boolean;
    title: string;
}

export function Switch({ onChange, checked, title }: TSwitchProps){
    return (
        <div className="flex items-center">
            <label 
                className="inline-flex relative items-center cursor-pointer"
            >
                <input 
                    type="checkbox" 
                    value="" 
                    id="checked-toggle" 
                    className="sr-only peer" 
                    // defaultChecked={customLink}
                    onChange={onChange}
                    checked={checked}
                    placeholder={title}
                />
                <div 
                className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-[#515357] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#D9D9D9] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"
                ></div>
            </label>
            <span 
            className="ml-3 text-sm font-medium text-grey-400"
            >
                {title}
            </span>
        </div>
    )
}