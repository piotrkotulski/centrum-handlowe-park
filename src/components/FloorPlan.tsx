"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Unit {
  id: string;
  name: string;
  area: string;
  type: string;
  status: "available" | "reserved" | "sold";
  floor: number;
  description: string;
  path: string;
}

const units: Unit[] = [
  {
    id: "P-1",
    name: "Lokal P-1",
    area: "150,00 m²",
    type: "Handlowo-usługowy",
    status: "available",
    floor: -1,
    description: "Lokal w piwnicy z bezpośrednim dostępem do strefy technicznej",
    path: "M 50 60 L 200 60 L 200 160 L 50 160 Z",
  },
  {
    id: "P-2",
    name: "Lokal P-2",
    area: "147,80 m²",
    type: "Handlowo-usługowy",
    status: "available",
    floor: -1,
    description: "Lokal w piwnicy idealny na magazyn lub showroom",
    path: "M 210 60 L 380 60 L 380 160 L 210 160 Z",
  },
  {
    id: "0-1",
    name: "Lokal 0-1",
    area: "160,00 m²",
    type: "Handlowo-usługowy",
    status: "available",
    floor: 0,
    description: "Lokal na parterze z witrynami od strony ulicy",
    path: "M 50 60 L 220 60 L 220 160 L 50 160 Z",
  },
  {
    id: "0-2",
    name: "Biuro 0-2",
    area: "72,10 m²",
    type: "Biurowy",
    status: "reserved",
    floor: 0,
    description: "Przestrzeń biurowa z osobnym wejściem",
    path: "M 230 60 L 380 60 L 380 120 L 230 120 Z",
  },
  {
    id: "0-3",
    name: "Magazyn 0-3",
    area: "50,00 m²",
    type: "Magazynowy",
    status: "available",
    floor: 0,
    description: "Magazyn zapleczowy na parterze",
    path: "M 230 130 L 380 130 L 380 160 L 230 160 Z",
  },
  {
    id: "1-1",
    name: "Lokal 1-1",
    area: "260,70 m²",
    type: "Handlowo-usługowy",
    status: "available",
    floor: 1,
    description: "Duży lokal handlowy na I piętrze z pełnym przeszkleniem",
    path: "M 50 60 L 300 60 L 300 160 L 50 160 Z",
  },
  {
    id: "1-2",
    name: "Magazyn 1-2",
    area: "79,50 m²",
    type: "Magazynowy",
    status: "available",
    floor: 1,
    description: "Magazyn przynależny do lokalu na I piętrze",
    path: "M 310 60 L 380 60 L 380 160 L 310 160 Z",
  },
  {
    id: "2-1",
    name: "Lokal 2-1",
    area: "260,70 m²",
    type: "Handlowo-usługowy",
    status: "available",
    floor: 2,
    description: "Lokal handlowy na II piętrze z panoramicznym widokiem",
    path: "M 50 60 L 300 60 L 300 160 L 50 160 Z",
  },
  {
    id: "2-2",
    name: "Magazyn 2-2",
    area: "79,50 m²",
    type: "Magazynowy",
    status: "available",
    floor: 2,
    description: "Magazyn na II piętrze",
    path: "M 310 60 L 380 60 L 380 160 L 310 160 Z",
  },
  {
    id: "3-1",
    name: "Lokal 3-1",
    area: "200,90 m²",
    type: "Usługowo-gastronomiczny",
    status: "available",
    floor: 3,
    description: "Lokal gastronomiczny na III piętrze z tarasem",
    path: "M 50 60 L 250 60 L 250 160 L 50 160 Z",
  },
  {
    id: "3-M1",
    name: "Mieszkanie M1",
    area: "45,00 m²",
    type: "Mieszkalny",
    status: "available",
    floor: 3,
    description: "Mieszkanie 2-pokojowe z balkonem",
    path: "M 260 60 L 380 60 L 380 95 L 260 95 Z",
  },
  {
    id: "3-M2",
    name: "Mieszkanie M2",
    area: "38,00 m²",
    type: "Mieszkalny",
    status: "reserved",
    floor: 3,
    description: "Kompaktowe mieszkanie z aneksem kuchennym",
    path: "M 260 105 L 380 105 L 380 135 L 260 135 Z",
  },
  {
    id: "3-M3",
    name: "Mieszkanie M3",
    area: "42,00 m²",
    type: "Mieszkalny",
    status: "available",
    floor: 3,
    description: "Mieszkanie 2-pokojowe z widokiem na zieleń",
    path: "M 260 145 L 380 145 L 380 175 L 260 175 Z",
  },
];

