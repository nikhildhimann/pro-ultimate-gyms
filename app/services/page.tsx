"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import gymData from "@/data/gym.json";
import { motion } from "framer-motion";
import { Check, Zap, Star, ShieldCheck } from "lucide-react";

const pricing = [
  { 
    name: "ELITE MONTHLY", 
    price: "₹2,500", 
    duration: "PER MONTH", 
    icon: <Zap size={24} color="#ff3333" />,
    features: ["Full Gym Access", "Luxury Locker Rooms", "Elite Cardio Zone", "Basic Nutrition Guide"] 
  },
  { 
    name: "PRO QUARTERLY", 
    price: "₹6,000", 
    duration: "3 MONTHS", 
    featured: true, 
    icon: <Star size={24} color="white" />,
    features: ["Full Gym Access", "Luxury Locker Rooms", "Elite Cardio Zone", "Advanced Diet Plans", "Weekly Body Analysis", "Locker Reservation"] 
  },
  { 
    name: "ULTIMATE ANNUAL", 
    price: "₹18,000", 
    duration: "1 YEAR", 
    icon: <ShieldCheck size={24} color="#ff3333" />,
    features: ["Full Gym Access", "2 Complimentary PT Sessions", "VIP Support Line", "Monthly PT Discounts", "Custom Nutrition Stack", "Guest Passes"] 
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "white" }}>
      <Navbar />
      
      <main style={{ paddingTop: 74 }}>
        {/* Modern Hero Section */}
        <section style={{ 
          padding: "120px 24px 80px", 
          textAlign: "center", 
          background: "linear-gradient(180deg, #121212 0%, #080808 100%)",
          position: "relative",
          overflow: "hidden"
        }}>
           <div style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: "100%", height: 300, background: "radial-gradient(circle, rgba(255,51,51,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
           
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             <p style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontWeight: 700, letterSpacing: 4, marginBottom: 16 }}>WORLD-CLASS FACILITIES</p>
             <h1 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 950, fontSize: "clamp(36px, 8vw, 72px)", textTransform: "uppercase", margin: 0, letterSpacing: "-1px" }}>
               ELITE <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>SERVICES</span>
             </h1>
             <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(16px, 2vw, 20px)", marginTop: 24, maxWidth: 700, margin: "24px auto 0" }}>
               Experience a fitness environment designed for those who refuse to settle for average.
             </p>
           </motion.div>
        </section>

        <ServicesSection />

        {/* Membership Plans Section */}
        <section style={{ padding: "120px 24px", background: "#080808" }}>
           <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 70 }}>
                 <p style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontWeight: 700, letterSpacing: 3, marginBottom: 12 }}>INVEST IN YOURSELF</p>
                 <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: 40, textTransform: "uppercase", letterSpacing: -1 }}>MEMBERSHIP <span style={{ color: "#ff3333" }}>PLANS</span></h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
                 {pricing.map((plan, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     style={{ 
                       background: plan.featured ? "linear-gradient(180deg, #151515 0%, #0a0a0a 100%)" : "rgba(255,255,255,0.02)", 
                       border: plan.featured ? "2px solid #ff3333" : "1px solid rgba(255,255,255,0.08)",
                       borderRadius: 32, padding: "60px 40px", textAlign: "center", position: "relative",
                       boxShadow: plan.featured ? "0 20px 40px rgba(255,51,51,0.15)" : "none",
                       transition: "transform 0.3s ease"
                     }}
                     whileHover={{ y: -10 }}
                   >
                      {plan.featured && (
                        <div style={{ 
                          position: "absolute", top: 24, right: 24, 
                          background: "#ff3333", color: "white", 
                          padding: "6px 16px", borderRadius: 100, 
                          fontWeight: 900, fontSize: 11, 
                          fontFamily: "'Orbitron',sans-serif",
                          letterSpacing: 1
                        }}>BEST VALUE</div>
                      )}

                      <div style={{ 
                        width: 60, height: 60, borderRadius: 16, 
                        background: plan.featured ? "rgba(255,51,51,1)" : "rgba(255,51,51,0.1)", 
                        display: "flex", alignItems: "center", justifyContent: "center", 
                        margin: "0 auto 32px" 
                      }}>
                         {plan.icon}
                      </div>

                      <h3 style={{ fontFamily: "'Orbitron',sans-serif", color: "white", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{plan.name}</h3>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: 2, marginBottom: 32, fontFamily: "'Rajdhani',sans-serif" }}>{plan.duration}</div>
                      
                      <div style={{ fontSize: 56, fontWeight: 950, color: "white", marginBottom: 40, fontFamily: "'Orbitron',sans-serif", letterSpacing: -2 }}>{plan.price}</div>
                      
                      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 48px", display: "flex", flexDirection: "column", gap: 18, textAlign: "left" }}>
                         {plan.features.map((f, fi) => (
                           <li key={fi} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                              <Check size={18} color="#ff3333" /> {f}
                           </li>
                         ))}
                      </ul>

                      <a href={gymData.whatsapp.general} style={{ 
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: "100%", padding: "20px", borderRadius: 16, 
                        background: plan.featured ? "white" : "rgba(255,255,255,0.05)",
                        color: plan.featured ? "black" : "white", 
                        textDecoration: "none", fontWeight: 900, 
                        fontFamily: "'Orbitron',sans-serif", textTransform: "uppercase", 
                        letterSpacing: 2, fontSize: 13,
                        transition: "all 0.3s ease"
                      }} className={plan.featured ? "featured-btn" : "normal-btn"}>SELECT PLAN</a>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .featured-btn:hover {
          background: #ff3333;
          color: white;
          transform: scale(1.02);
          box-shadow: 0 10px 20px rgba(255,51,51,0.3);
        }
        .normal-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}
