import clsx from 'clsx';
import { Loading } from './Loading';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    variant?: 'primary';
    loading?: boolean;
}

export function Button ({ loading, title, variant, ...rest}: IButtonProps){
    return (
        <button 
            className={clsx(
                "mt-9 py-3 px-10 rounded-lg bg-green-500 text-white font-bold", {
                    'bg-green-500': variant === 'primary',
                    'bg-zinc-500': loading,
                    'cursor-not-allowed': loading
                }
            )}
            {...rest}
        >
            <div className="flex items-center justify-center gap-2">
                {loading && <Loading />}
                {loading ? 'Encurtando...' : title}
            </div>
        </button>
    )
}