const floors = [
  { id: -1, label: "Piwnica", sublabel: "Usługowo-handlowa" },
  { id: 0, label: "Parter", sublabel: "Handel / Biuro" },
  { id: 1, label: "I Piętro", sublabel: "Handel / Usługi" },
  { id: 2, label: "II Piętro", sublabel: "Handel / Usługi" },
  { id: 3, label: "III Piętro", sublabel: "Gastronomia / Mieszkania" },
];

const statusColors = {
  available: { fill: "rgba(34, 197, 94, 0.15)", stroke: "#22c55e", label: "Dostępny", dot: "bg-green-500" },
  reserved: { fill: "rgba(234, 179, 8, 0.15)", stroke: "#eab308", label: "Rezerwacja", dot: "bg-yellow-500" },
  sold: { fill: "rgba(239, 68, 68, 0.15)", stroke: "#ef4444", label: "Sprzedany", dot: "bg-red-500" },
};

export function FloorPlan() {
  const [activeFloor, setActiveFloor] = useState(0);
  const [hoveredUnit, setHoveredUnit] = useState<Unit | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const floorUnits = units.filter((u) => u.floor === activeFloor);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-3">
        <h3 className="text-xs tracking-[0.2em] text-gold mb-6">
          WYBIERZ KONDYGNACJĘ
        </h3>
        <div className="flex flex-row lg:flex-col gap-2">
          {floors.map((floor) => (
            <button
              key={floor.id}
              onClick={() => {
                setActiveFloor(floor.id);
                setSelectedUnit(null);
              }}
              className={`text-left px-4 py-3 border transition-all duration-300 flex-1 lg:flex-none ${
                activeFloor === floor.id
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-dark-border text-muted hover:border-gold/30 hover:text-foreground"
              }`}
            >
              <div className="text-sm font-medium">{floor.label}</div>
              <div className="text-xs text-muted mt-0.5 hidden lg:block">
                {floor.sublabel}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 hidden lg:block">
          <h3 className="text-xs tracking-[0.2em] text-gold mb-4">LEGENDA</h3>
          <div className="flex flex-col gap-2">
            {Object.entries(statusColors).map(([key, val]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${val.dot}`} />
                <span className="text-xs text-muted">{val.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="glass p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm tracking-wider text-foreground">
              {floors.find((f) => f.id === activeFloor)?.label}
            </h3>
            <span className="text-xs text-muted">
              {floorUnits.length} lokali
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.svg
              key={activeFloor}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              viewBox="0 0 430 220"
              className="w-full h-auto"
            >
              <rect
                x="40"
                y="40"
                width="350"
                height="140"
                fill="none"
                stroke="rgba(201,169,110,0.2)"
                strokeWidth="1"
                rx="2"
              />

              <line x1="40" y1="40" x2="40" y2="180" stroke="rgba(201,169,110,0.1)" strokeWidth="0.5" />
              <line x1="215" y1="40" x2="215" y2="180" stroke="rgba(201,169,110,0.1)" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="390" y1="40" x2="390" y2="180" stroke="rgba(201,169,110,0.1)" strokeWidth="0.5" />

              {floorUnits.map((unit) => {
                const colors = statusColors[unit.status];
                const isHovered = hoveredUnit?.id === unit.id;
                const isSelected = selectedUnit?.id === unit.id;
                return (
                  <g
                    key={unit.id}
                    onMouseEnter={() => setHoveredUnit(unit)}
                    onMouseLeave={() => setHoveredUnit(null)}
                    onClick={() => setSelectedUnit(unit)}
                    className="cursor-pointer"
                  >
                    <motion.path
                      d={unit.path}
                      fill={isHovered || isSelected ? colors.fill.replace("0.15", "0.35") : colors.fill}
                      stroke={colors.stroke}
                      strokeWidth={isHovered || isSelected ? 2 : 1}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <text
                      x={getPathCenter(unit.path).x}
                      y={getPathCenter(unit.path).y - 6}
                      textAnchor="middle"
                      fill={colors.stroke}
                      fontSize="11"
                      fontWeight="600"
                    >
                      {unit.id}
                    </text>
                    <text
                      x={getPathCenter(unit.path).x}
                      y={getPathCenter(unit.path).y + 10}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.5)"
                      fontSize="9"
                    >
                      {unit.area}
                    </text>
                  </g>
                );
              })}

              <rect x="185" y="175" width="60" height="15" fill="rgba(201,169,110,0.1)" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5" rx="1" />
              <text x="215" y="185" textAnchor="middle" fill="rgba(201,169,110,0.5)" fontSize="7">
                WEJŚCIE
              </text>

              <rect x="395" y="80" width="15" height="60" fill="rgba(201,169,110,0.05)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" rx="1" />
              <text x="402" y="115" textAnchor="middle" fill="rgba(201,169,110,0.4)" fontSize="6" transform="rotate(-90 402 115)">
                KLATKA
              </text>
            </motion.svg>
          </AnimatePresence>
        </div>
      </div>

      <div className="lg:col-span-4">
        <AnimatePresence mode="wait">
          {selectedUnit ? (
            <motion.div
              key={selectedUnit.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass p-6"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-light text-foreground">
                    {selectedUnit.name}
                  </h3>
                  <p className="text-sm text-muted mt-1">{selectedUnit.type}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${statusColors[selectedUnit.status].dot}`}
                  />
                  <span className="text-xs text-muted">
                    {statusColors[selectedUnit.status].label}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-dark-border">
                  <span className="text-sm text-muted">Powierzchnia</span>
                  <span className="text-sm text-foreground font-medium">
                    {selectedUnit.area}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-dark-border">
                  <span className="text-sm text-muted">Kondygnacja</span>
                  <span className="text-sm text-foreground font-medium">
                    {floors.find((f) => f.id === selectedUnit.floor)?.label}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-dark-border">
                  <span className="text-sm text-muted">Przeznaczenie</span>
                  <span className="text-sm text-foreground font-medium">
                    {selectedUnit.type}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted mt-6 leading-relaxed">
                {selectedUnit.description}
              </p>

              {selectedUnit.status === "available" && (
                <a
                  href="/kontakt"
                  className="mt-6 block w-full py-3 bg-gold text-dark text-center text-sm tracking-wider font-medium hover:bg-gold-light transition-colors"
                >
                  ZAPYTAJ O TEN LOKAL
                </a>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass p-6 flex flex-col items-center justify-center min-h-[300px] text-center"
            >
              <div className="w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gold/40"
                >
                  <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                </svg>
              </div>
              <p className="text-muted text-sm">
                Kliknij na lokal na planie aby zobaczyć szczegóły
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 space-y-2">
          {floorUnits.map((unit) => (
            <button
              key={unit.id}
              onClick={() => setSelectedUnit(unit)}
              className={`w-full flex items-center justify-between px-4 py-3 border transition-all duration-200 text-left ${
                selectedUnit?.id === unit.id
                  ? "border-gold/50 bg-gold/5"
                  : "border-dark-border hover:border-gold/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${statusColors[unit.status].dot}`}
                />
                <span className="text-sm text-foreground">{unit.name}</span>
              </div>
              <span className="text-xs text-muted">{unit.area}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function getPathCenter(path: string): { x: number; y: number } {
  const coords = path.match(/\d+/g)?.map(Number) || [];
  if (coords.length >= 8) {
    return {
      x: (coords[0] + coords[4]) / 2,
      y: (coords[1] + coords[5]) / 2,
    };
  }
  return { x: 200, y: 110 };
}
