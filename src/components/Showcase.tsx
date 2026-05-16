import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
const imagePlaceholder = '/cofe.png';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  theme: {
    left: string;
    right: string;
    arch: string;
    shapes: string[];
    panelBg: string;
    patternId: string;
  }
}

const PATTERNS = {
  roastVelvet: (
    <pattern id="pat-roast" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M20 0L40 20L20 40L0 20Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      <path d="M20 5L35 20L20 35L5 20Z" fill="currentColor" opacity="0.3"/>
    </pattern>
  ),
  matchaMudslide: (
    <pattern id="pat-matcha" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <rect x="5" y="5" width="20" height="20" rx="6" fill="currentColor" opacity="0.4"/>
      <rect x="10" y="10" width="10" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
    </pattern>
  ),
  lavenderLatte: (
    <pattern id="pat-lavender" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M20 5L24 16L35 20L24 24L20 35L16 24L5 20L16 16Z" fill="currentColor" opacity="0.4"/>
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8"/>
    </pattern>
  ),
  caramelCloud: (
    <pattern id="pat-caramel" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
      <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
    </pattern>
  ),
  berryBreeze: (
    <pattern id="pat-berry" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M0 30 Q 15 15 30 30" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
      <path d="M0 0 Q 15 15 30 0" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
    </pattern>
  ),
  midnightMocha: (
    <pattern id="pat-mocha" x="0" y="0" width="34.64" height="60" patternUnits="userSpaceOnUse">
      <path d="M17.32 0 L34.64 10 L34.64 30 L17.32 40 L0 30 L0 10 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
      <path d="M17.32 30 L34.64 40 L34.64 60 L17.32 70 L0 60 L0 40 Z" fill="currentColor" opacity="0.2"/>
    </pattern>
  )
};

