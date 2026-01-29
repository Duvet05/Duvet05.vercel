import React from "react";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { usePathname } from "next/navigation";

interface BrowserHeaderProps {
  tracks: { name: string; src: string }[];
  currentTrack: number;
  isPlaying: boolean;
  playerState: string;
  volume: number;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  handlePrev: () => void;
  handlePlayPause: () => void;
  handleNext: () => void;
  setVolume: (v: number) => void;
  handleEnded: () => void;
  toggleMute: () => void;
  isMuted: boolean;
}

export const BrowserHeader: React.FC<BrowserHeaderProps> = (props) => {
  const pathname = usePathname();
  const currentUrl = pathname === '/projects' ? 'HTTPS://DUVET05.XYZ/PROJECTS' : 'HTTPS://DUVET05.XYZ';
  
  return (
    <>
      <div className="bg-primary border-b border-secondary p-2 pl-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500"></div>
          <div className="w-3 h-3 bg-yellow-500"></div>
          <div className="w-3 h-3 bg-green-500"></div>
        </div>
        <div className="flex-1 min-w-0 ml-4 mr-2">
          <div className="bg-black border border-gray-600 px-3 py-1 text-sm truncate overflow-hidden whitespace-nowrap">
            {currentUrl}
          </div>
        </div>
        <div className="flex space-x-1 group">
          <a
            href="https://github.com/Duvet05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-primary hover:bg-secondary rounded-none h-8 py-1 flex items-center cursor-pointer"
            >
              <SiGithub className="w-5 h-5" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/galvezc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-primary hover:bg-secondary rounded-none h-8 py-1 flex items-center cursor-pointer"
            >
              <SiLinkedin className="w-5 h-5" />
            </Button>
          </a>
          <a
            href="mailto:gonzalo.galvezc@pucp.edu.pe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-primary hover:bg-secondary rounded-none h-8 py-1 flex items-center cursor-pointer"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
      <Navigation {...props} />
    </>
  );
};