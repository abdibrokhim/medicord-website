'use client'

import { useState } from 'react';
import Image from "next/image";
import './globals.css';

import Footer from './components/footer';
import HeaderPrimary from './components/header.primary';
import { Analytics } from '@vercel/analytics/react';

import blackLogo from '../app/assets/imgs/CoMed_Inc_black.png';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { firebaseConfig } from './firebase.config';
import { Subscriber } from './types/subscriber';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleGetUpdates = async () => {
    if (!email) return;

    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, 'subscribers'), {
        email,
        createdAt: Date.now(),
      });

      console.log("Document written with ID: ", docRef.id);

      setEmail('');
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Analytics />
      <HeaderPrimary />
      <main className="flex-1 flex flex-col gap-16 px-4 md:px-0 py-24 m-auto w-full md:w-4/5 2xl:w-3/5">
        <div className="flex flex-col md:flex-row justify-center md:items-left items-center gap-16">
          <div className="text-left flex md:flex-row flex-col gap-32 py-32 h-full px-16 md:px-0">
            <div className="md:w-1/2 w-full">
              <span className="flex flex-col gap-4 text-[#1e1e1e] text-[16px] mt-4">
                <Image
                  src={blackLogo}
                  width={150}
                  alt="Medicord logo"
                  className="max-w-[300px] img-shadow shrink-0 grow-0"
                  title="Medicord logo"
                />
                <p className="mt-2">CoMed Inc. is a software development company.</p>
                <p>We believe innovative software can revolutionize the healthcare industry by enhancing the accuracy of diagnoses and integrating seamlessly into hospital and clinic workflows.</p>
                <p>We contribute to better patient care by fostering a supportive community among healthcare professionals and patients worldwide, leading to improved medical outcomes and a more interconnected healthcare system.</p>
              </span>
            </div>
            <div className="flex flex-col justify-center md:w-1/2 w-full">
              <div>
                {`hi, buddy;)`}
              </div>
              <div className="flex flex-row justify-center items-center gap-2 mt-16">
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full max-w-sm outline-none border border-[#1e1e1e] rounded-md p-2 w-full max-w-sm shadow-[0_4px_6px_-1px_rgba(30,30,30,0.1),0_2px_4px_-1px_rgba(30,30,30,0.06)] focus:outline-none focus:ring-2 focus:ring-[#1e1e1e]"
                />
                <button
                  onClick={handleGetUpdates}
                  disabled={loading}
                  className="cta-top flex gap-2 items-center justify-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[16px] px-6 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-[#1e1e1e] !text-white !bg-none !text-[18px] px-6 !h-[44px]"
                >
                  {loading ? 'Loading...' : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="-ml-2 shrink-0 iconify iconify--fluent" width="20" height="20" viewBox="0 0 28 28">
                        <path fill="currentColor" d="M10.06 18.701a1.628 1.628 0 0 0 2.43-.676l.77-2.34a3.823 3.823 0 0 1 2.416-2.418l2.238-.727a1.61 1.61 0 0 0 .786-.595a1.62 1.62 0 0 0-.849-2.489l-2.215-.72a3.82 3.82 0 0 1-2.42-2.414l-.727-2.237a1.622 1.622 0 0 0-.594-.785a1.655 1.655 0 0 0-1.879 0a1.627 1.627 0 0 0-.6.8L8.68 6.365a3.817 3.817 0 0 1-2.359 2.37l-2.24.726a1.626 1.626 0 0 0 .02 3.073l2.216.72a3.856 3.856 0 0 1 1.816 1.286c.266.343.471.728.606 1.14l.728 2.234c.112.318.32.593.595.787m9.744 6.08a1.2 1.2 0 0 0 .696.22a1.2 1.2 0 0 0 .692-.217a1.21 1.21 0 0 0 .446-.6l.372-1.143a1.609 1.609 0 0 1 1.017-1.02l1.166-.378A1.213 1.213 0 0 0 25 20.505a1.2 1.2 0 0 0-.844-1.146l-1.144-.37a1.609 1.609 0 0 1-1.02-1.018l-.38-1.163a1.2 1.2 0 0 0-2.274.016l-.374 1.146a1.61 1.61 0 0 1-.993 1.017l-1.166.378a1.213 1.213 0 0 0-.807 1.139a1.2 1.2 0 0 0 .823 1.138l1.144.372a1.606 1.606 0 0 1 1.02 1.023l.379 1.163a1.2 1.2 0 0 0 .44.582"></path>
                      </svg>
                      <p className="whitespace-nowrap">Get updates</p>
                    </>
                  )}
                </button>
              </div>
              {showMessage && (
                <div className="mt-4 text-green-500">
                  Thank you for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}