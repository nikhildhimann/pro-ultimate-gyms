"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gymData from "@/data/gym.json";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white" }}>
      <Navbar />
      
      <main style={{ paddingTop: 74 }}>
        {/* Hero Section */}
        <section style={{ 
          padding: "120px 24px", 
          textAlign: "center", 
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(circle at 50% 50%, rgba(255, 51, 51, 0.1) 0%, #080808 70%)"
        }}>
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             <p style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontWeight: 700, letterSpacing: 4, marginBottom: 16 }}>REACH OUT</p>
             <h1 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 950, fontSize: "clamp(40px, 8vw, 72px)", textTransform: "uppercase", margin: 0, letterSpacing: "-2px" }}>
               GET IN <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>TOUCH</span>
             </h1>
             <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(16px, 2vw, 20px)", marginTop: 20, maxWidth: 600, margin: "20px auto 0" }}>
               Ready to transform? Have questions? Our elite support team is here to assist you 24/7.
             </p>
           </motion.div>
        </section>

        <section style={{ padding: "80px 24px", background: "#080808" }}>
           <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 32 }}>
              
              {/* Contact Info Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                 <ContactCard 
                   icon={<MapPin size={24} />}
                   title="ELITE LOCATION"
                   detail={`${gymData.location.address}, ${gymData.location.city}`}
                   subDetail={`${gymData.location.state}, India ${gymData.location.pincode}`}
                   link={gymData.location.googleMaps}
                   accent="#ff3333"
                 />
                 
                 <ContactCard 
                   icon={<MessageCircle size={24} />}
                   title="WHATSAPP CARE"
                   detail={gymData.contact.phone}
                   subDetail="Response in < 5 mins"
                   link={gymData.whatsapp.general}
                   accent="#00ff88"
                 />

                 <ContactCard 
                   icon={<Mail size={24} />}
                   title="OFFICIAL EMAIL"
                   detail={gymData.contact.email}
                   subDetail="For partnerships & support"
                   link={`mailto:${gymData.contact.email}`}
                   accent="white"
                 />
              </div>

              {/* Right Side: Hours & Map */}
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                 {/* Opening Hours */}
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    style={{ 
                      padding: 40, 
                      background: "rgba(255,255,255,0.03)", 
                      borderRadius: 32, 
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(10px)"
                    }}
                 >
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
                       <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,51,51,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Clock size={22} color="#ff3333" />
                       </div>
                       <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 18, margin: 0, letterSpacing: 1 }}>OPERATING HOURS</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                          <span style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Rajdhani',sans-serif", fontSize: 18, fontWeight: 600 }}>MON - SAT</span>
                          <span style={{ fontWeight: 800, fontSize: 16, color: "#ff3333" }}>5:30 AM - 10:00 PM</span>
                       </div>
                       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Rajdhani',sans-serif", fontSize: 18, fontWeight: 600 }}>SUNDAY</span>
                          <span style={{ fontWeight: 800, fontSize: 16, color: "#ff3333" }}>7:00 AM - 8:00 PM</span>
                       </div>
                    </div>
                 </motion.div>

                 {/* Map CTA Card */}
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ 
                      height: 350, 
                      background: "linear-gradient(45deg, #111 0%, #0a0a0a 100%)", 
                      borderRadius: 32, 
                      border: "1px solid rgba(255,255,255,0.08)", 
                      position: "relative", 
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 24,
                      textAlign: "center"
                    }}
                 >
                    <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }} />
                    <MapPin size={64} color="#ff3333" style={{ opacity: 0.5 }} />
                    <div style={{ zIndex: 1 }}>
                       <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 20, marginBottom: 8 }}>FIND US ON MAP</h3>
                       <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, marginBottom: 24 }}>Visit our world-class facility in Sector 89</p>
                       <a 
                         href={gymData.location.googleMaps} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         style={{
                           display: "inline-flex", alignItems: "center", gap: 10,
                           padding: "16px 32px", borderRadius: 12, 
                           background: "white", color: "black", 
                           textDecoration: "none", fontFamily: "'Orbitron',sans-serif", 
                           fontWeight: 800, fontSize: 13, textTransform: "uppercase", 
                           letterSpacing: 2, transition: "all 0.3s ease"
                         }}
                         className="map-button"
                       >
                         Start Navigation <Send size={16} />
                       </a>
                    </div>
                 </motion.div>
              </div>

           </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .map-button:hover {
          background: #ff3333;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 51, 51, 0.3);
        }
      `}</style>
    </div>
  );
}

function ContactCard({ icon, title, detail, subDetail, link, accent }: any) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      style={{
        display: "flex", gap: 24, padding: 32,
        borderRadius: 24, background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        textDecoration: "none", color: "inherit",
        transition: "all 0.3s ease",
      }}
      whileHover={{ background: "rgba(255,51,51,0.05)", borderColor: "rgba(255,51,51,0.2)", x: 10 }}
    >
      <div style={{ 
        width: 60, height: 60, borderRadius: 16, 
        background: `rgba(${accent === "white" ? "255,255,255" : accent === "#ff3333" ? "255,51,51" : "0,255,136"}, 0.1)`, 
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 
      }}>
        {icon}
      </div>
      <div>
        <h4 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: accent, letterSpacing: 2, marginBottom: 8 }}>{title}</h4>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{detail}</div>
        <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 14 }}>{subDetail}</div>
      </div>
    </motion.a>
  );
}
