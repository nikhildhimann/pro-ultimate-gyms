"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import navData from "@/data/navigation.json";
import gymData from "@/data/gym.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled
            ? "rgba(8,8,8,0.98)"
            : "rgba(8,8,8,0.35)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,51,51,0.2)"
            : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 20px",
            height: 74,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ================= LOGO ================= */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
            }}
          >
            <div style={{ position: "relative", width: 44, height: 44 }}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontWeight: 900,
                  fontSize: 13,
                  color: "white",
                  letterSpacing: 1,
                }}
              >
                PRO ULTIMATE
              </span>
              <span
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: 9,
                  color: "#ff3333",
                  letterSpacing: 2,
                }}
              >
                GYMS · SECTOR 89
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: 8 }}
          >
            {navData.main.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 8,
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: active
                      ? "#ff3333"
                      : "rgba(255,255,255,0.75)",
                    background: active
                      ? "rgba(255,51,51,0.1)"
                      : "transparent",
                    transition: "all 0.2s ease",
                  }}
                >
                  {item.label.en}
                </Link>
              );
            })}
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            {/* Free Trial Button */}
            <a
              href={gymData.whatsapp.trial}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                background:
                  "linear-gradient(135deg,#ff3333,#cc0000)",
                color: "white",
                fontWeight: 800,
                fontSize: 11,
                letterSpacing: 1.5,
                textDecoration: "none",
                textTransform: "uppercase",
                boxShadow:
                  "0 4px 15px rgba(255,51,51,0.3)",
              }}
            >
              Free Trial
            </a>

            {/* Hamburger - Mobile Only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex md:hidden"
              style={{
                background: "rgba(255,255,255,0.08)",
                border:
                  "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                width: 42,
                height: 42,
                cursor: "pointer",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Toggle Navigation"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(8,8,8,0.98)",
              backdropFilter: "blur(40px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              padding: 40,
            }}
          >
            {navData.main.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    width: 260,
                    textAlign: "center",
                    padding: "18px",
                    borderRadius: 12,
                    fontFamily:
                      "'Orbitron',sans-serif",
                    fontWeight: 800,
                    fontSize: 16,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: active
                      ? "white"
                      : "rgba(255,255,255,0.7)",
                    background: active
                      ? "linear-gradient(135deg,#ff3333,#cc0000)"
                      : "rgba(255,255,255,0.05)",
                  }}
                >
                  {item.label.en}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}