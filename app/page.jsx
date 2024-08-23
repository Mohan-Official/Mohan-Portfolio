'use client';
import { useEffect } from "react";
import ProfileSection from "@/components/ProfileSection";
import SocialmediaIcons from "@/components/SocialmediaIcons";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  useEffect(() => {
    // Embed chatbot script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("chatbotId", "_gEOaoqBDr_zXMAalTt_c");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-14">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              FULL STACK DEVELOPER
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-secondPrimary">Mohan R</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a Full Stack Developer who creates elegant websites and is also interested in learning new languages.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <span>Catch me On..</span>
              <div className="mb-8 xl:mb-0">
                <SocialmediaIcons containerStyle="flex gap-6" iconStyle="w-9 h-9 border rounded-full flex justify-center items-center hover:text-secondPrimary" />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <ProfileSection />
          </div>
        </div>
      </div>
      <Statistics />
    </section>
  );
}
