"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BMICalculator from "@/components/sections/BMICalculator";
import { motion } from "framer-motion";
import { Info, HelpCircle } from "lucide-react";

export default function BMIPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white" }}>
      <Navbar />
      
      <main style={{ paddingTop: 74 }}>
        <section style={{ 
          padding: "100px 24px 40px", 
          textAlign: "center", 
          background: "linear-gradient(180deg, #151515 0%, #080808 100%)" 
        }}>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             <p style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontWeight: 700, letterSpacing: 4, marginBottom: 12 }}>ASSESS YOUR PROGRESS</p>
             <h1 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 950, fontSize: "clamp(36px, 8vw, 72px)", textTransform: "uppercase", margin: 0, letterSpacing: "-1px" }}>
               BODY MASS <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>INDEX</span>
             </h1>
             <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, marginTop: 24, maxWidth: 650, margin: "24px auto 0" }}>
               A simple yet effective tool to categorize your body composition.
             </p>
           </motion.div>
        </section>

        <BMICalculator />

        {/* Informative Grid */}
        <section style={{ padding: "40px 24px 120px", background: "#080808" }}>
           <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
              <div style={{ 
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid rgba(255,255,255,0.06)", 
                borderRadius: 28, padding: 40 
              }}>
                 <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,51,51,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Info size={24} color="#ff3333" />
                    </div>
                    <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 800, fontSize: 18, margin: 0, letterSpacing: 1 }}>UNDERSTANDING BMI</h3>
                 </div>
                 <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                   Body Mass Index (BMI) is a standardized index of weight-for-height used globally to screen for health categories based on body composition.
                 </p>
              </div>
              
              <div style={{ 
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid rgba(255,255,255,0.06)", 
                borderRadius: 28, padding: 40 
              }}>
                 <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,255,136,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <HelpCircle size={24} color="#00ff88" />
                    </div>
                    <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 800, fontSize: 18, margin: 0, letterSpacing: 1 }}>PRECISION MATTERS</h3>
                 </div>
                 <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                   BMI is a starting point. Since it doesn't distinguish between muscle and fat, our coaches provide advanced body analysis for more precise tracking.
                 </p>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
