import FAQ from "@/components/shared/FAQ";
import Feedback from "@/components/shared/Feedback";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import MobileNav from "@/components/shared/MobileNav";
import OurCourses from "@/components/shared/OurCourses";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (

    <>
      <header className="flex w-full items-center justify-between bg-gradient-to-tl from-white from-40% via-[#004FCE]/10 via-70% to-[#004FCE]/20 to-100% py-4 backdrop-blur-lg">
        <div className="md:w-10/12 w-11/12 mx-auto"> 
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-1">
                <Image src="/ai-logo.png" alt="Logo" width={50} height={10} />
                <h1 className="text-lg font-semibold">AI.SalesRank</h1>
              </div>
              <Header />
            </div>

            <Button
              className="ml-auto cursor-pointer outline-none shadow rounded-full text-base font-bold max-md:hidden"
              variant="outline"
            >
              Get Started
            </Button>
            <MobileNav />
          </nav>

          <Hero />
        </div>
      </header>
      <main>
        {/* <LiveAICoach /> */}
        <OurCourses />
        <FAQ />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}