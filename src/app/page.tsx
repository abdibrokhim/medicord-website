import Image from "next/image"; 
import './globals.css';

import Footer from './footer';
import HeaderPrimary from './header-primary';
import { Analytics } from '@vercel/analytics/react';


export default function Home() 

{ 
  return (

    <div className="flex flex-col w-full">
      <Analytics />
      <HeaderPrimary/>
      <main className="flex-1 flex flex-col gap-16 px-4 md:px-0 py-24 m-auto w-full md:w-4/5 2xl:w-3/5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="text-center flex flex-col gap-4 py-32 h-full">
            <div className="w-full relative z-10"> 
              <div className="leading-none z-10 text-[72px] text-[#1e1e1e] font-black"> 
                <span>IMAGINE A PLACE...</span> 
              </div> 
            </div>
            <div className="w-full"> <span className="flex flex-col gap-2 text-[#1e1e1e] text-[20px] mt-4">
              <p>...where Brain MRI examinations are smoother and more accurate.</p>
              <p>Where hospitals and clinics are part of an ecosystem that not only enhances the healthcare experience but also builds a bridge between healthcare professionals and patients.</p>
              </span> 
            </div>
            <div className="flex justify-center items-center gap-2 mt-16">
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
                  <div className="flex flex-1">
                    <a className="cta-top flex gap-2 items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[16px] px-6 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-[#1e1e1e] !text-white !bg-none !text-[18px] px-6 !h-[44px]" href="https://abdibrokhim.vercel.app">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="-ml-2 shrink-0 iconify iconify--fluent" width="20" height="20" viewBox="0 0 28 28">
                        <path fill="currentColor" d="M10.06 18.701a1.628 1.628 0 0 0 2.43-.676l.77-2.34a3.823 3.823 0 0 1 2.416-2.418l2.238-.727a1.61 1.61 0 0 0 .786-.595a1.62 1.62 0 0 0-.849-2.489l-2.215-.72a3.82 3.82 0 0 1-2.42-2.414l-.727-2.237a1.622 1.622 0 0 0-.594-.785a1.655 1.655 0 0 0-1.879 0a1.627 1.627 0 0 0-.6.8L8.68 6.365a3.817 3.817 0 0 1-2.359 2.37l-2.24.726a1.626 1.626 0 0 0 .02 3.073l2.216.72a3.856 3.856 0 0 1 1.816 1.286c.266.343.471.728.606 1.14l.728 2.234c.112.318.32.593.595.787m9.744 6.08a1.2 1.2 0 0 0 .696.22a1.2 1.2 0 0 0 .692-.217a1.21 1.21 0 0 0 .446-.6l.372-1.143a1.609 1.609 0 0 1 1.017-1.02l1.166-.378A1.213 1.213 0 0 0 25 20.505a1.2 1.2 0 0 0-.844-1.146l-1.144-.37a1.609 1.609 0 0 1-1.02-1.018l-.38-1.163a1.2 1.2 0 0 0-2.274.016l-.374 1.146a1.61 1.61 0 0 1-.993 1.017l-1.166.378a1.213 1.213 0 0 0-.807 1.139a1.2 1.2 0 0 0 .823 1.138l1.144.372a1.606 1.606 0 0 1 1.02 1.023l.379 1.163a1.2 1.2 0 0 0 .44.582"></path>
                      </svg>
                      <p className="whitespace-nowrap">Contact us</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:inline-block">
          </div>
        </div>
        <div className="flex flex-col gap-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center items-center">
          <div className="w-full relative z-10"> 
              <div className="leading-none z-10 text-[54px] text-[#1e1e1e] font-bold pb-4"> 
                <span>Brain MRI Analysis</span> 
              </div>
              <span className="flex flex-col gap-4 text-[#1e1e1e] text-[20px]">
              <p>Software system that simplifies the process of Brain MRI analysis.</p>
              </span>
            </div>
            
            <Image
              src='https://iili.io/JWi9Zox.png'
              width={500}
              height={500}
              alt="Brain MRI Analysis"
              className="img-shadow"
              title="Brain MRI Analysis"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Image
              src='https://iili.io/JWPpkRs.png'
              width={500}
              height={500}
              alt="Advanced Image Processing"
              className="img-shadow"
              title="Advanced Image Processing"
            />

          <div className="w-full relative z-10"> 
              <div className="leading-none z-10 text-[54px] text-[#1e1e1e] font-bold pb-4"> 
                <span>Advanced Image Processing</span> 
              </div>
              <span className="flex flex-col gap-4 text-[#1e1e1e] text-[20px]">
              <p>Directly process Brain MRI images and extract critical features.</p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="text-center flex flex-col gap-6 py-32 h-full">
            <div className="w-full relative z-10"> 
              <div className="leading-none z-10 text-[54px] text-[#1e1e1e] font-bold"> 
                <span>INTERACTIVE, SECURE, SUPPORTIVE</span> 
              </div> 
            </div>
            <div className="w-full"> <span className="flex flex-col gap-4 text-[#1e1e1e] text-[20px]">
              <p>Platform that connects patients, doctors, and hospitals in a dynamic, interactive community.</p>
              </span> 
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
            <Image
              src='https://iili.io/JWiHLJt.png'
              width={1000}
              height={1000}
              alt="Advanced Image Processing"
              className="img-shadow"
              title="Advanced Image Processing"
            />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="self-stretch flex w-full justify-start md:justify-center md:items-center flex-col gap-6 md:flex-col md:gap-8 pt-8">
            <div className="flex flex-col gap-1">
              <p className="font-title text-3xl text-[#1e1e1e] font-black">Did we pique your interest?</p>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
                  <div className="flex flex-1">
                    <a className="cta-top flex gap-2 items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[16px] px-6 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-[#1e1e1e] !text-white !bg-none !text-[18px] px-6 !h-[44px]" href="https://abdibrokhim.vercel.app">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="-ml-2 shrink-0 iconify iconify--fluent" width="20" height="20" viewBox="0 0 28 28">
                        <path fill="currentColor" d="M10.06 18.701a1.628 1.628 0 0 0 2.43-.676l.77-2.34a3.823 3.823 0 0 1 2.416-2.418l2.238-.727a1.61 1.61 0 0 0 .786-.595a1.62 1.62 0 0 0-.849-2.489l-2.215-.72a3.82 3.82 0 0 1-2.42-2.414l-.727-2.237a1.622 1.622 0 0 0-.594-.785a1.655 1.655 0 0 0-1.879 0a1.627 1.627 0 0 0-.6.8L8.68 6.365a3.817 3.817 0 0 1-2.359 2.37l-2.24.726a1.626 1.626 0 0 0 .02 3.073l2.216.72a3.856 3.856 0 0 1 1.816 1.286c.266.343.471.728.606 1.14l.728 2.234c.112.318.32.593.595.787m9.744 6.08a1.2 1.2 0 0 0 .696.22a1.2 1.2 0 0 0 .692-.217a1.21 1.21 0 0 0 .446-.6l.372-1.143a1.609 1.609 0 0 1 1.017-1.02l1.166-.378A1.213 1.213 0 0 0 25 20.505a1.2 1.2 0 0 0-.844-1.146l-1.144-.37a1.609 1.609 0 0 1-1.02-1.018l-.38-1.163a1.2 1.2 0 0 0-2.274.016l-.374 1.146a1.61 1.61 0 0 1-.993 1.017l-1.166.378a1.213 1.213 0 0 0-.807 1.139a1.2 1.2 0 0 0 .823 1.138l1.144.372a1.606 1.606 0 0 1 1.02 1.023l.379 1.163a1.2 1.2 0 0 0 .44.582"></path>
                      </svg>
                      <p className="whitespace-nowrap">
                        Contact us
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    <Footer/>
    </div> 
  ); 
}