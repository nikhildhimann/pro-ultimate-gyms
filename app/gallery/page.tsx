"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/sections/GallerySection";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white" }}>
      <Navbar />
      
      <main style={{ paddingTop: 74 }}>
        <section style={{ 
          padding: "100px 24px 20px", 
          textAlign: "center", 
          background: "linear-gradient(180deg, #151515 0%, #080808 100%)" 
        }}>
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
           >
             <p style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontWeight: 700, letterSpacing: 4, marginBottom: 12 }}>VISUAL TOUR</p>
             <h1 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 950, fontSize: "clamp(36px, 8vw, 72px)", textTransform: "uppercase", margin: 0, letterSpacing: "-1px" }}>
               OUR <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>FACILITY</span>
             </h1>
             <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, marginTop: 20, maxWidth: 600, margin: "20px auto 0" }}>
               Take a look inside Mohali's premier fitness destination.
             </p>
           </motion.div>
        </section>
        
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
}
