"use client"

interface SvgProps {
  className?: string
  style?: React.CSSProperties
}

export function FloatingCat({ className = "", style }: SvgProps) {
  return (
    <svg
      className={className}
      style={style}
      width="60"
      height="60"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="50" cy="65" rx="35" ry="25" fill="currentColor" className="text-pink-200 dark:text-pink-900/80" />
      {/* Head */}
      <circle cx="50" cy="40" r="28" fill="currentColor" className="text-pink-200 dark:text-pink-900/80" />
      {/* Ears */}
      <polygon points="25,25 35,45 15,45" fill="currentColor" className="text-pink-200 dark:text-pink-900/80" />
      <polygon points="75,25 85,45 65,45" fill="currentColor" className="text-pink-200 dark:text-pink-900/80" />
      {/* Inner ears */}
      <polygon points="25,25 32,40 18,40" fill="currentColor" className="text-pink-300 dark:text-pink-700/80" />
      <polygon points="75,25 82,40 68,40" fill="currentColor" className="text-pink-300 dark:text-pink-700/80" />
      {/* Eyes */}
      <ellipse cx="38" cy="38" rx="6" ry="7" fill="currentColor" className="text-gray-800 dark:text-gray-100" />
      <ellipse cx="62" cy="38" rx="6" ry="7" fill="currentColor" className="text-gray-800 dark:text-gray-100" />
      {/* Eye highlights */}
      <circle cx="40" cy="36" r="2" fill="white" className="dark:fill-white/80" />
      <circle cx="64" cy="36" r="2" fill="white" className="dark:fill-white/80" />
      {/* Nose */}
      <ellipse cx="50" cy="48" rx="4" ry="3" fill="currentColor" className="text-pink-400 dark:text-pink-400" />
      {/* Mouth */}
      <path d="M46 52 Q50 56 54 52" stroke="currentColor" className="text-gray-700 dark:text-gray-200" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="20" y1="45" x2="35" y2="48" stroke="currentColor" className="text-gray-400 dark:text-gray-400" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="50" x2="35" y2="50" stroke="currentColor" className="text-gray-400 dark:text-gray-400" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="55" x2="35" y2="52" stroke="currentColor" className="text-gray-400 dark:text-gray-400" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="45" x2="65" y2="48" stroke="currentColor" className="text-gray-400 dark:text-gray-400" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="50" x2="65" y2="50" stroke="currentColor" className="text-gray-400 dark:text-gray-400" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="55" x2="65" y2="52" stroke="currentColor" className="text-gray-400 dark:text-gray-400" strokeWidth="1.5" strokeLinecap="round" />
      {/* Blush */}
      <ellipse cx="32" cy="45" rx="5" ry="4" fill="currentColor" className="text-pink-300/50 dark:text-pink-500/40" />
      <ellipse cx="68" cy="45" rx="5" ry="4" fill="currentColor" className="text-pink-300/50 dark:text-pink-500/40" />
    </svg>
  )
}

export function SleepyCat({ className = "", style }: SvgProps) {
  return (
    <svg
      className={className}
      style={style}
      width="80"
      height="50"
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="60" cy="50" rx="50" ry="20" fill="currentColor" className="text-purple-200 dark:text-purple-900/80" />
      {/* Head */}
      <circle cx="30" cy="40" r="20" fill="currentColor" className="text-purple-200 dark:text-purple-900/80" />
      {/* Ears */}
      <polygon points="15,22 22,38 8,38" fill="currentColor" className="text-purple-200 dark:text-purple-900/80" />
      <polygon points="45,22 52,38 38,38" fill="currentColor" className="text-purple-200 dark:text-purple-900/80" />
      {/* Inner ears */}
      <polygon points="15,22 20,34 10,34" fill="currentColor" className="text-purple-300 dark:text-purple-700/80" />
      <polygon points="45,22 50,34 40,34" fill="currentColor" className="text-purple-300 dark:text-purple-700/80" />
      {/* Closed eyes */}
      <path d="M20 38 Q25 36 28 38" stroke="currentColor" className="text-gray-600 dark:text-gray-300" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M32 38 Q37 36 40 38" stroke="currentColor" className="text-gray-600 dark:text-gray-300" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <ellipse cx="30" cy="44" rx="3" ry="2" fill="currentColor" className="text-pink-400 dark:text-pink-400" />
      {/* Tail */}
      <ellipse cx="100" cy="45" rx="12" ry="8" fill="currentColor" className="text-purple-200 dark:text-purple-900/80" />
      <path d="M95 42 Q100 48 105 42" stroke="currentColor" className="text-purple-300 dark:text-purple-600" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Zzz */}
      <text x="70" y="25" fontSize="12" fill="currentColor" className="text-purple-400 dark:text-purple-400">z</text>
      <text x="80" y="18" fontSize="10" fill="currentColor" className="text-purple-300 dark:text-purple-500">z</text>
      <text x="88" y="12" fontSize="8" fill="currentColor" className="text-purple-200 dark:text-purple-600">z</text>
    </svg>
  )
}