const PRODUCTS: Product[] = [
  {
    id: 'roast-velvet',
    name: 'Бархатный\nРоаст',
    description: 'Глубокий, темный эспрессо в сочетании с бархатистой молочной пеной и нотками каскары.',
    image: imagePlaceholder,
    theme: {
      left: 'from-[#2c1a10] to-[#4a2c1d]',
      right: 'from-[#fbddca] to-[#dec1af]',
      arch: 'from-[#79573f] to-[#26170c]',
      shapes: [
        "w-72 h-72 bg-[#79573f]/40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] top-[15%] left-[15%]",
        "w-[25rem] h-[25rem] bg-[#26170c]/50 rounded-full bottom-[-5%] right-[5%]",
        "w-56 h-56 bg-[#dec1af]/30 rounded-[50%_50%_20%_80%/25%_25%_75%_75%] top-[50%] left-[60%]"
      ],
      panelBg: 'bg-[#3f2214]',
      patternId: 'pat-roast'
    }
  },
  {
    id: 'matcha-mudslide',
    name: 'Матча\nМадслайд',
    description: 'Симфония премиальной матчи и насыщенного шоколадного сиропа, переходящая в ледяное спокойствие.',
    image: imagePlaceholder,
    theme: {
      left: 'from-[#f9e9de] to-[#e4cbb8]',
      right: 'from-[#f2f5e3] to-[#d6dfb8]',
      arch: 'from-[#d4a88b] to-[#80875c]',
      shapes: [
        "w-64 h-64 bg-[#a6b47c]/40 rounded-full top-[10%] left-[10%]",
        "w-[30rem] h-[30rem] bg-[#80875c]/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bottom-[-10%] right-[-10%]",
        "w-48 h-48 bg-[#d4a88b]/40 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] top-[40%] right-[20%]"
      ],
      panelBg: 'bg-[#5e6b40]',
      patternId: 'pat-matcha'
    }
  },
  {
    id: 'lavender-latte',
    name: 'Лавандовый\nЛатте',
    description: 'Элегантное сочетание эспрессо, топленого молока и нежного лавандового сиропа.',
    image: imagePlaceholder,
    theme: {
      left: 'from-[#f0e6ff] to-[#d5b3ff]',
      right: 'from-[#fff5f5] to-[#ffb3c6]',
      arch: 'from-[#b388ff] to-[#7c4dff]',
      shapes: [
        "w-[22rem] h-[22rem] bg-[#b388ff]/30 rounded-full top-[20%] left-[10%]",
        "w-64 h-64 bg-[#7c4dff]/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bottom-[10%] right-[15%]",
        "w-40 h-40 bg-[#ffb3c6]/40 rounded-full top-[60%] left-[70%]"
      ],
      panelBg: 'bg-[#5c3aba]',
      patternId: 'pat-lavender'
    }
  },
  {
    id: 'caramel-cloud',
    name: 'Карамельное\nОблако',
    description: 'Насыщенный макиато, увенчанный взбитыми сливками и золотистой карамелью. Сладость в каждом глотке.',
    image: imagePlaceholder,
    theme: {
      left: 'from-[#fff5d1] to-[#ffda75]',
      right: 'from-[#ffedd6] to-[#ffc87c]',
      arch: 'from-[#ffaa00] to-[#cc7a00]',
      shapes: [
        "w-80 h-80 bg-[#ffc87c]/40 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] top-[5%] right-[10%]",
        "w-56 h-56 bg-[#ffaa00]/30 rounded-full bottom-[15%] left-[5%]",
        "w-48 h-48 bg-[#cc7a00]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] top-[40%] left-[80%]"
      ],
      panelBg: 'bg-[#cc7a00]',
      patternId: 'pat-caramel'
    }
  },
  {
    id: 'berry-breeze',
    name: 'Ягодный\nБриз',
    description: 'Освежающий холодный чай с лесными ягодами и капелькой цитруса. Яркий и бодрящий.',
    image: imagePlaceholder,
    theme: {
      left: 'from-[#ffe6ee] to-[#ff99bb]',
      right: 'from-[#fff0f5] to-[#ffb3d9]',
      arch: 'from-[#ff4d94] to-[#cc0052]',
      shapes: [
        "w-[28rem] h-[28rem] bg-[#ff4d94]/30 rounded-full top-[-5%] left-[20%]",
        "w-64 h-64 bg-[#cc0052]/20 rounded-[50%_50%_20%_80%/25%_25%_75%_75%] bottom-[5%] right-[25%]",
        "w-36 h-36 bg-[#ffb3d9]/40 rounded-full top-[70%] left-[10%]"
      ],
      panelBg: 'bg-[#b30047]',
      patternId: 'pat-berry'
    }
  },
  {
    id: 'midnight-mocha',
    name: 'Полночная\nМокко',
    description: 'Темная, интенсивная смесь эспрессо и черного шоколада для истинных ценителей.',
    image: imagePlaceholder,
    theme: {
      left: 'from-[#2a2a35] to-[#12121a]',
      right: 'from-[#3d3d4d] to-[#1f1f2e]',
      arch: 'from-[#5c5c7a] to-[#2e2e3d]',
      shapes: [
        "w-[30rem] h-[30rem] bg-[#5c5c7a]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] top-[10%] left-[-10%]",
        "w-72 h-72 bg-[#2e2e3d]/30 rounded-full bottom-[-10%] right-[10%]",
        "w-48 h-48 bg-[#8a8abc]/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] top-[60%] left-[80%]"
      ],
      panelBg: 'bg-[#1a1a24]',
      patternId: 'pat-mocha'
    }
  }
];

const TitleShape = ({ panelBg, patternId }: { panelBg: string, patternId: string }) => {
  const points = 10;
  const w = 320;
  const h = 140;
  const cx = w/2;
  const cy = h/2;
  const outerX = (w/2) - 8;
  const outerY = (h/2) - 8;
  const innerX = (w/2) - 30; 
  const innerY = (h/2) - 25;

  let d = "";
  for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points - (Math.PI / 2);
      const rx = i % 2 === 0 ? outerX : innerX;
      const ry = i % 2 === 0 ? outerY : innerY;
      const x = cx + rx * Math.cos(angle);
      const y = cy + ry * Math.sin(angle);
      if (i === 0) d += `M ${x.toFixed(2)} ${y.toFixed(2)} `;
      else d += `L ${x.toFixed(2)} ${y.toFixed(2)} `;
  }
  d += "Z";

  // Use the color classes from bg-[...] for fill color
  const colorClass = panelBg.replace('bg-', 'text-');

  return (
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] overflow-visible pointer-events-none w-[110%] h-[110%] min-w-[320px] min-h-[140px] z-[-1]" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <path d={d} fill="currentColor" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinejoin="round" className={colorClass} />
      <path d={d} fill={`url(#${patternId})`} className="opacity-10 mix-blend-overlay text-white" />
    </svg>
  );
};

