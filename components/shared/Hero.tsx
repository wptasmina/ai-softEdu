import { LayoutDashboard, Pyramid } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-10">
      <div className="grid md:grid-cols-2 grid-cols-1  gap-8">

        {/* Hero text  */}
        <div className="flex flex-col border">
          <h2 className="text-4xl font-bold leading-14 text-[#111111] max-md:text-center xl:text-6xl xl:leading-20">
            Your AI- <br /> Powered <br /> Sales Coach.
          </h2>

          <div className="mt-8 flex flex-col items-center gap-6 md:flex-row overflow-hidden">
            <Image
              src={"/hero-ai.svg"}
              alt="AI Coach"
              width={200}
              height={200}
              className="mt-8"
            />
            <p className="mt-4 max-w-xs text-xl leading-relaxed text-[#05131D]/70">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </p>
          </div>

          <div className="mt-8 flex w-full flex-col gap-6 items-center justify-between md:flex-row">
            {/* lift-side Banner icon-1  */}
            <div className="flex items-center gap-6">
              <span className="rounded-md bg-white p-4 drop-shadow-xl">
                <Image
                  src={"/icon-1.png"}
                  alt="icon"
                  width={30}
                  height={30}
                  className=" rounded-md"
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
                  className=" rounded-md"
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
        <div className="relative border">
          <div className="absolute top-0 right-0">
            <Image
              src="/hero-ai2.svg"
              alt="AI Coach"
              width={400}
              height={400}
            />
          </div>
        

        {/* <div className="-bottom-full w-70 rounded-xl bg-white py-8 px-6 drop-shadow-xl md:absolute md:-bottom-8 md:ml-8 lg:-left-0 lg:ml-0 xl:-left-32">
            <div className="flex items-center justify-between">
              <h3 className="text-4xl font-semibold text-[#00245F]">721+</h3>
              <h3 className="text-4xl font-semibold text-[#00245F]">1000+</h3>
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-xl font-semibold text-[#111111]">
                Growth is our priority.
              </h3>
              <p className="text-lg text-[#05131D]/70">
                As a full-service business agency, we specialize in helping
                companies of all sizes optimize their operations
              </p>
            </div>
          </div> */}

        </div>

      </div>
    </section>
  );
}
