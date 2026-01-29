import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiGithub, SiLinkedin, SiGmail, SiInstagram } from "react-icons/si";
import { WindowHeader } from "./layout/WindowHeader";
import Image from "next/image";

interface ContactProps {
  currentTime: string;
}

export const Contact: React.FC<ContactProps> = ({ currentTime }) => (
  <div id="contact" className="mb-12">
    <h2 className="text-4xl font-bauhaus-pixel leading-none mb-4">CONTACT</h2>
    <WindowHeader title="CONTACT.EXE" />
    <div className="border-secondary border grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="bg-primary border-b border-r-0 border-secondary p-6 lg:border-b-0 lg:border-r">
          <h3 className="text-xl font-bold mb-4 font-bauhaus whitespace-nowrap overflow-hidden w-full flex items-center">
            <span>SEND.MESSAGE</span>
            <span className="flex-1 ml-2 text-secondary" style={{ letterSpacing: '2px' }}>{'/'.repeat(40)}</span>
          </h3>
          <div className="space-y-4">
            <Input
              placeholder="NAME.INPUT"
              className="border-gray-600 text-white placeholder:text-gray-500 rounded-none"
            />
            <Input
              placeholder="EMAIL.ADDRESS"
              className="border-gray-600 text-white placeholder:text-gray-500 rounded-none"
            />
            <Textarea
              placeholder="MESSAGE.CONTENT"
              className="bg-black border-gray-600 text-white placeholder:text-gray-500 min-h-[201px] rounded-none"
            />
            <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-none cursor-pointer">TRANSMIT.DATA</Button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-secondary bg-primary border-b border-secondary p-6">
          <h3 className="text-xl font-bold mb-4 font-bauhaus whitespace-nowrap overflow-hidden w-full flex items-center">
            <span>CONTACT.LINKS</span>
            <span className="flex-1 ml-2 text-secondary" style={{ letterSpacing: '2px' }}>{'/'.repeat(40)}</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <SiGithub className="w-5 h-5 text-white" />
              <a href="https://github.com/Duvet05" target="_blank" rel="noopener noreferrer" className="text-base hover:underline">github.com/Duvet05</a>
            </div>
            <div className="flex items-center space-x-3">
              <SiLinkedin className="w-5 h-5 text-white" />
              <a href="https://www.linkedin.com/in/galvezc" target="_blank" rel="noopener noreferrer" className="text-base hover:underline">linkedin.com/in/galvezc</a>
            </div>
            <div className="flex items-center space-x-3">
              <SiGmail className="w-5 h-5 text-white" />
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@duvet05.com" target="_blank" rel="noopener noreferrer" className="text-base hover:underline">gonzalo.galvezc@pucp.edu.pe</a>
            </div>
            <div className="flex items-center space-x-3">
              <SiInstagram className="w-5 h-5 text-white" />
              <a href="https://www.instagram.com/gonzalo_galcor/" target="_blank" rel="noopener noreferrer" className="text-base hover:underline">instagram.com/gonzalo_galcor</a>
            </div>
          </div>
        </div>
        <div className="bg-primary p-6">
          <h3 className="text-xl font-bold mb-4 font-bauhaus whitespace-nowrap overflow-hidden w-full flex items-center">
            <span>LOCATION.DATA</span>
            <span className="flex-1 ml-2 text-secondary" style={{ letterSpacing: '2px' }}>{'/'.repeat(39)}</span>
          </h3>
          <div className="mb-4">
            <Image
              src="/images/lima-dithered.png"
              alt="Lima, Peru"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <div className="text-sm text-gray-400">
            <p>■ SECTOR: PERÚ</p>
            <p>■ TIMEZONE: GMT-5 {currentTime}</p>
            <p>■ STATUS: AVAILABLE.FOR.HIRE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
