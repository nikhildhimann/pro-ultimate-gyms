"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Zap, CheckCircle2 } from "lucide-react";
import gymData from "@/data/gym.json";

const features = [
  "Expert Personal Training",
  "Modern Lifting Equipment",
  "Transformative Classes",
  "Secure Your Spot Now"
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen lg:min-h-[90vh]" style={{ background: "#080808" }} />;

  return (
    <section
      className="relative flex items-center overflow-hidden bg-[#080808] min-h-screen lg:min-h-[90vh] py-[100px] lg:py-[100px] mb-[-1px]"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Ambient Glow */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-10%",
        width: "50%",
        height: "60%",
        background: "radial-gradient(circle, rgba(255,51,51,0.08) 0%, transparent 70%)",
        filter: "blur(80px)",
        zIndex: 1
      }} />

      {/* Grid pattern overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05, zIndex: 1,
        backgroundImage: "radial-gradient(#ff3333 0.5px, transparent 0.5px)",
        backgroundSize: "30px 30px",
      }} />

      {/* Main Container */}
      <div style={{ 
        position: "relative", 
        zIndex: 10, 
        maxWidth: 1400, 
        margin: "0 auto", 
        width: "100%", 
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        gap: 60,
      }} className="flex-col lg:flex-row min-h-[calc(100vh-200px)] lg:min-h-0">
        
        {/* LEFT SIDE: Text Content */}
        <div style={{ flex: 1.2, position: "relative", zIndex: 20 }} className="text-center lg:text-left w-full">
          {/* LIMITED TIME OFFER Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(255,51,51,0.3)",
              borderRadius: 8, padding: "8px 20px", marginBottom: 24,
              background: "rgba(255,51,51,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span style={{ 
              fontFamily: "'Orbitron',sans-serif", fontSize: 13, color: "#ff3333", 
              fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" 
            }}>
              ⚡ LIMITED TIME OFFER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontWeight: 950,
              lineHeight: 1.1,
              margin: "0 0 24px",
              fontSize: "clamp(42px, 7vw, 90px)",
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "-2px",
            }}
          >
            SECURE YOUR <br />
            <span style={{
              background: "linear-gradient(135deg,#ff3333,#ff6b6b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>SPOT TODAY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 600,
              marginBottom: 32,
              letterSpacing: 1,
              maxWidth: 600
            }}
            className="mx-auto lg:mx-0"
          >
            Achieve Your <span style={{ color: "#ff3333" }}>Fitness Goal</span> with Mohali&apos;s Elite Training Center
          </motion.p>

          {/* Feature List */}
          <div style={{ 
            display: "flex", flexWrap: "wrap", gap: "12px 24px", 
            marginBottom: 40, maxWidth: 600
          }} className="justify-center lg:justify-start">
            {features.map((f, i) => (
              <motion.div 
                key={f}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <CheckCircle2 size={18} color="#ff3333" />
                <span style={{ 
                  fontFamily: "'Rajdhani',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.9)", 
                  fontWeight: 600, letterSpacing: 0.5 
                }}>{f}</span>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href={gymData.whatsapp.trial}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
                padding: "18px 40px", borderRadius: 12,
                background: "linear-gradient(135deg,#ff3333,#cc0000)",
                color: "white", textDecoration: "none",
                fontFamily: "'Orbitron',sans-serif", fontWeight: 800, fontSize: 14,
                letterSpacing: 1.5, textTransform: "uppercase",
                boxShadow: "0 10px 30px rgba(255,51,51,0.35)",
                transition: "all 0.3s ease",
              }}
              className="hover:scale-105"
            >
              <Zap size={18} /> Claim Free Trial
            </a>
            <a
              href={`tel:${gymData.contact.phone}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
                padding: "18px 40px", borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white", textDecoration: "none",
                fontFamily: "'Orbitron',sans-serif", fontWeight: 800, fontSize: 14,
                letterSpacing: 1.5, textTransform: "uppercase",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              className="hover:bg-white/10"
            >
              Join the Elite
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Featured Image (Background on Mobile) */}
        <div 
          style={{ flex: 1 }} 
          className="absolute inset-0 lg:relative lg:inset-auto lg:flex-1 block z-0 lg:z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
            className="h-full lg:h-[550px] lg:rounded-[40px] lg:border lg:border-[#ff3333]/20 lg:shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          >
            <Image
              src="/images/gym/hero/hero.webp"
              alt="Elite Gym Interior"
              fill
              className="object-contain lg:object-cover opacity-30 lg:opacity-100"
              style={{ objectPosition: "center" }}
              priority
            />
            {/* Visual enhancements on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent lg:block hidden" />
            
            {/* Mobile Dark Overlay Layer */}
            <div className="absolute inset-0 bg-black/60 lg:hidden" />
          </motion.div>

          {/* Decorative element behind image */}
          <div 
            className="absolute top-[10%] right-[-5%] w-[110%] h-full border-2 border-[#ff3333]/10 rounded-[40px] z-[-1] pointer-events-none lg:block hidden" 
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute", bottom: 40, left: 0, right: 0, zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          color: "rgba(255,255,255,0.3)",
          pointerEvents: "none"
        }}
      >
        <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 11, letterSpacing: 4, fontWeight: 700 }}>EXPLORE</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
