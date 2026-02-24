"use client";

import { useEffect, useRef, useState } from "react";
import gymData from "@/data/gym.json";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-14 right-0 bg-white text-gray-900 text-xs font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
          Chat with us 💬
          <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45" />
        </div>
      )}

      <a
        href={gymData.whatsapp.general}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat with Pro Ultimate Gyms on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
      >
        <svg className="w-7 h-7 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 0C5.373 0 0 5.373 0 12c0 2.117.552 4.107 1.52 5.836L.053 23.448l5.772-1.513A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 21.818a9.818 9.818 0 01-5.007-1.37l-.359-.213-3.72 1.216 1.186-3.637-.234-.374A9.786 9.786 0 012.182 12c0-5.413 4.405-9.818 9.818-9.818 5.413 0 9.818 4.405 9.818 9.818 0 5.412-4.405 9.818-9.818 9.818z"/>
        </svg>
      </a>
    </div>
  ) : null;
}