export function HappyCat({ className = "", style }: SvgProps) {
  return (
    <svg
      className={className}
      style={style}
      width="50"
      height="50"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <circle cx="40" cy="45" r="25" fill="currentColor" className="text-amber-200 dark:text-amber-900/80" />
      {/* Head */}
      <circle cx="40" cy="35" r="22" fill="currentColor" className="text-amber-200 dark:text-amber-900/80" />
      {/* Ears */}
      <polygon points="20,18 28,35 12,35" fill="currentColor" className="text-amber-200 dark:text-amber-900/80" />
      <polygon points="60,18 68,35 52,35" fill="currentColor" className="text-amber-200 dark:text-amber-900/80" />
      {/* Inner ears */}
      <polygon points="20,18 26,32 14,32" fill="currentColor" className="text-amber-300 dark:text-amber-700/80" />
      <polygon points="60,18 66,32 54,32" fill="currentColor" className="text-amber-300 dark:text-amber-700/80" />
      {/* Happy eyes */}
      <path d="M30 32 Q33 28 36 32" stroke="currentColor" className="text-gray-800 dark:text-gray-100" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M44 32 Q47 28 50 32" stroke="currentColor" className="text-gray-800 dark:text-gray-100" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <ellipse cx="40" cy="40" rx="3" ry="2.5" fill="currentColor" className="text-pink-400 dark:text-pink-400" />
      {/* Mouth */}
      <path d="M35 45 Q40 50 45 45" stroke="currentColor" className="text-gray-700 dark:text-gray-200" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Blush */}
      <ellipse cx="28" cy="38" rx="4" ry="3" fill="currentColor" className="text-pink-300/60 dark:text-pink-500/50" />
      <ellipse cx="52" cy="38" rx="4" ry="3" fill="currentColor" className="text-pink-300/60 dark:text-pink-500/50" />
      {/* Music note */}
      <text x="55" y="15" fontSize="14" fill="currentColor" className="text-pink-400 dark:text-pink-400">♪</text>
    </svg>
  )
}

export function Sparkle({ className = "", style }: SvgProps) {
  return (
    <svg
      className={className}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill="currentColor"
        className="text-yellow-400 dark:text-yellow-300"
      />
    </svg>
  )
}

export function Heart({ className = "", style }: SvgProps) {
  return (
    <svg
      className={className}
      style={style}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        className="text-pink-400 dark:text-pink-400"
      />
    </svg>
  )
}

export function Star({ className = "", style }: SvgProps) {
  return (
    <svg
      className={className}
      style={style}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        className="text-purple-400 dark:text-purple-400"
      />
    </svg>
  )
}

export function PawPrint({ className = "", style }: SvgProps) {
  return (
    <svg
      className={className}
      style={style}
      width="30"
      height="30"
      viewBox="0 0 50 50"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="25" cy="35" rx="10" ry="8" className="text-pink-300 dark:text-pink-600/80" />
      <circle cx="15" cy="22" r="5" className="text-pink-300 dark:text-pink-600/80" />
      <circle cx="35" cy="22" r="5" className="text-pink-300 dark:text-pink-600/80" />
      <circle cx="10" cy="32" r="4" className="text-pink-300 dark:text-pink-600/80" />
      <circle cx="40" cy="32" r="4" className="text-pink-300 dark:text-pink-600/80" />
    </svg>
  )
}

export function CuteDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Cats - hidden on small screens for performance */}
      <FloatingCat className="absolute top-20 left-[5%] opacity-20 sm:opacity-30 animate-float hidden sm:block" />
      <SleepyCat className="absolute bottom-32 right-[8%] opacity-15 sm:opacity-25 animate-float hidden md:block" style={{ animationDelay: "1s" }} />
      <HappyCat className="absolute top-40 right-[12%] opacity-15 sm:opacity-20 animate-float hidden lg:block" style={{ animationDelay: "0.5s" }} />
      <FloatingCat className="absolute bottom-20 left-[15%] opacity-15 sm:opacity-20 animate-float hidden md:block" style={{ animationDelay: "1.5s" }} />
      
      {/* Sparkles - fewer on mobile */}
      <Sparkle className="absolute top-32 left-[25%] opacity-30 sm:opacity-40 animate-sparkle" />
      <Sparkle className="absolute top-60 right-[20%] opacity-20 sm:opacity-30 animate-sparkle hidden sm:block" style={{ animationDelay: "0.3s" }} />
      <Sparkle className="absolute bottom-40 left-[30%] opacity-25 sm:opacity-35 animate-sparkle hidden md:block" style={{ animationDelay: "0.7s" }} />
      <Sparkle className="absolute top-[45%] right-[5%] opacity-20 sm:opacity-25 animate-sparkle" style={{ animationDelay: "1s" }} />
      
      {/* Hearts */}
      <Heart className="absolute top-28 right-[30%] opacity-25 sm:opacity-30 animate-bounce-gentle hidden sm:block" />
      <Heart className="absolute bottom-60 left-[10%] opacity-20 sm:opacity-25 animate-bounce-gentle hidden md:block" style={{ animationDelay: "0.5s" }} />
      <Heart className="absolute top-[60%] right-[15%] opacity-15 sm:opacity-20 animate-bounce-gentle hidden lg:block" style={{ animationDelay: "1s" }} />
      
      {/* Stars */}
      <Star className="absolute top-[35%] left-[8%] opacity-20 sm:opacity-25 animate-sparkle hidden sm:block" style={{ animationDelay: "0.2s" }} />
      <Star className="absolute bottom-28 right-[25%] opacity-25 sm:opacity-30 animate-sparkle hidden md:block" style={{ animationDelay: "0.8s" }} />
      
      {/* Paw prints - only on larger screens */}
      <PawPrint className="absolute top-[70%] left-[20%] opacity-10 sm:opacity-15 animate-float hidden lg:block" style={{ animationDelay: "0.3s" }} />
      <PawPrint className="absolute top-[25%] right-[8%] opacity-15 sm:opacity-20 animate-float hidden xl:block" style={{ animationDelay: "0.9s" }} />
      <PawPrint className="absolute bottom-[15%] right-[35%] opacity-10 sm:opacity-15 animate-float hidden lg:block" style={{ animationDelay: "1.2s" }} />
    </div>
  )
}
