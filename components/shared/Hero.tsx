'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
const MotionImage = motion(Image);


export default function Hero() {
  return (
    <section className="py-10">
      <div className="grid md:grid-cols-2 grid-cols-1  gap-8">

        {/* Hero text  */}
        <div>
          <motion.h2 
           animate={{ y: [50, 0] }}
           transition={{
             duration: 1,
             ease: "easeInOut",
           }} 
           className="text-4xl font-bold leading-14 text-[#111111] max-md:text-center xl:text-6xl xl:leading-20">
            Your AI- <br /> Powered <br /> Sales Coach.
          </motion.h2>

          <div className="flex flex-col items-center gap-6 md:flex-row overflow-hidden">
            <MotionImage
              animate={{ y: [0, 100, 0] }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              src="/hero-ai.svg"
              alt="AI Coach"
              width={200}
              height={200}
              className="mt-8"
            />
            <motion.p 
            animate={{ x: [50, 0] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }} 
            className="mt-4 max-w-xs text-xl leading-relaxed text-[#05131D]/70">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </motion.p>
          </div>

          <div className=" mt-10  w-full flex items-center justify-between md:flex-row flex-col gap-6 bottom-0">
            {/* lift-side Banner icon-1  */}
            <div className="flex items-center gap-6">
              <span className="rounded-md bg-white p-4 drop-shadow-xl">
                <Image
                  src={"/icon-1.png"}
                  alt="icon"
                  width={30}
                  height={30}
                  className="rounded-md transition-transform duration-300 hover:rotate-360"
                />
              </span>
              <div>
                <h3 className="text-3xl font-semibold text-[#05131D]">2000+</h3>
                <p className="text-lg text-[#05131D]/70">Your protection</p>
              </div>
            </div>
            {/* lift-side Banner icon-2  */}
            <div className="flex items-center gap-6">
              <span className="rounded-md bg-white p-4 drop-shadow-xl">
                <Image
                  src={"/icon-2.png"}
                  alt="icon"
                  width={30}
                  height={30}
                  className="rounded-md transition-transform duration-300 hover:rotate-180"
                />
              </span>
              <div>
                <h3 className="text-3xl font-semibold text-[#05131D]">7001+</h3>
                <p className="text-lg text-[#05131D]/70">Provide tailored</p>
              </div>
            </div>
          </div>

        </div>

        {/* right-site hero image  */}
        <div className="relative">
          <div className="absolute top-0 right-0 ">
          <MotionImage
              animate={{ y: [0, 50, 0] }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              src="/hero-ai2.svg"
              alt="AI Coach"
              width={450}
              height={450}
            />
          </div>

          {/* right-site TEXT  */}
          <motion.div 
           animate={{ x: [0, 50, 0] }}
           transition={{
             duration: 10,
             ease: "easeInOut",
             times: [0, 0.2, 0.5, 0.8, 1],
             repeat: Infinity,
             repeatDelay: 1,
           }}
          className="md:mt-[50%] mt-[90%]  md:w-86 w-full rounded-xl bg-white py-14 px-6 drop-shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-4xl font-semibold text-[#00245F]">721+</h3>
              <h3 className="text-4xl font-semibold text-[#00245F]">1000+</h3>
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-xl font-semibold text-[#05131D]">
                Growth is our priority.
              </h3>
              <p className="text-lg text-[#05131D]/70">
                As a full-service business agency, we specialize in helping
                companies of all sizes optimize their operations
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
