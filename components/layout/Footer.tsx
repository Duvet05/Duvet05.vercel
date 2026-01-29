import { Terminal } from "lucide-react";
import React from "react";

interface FooterProps {
  currentTime: string;
}

export const Footer: React.FC<FooterProps> = ({ currentTime }) => (
  <div className="border-t border-secondary pt-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 border border-white flex items-center justify-center">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <span className="text-2xl font-bauhaus-pixel mb-[-8]">DUVET05</span>
        </div>
        <p className="text-gray-400">
          Gonzalo Galvez Cortez - Software Developer focused on building scalable applications and innovative solutions. Open for collaborations and new opportunities.
        </p>
        <p className="text-gray-500 mt-2 text-xs">
          <a href="https://www.linkedin.com/in/galvezc" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4 font-bauhaus text-base">SERVICES</h4>
        <div className="space-y-2 text-gray-400">
          <p>3D Modeling & Animation</p>
          <p>WebGL Development</p>
          <p>Interactive Experiences</p>
          <p>Virtual Environments</p>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4 font-bauhaus text-base">TECHNOLOGIES</h4>
        <div className="space-y-2 text-gray-400">
          <p>Blender • Maya • ZBrush</p>
          <p>Three.js • WebGL • React</p>
          <p>Unreal Engine • Unity</p>
          <p>Substance Suite</p>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4 font-bauhaus text-base">SYSTEM.INFO</h4>
        <div className="space-y-2 text-gray-400">
          <p>VERSION: 2.0.24</p>
          <p>BUILD: {currentTime}</p>
          <p>LICENSE: CREATIVE.COMMONS</p>
          <p>© 2025 Duvet05</p>
        </div>
      </div>
    </div>
  </div>
);
