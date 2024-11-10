import Image from "next/image"; 
import '../globals.css';

import Footer from '../components/footer';
import HeaderPrimary from '../components/header.primary';
import { Analytics } from '@vercel/analytics/react';

export default function Careers() { 
  return (
    <div className="flex flex-col min-h-screen">
      <Analytics />
      <HeaderPrimary />
      <main className="flex-1 flex flex-col gap-16 px-4 md:px-0 py-24 m-auto w-full md:w-4/5 2xl:w-3/5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="text-left flex md:flex-row flex-col gap-32 py-32 h-full">
            <p>Stay tuned! Follow us on <a href="https://linkedin.com/company/comedai" target="_blank" className="underline">LinkedIn</a></p>
            <p>Join our community <a href="https://discord.gg/nVtmDUN2sR" target="_blank" className="underline">Open Community</a> on discord</p>
          </div>
        </div>
      </main>
      <Footer />
    </div> 
  ); 
}
