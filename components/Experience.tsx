import React from "react";
import { WindowHeader } from "./layout/WindowHeader";
import { Award, Trophy, Rocket, Code, Heart } from "lucide-react";

export const Experience: React.FC = () => (
  <div id="experience" className="flex-1 min-w-0 flex flex-col mb-12">
    <h2 className="text-4xl font-bauhaus-pixel leading-none mb-4">EXPERIENCE & ACHIEVEMENTS</h2>

    <WindowHeader title="EXPERIENCE.EXE" />

    <div className="border border-secondary bg-primary p-6 text-white font-vt323">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* CAP Innovation & Nebu */}
        <div className="border border-secondary p-4 bg-black/30 hover:bg-black/50 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="text-primary w-6 h-6" />
            <h3 className="text-xl font-bauhaus">CAP INNOVATION WINNER</h3>
          </div>
          <p className="text-base leading-relaxed mb-2">
            Winner of the CAP Innovation award for entrepreneurship and innovation.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <Rocket className="text-secondary w-5 h-5" />
            <span className="text-secondary font-bold">Co-Founder PeruHCE</span>
          </div>
          <p className="text-sm mt-2 text-gray-300">
            Startup focused on innovative technology solutions.
          </p>
        </div>

        {/* Santander X Explorer */}
        <div className="border border-secondary p-4 bg-black/30 hover:bg-black/50 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-primary w-6 h-6" />
            <h3 className="text-xl font-bauhaus">SANTANDER X EXPLORER 2026</h3>
          </div>
          <p className="text-base leading-relaxed">
            Participant in the Santander X Explorer program, a global entrepreneurship initiative supporting early-stage startups through mentorship, resources, and networking opportunities.
          </p>
        </div>

        {/* Flow S.A.C.S. */}
        <div className="border border-secondary p-4 bg-black/30 hover:bg-black/50 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <Code className="text-primary w-6 h-6" />
            <h3 className="text-xl font-bauhaus">FLOW S.A.C.S.</h3>
          </div>
          <p className="text-base leading-relaxed mb-2">
            IT consulting and software development company specializing in innovative tech solutions. Active since December 2025.
          </p>
          <div className="flex flex-col gap-1 text-sm text-gray-300 mt-2">
            <span>RUC: 20615226093</span>
            <a
              href="https://flow-telligence.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              → flow-telligence.com
            </a>
          </div>
        </div>

        {/* Santa Clotilde */}
        <div className="border border-secondary p-4 bg-black/30 hover:bg-black/50 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="text-primary w-6 h-6" />
            <h3 className="text-xl font-bauhaus">SANTA CLOTILDE PROJECT</h3>
          </div>
          <p className="text-base leading-relaxed">
            Healthcare technology initiative focused on improving patient care and medical data management through innovative software solutions.
          </p>
        </div>

        {/* Conectathon 2026 & HL7 */}
        <div className="border border-secondary p-4 bg-black/30 hover:bg-black/50 transition-colors md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Code className="text-primary w-6 h-6" />
            <h3 className="text-xl font-bauhaus">CONECTATHON 2026 & HL7/FHIR EXPERTISE</h3>
          </div>
          <p className="text-base leading-relaxed mb-3">
            Participated in Conectathon 2026, a healthcare interoperability testing event. Specialized in HL7 FHIR standards for healthcare data exchange and integration.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="border border-secondary px-3 py-1 text-sm bg-black/50">HL7 FHIR</span>
            <span className="border border-secondary px-3 py-1 text-sm bg-black/50">Healthcare Interoperability</span>
            <span className="border border-secondary px-3 py-1 text-sm bg-black/50">Blockchain</span>
            <span className="border border-secondary px-3 py-1 text-sm bg-black/50">Data Integration</span>
          </div>
        </div>

      </div>
    </div>
  </div>
);
