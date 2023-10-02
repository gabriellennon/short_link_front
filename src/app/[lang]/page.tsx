"use client";
import { ChangeEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link as LinkIcon } from 'lucide-react';
import { ToggleTools } from '@/components/ToggleTools';
import { BoxTool } from '@/components/BoxTool';
import { Button } from '@/components/Button';
import { Switch } from '@/components/Switch';
import { Input } from '@/components/Input';
import buildingImage from '@/assets/img/tell-us-about-your-needs-product.png';
import Image from 'next/image';
import { shortNewLink } from '@/services/shortner.service';
import { isURLValid, removeHttpsPrefix } from '@/utils/functions';
import { TResponseShortnerPOST } from '@/services/types';
import { CopyArea } from '@/components/CopyArea';
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only';
import { Locale } from '@/config/i18n.config';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { FullLoadingScreen } from '@/components/FullLoadingScreen';
import { Footer } from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function Home({ params }: { params: { lang: Locale }}) {
  const dict = getDictionaryServerOnly(params.lang)
  const [customLink, setCustomLink] = useState(false);
  // const [generateQRCode, setGenerateQRCode] = useState(false);
  const [toolActive, setToolActive] = useState('SHORTLINK');
  const [linkToCut, setLinkToCut] = useState('');
  const [shortLinkToCopy, setShortLinkToCopy] = useState('');
  const [loadingCut, setLoadingCut] = useState(false);

  const handleChangeToolActive = (tabActive: string) => {
    setToolActive(tabActive)
}

  const handleActiveCustomLink = () => {
    setCustomLink(!customLink);
  }

  const handleTypeLink = (event: ChangeEvent<HTMLInputElement>) => {
    setLinkToCut(event.target.value)
  }

  const handleCutLink = () => {
    setLoadingCut(true);

    if(linkToCut.length && isURLValid(linkToCut) && linkToCut.includes('https://' || 'http://')) {
      const cutLinkObject = {
        originalUrl: linkToCut
      }
      shortNewLink(cutLinkObject).then((response) => {
        const responseData: TResponseShortnerPOST = response.data
        localStorage.setItem(`@-link-${responseData.code}`, JSON.stringify(responseData));
        setLinkToCut('');
        const linkToRedirect = `https://www.icut.li/${responseData.code}`;
        navigator.clipboard.writeText(linkToRedirect);
        setShortLinkToCopy(linkToRedirect);
        toast.success(dict.toasts.successShort);
      })
      .catch((error) => {
        console.log(error);
        toast.error(dict.toasts.errorShort);
      })
      .finally(() => {
        setLoadingCut(false);
      })
    } else {
      toast.error(dict.toasts.invalidUrl);
      setLoadingCut(false);
    }
  }

  // const handleGenerateQRCode = () => {
  //   setGenerateQRCode(!generateQRCode);
  // }

  return (
    <div className="h-screen bg-blue-200 flex flex-col justify-between">
      <section>
        <div className='flex gap-5 items-center justify-end w-full p-2'>
          <span className='font-thin text-sm text-zinc-700'>
            {dict.shortPage.switchText}
          </span>
          <LanguageSwitcher activeLanguage={params.lang} />
        </div>
        <main className="w-full flex flex-col items-center justify-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <ToggleTools 
            setToolActive={handleChangeToolActive} 
            toolActive={toolActive} 
            lang={params.lang}
          />
          {toolActive === 'SHORTLINK' ? (
            <BoxTool 
              title='Encurte links e personalize com 1 clique!'
            >
              <div className="flex flex-col items-center justify-center gap-3 w-full">
                <p
                  className="text-grey-400 font-semibold text-base"
                >
                  {dict.qrCodePage.title}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 w-full">
                  <Input 
                    Icon={LinkIcon}
                    onChange={handleTypeLink}
                    placeholder={dict.components.inputShortnerPlaceHolder}
                    value={linkToCut}
                    readOnly={loadingCut}
                  />
                  {/* Toggles */}
                  <div className="flex items-center justify-center gap-4">
                    {/* <Switch 
                      onChange={handleActiveCustomLink}
                      checked={customLink}
                      title={dict.components.titleCustomLink}
                    /> */}

                    {/* <Switch 
                      onChange={handleGenerateQRCode}
                      checked={generateQRCode}
                      title="Gerar QR Code"
                    /> */}
                  </div>
                </div>
                {!!shortLinkToCopy && (
                  <div className="mt-6">
                    <CopyArea title={removeHttpsPrefix(shortLinkToCopy)} textToCopy={shortLinkToCopy} />
                  </div>
                )}
                <Button 
                  title={dict.components.buttonShortLink}
                  loading={loadingCut}
                  disabled={loadingCut}
                  onClick={handleCutLink}
                />
              </div>
            </BoxTool>
          ) : (
            <BoxTool
              title={dict.qrCodePage.isComingTitle}
            >
              <div className="flex flex-col items-center justify-center gap-3 w-full">
                <p
                  className="text-grey-400 font-semibold text-base"
                >
                  {dict.qrCodePage.descriptionComing}
                </p>
                <Image 
                  src={buildingImage} 
                  alt="Imagem de pessoas construindo algo" 
                  width={500}
                  height={500}
                />
              </div>
            </BoxTool>
          )}
        </main>
        <CookieConsent />
        
        <Toaster
          position="top-right"
          reverseOrder={false}
          />
      </section>
      <Footer />
    </div>

  )
}
