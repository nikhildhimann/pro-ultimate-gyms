"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, Award, Maximize } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import gymData from "@/data/gym.json";
import Image from "next/image";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Active Members", desc: "Growing every month", image: "/images/gym/stats/members.png" },
  { icon: Star, value: 4.8, suffix: "★", label: "Google Rating", desc: "643 verified reviews", decimals: 1, image: "/images/gym/stats/rating.png" },
  { icon: Award, value: 15, suffix: "+", label: "Expert Trainers", desc: "Certified professionals", image: "/images/gym/stats/trainers.png" },
  { icon: Maximize, value: 8000, suffix: "+", label: "Sq Ft Facility", desc: "State-of-the-art equipment", image: "/images/gym/stats/facility.png" },
];

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ background: "#080808", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontSize: 16, fontWeight: 700, letterSpacing: "0.4em", marginBottom: 12, textTransform: "uppercase" }}
          >
            BY THE NUMBERS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 950, fontSize: "clamp(28px,6vw,52px)", color: "white", margin: 0, textTransform: "uppercase", letterSpacing: "-1px" }}
          >
            MOHALI&apos;S MOST TRUSTED{" "}
            <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              FITNESS HUB
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                style={{
                  position: "relative",
                  borderRadius: 24,
                  height: 380,
                  overflow: "hidden",
                  cursor: "default",
                  border: "1px solid rgba(255,51,51,0.15)",
                }}
                className="group"
              >
                {/* Background Image */}
                <Image
                  src={stat.image}
                  alt={stat.label}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                  className="group-hover:scale-110"
                />
                
                {/* Dark Overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(8,8,8,0.95) 20%, rgba(8,8,8,0.4) 60%, rgba(8,8,8,0.7) 100%)",
                  zIndex: 1
                }} />

                {/* Content */}
                <div style={{
                  position: "relative",
                   zIndex: 2,
                   height: "100%",
                   padding: "40px 30px",
                   display: "flex",
                   flexDirection: "column",
                   justifyContent: "flex-end",
                   textAlign: "center"
                }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: 12,
                    background: "rgba(255,51,51,0.2)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,51,51,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                    transition: "all 0.3s ease"
                  }} className="group-hover:scale-110 group-hover:bg-[#ff3333]">
                    <Icon size={22} color="white" />
                  </div>

                  <div style={{
                    fontFamily: "'Orbitron',sans-serif", fontWeight: 950,
                    fontSize: "clamp(32px,4vw,46px)",
                    background: "linear-gradient(135deg,#ffffff,#cccccc)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    lineHeight: 1,
                    marginBottom: 8
                  }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </div>

                  <div style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 800, fontSize: 13, color: "#ff3333", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                    {stat.label}
                  </div>
                  
                  <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>
                    {stat.desc}
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
