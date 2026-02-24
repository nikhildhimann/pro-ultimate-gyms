"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import galleryData from "@/data/gallery.json";

interface GallerySectionProps {
  preview?: boolean;
}

const categories = ["all", "equipment", "classes", "transformations", "facilities"];

export default function GallerySection({ preview = false }: GallerySectionProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const displayData = preview ? galleryData.slice(0, 6) : galleryData;
  const filtered = activeCategory === "all" 
    ? displayData 
    : displayData.filter(item => item.category === activeCategory);

  const openLightbox = (idx: number) => setSelected(idx);
  const closeLightbox = () => setSelected(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selected !== null) setSelected((selected + 1) % filtered.length);
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selected !== null) setSelected((selected - 1 + filtered.length) % filtered.length);
  };

  return (
    <section style={{ background: "#080808", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontSize: 16, fontWeight: 700, letterSpacing: "0.4em", marginBottom: 12, textTransform: "uppercase" }}
          >
            Visual Showcase
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(32px,5vw,56px)", color: "white", margin: "0 0 24px", textTransform: "uppercase", letterSpacing: "-1px" }}
          >
            Our <span style={{ background: "linear-gradient(135deg,#ff3333,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Facility</span>
          </motion.h2>
          
          {!preview && (
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "10px 24px", borderRadius: 12, border: "2px solid",
                    borderColor: activeCategory === cat ? "#ff3333" : "rgba(255,255,255,0.1)",
                    background: activeCategory === cat ? "rgba(255,51,51,0.1)" : "rgba(255,255,255,0.03)",
                    color: activeCategory === cat ? "white" : "rgba(255,255,255,0.6)",
                    fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 15,
                    textTransform: "uppercase", letterSpacing: 1.5, cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          style={{ 
            display: "grid", 
            gap: 16,
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => openLightbox(idx)}
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                cursor: "pointer",
                height: 300,
                background: "#111",
                border: "1px solid rgba(255,255,255,0.08)"
              }}
              whileHover={{ y: -5 }}
            >
              <Image 
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                className="gallery-image"
              />
              
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
                display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 30, opacity: 0, transition: "opacity 0.3s ease"
              }} className="gallery-card-overlay">
                <div style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontWeight: 800, fontSize: 13, letterSpacing: 2, marginBottom: 4 }}>
                  {item.category.toUpperCase()}
                </div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", color: "white", fontWeight: 700, fontSize: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {item.alt}
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {preview && (
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <motion.a
              href="/gallery"
              style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                padding: "16px 40px", borderRadius: 14,
                border: "2px solid #ff3333",
                color: "white", textDecoration: "none",
                fontFamily: "'Orbitron',sans-serif", fontWeight: 800, fontSize: 14,
                letterSpacing: 2, textTransform: "uppercase",
                background: "rgba(255,51,51,0.1)",
                transition: "all 0.3s ease"
              }}
              whileHover={{ background: "#ff3333", transform: "translateY(-2px)", boxShadow: "0 10px 30px rgba(255,51,51,0.4)" }}
            >
              View All Moments
            </motion.a>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, zIndex: 1000,
              background: "rgba(0,0,0,0.98)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 20
            }}
            onClick={closeLightbox}
          >
             <button onClick={closeLightbox} style={{ position: "absolute", top: 30, right: 30, background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", padding: 12, cursor: "pointer", color: "white", zIndex: 10 }}>
               <X size={28} />
             </button>
             
             <button onClick={prevImage} style={{ position: "absolute", left: 30, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", padding: 15, cursor: "pointer", color: "white", zIndex: 10 }}>
               <ChevronLeft size={32} />
             </button>

             <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ position: "relative", width: "100%", maxWidth: 1100, height: "75vh", borderRadius: 24, overflow: "hidden" }}
             >
                <Image 
                  src={filtered[selected].src}
                  alt={filtered[selected].alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
                <div style={{ position: "absolute", bottom: 40, left: 40, right: 40, textAlign: "center" }}>
                   <div style={{ fontFamily: "'Rajdhani',sans-serif", color: "#ff3333", fontWeight: 800, letterSpacing: 3 }}>{filtered[selected].category.toUpperCase()}</div>
                   <h3 style={{ fontFamily: "'Orbitron',sans-serif", color: "white", fontSize: 24, margin: "8px 0 0" }}>{filtered[selected].alt}</h3>
                </div>
             </motion.div>

             <button onClick={nextImage} style={{ position: "absolute", right: 30, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", padding: 15, cursor: "pointer", color: "white", zIndex: 10 }}>
               <ChevronRight size={32} />
             </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-card-overlay { transition: opacity 0.4s ease; }
        div:hover > .gallery-card-overlay { opacity: 1; }
        div:hover > .gallery-image { transform: scale(1.1); }
      `}</style>
    </section>
  );
}
