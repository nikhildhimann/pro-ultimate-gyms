"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, Phone, CheckCircle2 } from "lucide-react";
import gymData from "@/data/gym.json";

export default function MembershipCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", goal: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name}. Goal: ${form.goal}. Phone: ${form.phone}`
    );
    window.open(
      `https://wa.me/${gymData.contact.whatsapp}?text=${msg}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        background: "#080808",
        padding: "60px 24px",
        overflow: "hidden",
      }}
      className="md:py-24"
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          background:
            "radial-gradient(circle at 70% 30%, #ff3333 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="cta-grid">
          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <p className="cta-badge">LIMITED TIME OFFER</p>

              <h2 className="cta-heading">
                START YOUR <br />
                <span className="gradient-text">TRANSFORMATION</span>
              </h2>

              <p className="cta-description">
                Join 5,000+ members and get a personalized training plan.
                Your first session is free. Experience world-class equipment
                and elite coaching.
              </p>
            </motion.div>

            <div className="cta-features">
              {[
                "Free Initial Assessment",
                "Customized Workout Plans",
                "Nutrition Consultation",
                "Full Facility Access",
              ].map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="feature-item"
                >
                  <div className="feature-icon">
                    <CheckCircle2 size={16} color="#00ff88" />
                  </div>
                  {text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="cta-form"
                >
                  <div className="form-header">
                    <h3>SECURE YOUR SPOT</h3>
                    <p>Get personal guidance from our elite coaches</p>
                  </div>

                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Fitness Goal</label>
                    <select
                      value={form.goal}
                      onChange={(e) =>
                        setForm({ ...form, goal: e.target.value })
                      }
                      required
                    >
                      <option value="" style={{ background: "#080808", color: "white" }}>Select a goal...</option>
                      <option value="Weight Loss" style={{ background: "#080808", color: "white" }}>Weight Loss</option>
                      <option value="Muscle Building" style={{ background: "#080808", color: "white" }}>
                        Muscle Building
                      </option>
                      <option value="General Fitness" style={{ background: "#080808", color: "white" }}>
                        General Fitness
                      </option>
                    </select>
                  </div>

                  <button type="submit" className="cta-btn">
                    <Send size={18} /> Get Started Now
                  </button>

                  <a
                    href={`tel:${gymData.contact.phone}`}
                    className="cta-call"
                  >
                    <Phone size={14} />
                    Prefer to call?{" "}
                    <span>{gymData.contact.phone}</span>
                  </a>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-box"
                >
                  <div className="success-icon">
                    <CheckCircle2 size={40} color="#00ff88" />
                  </div>
                  <h3>Check Your WhatsApp!</h3>
                  <p>
                    We have opened a WhatsApp chat with your details.
                    One of our experts will contact you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .cta-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .cta-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        .cta-badge {
          font-family: 'Rajdhani', sans-serif;
          color: #ff3333;
          font-weight: 700;
          letter-spacing: 0.3em;
          margin-bottom: 24px;
        }

        .cta-heading {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 900;
          color: white;
          margin-bottom: 28px;
          line-height: 1.1;
          text-transform: uppercase;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ff3333, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-description {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.6);
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 500px;
        }

        .cta-features {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 14px;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 16px;
        }

        .feature-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(0, 255, 136, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cta-form {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.7);
        }

        .form-header {
          text-align: center;
          margin-bottom: 8px;
        }

        .form-header h3 {
          font-family: 'Orbitron', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: white;
          margin-bottom: 8px;
        }

        .form-header p {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
        }

        .form-group label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 10px;
          display: block;
          font-weight: 700;
        }

        .cta-form input,
        .cta-form select {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          outline: none;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
          appearance: none;
        }

        .cta-form select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 16px;
          padding-right: 40px;
        }

        .cta-form option {
          background: #080808;
          color: white;
        }

        .cta-form input:focus,
        .cta-form select:focus {
          border-color: #ff3333;
          background: rgba(255, 255, 255, 0.08);
        }

        .cta-btn {
          padding: 18px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #ff3333, #cc0000);
          color: white;
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 30px rgba(255, 51, 51, 0.3);
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 51, 51, 0.4);
        }

        .cta-call {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-align: center;
          font-family: 'Rajdhani', sans-serif;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
        }

        .cta-call span {
          color: white;
          font-weight: 700;
        }

        .success-box {
          text-align: center;
          padding: 60px 40px;
          border-radius: 24px;
          background: rgba(0, 255, 136, 0.05);
          border: 1px solid rgba(0, 255, 136, 0.2);
          color: white;
        }

        .success-icon {
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
        }

        .success-box h3 {
          font-family: 'Orbitron', sans-serif;
          font-size: 24px;
          margin-bottom: 12px;
        }

        .success-box p {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
