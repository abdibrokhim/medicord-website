'use client'

import Image from "next/image";
import '../../globals.css';

import Footer from '../../components/footer';
import HeaderPrimary from '../../components/header.primary';
import { Analytics } from '@vercel/analytics/react';
import { TypeAnimation } from 'react-type-animation';
import YouTube, { YouTubeProps } from 'react-youtube';

import addObservation from '../../assets/ss/add-observation.png';
import manageObservation from '../../assets/ss/manage-observations.png';
import generateReport from '../../assets/ss/generate-report.png';
import generatedReport from '../../assets/ss/generated-report.png';
import profileOrganization from '../../assets/ss/profile-organization.png';
import saveConclusion from '../../assets/ss/save-conclusion.png';
import benchmarking from '../../assets/ss/benchmarking.jpg';

export default function CoMedAI() {

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '620',
    width: '1180',
    playerVars: {
      autoplay: 1,
    },
  };

  const opts1: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Analytics />
      <HeaderPrimary />
      <main className="flex-1 flex flex-col gap-16 px-4 md:px-0 m-auto w-full md:w-4/5 2xl:w-3/5 text-[#1e1e1e]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center flex flex-row py-52 text-[200px] font-bold text-black">
            CoMedAI
          </div>
          <div className="text-center flex flex-col gap-8 py-8 items-center w-full max-w-5xl">
            <a href="https://rebrand.ly/comedai" target="_blank">
              <p className="text-[18px] bg-[#1e1e1e] py-4 px-6 text-white rounded-md">
                CoMedAI 1.0 is OUT with a new UI! 🎉 <span className="font-bold ms-2"> Try it now 
                  <svg width="28px" height="28px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </p>
            </a>
            <p className="text-[48px] mt-4 px-6 text-black">
              The easiest way to generate, manage and report Medical Data.
            </p>
            <p className="text-[24px] px-6 text-black">
              Enhances diagnostic accuracy and streamlines workflows for radiologists.
            </p>
            <a href="https://rebrand.ly/comedai" target="_blank" 
              className="cta-top flex gap-2 mt-4 items-center justify-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[18px] px-6 h-[44px] shrink-0 grow-0 btn bg-[#1e1e1e]">
              <p className="whitespace-nowrap">Get Started 
                <svg width="24px" height="24px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2">
                  <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#FFFFFF"/>
                </svg>
              </p>
            </a>
          </div>
          <div className="text-center flex flex-col gap-8 items-center w-full">
            <div className="text-center flex flex-col gap-8 py-16 items-center w-full max-w-5xl">
              <p className="text-[48px] mt-4 px-6 text-black">
                Simplicity and Flexibility at its core.
              </p>
              <p className="text-[24px] px-6 text-black">
                CoMedAI is designed to be simple and easy to use, yet powerful and flexible.
              </p>
            </div>
            <div className="text-center flex flex-row items-center justify-bottom">
              <div className="text-center flex flex-col items-center">
                <p className="font-bold">Easily Add Observations</p>
                <p className="">Simply fill out the observation form</p>
                <Image
                  src={addObservation}
                  width={800}
                  height={800}
                  alt="Add Observation"
                  className="img-shadow rounded-[35px] w-[500px]"
                  title="Add Observation"
                />
              </div>
              <div className="text-center flex flex-col items-center">
                <p className="font-bold">Generate Diagnostic Conclusions with Advanced AI</p>
                <p>Utilize cutting-edge AI technology for accurate diagnostics</p>
                <Image
                  src={saveConclusion}
                  width={800}
                  height={800}
                  alt="Save Conclusion"
                  className="img-shadow rounded-[35px] w-[700px]"
                  title="Save Conclusion"
                />
              </div>
              <div className="text-center flex flex-col items-center">
                <p className="font-bold">Manage Observations on the Go</p>
                <p>Access and manage observations conveniently from your mobile device</p>
                <Image
                  src={manageObservation}
                  width={800}
                  height={800}
                  alt="Manage Observation"
                  className="img-shadow rounded-[35px] w-[700px]"
                  title="Manage Observation"
                />
              </div>
              <div className="text-center flex flex-col items-center">
                <p className="font-bold">Generate Concise and Well-Formatted Reports</p>
                <p>Create reports with a professional and easy-to-read format</p>
                <Image
                  src={generateReport}
                  width={800}
                  height={800}
                  alt="Generate Report"
                  className="img-shadow rounded-[35px] w-[500px]"
                  title="Generate Report"
                />
              </div>
            </div>
            <a href="https://rebrand.ly/comedai-figma" target="_blank" 
              className="cta-top flex gap-2 mt-8 items-center justify-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[18px] px-6 h-[44px] shrink-0 grow-0 btn bg-[#1e1e1e]">
              <p className="whitespace-nowrap">
                Discover design
                <svg width="24px" height="24px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2">
                  <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#FFFFFF"/>
                </svg>
              </p>
            </a>
          </div>
          <div className="text-center flex flex-col gap-8 py-16 mt-16 items-center w-full">
            <div className="text-center flex flex-col gap-8 items-center w-full max-w-5xl">
              <p className="text-[48px] mt-4 px-6 text-black">
                How to use CoMedAI?
              </p>
              <YouTube videoId="hlRyrBoXYCI" opts={opts} onReady={onPlayerReady} />
              <a href="https://rebrand.ly/comedai" target="_blank" 
                className="cta-top flex gap-2 mt-4 items-center justify-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[18px] px-6 h-[44px] shrink-0 grow-0 btn bg-[#1e1e1e]">
                <p className="whitespace-nowrap">
                  Try it now
                  <svg width="24px" height="24px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2">
                    <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#FFFFFF"/>
                  </svg>
                </p>
              </a>
            </div>
          </div>
          <div className="text-center flex flex-col gap-8 items-center w-full">
            <div className="text-center flex flex-col gap-8 py-16 items-center w-full max-w-5xl">
              <p className="text-[48px] mt-4 px-6 text-black">
                How CoMedAI works inside?
              </p>
              <YouTube videoId="2cnA--Hxa20" opts={opts} onReady={onPlayerReady} />
              <a href="https://rebrand.ly/comedai-system-design" target="_blank" 
                className="cta-top flex gap-2 mt-8 items-center justify-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[18px] px-6 h-[44px] shrink-0 grow-0 btn bg-[#1e1e1e]">
                <p className="whitespace-nowrap">
                  Discover system design
                  <svg width="24px" height="24px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2">
                    <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#FFFFFF"/>
                  </svg>
                </p>
              </a>
            </div>
          </div>
          <div className="text-center flex flex-col gap-8 items-center w-full">
            <div className="text-center flex flex-col gap-8 py-16 items-center w-full max-w-5xl">
              <p className="text-[48px] mt-4 px-6 text-black">
                How accurate is the model?
              </p>
                <div className="text-left flex flex-col gap-4">
                  <Image
                      src={benchmarking}
                      width={800}
                      height={800}
                      alt="Benchmarking"
                      className="img-shadow rounded-[20px] w-full"
                      title="Benchmarking"
                      />
                  <p className="text-[20px] text-black">
                    GPT4o evaluation
                  </p>
                  <p className="text-[16px] text-black">
                    The model has been evaluated on over 10 Brain MRI observations and has surpassed the performance of the GPT4o (the latest and anvanced model by <a className="underline font-bold" href="https://openai.com" target="_blank">OpenAI</a>).
                  </p>
                </div>
              <a href="https://rebrand.ly/comedai-github-api" target="_blank" 
                className="cta-top flex gap-2 mt-8 items-center justify-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[18px] px-6 h-[44px] shrink-0 grow-0 btn bg-[#1e1e1e]">
                <p className="whitespace-nowrap">
                  Github
                  <svg width="24px" height="24px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2">
                    <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#FFFFFF"/>
                  </svg>
                </p>
              </a>
              <p className="text-[24px] mt-4 px-6 text-black">
                Watch the quick demo
              </p>
                <YouTube videoId="XA4RpgqZUnU" opts={opts} onReady={onPlayerReady} />
                <p className="text-[24px] mt-16 px-6 text-black">
                And it&apos;s Open Source
              </p>
                <a href="https://rebrand.ly/comedai-learn-more" target="_blank" 
                  className="cta-top flex gap-2 mt-4 items-center justify-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[18px] px-6 h-[44px] shrink-0 grow-0 btn bg-[#1e1e1e]">
                  <p className="whitespace-nowrap">
                    Learn more
                    <svg width="24px" height="24px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2">
                      <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#FFFFFF"/>
                    </svg>
                  </p>
                </a>
              <div className="py-16"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}