const NoiseOverlay = () => (
  <svg className="pointer-events-none absolute inset-0 z-10 opacity-[0.4] mix-blend-overlay w-full h-full object-cover">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

export default function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [10, -10]);
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);

  const shapesX = useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]);
  const shapesY = useTransform(smoothMouseY, [-0.5, 0.5], [20, -20]);

  const archX = useTransform(smoothMouseX, [-0.5, 0.5], [30, -30]);
  const archY = useTransform(smoothMouseY, [-0.5, 0.5], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + PRODUCTS.length) % PRODUCTS.length);
  };

  const product = PRODUCTS[index];

  return (
    <div className="flex-1 w-full h-full relative overflow-hidden flex flex-col items-center justify-center py-2 md:py-8">
      {/* Inject SVG Patterns once globally */}
      <svg className="hidden text-white">
        <defs>
          {Object.values(PATTERNS)}
        </defs>
      </svg>

      {/* Background Split */}
      <motion.div 
        style={{ x: bgX, y: bgY, scale: 1.05 }}
        className="absolute inset-0 z-0 flex w-full h-full"
      >
        <motion.div 
          key={`left-${product.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`w-1/2 h-full bg-gradient-to-br ${product.theme.left} transition-colors duration-1000`} 
        />
        <motion.div 
          key={`right-${product.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`w-1/2 h-full bg-gradient-to-bl ${product.theme.right} transition-colors duration-1000`} 
        />
      </motion.div>

      {/* Decorative Random Shapes */}
      <motion.div 
        style={{ x: shapesX, y: shapesY, scale: 1.05 }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <AnimatePresence mode="popLayout">
          {product.theme.shapes.map((shapeClass, i) => (
            <motion.div
              key={`${product.id}-shape-${i}`}
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
              transition={{ duration: 1.5, type: 'spring', bounce: 0.2 }}
              className={`absolute ${shapeClass}`}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <NoiseOverlay />

      {/* Arch Shape */}
      <motion.div 
        style={{ x: archX, y: archY, scale: 1.05 }}
        className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-[4/5] mx-auto pointer-events-none`}
      >
        <motion.div
          key={`arch-${product.id}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`w-full h-full bg-gradient-to-b ${product.theme.arch} rounded-t-full`}
        />
      </motion.div>

      {/* Content */}
      <div 
        className="relative z-20 flex flex-col items-center justify-center text-center w-full max-w-2xl px-6 h-full"
      >
        {/* Typography */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`title-${product.id}`}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`absolute top-[4%] sm:top-[8%] left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none flex items-center justify-center`}
          >
            <div className="relative inline-flex items-center justify-center px-10 py-5">
              <TitleShape panelBg={product.theme.panelBg} patternId={product.theme.patternId} />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold whitespace-pre-line text-center leading-[1.1] tracking-tight m-0 text-white drop-shadow-lg relative z-10">
                {product.name}
              </h1>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Product Image Container */}
        <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[500px] mt-24 md:mt-32 flex items-center justify-center">
          {/* Navigation Arrows */}
          <button 
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-black/80 hover:text-black transition-colors z-50 p-4 rounded-full bg-white/20 backdrop-blur-xl hover:bg-white/30 shadow-lg border border-white/50 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-8 h-8 ml-[-2px]" />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-black/80 hover:text-black transition-colors z-50 p-4 rounded-full bg-white/20 backdrop-blur-xl hover:bg-white/30 shadow-lg border border-white/50 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-8 h-8 mr-[-2px]" />
          </button>

          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={product.id}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0, rotate: direction > 0 ? 15 : -15, scale: 0.8, y: 50 }}
              animate={{ x: 0, opacity: 1, rotate: 0, scale: 1, y: 0 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0, rotate: direction > 0 ? -15 : 15, scale: 0.8, y: 50 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="absolute w-[260px] md:w-[340px] aspect-[3/4] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center will-change-transform cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover object-center rounded-[2rem] border-2 border-white/30"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
