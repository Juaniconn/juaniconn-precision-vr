import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import trackerChristmas from "@/assets/tracker-christmas.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Deep dark gradient background - Beekonz colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08141F] via-[#0B1C2D] to-[#08141F]" />
      
      {/* Animated mesh energy grid pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6BFF3F" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6BFF3F" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gridGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#6BFF3F" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.25" />
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
            background: 'linear-gradient(135deg, #6BFF3F 0%, transparent 50%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[200px] h-[200px] right-[10%] top-[10%] opacity-15"
          style={{
            background: 'linear-gradient(45deg, #00E5FF 0%, transparent 60%)',
            clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
            animation: 'float 6s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-[150px] h-[150px] left-[15%] bottom-[15%] opacity-20"
          style={{
            background: 'linear-gradient(225deg, #00E5FF 0%, transparent 50%)',
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
        <div 
          className="absolute w-[180px] h-[180px] right-[5%] bottom-[25%] opacity-15"
          style={{
            background: 'linear-gradient(315deg, #FFC83D 0%, transparent 50%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            animation: 'float 9s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
      </div>
      
      {/* Diagonal tech glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-[70%] h-[70%] bg-gradient-to-br from-primary/15 via-transparent to-transparent blur-[100px]" />
        <div className="absolute right-0 bottom-0 w-[60%] h-[60%] bg-gradient-to-tl from-secondary/12 via-transparent to-transparent blur-[100px]" />
        <div className="absolute right-1/4 top-1/4 w-[40%] h-[40%] bg-gradient-to-bl from-secondary/10 via-transparent to-transparent blur-[80px]" />
      </div>
      
      {/* Animated light sweep */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(107,255,63,0.1) 45%, rgba(0,229,255,0.1) 50%, rgba(107,255,63,0.1) 55%, transparent 60%)',
          animation: 'lightSweep 8s ease-in-out infinite',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content - Text */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Main title H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1]">
              <span className="text-foreground">Beekonz Trackers</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Full Body Tracking para VR
              </span>
            </h1>
            
            {/* Subtitle H2 */}
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              10g · +50h batería · Compatible con VRChat y SteamVR
            </h2>
            
            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground/70 font-light max-w-lg mx-auto lg:mx-0">
              Trackers compactos con sensores ICM-45686 y compatibilidad con SlimeVR.
            </p>
            
            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA with neon glow */}
              <a 
                href="https://buy.stripe.com/bJe28s1bn0RD9kz4Vn7g40k"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-block"
              >
                <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-80 group-hover:opacity-100 transition-opacity animate-rainbow-flow bg-[length:200%_100%]" />
                <Button 
                  size="lg" 
                  className="relative bg-background hover:bg-background/90 text-foreground font-semibold px-10 py-7 text-lg rounded-full border border-primary/30 group-hover:border-primary/50 transition-all shadow-lg shadow-primary/30 group-hover:shadow-primary/50"
                >
                  <span className="bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent font-bold">
                    Comprar Ahora
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            {/* Secondary shipping info */}
            <p className="text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
              Envíos 24h México · Internacional 5–7 días
            </p>
          </div>
          
          {/* Right content - Product image with geometric frame */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Outer glow */}
            <div className="absolute -inset-20 bg-gradient-to-r from-primary/20 via-secondary/15 to-primary/15 rounded-[80px] blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
            
            {/* Geometric frame inspired container */}
            <div className="relative">
              {/* Animated neon border frame */}
              <div 
                className="absolute -inset-[4px] rounded-[2rem] opacity-70"
                style={{
                  background: 'linear-gradient(90deg, #6BFF3F, #00E5FF, #6BFF3F)',
                  backgroundSize: '400% 100%',
                  animation: 'rainbowFlow 4s linear infinite',
                }}
              />
              
              {/* Inner frame with gradient */}
              <div className="absolute inset-[2px] rounded-[1.8rem] bg-gradient-to-br from-[#0B1C2D] to-[#08141F]" />
              
              {/* Hexagonal accent corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-2 border-primary/60 rotate-45 bg-[#0B1C2D]" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-2 border-secondary/60 rotate-45 bg-[#0B1C2D]" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-2 border-secondary/60 rotate-45 bg-[#0B1C2D]" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-2 border-accent/60 rotate-45 bg-[#0B1C2D]" />
              
              {/* Inner glow */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-[1.5rem]" />
              
              <img 
                src={trackerChristmas} 
                alt="Beekonz Tracker - Tecnología VR premium con iluminación" 
                className="relative w-full rounded-[1.8rem] p-[3px] shadow-2xl"
              />
              
              {/* Decorative light streaks */}
              <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
            </div>
            
            {/* Floating spec cards */}
            <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-xl rounded-2xl px-5 py-4 border border-primary/40 shadow-xl shadow-primary/20">
              <div className="text-xs text-muted-foreground mb-1">Batería</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">+50 hrs</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-background/95 backdrop-blur-xl rounded-2xl px-5 py-4 border border-secondary/40 shadow-xl shadow-secondary/20">
              <div className="text-xs text-muted-foreground mb-1">Peso</div>
              <div className="text-2xl font-bold text-primary">10g</div>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-xl rounded-2xl px-4 py-3 border border-secondary/40 shadow-xl hidden xl:block">
              <div className="text-xs text-muted-foreground mb-1">Sensor</div>
              <div className="text-lg font-bold text-secondary">ICM-45686</div>
            </div>
            
            {/* Decorative Seal - "Beekonz • VR Tracking • Since 2024" */}
            <div className="absolute -bottom-4 right-8 w-24 h-24 lg:w-28 lg:h-28">
              {/* Rotating text circle */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="sealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6BFF3F" />
                      <stop offset="50%" stopColor="#00E5FF" />
                      <stop offset="100%" stopColor="#6BFF3F" />
                    </linearGradient>
                    <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fill="url(#sealGradient)" fontSize="7.5" fontWeight="500" letterSpacing="2">
                    <textPath href="#circlePath">
                      BEEKONZ • VR TRACKING • SINCE 2024 •
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(107,255,63,0.2), rgba(0,229,255,0.2))',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(#0B1C2D, #0B1C2D), linear-gradient(135deg, #6BFF3F, #00E5FF)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  <Play className="w-5 h-5 lg:w-6 lg:h-6 text-primary fill-primary/30" />
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