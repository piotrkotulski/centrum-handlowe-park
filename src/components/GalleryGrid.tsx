"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Play } from "lucide-react";
import { asset } from "@/lib/basePath";

const categories = ["Wszystkie", "Konstrukcja", "Fasady", "Wnętrza", "Otoczenie", "Wideo"];

type MediaItem = {
  id: number;
  category: string;
  label: string;
  aspect: string;
  src: string;
  type: "image" | "video";
  videoSrc?: string;
};

const media: MediaItem[] = [
  { id: 1, category: "Konstrukcja", label: "Fundamenty i zbrojenia", aspect: "aspect-[4/3]", src: asset("/images/construction-1.jpg"), type: "image" },
  { id: 2, category: "Konstrukcja", label: "Stropy — kondygnacja I", aspect: "aspect-[3/4]", src: asset("/images/construction-2.jpg"), type: "image" },
  { id: 3, category: "Fasady", label: "Fasada aluminiowa — montaż", aspect: "aspect-[4/3]", src: asset("/images/glass-facade.jpg"), type: "image" },
  { id: 4, category: "Fasady", label: "Przeszklenie frontowe", aspect: "aspect-square", src: asset("/images/building-facade.jpg"), type: "image" },
  { id: 5, category: "Wnętrza", label: "Przestrzeń biurowa", aspect: "aspect-[4/3]", src: asset("/images/interior-office.jpg"), type: "image" },
  { id: 6, category: "Wnętrza", label: "Lokal handlowy — parter", aspect: "aspect-[3/4]", src: asset("/images/interior-commercial.jpg"), type: "image" },
  { id: 7, category: "Otoczenie", label: "Widok z ulicy", aspect: "aspect-[4/3]", src: asset("/images/modern-building.jpg"), type: "image" },
  { id: 8, category: "Otoczenie", label: "Panorama okolicy", aspect: "aspect-[4/3]", src: asset("/images/city-aerial.jpg"), type: "image" },
  { id: 9, category: "Fasady", label: "Elewacja szklana", aspect: "aspect-[4/3]", src: asset("/images/hero-building.jpg"), type: "image" },
  { id: 10, category: "Otoczenie", label: "Parking — zagospodarowanie", aspect: "aspect-[4/3]", src: asset("/images/parking-area.jpg"), type: "image" },
  { id: 11, category: "Wnętrza", label: "Lokal gastronomiczny — III p.", aspect: "aspect-[3/4]", src: asset("/images/restaurant-interior.jpg"), type: "image" },
  { id: 12, category: "Wnętrza", label: "Mieszkanie — wizualizacja", aspect: "aspect-[4/3]", src: asset("/images/apartment-interior.jpg"), type: "image" },
  { id: 13, category: "Wideo", label: "Fasada szklana — timelapse", aspect: "aspect-video", src: asset("/images/glass-facade.jpg"), type: "video", videoSrc: asset("/videos/hero-video-hd.mp4") },
  { id: 14, category: "Wideo", label: "Detale elewacji", aspect: "aspect-video", src: asset("/images/building-facade.jpg"), type: "video", videoSrc: asset("/videos/building-glass.mp4") },
  { id: 15, category: "Wideo", label: "Panorama budynku", aspect: "aspect-video", src: asset("/images/modern-building.jpg"), type: "video", videoSrc: asset("/videos/modern-exterior.mp4") },
];

export function GalleryGrid() {
  const [filter, setFilter] = useState("Wszystkie");
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);

  const filtered =
    filter === "Wszystkie"
      ? media
      : media.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-xs tracking-wider border transition-all ${
              filter === cat
                ? "border-gold bg-gold/10 text-gold"
                : "border-dark-border text-muted hover:border-gold/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => setLightbox(item)}
                className={`${item.aspect} w-full border border-dark-border relative group overflow-hidden block`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs text-white/80 text-left">{item.label}</p>
                </div>
                {item.type === "video" && (
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-gold/80 rounded-full flex items-center justify-center">
                      <Play size={14} className="text-dark ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn size={24} className="text-gold" />
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-xl flex items-center justify-center p-8"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-foreground z-10 hover:text-gold transition-colors">
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full relative"
            >
              {lightbox.type === "video" ? (
                <video
                  autoPlay
                  controls
                  className="w-full border border-dark-border"
                  poster={lightbox.src}
                >
                  <source src={lightbox.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={lightbox.src}
                  alt={lightbox.label}
                  className="w-full border border-dark-border"
                />
              )}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-foreground">{lightbox.label}</p>
                <p className="text-xs text-muted">{lightbox.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
