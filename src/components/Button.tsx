import clsx from 'clsx';
import { Loading } from './Loading';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    variant?: 'primary';
    loading?: boolean;
    children?: React.ReactNode;
}

export function Button ({ loading, title, variant, children, ...rest}: IButtonProps){
    return (
        <button 
            className={clsx(
                "mt-9 py-3 px-10 rounded-lg bg-green-500 text-white font-bold flex items-center justify-center gap-2", {
                    'bg-green-500': variant === 'primary',
                    'bg-zinc-500': loading,
                    'cursor-not-allowed': loading
                }
            )}
            {...rest}
        >
            {loading && <Loading />}
            {loading ? 'Encurtando...' : title}
            {children}
        </button>
    )
}