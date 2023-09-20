import clsx from 'clsx';

import usaIcon from '../assets/img/usaFlag.svg';
import brazilIcon from '../assets/img/brazilFlag.svg';
import Link from 'next/link';
import Image from 'next/image';

type TProps = {
    activeLanguage: 'pt-BR' | 'en'
}


export function LanguageSwitcher({ activeLanguage }: TProps) {

    const languageOptions = [
        {
            name: "English",
            value: "en",
            flag: usaIcon
        },
        {
            name: "Português",
            value: "pt-BR",
            flag: brazilIcon
        },
    ]

    return (
        <div
            className={"flex items-center md:flex"}
        >
            {languageOptions.map(option => (
                <Link
                    key={option.value}
                    href={`/${option.value}`}
                    className={clsx("border-2 rounded-full h-10 w-10 flex items-center justify-center hover:cursor-pointer mx-2",{
                        'border-[#283072] bg-[#283072] drop-shadow-[0_4px_15px_rgba(40,48,114,0.31)]': activeLanguage === `${option.value}`,
                        'border-[#D1D1D1] bg-[#D9D9D9]': activeLanguage !== `${option.value}`,
                    })}
                    locale={false}
                >
                    <Image 
                        src={option.flag} 
                        alt={option.name} 
                        className="w-8 h-8"
                    />
                </Link>
            ))}
        </div>
    );
}