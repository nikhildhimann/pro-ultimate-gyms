"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import trainersData from "@/data/trainers.json";
import gymData from "@/data/gym.json";
import { motion } from "framer-motion";
import { Instagram, Award, Rocket, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function TrainersPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white" }}>
      <Navbar />
      
      <main style={{ paddingTop: 74 }}>
        {/* Elite Hero Section */}
        <section style={{ 
          padding: "120px 24px 80px", 
          textAlign: "center", 
          background: "linear-gradient(180deg, #151515 0%, #080808 100%)",
          position: "relative",
          overflow: "hidden"
        }}>
           <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }} />
           
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             style={{ position: "relative", zIndex: 1 }}
           >
             <p style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontWeight: 700, letterSpacing: 4, marginBottom: 16 }}>WORLD-CLASS GUIDANCE</p>
             <h1 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 950, fontSize: "clamp(36px, 8vw, 72px)", textTransform: "uppercase", margin: 0, letterSpacing: "-1px" }}>
               ELITE <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>COACHES</span>
             </h1>
             <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(16px, 2vw, 20px)", marginTop: 24, maxWidth: 650, margin: "24px auto 0", lineHeight: 1.6 }}>
               Meet the experts dedicated to pushing you beyond your limits and achieving your ultimate potential.
             </p>
           </motion.div>
        </section>

        {/* Professional Trainers Grid */}
        <section style={{ padding: "60px 24px 100px", background: "#080808" }} className="md:py-24">
           <div style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 32 }}>
              {trainersData.map((t, i) => {
                // Using existing facility images as high-end placeholders
                const galleryImages = [
                  "/images/gym/gallery/insideshop1.webp",
                  "/images/gym/gallery/insideshop2.webp",
                  "/images/gym/gallery/insideshop3.webp",
                  "/images/gym/gallery/insideshop4.webp",
                ];

                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 40 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }} 
                    style={{ 
                      background: "#111", 
                      borderRadius: 32, 
                      overflow: "hidden", 
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                      cursor: "default",
                      display: "flex",
                      flexDirection: "column"
                    }}
                    className="group"
                    whileHover={{ y: -12, borderColor: "rgba(255,51,51,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                  >
                     {/* Trainer Visual Area */}
                     <div style={{ width: "100%", height: 400, position: "relative", overflow: "hidden" }}>
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
                          className="group-hover:scale-110"
                        />
                        <div style={{ 
                          position: "absolute", inset: 0, 
                          background: "linear-gradient(to top, #111 5%, transparent 50%, rgba(0,0,0,0.4) 100%)",
                          zIndex: 1
                        }} />
                        
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 32, zIndex: 2 }}>
                           <div style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: 26, color: "white", letterSpacing: -0.5 }}>{t.name}</div>
                           <div style={{ 
                             color: "#ff3333", fontSize: 13, fontWeight: 800, 
                             letterSpacing: 2, marginTop: 6, textTransform: "uppercase",
                             fontFamily: "'Rajdhani',sans-serif",
                             display: "flex", alignItems: "center", gap: 8
                           }}>
                             <CheckCircle2 size={14} /> {t.role}
                           </div>
                        </div>
                     </div>

                     {/* Trainer Info Area */}
                     <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
                        <div style={{ 
                          fontFamily: "'Rajdhani',sans-serif", color: "white", 
                          fontWeight: 700, fontSize: 14, marginBottom: 16,
                          background: "rgba(255,255,255,0.03)", padding: "12px 18px",
                          borderRadius: 14, border: "1px solid rgba(255,255,255,0.05)"
                        }}>
                           SPECIALTY: <span style={{ color: "#ff3333", marginLeft: 4 }}>{t.specialty}</span>
                        </div>

                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                           {t.certifications.map(c => (
                             <span key={c} style={{ 
                               background: "rgba(255,255,255,0.04)", 
                               color: "rgba(255,255,255,0.7)", padding: "6px 12px", 
                               borderRadius: 8, fontSize: 11, 
                               fontWeight: 600, textTransform: "uppercase",
                               border: "1px solid rgba(255,255,255,0.08)"
                             }}>{c}</span>
                           ))}
                        </div>

                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 28, flex: 1 }}>{t.bio}</p>
                        
                        <div style={{ 
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24
                        }}>
                           <div style={{ display: "flex", gap: 16 }}>
                              {t.instagram && (
                                <a href={t.instagram} target="_blank" rel="noopener noreferrer" style={{ 
                                  color: "rgba(255,255,255,0.4)", cursor: "pointer", transition: "all 0.3s ease" 
                                }} className="group-hover:text-[#ff3333]">
                                  <Instagram size={20} />
                                </a>
                              )}
                           </div>
                           <div style={{ 
                             fontSize: 12, color: "rgba(255,255,255,0.4)", 
                             display: "flex", alignItems: "center", gap: 8,
                             fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1
                           }}>
                              <Award size={16} color="#ff3333" /> {t.experience} EXP
                           </div>
                        </div>
                     </div>
                  </motion.div>
                );
              })}
           </div>
        </section>

        {/* Motivation CTA */}
        <section style={{ 
          padding: "120px 24px", 
          textAlign: "center", 
          background: "linear-gradient(to top, #150000 0%, #080808 100%)"
        }}>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 950, fontSize: "clamp(32px, 5vw, 42px)", marginBottom: 20, textTransform: "uppercase" }}>NEED A TRANSFORMATION?</h2>
             <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 550, margin: "0 auto 48px", fontSize: 18, lineHeight: 1.6 }}>
               Our trainers are ready to create a personalized blueprint for your success.
             </p>
             <a href={gymData.whatsapp.general} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", padding: "18px 44px", borderRadius: 12, 
                background: "white", color: "black", textDecoration: "none", 
                fontFamily: "'Orbitron',sans-serif", fontWeight: 900, 
                fontSize: 14, textTransform: "uppercase", letterSpacing: 2, 
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease"
             }} className="trainer-cta">Consult an Expert</a>
           </motion.div>
        </section>
      </main>

      <Footer />

      <style>{`
        .trainer-cta:hover { background: #ff3333; color: white; transform: translateY(-4px); box-shadow: 0 15px 30px rgba(255,51,51,0.4); }
      `}</style>
    </div>
  );
}
