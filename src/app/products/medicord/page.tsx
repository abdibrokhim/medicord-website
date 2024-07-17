import Image from "next/image"; 
import '../../globals.css';

import Footer from '../../components/footer';
import HeaderPrimary from '../../components/header.primary';
import { Analytics } from '@vercel/analytics/react';


export default function CoMedAI() 

{ 
  return (

    <div className="flex flex-col w-full min-h-screen">
      <Analytics />
      <HeaderPrimary/>
      <main className="flex-1 flex flex-col gap-16 px-4 md:px-0 py-24 m-auto w-full md:w-4/5 2xl:w-3/5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="text-left flex flex-row gap-32 py-32 h-full">
            {`hi, buddy;)`}
          </div>
        </div>
      </main>
    <Footer/>
    </div> 
  ); 
}