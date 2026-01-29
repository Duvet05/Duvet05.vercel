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
          <a href="https://www.linkedin.com/in/galvezc" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a> • <a href="https://www.instagram.com/gonzalo_galcor/" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4 font-bauhaus text-base">SERVICES</h4>
        <div className="space-y-2 text-gray-400">
          <p>Full-Stack Development</p>
          <p>Mobile App Development</p>
          <p>Cloud Architecture</p>
          <p>Healthcare IT Solutions</p>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4 font-bauhaus text-base">TECHNOLOGIES</h4>
        <div className="space-y-2 text-gray-400">
          <p>Flutter • React • TypeScript</p>
          <p>Spring Boot • .NET</p>
          <p>Docker • AWS</p>
          <p>HL7 FHIR • Blockchain</p>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4 font-bauhaus text-base">SYSTEM.INFO</h4>
        <div className="space-y-2 text-gray-400">
          <p>VERSION: 2.0.26</p>
          <p>BUILD: {currentTime}</p>
          <p>LICENSE: MIT</p>
          <p>© 2026 Duvet05</p>
        </div>
      </div>
    </div>
  </div>
);
