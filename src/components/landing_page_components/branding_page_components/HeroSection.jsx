'use client'
import React, {useState} from 'react'
import Navbar from '@/components/landing_page_components/Navbar'
import Image from 'next/image'
import PrimaryBtn from '../PrimaryBtns/PrimaryBtn'
import { Reveal } from '@/utils/Reveal'
import {motion} from 'motion/react';
import HeroForm from '@/components/landing_page_components/HeroForm';

const   HeroSection = () => {
    const [budget, setBudget] = useState(5000);

  return (
    <React.Fragment>
        <main 
         style={{
             backgroundImage: "url('/images/branding_page_images/branding-hero.png')",
             backgroundSize: "cover",
            }}
            >
            <Navbar/>
            <div className='h-[100vh]  flex justify-between items-center flex-row relative w-[1200px] mx-auto'>
                {/* hero heading  */}
                <motion.div 
                  initial={{
                    x: -300,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }} className="w-[45%] flex-col px-8 md:px-0">
                    <div className='flex items-center gap-1 mb-2 w-auto'>
                        <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                        />
                        <Reveal>
                        <p>Logo Design & Branding</p>
                        </Reveal>
                    </div>

                    {/* heading main  */}
                    <Reveal>
                        <h2 className="text-2xl md:text-5xl font-bold leading-tight text-left">
                        full-service branding <br/>Agency with a difference
                        </h2>
                    </Reveal>
                </motion.div>

                    {/* hero form  */}
                    <motion.div 
                  initial={{
                    scale: 0.1,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className='w-full md:w-[40%] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 md:p-10 max-w-md shadow-lg text-white h-[70%] overflow-auto'
                  >
            <HeroForm/>
                   </motion.div>

            {/* <div className='bg-my-blue-gradient rounded-full p-3 absolute bottom-6 right-6'>
                <Image
                src={'/images/services_page_images/inbox.png'}
                alt="inbox"
                width={15}
                height={15}
                />
            </div> */}

            </div>
        </main>
    </React.Fragment>
  )
}

export default HeroSection






