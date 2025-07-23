"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { config } from "@/lib/config";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${config.whatsapp.phoneNumber}?text=${encodeURIComponent(config.whatsapp.defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="bg-white hover:bg-gray-50 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-16 h-16 p-0 overflow-hidden border-2 border-green-500"
        aria-label="Contactar por WhatsApp"
      >
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {config.whatsapp.tooltipText}
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-4 border-r-black border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
    </div>
  );
} 