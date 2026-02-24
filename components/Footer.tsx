"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, Dumbbell } from "lucide-react";
import gymData from "@/data/gym.json";
import navData from "@/data/navigation.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "80px 24px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
          gap: 48,
          marginBottom: 60
        }}>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "linear-gradient(135deg,#ff3333,#cc0000)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(255,51,51,0.4)",
              }}>
                <Dumbbell size={24} color="white" />
              </div>
              <div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: 16, color: "white", letterSpacing: 2 }}>PRO ULTIMATE</div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 10, color: "#ff3333", letterSpacing: 4 }}>GYMS · MOHALI</div>
              </div>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, lineHeight: 1.7, maxWidth: 300 }}>
              Mohali&apos;s premier destination for high-performance fitness. Transforming lives through elite coaching and state-of-the-art facilities.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: Instagram, href: gymData.social.instagram },
                { icon: Facebook, href: gymData.social.facebook },
                { icon: Youtube, href: gymData.social.youtube },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.6)", transition: "all 0.3s ease", textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#ff3333";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.borderColor = "#ff3333";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Orbitron',sans-serif", color: "white", fontSize: 14, letterSpacing: 2, marginBottom: 28, textTransform: "uppercase" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {navData.main.slice(0, 6).map((item) => (
                <Link key={item.href} href={item.href} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 14, transition: "color 0.3s" }}>
                  {item.label.en}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontFamily: "'Orbitron',sans-serif", color: "white", fontSize: 14, letterSpacing: 2, marginBottom: 28, textTransform: "uppercase" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <MapPin size={18} style={{ color: "#ff3333", marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.5 }}>{gymData.location.address}, {gymData.location.city}, {gymData.location.state}</span>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <Phone size={18} style={{ color: "#ff3333", flexShrink: 0 }} />
                <a href={`tel:${gymData.contact.phone}`} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 14 }}>{gymData.contact.phone}</a>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <Mail size={18} style={{ color: "#ff3333", flexShrink: 0 }} />
                <a href={`mailto:${gymData.contact.email}`} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 14 }}>{gymData.contact.email}</a>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <Clock size={18} style={{ color: "#ff3333", marginTop: 2, flexShrink: 0 }} />
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.5 }}>
                   Mon-Sat: 5:30 AM - 10:00 PM<br />
                   Sun: 7:00 AM - 8:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: "1px solid rgba(255,255,255,0.05)", 
          paddingTop: 32, 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "space-between", 
          alignItems: "center",
          gap: 20
        }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, margin: 0 }}>
            © {currentYear} {gymData.identity.name}. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, margin: 0, letterSpacing: 1, textTransform: "uppercase" }}>
            Designed for Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
