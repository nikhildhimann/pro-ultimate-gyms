"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import servicesData from "@/data/services.json";
import gymData from "@/data/gym.json";

const iconMap: Record<string, string> = {
  Dumbbell: "🏋️",
  Users: "👥",
  Zap: "⚡",
  Heart: "❤️",
  Apple: "🥗",
  Trophy: "🏆",
};

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ background: "#080808", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            style={{ fontFamily: "'Bebas Neue',cursive", color: "#ff3333", fontSize: 18, letterSpacing: "0.3em", marginBottom: 8 }}
          >
            WHAT WE OFFER
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,46px)", color: "white", margin: 0, textTransform: "uppercase" }}
          >
            PREMIUM{" "}
            <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              SERVICES
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 16, marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}
          >
            Everything you need to achieve your fitness goals, all under one roof.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            // Mapping generated images to services
            const serviceImages: Record<string, string> = {
              "personal-training": "/images/gym/services/personal-training.png",
              "group-classes": "/images/gym/services/group-classes.png",
              "strength-training": "/images/gym/gallery/insideshop1.webp",
              "cardio-zone": "/images/gym/gallery/insideshop4.webp",
              "nutrition-guidance": "/images/gym/gallery/insideshop9.webp",
              "elite-coaches": "/images/gym/gallery/insideshop5.webp"
            };

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                style={{
                  position: "relative",
                  background: "#111",
                  borderRadius: 24,
                  height: 480,
                  display: "flex", flexDirection: "column",
                  transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  cursor: "pointer",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                className="group"
              >
                {/* Background Image */}
                <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                  <Image
                    src={serviceImages[service.id] || "/images/gym/hero/hero.webp"}
                    alt={service.title.en}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
                    className="group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.7) 50%, rgba(8,8,8,0.98) 100%)",
                  }} />
                </div>

                {/* Content Container */}
                <div style={{ 
                  position: "relative", zIndex: 2, 
                  height: "100%", padding: "32px",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end"
                }}>
                  {/* Icon & Title */}
                  <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 15 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: "rgba(255,51,51,0.2)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,51,51,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22,
                    }} className="group-hover:bg-[#ff3333] transition-colors duration-300">
                      {iconMap[service.icon] || "🏅"}
                    </div>
                    <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 800, fontSize: 18, color: "white", margin: 0, textTransform: "uppercase", letterSpacing: 1 }}>
                      {service.title.en}
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: "0 0 20px" }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {service.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                        <div style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(0,255,136,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ color: "#00ff88", fontSize: 10 }}>✓</span>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <div>
                      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700 }}>Starting from</div>
                      <div style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: 18, color: "#ff3333" }}>
                        {service.price}
                      </div>
                    </div>
                    <a
                      href={service.id === "elite-coaches" ? "/trainers" : gymData.whatsapp.general}
                      target={service.id === "elite-coaches" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      style={{
                        padding: "10px 20px", borderRadius: 10,
                        background: "linear-gradient(135deg,#ff3333,#cc0000)",
                        color: "white", textDecoration: "none",
                        fontFamily: "'Rajdhani',sans-serif", fontWeight: 800, fontSize: 12,
                        letterSpacing: 1, textTransform: "uppercase",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(255,51,51,0.2)"
                      }}
                      className="group-hover:translate-x-1"
                    >
                      {service.id === "elite-coaches" ? "View" : "Join"} <ArrowRight size={14} style={{ display: "inline", marginLeft: 4 }} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
