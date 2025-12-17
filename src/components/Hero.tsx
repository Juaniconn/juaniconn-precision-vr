import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import trackerChristmas from "@/assets/tracker-christmas.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Deep dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0a0a12] to-[#080810]" />
      
      {/* Animated mesh energy grid pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A9EACB" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#89D7FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF7BAC" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gridGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF47C" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#A9EACB" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#89D7FF" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          
          {/* Hexagonal mesh pattern */}
          <pattern id="hexGrid" width="60" height="52" patternUnits="userSpaceOnUse">
            <path 
              d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z" 
              fill="none" 
              stroke="url(#gridGradient1)" 
              strokeWidth="0.5"
              className="animate-pulse"
              style={{ animationDuration: '4s' }}
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexGrid)" />
          
          {/* Dynamic energy lines */}
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${i * 15}%`}
              y1="0%"
              x2={`${(i * 15) + 20}%`}
              y2="100%"
              stroke="url(#gridGradient2)"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s`, animationDuration: '3s' }}
            />
          ))}
        </svg>
      </div>
      
      {/* 3D Geometric floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large geometric shapes with gradients */}
        <div 
          className="absolute w-[300px] h-[300px] left-[5%] top-[20%] opacity-20"
          style={{
            background: 'linear-gradient(135deg, #A9EACB 0%, transparent 50%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[200px] h-[200px] right-[10%] top-[10%] opacity-15"
          style={{
            background: 'linear-gradient(45deg, #FF7BAC 0%, transparent 60%)',
            clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
            animation: 'float 6s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-[150px] h-[150px] left-[15%] bottom-[15%] opacity-20"
          style={{
            background: 'linear-gradient(225deg, #89D7FF 0%, transparent 50%)',
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
        <div 
          className="absolute w-[180px] h-[180px] right-[5%] bottom-[25%] opacity-15"
          style={{
            background: 'linear-gradient(315deg, #FFF47C 0%, transparent 50%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            animation: 'float 9s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
      </div>
      
      {/* Diagonal tech glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-[70%] h-[70%] bg-gradient-to-br from-mint/12 via-transparent to-transparent blur-[100px]" />
        <div className="absolute right-0 bottom-0 w-[60%] h-[60%] bg-gradient-to-tl from-soft-pink/10 via-transparent to-transparent blur-[100px]" />
        <div className="absolute right-1/4 top-1/4 w-[40%] h-[40%] bg-gradient-to-bl from-soft-blue/8 via-transparent to-transparent blur-[80px]" />
      </div>
      
      {/* Animated light sweep */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(169,234,203,0.1) 45%, rgba(137,215,255,0.1) 50%, rgba(255,123,172,0.1) 55%, transparent 60%)',
          animation: 'lightSweep 8s ease-in-out infinite',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content - Text */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Tech badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-mint/20 backdrop-blur-md">
              <div className="w-2 h-2 bg-mint rounded-full animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-mint to-soft-blue bg-clip-text text-transparent">
                Full Body VR Tracking
              </span>
            </div>
            
            {/* Main title H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1]">
              <span className="text-white">Juaniconn Trackers</span>
              <br />
              <span className="bg-gradient-to-r from-mint via-soft-blue to-soft-pink bg-clip-text text-transparent">
                Tecnología que Mueve tu Mundo en VR
              </span>
            </h1>
            
            {/* Subtitle H2 */}
            <h2 className="text-lg md:text-xl lg:text-2xl text-white/70 font-light flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-mint rounded-full" />
                Ultra ligeros de 10g
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-soft-blue rounded-full" />
                +50h de batería
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-soft-pink rounded-full" />
                Precisión total en VRChat y SteamVR
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-base md:text-lg text-white/50 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Trackers compactos, inteligentes y diseñados para que experimentes movimiento real dentro del mundo virtual. Tecnología premium con sensores ICM-45686 y compatibilidad total con SlimeVR.
            </p>
            
            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA with animated rainbow border */}
              <a 
                href="https://buy.stripe.com/dRm00k1bneIteETdrT7g40f"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-block"
              >
                <div className="absolute -inset-[2px] rainbow-border rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                <Button 
                  size="lg" 
                  className="relative bg-[#0a0a12] hover:bg-[#12121a] text-white font-semibold px-10 py-7 text-lg rounded-full border border-mint/30 group-hover:border-mint/50 transition-all shadow-lg shadow-mint/20"
                >
                  <span className="bg-gradient-to-r from-mint via-white to-soft-pink bg-clip-text text-transparent font-bold">
                    Comprar Ahora
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5 text-mint group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            {/* Secondary shipping info */}
            <p className="text-sm text-white/40 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-mint to-soft-blue rounded-full" />
              Envíos 24h México · Internacional 5–7 días
            </p>
          </div>
          
          {/* Right content - Product image with geometric frame */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Outer glow */}
            <div className="absolute -inset-20 bg-gradient-to-r from-mint/15 via-soft-blue/10 to-soft-pink/10 rounded-[80px] blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
            
            {/* Geometric frame inspired container */}
            <div className="relative">
              {/* Animated rainbow border frame */}
              <div 
                className="absolute -inset-[4px] rounded-[2rem] opacity-70"
                style={{
                  background: 'linear-gradient(90deg, #A9EACB, #89D7FF, #FF7BAC, #FFF47C, #A9EACB)',
                  backgroundSize: '400% 100%',
                  animation: 'rainbowFlow 4s linear infinite',
                }}
              />
              
              {/* Inner frame with gradient */}
              <div className="absolute inset-[2px] rounded-[1.8rem] bg-gradient-to-br from-[#0a0a12] to-[#0d0d18]" />
              
              {/* Hexagonal accent corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-2 border-mint/60 rotate-45 bg-[#0a0a12]" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-2 border-soft-blue/60 rotate-45 bg-[#0a0a12]" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-2 border-soft-pink/60 rotate-45 bg-[#0a0a12]" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-2 border-pastel-yellow/60 rotate-45 bg-[#0a0a12]" />
              
              {/* Inner mint glow */}
              <div className="absolute inset-4 bg-gradient-to-br from-mint/5 via-transparent to-soft-blue/5 rounded-[1.5rem]" />
              
              <img 
                src={trackerChristmas} 
                alt="Juaniconn Tracker - Tecnología VR premium con iluminación" 
                className="relative w-full rounded-[1.8rem] p-[3px] shadow-2xl"
              />
              
              {/* Decorative light streaks */}
              <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-mint/50 to-transparent" />
              <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-soft-pink/50 to-transparent" />
            </div>
            
            {/* Floating spec cards */}
            <div className="absolute -bottom-6 -left-6 bg-[#0a0a12]/95 backdrop-blur-xl rounded-2xl px-5 py-4 border border-mint/40 shadow-xl shadow-mint/20">
              <div className="text-xs text-white/50 mb-1">Batería</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-mint to-soft-blue bg-clip-text text-transparent">+50 hrs</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-[#0a0a12]/95 backdrop-blur-xl rounded-2xl px-5 py-4 border border-soft-pink/40 shadow-xl shadow-soft-pink/20">
              <div className="text-xs text-white/50 mb-1">Peso</div>
              <div className="text-2xl font-bold text-soft-pink">10g</div>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 bg-[#0a0a12]/95 backdrop-blur-xl rounded-2xl px-4 py-3 border border-soft-blue/40 shadow-xl hidden xl:block">
              <div className="text-xs text-white/50 mb-1">Sensor</div>
              <div className="text-lg font-bold text-soft-blue">ICM-45686</div>
            </div>
            
            {/* Decorative Seal - "Juaniconn • VR Tracking • Since 2024" */}
            <div className="absolute -bottom-4 right-8 w-24 h-24 lg:w-28 lg:h-28">
              {/* Rotating text circle */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="sealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A9EACB" />
                      <stop offset="33%" stopColor="#89D7FF" />
                      <stop offset="66%" stopColor="#FF7BAC" />
                      <stop offset="100%" stopColor="#FFF47C" />
                    </linearGradient>
                    <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fill="url(#sealGradient)" fontSize="7.5" fontWeight="500" letterSpacing="2">
                    <textPath href="#circlePath">
                      JUANICONN • VR TRACKING • SINCE 2024 •
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(169,234,203,0.2), rgba(137,215,255,0.2), rgba(255,123,172,0.2))',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(#0a0a12, #0a0a12), linear-gradient(135deg, #A9EACB, #89D7FF, #FF7BAC)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  <Play className="w-5 h-5 lg:w-6 lg:h-6 text-mint fill-mint/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes lightSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes rainbowFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `}</style>
    </section>
  );
};
