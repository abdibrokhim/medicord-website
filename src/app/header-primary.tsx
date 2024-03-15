import './globals.css';
import Image from "next/image"; 

// @ts-ignore
import logo from '../app/assets/Medicord_black_logo.png';


export default function HeaderPrimary()
{ 
  return (
      <nav className="w-full pt-4">
        <div className="navbar w-full relative !h-16 px-8 md:px-0">
          <div className="flex justify-between items-center m-auto w-full md:w-4/5 2xl:w-3/5 relative">
            <div className="flex items-center gap-4">
              <a className="btn !border-0 bg-transparent px-0 mx-4 text-gray-700 text-xl font-black" href="/">
                <Image
                  src={logo}
                  width={150}
                  alt="Medicord logo"
                  className="max-w-[300px] img-shadow" 
                  title="Medicord logo"
                />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a className="cta-top flex items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-4 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-[#1e1e1e] !text-white !bg-none !text-[14px] px-4 !h-[44px]" href="/contact">
                <p className="whitespace-nowrap">Contact us</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
   ); 
}
