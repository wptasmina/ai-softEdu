import { MessageCircleMore, NotepadTextDashed } from "lucide-react";
import Image from "next/image";

export default function QuickActions() {
  return (
    <div className="w-full flex-1 rounded-lg bg-[#f2f3f3] p-6">
      <h1 className="text-start text-2xl font-bold text-[#002868]">
        Quick Actions
      </h1>
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="mt-4 flex-1 rounded-lg bg-white p-4">
          <span>
            <Image
                src="/Frame.png"
                alt="icon"
                height={30}
                width={30}
                // className="h-6 w-6" 
                />
            <span className="text-md font-semibold text-[#171D25]">
              Generate Script
            </span>
          </span>
        </div>
        <div className="mt-4 flex-1 rounded-lg bg-white p-4">
          <span>
             <Image
                src="/msg.png"
                alt="icon"
                height={30}
                width={30}
                // className="h-6 w-6" 
                />
            <span className="text-md font-semibold text-[#171D25]">
              Practice Pitch
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
