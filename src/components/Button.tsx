import clsx from 'clsx';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    variant?: 'primary';
}

export function Button (props: IButtonProps){
    return (
        <button 
            className={clsx(
                "mt-9 py-3 px-10 rounded-lg bg-green-500 text-white font-bold", {
                    'bg-green-500': props.variant === 'primary'
                }
            )}
            {...props}
        >
            {props.title}
        </button>
    )
}