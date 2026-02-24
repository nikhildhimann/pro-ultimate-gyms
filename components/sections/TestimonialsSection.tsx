"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import testimonialData from "@/data/testimonials.json";

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ fontSize: 14, color: s <= n ? "#fbbf24" : "rgba(255,255,255,0.15)" }}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const doubled = [...testimonialData, ...testimonialData];

  return (
    <section ref={ref} style={{ background: "#0a0a0a", padding: "80px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            style={{ fontFamily: "'Bebas Neue',cursive", color: "#ff3333", fontSize: 18, letterSpacing: "0.3em", marginBottom: 8 }}>
            MEMBER STORIES
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(26px,4vw,44px)", color: "white", margin: 0, textTransform: "uppercase" }}>
            REAL RESULTS,{" "}
            <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              REAL PEOPLE
            </span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right,#0a0a0a,transparent)", zIndex: 2 }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left,#0a0a0a,transparent)", zIndex: 2 }} />

        <div style={{ display: "flex", width: "max-content", animation: "marquee 40s linear infinite", gap: 16, padding: "8px 0" }}>
          {doubled.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              style={{
                width: 300, flexShrink: 0,
                background: "#111",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 18,
                padding: "24px 22px",
              }}
            >
              <Stars n={t.rating} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "12px 0 16px", fontStyle: "italic" }}>
                &ldquo;{t.review}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "linear-gradient(135deg,#ff3333,#cc0000)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Orbitron',sans-serif", fontWeight: 900, color: "white", fontSize: 14,
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 14, color: "white" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{t.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rating summary */}
      <div style={{ maxWidth: 1200, margin: "40px auto 0", padding: "0 24px", textAlign: "center" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 16,
          padding: "16px 32px", borderRadius: 14,
          background: "#111", border: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: 36, background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>4.8</div>
          <div>
            <div style={{ display: "flex", gap: 2, marginBottom: 4 }}>{[1,2,3,4,5].map(s => <span key={s} style={{ color: "#fbbf24", fontSize: 16 }}>★</span>)}</div>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>643 Google reviews</div>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 18px", borderRadius: 10, fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: 1, textTransform: "uppercase", textDecoration: "none",
              background: "rgba(255,51,51,0.1)", color: "#ff3333",
              border: "1px solid rgba(255,51,51,0.2)",
            }}
          >
            Read All →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
