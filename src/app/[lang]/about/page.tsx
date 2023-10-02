"use client";
import womanCellphoneImage from '@/assets/img/screenlink.png';
import emailImage from '@/assets/img/email.png';
import { Footer } from '@/components/Footer';
import { Locale } from '@/config/i18n.config';
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only';
import Image from 'next/image';
import { ChevronLeftCircle, Mail } from 'lucide-react';
import Link from 'next/link';

export default function About ({ params }: { params: { lang: Locale }}) {
    const dict = getDictionaryServerOnly(params.lang)

    return (
        <main className="h-screen bg-blue-200 flex flex-col justify-between">
            <div className='flex gap-5 items-center justify-start w-full p-2'>
                <Link href="/" className='flex items-center gap-2 text-sm font-medium'>
                    <ChevronLeftCircle color='#50555A' />
                    Voltar para a Home
                </Link>
            </div>
            <div className="py-16">  
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                        <Image 
                            src={womanCellphoneImage}
                            alt="image" 
                            loading="lazy" 
                            width={500} 
                            height={500}
                        />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-blue-500 font-bold md:text-4xl">{dict.about.title}</h2>
                            <p className="mt-6 text-gray-600">
                                {dict.about.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container m-auto px-6 py-6 text-gray-600 border-t-2 border-blue-500 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-row-reverse">
                        <div className="md:5/12 lg:w-5/12">
                            <Image 
                                src={emailImage}
                                alt="image" 
                                loading="lazy" 
                                width={500} 
                                height={500}
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-blue-500 font-bold md:text-4xl">{dict.contact.title}</h2>
                            <p className="mt-6 text-gray-600">
                                {dict.contact.description}
                            </p>
                            <div className='flex items-center gap-2 mt-2'>
                                <Mail color='#004E87' size={14} />
                                <p className="text-blue-500 font-medium">
                                    gabriellennon7@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}