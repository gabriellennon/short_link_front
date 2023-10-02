"use client";
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only';
import { Locale } from '@/config/i18n.config';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ChevronLeftCircle } from 'lucide-react';

export default function Privacy({ params }: { params: { lang: Locale }}) {
    const dict = getDictionaryServerOnly(params.lang)

  return (
    <section className="h-full bg-blue-200">
        <div className='flex gap-5 items-center justify-start w-full p-2'>
            <Link href="/" className='flex items-center gap-2 text-sm font-medium'>
                <ChevronLeftCircle color='#50555A' />
                Voltar para a Home
            </Link>
        </div>
        <main className='w-full flex flex-col items-start justify-center mx-auto gap-6 max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl text-blue-500 font-bold'>
                {dict.privacy.title}
            </h1>
            <p className='text-base text-black-300 text-justify'>
                {dict.privacy.description}
            </p>

            <div>
                <h2 className='text-3xl text-blue-500 font-bold'>
                    {dict.privacy.sectionCollect}
                </h2>
                <p className='text-base text-black-300 text-justify'>
                    {dict.privacy.descriptionCollect}
                </p>
            </div>
            <div>
                <h2 className='text-3xl text-blue-500 font-bold'>
                    {dict.privacy.sectionInfoUsage}
                </h2>
                <p className='text-base text-black-300 text-justify'>
                    {dict.privacy.descriptionInfoUsage}
                </p>
            </div>
            <div>
                <h2 className='text-3xl text-blue-500 font-bold'>
                    {dict.privacy.sectionOptionsUser}
                </h2>
                <p className='text-base text-black-300 text-justify'>
                    {dict.privacy.descriptionOptionsUser}
                </p>
            </div>
            <div>
                <h2 className='text-3xl text-blue-500 font-bold'>
                    {dict.privacy.sectionShareInfo}
                </h2>
                <p className='text-base text-black-300 text-justify'>
                    {dict.privacy.descriptionShareInfo}
                </p>
            </div>
            <div>
                <h2 className='text-3xl text-blue-500 font-bold'>
                    {dict.privacy.sectionDataSecurity}
                </h2>
                <p className='text-base text-black-300 text-justify'>
                    {dict.privacy.descriptionDataSecurity}
                </p>
            </div>
            <div>
                <h2 className='text-3xl text-blue-500 font-bold'>
                    {dict.privacy.sectionUpdatePolicy}
                </h2>
                <p className='text-base text-black-300 text-justify'>
                    {dict.privacy.descriptionUpdatePolicy}
                </p>
            </div>
            <div>
                <h2 className='text-3xl text-blue-500 font-bold'>
                    {dict.privacy.sectionQuestions}
                </h2>
                <p className='text-base text-black-300 text-justify'>
                    {dict.privacy.descriptionQuestions}
                </p>
            </div>
        </main>
        <Footer />
    </section>
  )
}
