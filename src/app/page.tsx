"use client";
import { ChangeEvent, useState } from 'react';
import { Link as LinkIcon } from 'lucide-react';
import { ToggleTools } from '@/components/ToggleTools';
import { BoxTool } from '@/components/BoxTool';
import { Button } from '@/components/Button';
import { Switch } from '@/components/Switch';
import { Input } from '@/components/Input';

export default function Home() {
  const [customLink, setCustomLink] = useState(false);
  // const [generateQRCode, setGenerateQRCode] = useState(false);
  const [toolActive, setToolActive] = useState('SHORTLINK');
  const [linkToCut, setLinkToCut] = useState('');

  const handleChangeToolActive = (tabActive: string) => {
    setToolActive(tabActive)
}

  const handleActiveCustomLink = () => {
    setCustomLink(!customLink);
    // localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode))
  }

  const handleTypeLink = (event: ChangeEvent<HTMLInputElement>) => {
    setLinkToCut(event.target.value)
  }

  // const handleGenerateQRCode = () => {
  //   setGenerateQRCode(!generateQRCode);
  // }

  return (
    <div className="h-screen bg-blue-200">
      <main className="w-full flex flex-col items-center justify-center mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <ToggleTools setToolActive={handleChangeToolActive} toolActive={toolActive} />
        <BoxTool 
          title='Encurte links e personalize com 1 clique!'
        >
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <p
              className="text-grey-400 font-semibold text-base"
            >
              Cole a URL que deseja encurtar
            </p>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <Input 
                Icon={LinkIcon}
                onChange={handleTypeLink}
                placeholder="Exemplo: https://siteABC.com/campanha-site..." 
                value={linkToCut}
              />
              {/* Toggles */}
              <div className="flex items-center justify-center gap-4">
                <Switch 
                  onChange={handleActiveCustomLink}
                  checked={customLink}
                  title="Personalizar Link"
                />

                {/* <Switch 
                  onChange={handleGenerateQRCode}
                  checked={generateQRCode}
                  title="Gerar QR Code"
                /> */}
              </div>
            </div>
            <Button 
              title='Encurtar link'
            />
          </div>
        </BoxTool>
      </main>
    </div>

  )
}
