"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Clock, Users, Trophy, Zap, Heart } from "lucide-react";
import gymData from "@/data/gym.json";

const benefits = [
  { icon: Shield, title: "Certified Trainers", desc: "Every trainer holds international certifications and has a proven track record of client transformations." },
  { icon: Clock, title: "Open 7 Days", desc: "Open 5:30 AM to 10 PM Monday–Saturday, 7 AM–8 PM Sunday. We work around your schedule." },
  { icon: Users, title: "5,000+ Community", desc: "Join Mohali's largest and most supportive fitness community. Motivation built into every session." },
  { icon: Trophy, title: "Real Results", desc: "643 five-star reviews and thousands of transformation stories speak for themselves." },
  { icon: Zap, title: "Premium Equipment", desc: "8,000 sq ft of state-of-the-art equipment maintained to the highest standards, always." },
  { icon: Heart, title: "Personalized Plans", desc: "No cookie-cutter programs. Every member gets a plan tailored to their unique goals and body." },
];

export default function WhyUsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ background: "#0d0d0d", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            style={{ fontFamily: "'Bebas Neue',cursive", color: "#ff3333", fontSize: 18, letterSpacing: "0.3em", marginBottom: 8 }}>
            WHY CHOOSE US
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(26px,4vw,44px)", color: "white", margin: 0, textTransform: "uppercase" }}>
            THE PRO ULTIMATE{" "}
            <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              DIFFERENCE
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 16, marginTop: 12 }}>
            We don&apos;t just offer a gym. We build athletes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.2 }}
                whileHover={{ y: -4, borderColor: "rgba(255,51,51,0.25)" }}
                style={{
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 18,
                  padding: "24px",
                  display: "flex", gap: 18, alignItems: "flex-start",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: "rgba(255,51,51,0.08)",
                  border: "1px solid rgba(255,51,51,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={22} color="#ff3333" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 700, fontSize: 13, color: "white", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 0.5 }}>
                    {b.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 48,
            background: "linear-gradient(135deg,rgba(255,51,51,0.12),rgba(255,51,51,0.04))",
            border: "1px solid rgba(255,51,51,0.2)",
            borderRadius: 20,
            padding: "32px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24,
          }}
          className="text-center md:text-left"
        >
          <div style={{ flex: "1 1 300px" }}>
            <div style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(18px, 3vw, 22px)", color: "white", marginBottom: 6 }}>
              Ready to experience the difference?
            </div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.45)" }}>
              Your first session is completely free. No commitment required.
            </div>
          </div>
          <a
            href={gymData.whatsapp.trial}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 12,
              background: "linear-gradient(135deg,#ff3333,#cc0000)",
              color: "white", textDecoration: "none",
              fontFamily: "'Orbitron',sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: 2, textTransform: "uppercase",
              boxShadow: "0 0 30px rgba(255,51,51,0.4)",
              whiteSpace: "nowrap",
            }}
          >
            Book Free Trial →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
