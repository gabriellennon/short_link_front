"use client";
import { useState } from 'react';
import { Link as LinkIcon } from 'lucide-react';
import { ToggleTools } from '@/components/ToggleTools';

export default function Home() {
  const [customLink, setCustomLink] = useState(false);
  const [generateQRCode, setGenerateQRCode] = useState(false);

  const handleActiveCustomLink = () => {
    setCustomLink(!customLink);
    // localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode))
  }

  const handleGenerateQRCode = () => {
    setGenerateQRCode(!generateQRCode);
  }

  return (
    <div className="h-screen bg-blue-200">
      <main className="w-full flex flex-col items-center justify-center mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {/* Toggle tools */}
        <ToggleTools />
        {/* Box tool */}
        <div 
          className="bg-blue-300 border border-[#D2D8DE] rounded-lg py-6 sm:px-6 lg:px-8 mt-11 flex flex-col items-center justify-center gap-8 w-full"
        >
          <h1
            className="text-grey-400 font-semibold text-xl"
          >
            Encurte links e personalize com 1 clique!
          </h1>
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <p
              className="text-grey-400 font-semibold text-base"
            >
              Cole a URL que deseja encurtar
            </p>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              {/* INPUT LINK */}
              <div className=" lg:w-[440px]">
                <div className="relative mt-2 rounded-lg shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span 
                      className="text-gray-500 sm:text-sm"
                    >
                      <LinkIcon className="h-5 w-5 text-[#A0ACB2]" />
                    </span>
                  </div>
                  <input 
                    type="text" 
                    name="url" 
                    id="url" 
                    className="block w-full rounded-lg border border-[#DCE2E5] bg-[#F5F8FA] py-4 pl-10 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-lg" 
                    placeholder="Exemplo: https://siteABC.com/campanha-site..." 
                  />
                </div>
              </div>
              {/* Toggles */}
              <div className="flex items-center justify-center gap-4">
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
                          onChange={handleActiveCustomLink}
                          checked={customLink}
                          placeholder="Personalizar Link"
                      />
                      <div 
                        className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-[#515357] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#D9D9D9] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"
                      ></div>
                  </label>
                  <span 
                    className="ml-3 text-sm font-medium text-grey-400"
                  >
                    Personalizar link
                  </span>
                </div>
                <div className="flex items-center">
                  <label 
                      className="inline-flex relative items-center cursor-pointer"
                  >
                      <input 
                          type="checkbox" 
                          value="" 
                          id="checked-toggle" 
                          className="sr-only peer" 
                          // defaultChecked={generateQRCode}
                          onChange={handleGenerateQRCode}
                          checked={generateQRCode}
                          placeholder="Gerar QR Code"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-[#515357] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#D9D9D9] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                  </label>
                  <span 
                    className="ml-3 text-sm font-medium text-grey-400"
                  >
                    Gerar QR Code
                  </span>
                </div>
              </div>
            </div>
            <button
              className="mt-9 py-3 px-10 rounded-lg bg-green-500 text-white font-bold"
            >
              Encurtar link
            </button>
          </div>
        </div>
      </main>
    </div>

  )
}
