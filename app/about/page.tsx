"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gymData from "@/data/gym.json";
import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";
import Image from "next/image";

const timeline = [
  { year: 2018, title: "Founded", desc: "Pro Ultimate Gyms opened its doors with 3,000 sq ft of cutting-edge equipment in Sector 89." },
  { year: 2019, title: "Expansion", desc: "Added dedicated cardio zone, group fitness studio, and brought on 5 certified trainers." },
  { year: 2021, title: "Doubling Up", desc: "Expanded to 8,000 sq ft across two floors. Introduced personal training and nutrition programs." },
  { year: 2024, title: "5000+ Strong", desc: "5000+ members, 643 Google reviews averaging 4.8★. Mohali's most trusted fitness destination." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white" }}>
      <Navbar />
      
      <main style={{ paddingTop: 74 }}>
        {/* Cinematic Hero */}
        <section style={{ 
          position: "relative", 
          padding: "120px 24px", 
          textAlign: "center", 
          overflow: "hidden",
          background: "radial-gradient(circle at 50% 50%, rgba(255, 51, 51, 0.08) 0%, #080808 70%)"
        }}>
           <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }} />
           
           <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontSize: 18, fontWeight: 700, letterSpacing: 4, marginBottom: 16 }}>OUR HERITAGE</p>
                <h1 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 950, fontSize: "clamp(36px, 8vw, 76px)", lineHeight: 1, margin: "0 0 28px", textTransform: "uppercase", letterSpacing: "-2px" }}>
                  WHERE CHAMPIONS <br />
                  <span style={{ 
                    background: "linear-gradient(135deg,#ff3333,#ff6b6b)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent", 
                    backgroundClip: "text" 
                  }}>ARE FORGED</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.8, maxWidth: 700, margin: "0 auto" }}>
                  Founded in {gymData.identity.founded}, Pro Ultimate Gyms has been Mohali's heartbeat for serious fitness. We don't just build bodies; we build an elite community of high-performers.
                </p>
              </motion.div>
           </div>
        </section>

        {/* Visionary Stats */}
        <section style={{ padding: "80px 24px", background: "#080808" }}>
           <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
              <AboutCard 
                icon={<Target size={32} color="#ff3333" />}
                title="OUR MISSION"
                text="To empower elite individuals in Mohali to achieve their peak physical and mental potential through world-class facilities."
                image="/images/gym/facilities/insideshop6.webp"
              />
              <AboutCard 
                icon={<Eye size={32} color="#00ff88" />}
                title="OUR VISION"
                text="To be Punjab's most respected fitness brand, where every session brings our members closer to their ultimate personal best."
                image="/images/gym/facilities/insideshop7.webp"
              />
              <AboutCard 
                icon={<Users size={32} color="#3399ff" />}
                title="OUR COMMUNITY"
                text="A supportive environment where champions inspire champions. Join over 5,000 members on the same journey as you."
                image="/images/gym/facilities/insideshop8.webp"
              />
           </div>
        </section>

        {/* The Legacy Timeline */}
        <section style={{ padding: "120px 24px", background: "#080808" }}>
           <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 80 }}>
                 <p style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontWeight: 700, letterSpacing: 3, marginBottom: 12 }}>THE HISTORY</p>
                 <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: 40, textTransform: "uppercase", letterSpacing: -1 }}>THE <span style={{ color: "#ff3333" }}>EVOLUTION</span></h2>
              </div>

              <div style={{ position: "relative", paddingLeft: 40, borderLeft: "2px solid rgba(255,51,51,0.15)" }}>
                 {timeline.map((item, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, x: -30 }} 
                     whileInView={{ opacity: 1, x: 0 }} 
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.15, duration: 0.5 }} 
                     style={{ marginBottom: 60, position: "relative" }}
                   >
                      <div style={{ 
                        position: "absolute", left: -53, top: 4, width: 24, height: 24, 
                        borderRadius: "50%", background: "#ff3333", border: "5px solid #080808", 
                        boxShadow: "0 0 20px rgba(255,51,51,0.6)" 
                      }} />
                      
                      <div style={{ 
                        fontFamily: "'Orbitron',sans-serif", color: "#ff3333", 
                        fontWeight: 900, fontSize: 22, marginBottom: 8 
                      }}>{item.year}</div>
                      
                      <div style={{ 
                        background: "rgba(255,255,255,0.02)", 
                        border: "1px solid rgba(255,255,255,0.05)", 
                        borderRadius: 24, padding: 32,
                        backdropFilter: "blur(10px)"
                      }}>
                        <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 12, color: "white" }}>{item.title}</h3>
                        <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontSize: 15 }}>{item.desc}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Ultimate Call to Action */}
        <section style={{ 
          padding: "120px 24px", 
          textAlign: "center", 
          background: "linear-gradient(to top, #1a0000 0%, #080808 100%)",
          position: "relative"
        }}>
           <motion.div
             initial={{ scale: 0.95, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             style={{ maxWidth: 800, margin: "0 auto" }}
           >
             <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 950, fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, textTransform: "uppercase" }}>
               READY TO WRITE YOUR <span style={{ color: "#ff3333" }}>LEGACY?</span>
             </h2>
             <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, marginBottom: 44, lineHeight: 1.6 }}>
               Experience the gold standard of Mohali fitness. Your first session is on us.
             </p>
             <a href={gymData.whatsapp.trial} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", padding: "20px 48px", borderRadius: 12, 
                background: "white", color: "black", 
                textDecoration: "none", fontFamily: "'Orbitron',sans-serif", 
                fontWeight: 900, fontSize: 14, textTransform: "uppercase", 
                letterSpacing: 2, boxShadow: "0 10px 40px rgba(255,51,51,0.2)",
                transition: "all 0.3s ease"
             }} className="cta-button">
               Secure Your Free Trial
             </a>
           </motion.div>
        </section>
      </main>

      <Footer />

      <style>{`
        .cta-button:hover {
          background: #ff3333;
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(255, 51, 51, 0.4);
        }
      `}</style>
    </div>
  );
}

function AboutCard({ icon, title, text, image }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ 
        position: "relative",
        background: "#111", 
        border: "1px solid rgba(255,255,255,0.06)", 
        borderRadius: 32, 
        height: 440,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
        cursor: "default"
      }}
      whileHover={{ y: -10 }}
      className="group"
    >
       {/* Background Image */}
       <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
            className="group-hover:scale-110"
          />
          <div style={{ 
            position: "absolute", inset: 0, 
            background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.7) 60%, rgba(8,8,8,0.3) 100%)" 
          }} />
       </div>

       {/* Content */}
       <div style={{ position: "relative", zIndex: 1, padding: 40 }}>
          <div style={{ 
            width: 56, height: 56, borderRadius: 16, 
            background: "rgba(255,255,255,0.05)", 
            backdropFilter: "blur(10px)",
            display: "flex", alignItems: "center", justifyContent: "center", 
            marginBottom: 24, border: "1px solid rgba(255,255,255,0.1)"
          }} className="group-hover:border-[#ff3333] group-hover:bg-[rgba(255,51,51,0.1)] transition-all">
             {icon}
          </div>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 15, letterSpacing: 1, color: "white" }}>{title}</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontSize: 14, margin: 0 }}>{text}</p>
       </div>
    </motion.div>
  );
}
