"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { asset } from "@/lib/basePath";

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-24 md:py-32 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] text-gold font-medium mb-4">
            WIDEO
          </p>
          <h2 className="text-3xl md:text-5xl font-normal">
            Zobacz <span className="text-gradient italic">inwestycję</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          <div className="relative overflow-hidden border border-dark-border">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              poster={asset("/images/hero-building.jpg")}
              className="w-full aspect-video object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={asset("/videos/hero-video-hd.mp4")} type="video/mp4" />
            </video>

            <div
              className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
            >
              <button
                onClick={togglePlay}
                className="w-20 h-20 rounded-full border-2 border-gold/80 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:bg-gold/20 transition-all group/btn"
              >
                {isPlaying ? (
                  <Pause size={28} className="text-gold" />
                ) : (
                  <Play size={28} className="text-gold ml-1" fill="currentColor" />
                )}
              </button>
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                {isMuted ? (
                  <VolumeX size={16} className="text-white/70" />
                ) : (
                  <Volume2 size={16} className="text-gold" />
                )}
              </button>
            </div>
          </div>

          <div className="absolute -bottom-3 -right-3 w-40 h-20 border border-gold/10" />
          <div className="absolute -top-3 -left-3 w-20 h-40 border border-gold/10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { src: asset("/videos/building-glass.mp4"), poster: asset("/images/glass-facade.jpg"), label: "Detale fasady" },
            { src: asset("/videos/modern-exterior.mp4"), poster: asset("/images/modern-building.jpg"), label: "Elewacja budynku" },
            { src: asset("/videos/city-buildings.mp4"), poster: asset("/images/city-aerial.jpg"), label: "Otoczenie inwestycji" },
          ].map((video) => (
            <motion.div
              key={video.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden border border-dark-border"
            >
              <video
                muted
                loop
                playsInline
                poster={video.poster}
                className="w-full aspect-video object-cover"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                  <Play size={10} className="text-gold ml-0.5" fill="currentColor" />
                </div>
                <p className="text-xs text-white/80">{video.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
