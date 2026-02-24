"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scale, Calculator, ArrowRight, RefreshCw } from "lucide-react";
import gymData from "@/data/gym.json";

type BMIResult = {
  bmi: number;
  category: string;
  color: string;
  gradient: string;
  advice: string;
  plan: string;
};

function getBMIResult(bmi: number): BMIResult {
  if (bmi < 18.5)
    return { bmi, category: "Underweight", color: "#3b82f6", gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)", advice: "Focus on healthy weight gain with strength training and nutrition.", plan: "Mass Building Program" };
  if (bmi < 25)
    return { bmi, category: "Normal Weight", color: "#22c55e", gradient: "linear-gradient(135deg, #22c55e, #4ade80)", advice: "Great! Maintain with balanced workouts and nutrition.", plan: "Maintenance & Toning Program" };
  if (bmi < 30)
    return { bmi, category: "Overweight", color: "#eab308", gradient: "linear-gradient(135deg, #eab308, #facc15)", advice: "Combine cardio and strength training with diet optimization.", plan: "Fat Loss Accelerator Program" };
  return { bmi, category: "Obese", color: "#ef4444", gradient: "linear-gradient(135deg, #ef4444, #f87171)", advice: "Start with low-impact exercises and consult our trainer immediately.", plan: "Medical Fitness Program" };
}

interface BMICalculatorProps {
  compact?: boolean;
}

export default function BMICalculator({ compact = false }: BMICalculatorProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "male",
    unit: "metric",
  });
  const [result, setResult] = useState<BMIResult | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    let h = parseFloat(form.height);
    const w = parseFloat(form.weight);
    if (!h || !w) return;

    if (form.unit === "imperial") {
      h = h * 0.3048; // feet to meters
    } else {
      h = h / 100; // cm to meters
    }
    const bmi = w / (h * h);
    setResult(getBMIResult(Math.round(bmi * 10) / 10));
  };

  const reset = () => {
    setResult(null);
    setForm({ height: "", weight: "", age: "", gender: "male", unit: "metric" });
  };

  const gaugePos = result
    ? Math.min(100, Math.max(0, ((result.bmi - 15) / (40 - 15)) * 100))
    : 0;

  return (
    <section
      ref={ref}
      style={{ background: "#0a0a0a", padding: compact ? "40px 0" : "80px 24px" }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {!compact && (
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              style={{ fontFamily: "'Bebas Neue',cursive", color: "#ff3333", fontSize: 18, letterSpacing: "0.3em", marginBottom: 8 }}>
              KNOW YOUR STATS
            </motion.p>
            <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,40px)", color: "white", margin: 0, textTransform: "uppercase" }}>
              BMI <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>CALCULATOR</span>
            </h2>
          </div>
        )}

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           style={{
             background: "#111", border: "1px solid rgba(255,255,255,0.06)",
             borderRadius: 24, padding: "32px 28px",
             boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
           }}
        >
          {!result ? (
            <form onSubmit={calculate} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
               {/* Unit toggle */}
               <div style={{ display: "flex", background: "#1a1a1a", padding: 4, borderRadius: 12 }}>
                  {["metric", "imperial"].map(u => (
                    <button
                      key={u} type="button" onClick={() => setForm(f => ({...f, unit: u}))}
                      style={{
                        flex: 1, padding: "10px 0", borderRadius: 10, border: "none",
                        background: form.unit === u ? "#ff3333" : "transparent",
                        color: form.unit === u ? "white" : "rgba(255,255,255,0.4)",
                        fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 13,
                        textTransform: "uppercase", letterSpacing: 1, cursor: "pointer", transition: "all 0.3s ease"
                      }}
                    >
                      {u}
                    </button>
                  ))}
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Height ({form.unit === "metric" ? "cm" : "ft"})</label>
                    <input
                      type="number" name="height" value={form.height} onChange={handleChange}
                      placeholder={form.unit === "metric" ? "175" : "5.9"}
                      style={{ width: "100%", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 16px", color: "white", outline: "none" }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Weight (kg)</label>
                    <input
                      type="number" name="weight" value={form.weight} onChange={handleChange}
                      placeholder="70"
                      style={{ width: "100%", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 16px", color: "white", outline: "none" }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Age</label>
                    <input
                      type="number" name="age" value={form.age} onChange={handleChange}
                      placeholder="25"
                      style={{ width: "100%", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 16px", color: "white", outline: "none" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Gender</label>
                    <select
                      name="gender" value={form.gender} onChange={handleChange}
                      style={{ 
                        width: "100%", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)", 
                        borderRadius: 12, padding: "12px 16px", color: "white", outline: "none",
                        appearance: "none",
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                        backgroundSize: "16px",
                      }}
                    >
                      <option value="male" style={{ background: "#0a0a0a", color: "white" }}>Male</option>
                      <option value="female" style={{ background: "#0a0a0a", color: "white" }}>Female</option>
                    </select>
                  </div>
               </div>

               <button type="submit" style={{
                 padding: "16px", borderRadius: 14, border: "none",
                 background: "linear-gradient(135deg,#ff3333,#cc0000)",
                 color: "white", fontFamily: "'Orbitron',sans-serif", fontWeight: 700, fontSize: 14,
                 textTransform: "uppercase", letterSpacing: 2, cursor: "pointer",
                 boxShadow: "0 0 30px rgba(255,51,51,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10
               }}>
                 <Calculator size={18} /> Calculate Now
               </button>
            </form>
          ) : (
            <div style={{ textAlign: "center" }}>
               <div style={{ marginBottom: 32 }}>
                  <div style={{ 
                    fontFamily: "'Orbitron',sans-serif", fontSize: 72, fontWeight: 900, 
                    lineHeight: 1, background: result.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" 
                  }}>
                    {result.bmi}
                  </div>
                  <div style={{ 
                    display: "inline-block", marginTop: 12, padding: "6px 20px", borderRadius: 100, 
                    background: result.gradient, color: "white",
                    fontFamily: "'Orbitron',sans-serif", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1
                  }}>
                    {result.category}
                  </div>
               </div>

               {/* Gauge */}
               <div style={{ position: "relative", marginBottom: 32 }}>
                  <div style={{ height: 10, borderRadius: 5, background: "linear-gradient(to right, #3b82f6, #22c55e, #eab308, #ef4444)" }} />
                  <div style={{ 
                    position: "absolute", top: -4, left: `${gaugePos}%`, 
                    width: 18, height: 18, background: "white", borderRadius: "50%",
                    border: "4px solid #111", transform: "translateX(-50%)", transition: "all 0.5s ease"
                  }} />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 10, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 1 }}>
                     <span>Underweight</span>
                     <span>Healthy</span>
                     <span>Obese</span>
                  </div>
               </div>

               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>{result.advice}</p>

               <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 18, padding: 20, marginBottom: 32 }}>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Recommended For You</p>
                  <h3 style={{ fontFamily: "'Orbitron',sans-serif", color: "white", fontSize: 18, margin: 0 }}>{result.plan}</h3>
               </div>

               <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={reset} style={{
                    flex: 1, padding: "16px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)", color: "white",
                    fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, cursor: "pointer"
                  }}>
                    <RefreshCw size={16} style={{ marginRight: 8 }} /> Recalculate
                  </button>
                  <a href={gymData.whatsapp.trial} target="_blank" rel="noopener noreferrer" style={{
                    flex: 1, padding: "16px", borderRadius: 14, border: "none",
                    background: "white", color: "#000", textDecoration: "none",
                    fontFamily: "'Orbitron',sans-serif", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, 
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                  }}>
                    Get Plan <ArrowRight size={16} />
                  </a>
               </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
