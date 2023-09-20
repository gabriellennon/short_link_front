"use client";
import clsx from 'clsx';
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only';

type TToggleToolsProps = {
    setToolActive: (tabActive: string) => void;
    toolActive: string;
    lang: "en" | "pt-BR";
}

export function ToggleTools ({ setToolActive, toolActive, lang }: TToggleToolsProps){
    const dict = getDictionaryServerOnly(lang)

    return(
        <div 
          className="flex items-center p-2 border border-[#004E8717] bg-blue-300 shadow-lg shadow-[rgba(0, 0, 0, 0.08)] rounded-lg w-max"
        >
            <button 
                className={clsx(
                    "flex items-center justify-center w-32 h-12 p-4 font-semibold rounded-lg text-black-300", {
                        'text-white bg-blue-500': toolActive === 'SHORTLINK'
                    }
                )}
                onClick={() => setToolActive('SHORTLINK')}
            >
                {dict.components.shortLinkButton}
            </button>
            <button 
                className={clsx(
                    "flex items-center justify-center w-32 h-12 p-4 font-semibold rounded-lg text-black-300", {
                        'text-white bg-blue-500': toolActive === 'QRCODE'
                    }
                )}
                onClick={() => setToolActive('QRCODE')}
            >
                QR code
            </button>
        </div>
    )
}