
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateZ(20px)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cryptx-dark to-cryptx-darker"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-cryptx-purple/20 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-cryptx-blue/20 blur-[100px] animate-pulse-slow"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTSA2MCAwIEwgNjAgNjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="text-center md:text-left animate-fade-in">
          <div className="inline-block px-4 py-1 mb-6 rounded-full glass-card border border-cryptx-blue/20">
            <span className="text-sm font-medium text-cryptx-blue">Web 3.0 Technology</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Send Crypto <br />
            <span className="text-gradient-blue">Transactions</span> with <br />
            <span className="text-gradient-purple">CryptX</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
            A decentralized Web 3.0 application enabling seamless blockchain transactions.
          </p>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cryptx-purple to-cryptx-blue text-white font-medium button-glow"
          >
            Get Started <ArrowRight size={18} />
          </a>
        </div>
        
        <div ref={containerRef} className="relative flex justify-center animate-fade-in-right">
          <div
            ref={imageRef}
            className="w-full max-w-md mx-auto transition-transform duration-300 ease-out"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cryptx-purple/20 to-cryptx-blue/20 rounded-xl blur-xl transform scale-105"></div>
              <div className="glass-card rounded-xl overflow-hidden border border-white/10 shadow-lg relative z-10">
                <div className="p-5 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-50"></div>
                    <div className="ml-2 text-xs text-gray-400">CryptX Transaction</div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-8">
                    <div className="text-xs text-gray-400 mb-2">Sender</div>
                    <div className="p-2 bg-white/5 rounded border border-white/10 text-sm font-mono">0x8a7b...3f9c</div>
                  </div>
                  <div className="mb-8">
                    <div className="text-xs text-gray-400 mb-2">Recipient</div>
                    <div className="p-2 bg-white/5 rounded border border-white/10 text-sm font-mono">0x6e1d...8a2e</div>
                  </div>
                  <div className="mb-8">
                    <div className="text-xs text-gray-400 mb-2">Amount</div>
                    <div className="p-2 bg-white/5 rounded border border-white/10 text-sm font-mono flex justify-between">
                      <span>0.25 ETH</span>
                      <span className="text-cryptx-blue">$480.25</span>
                    </div>
                  </div>
                  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cryptx-purple to-cryptx-blue text-white font-medium button-glow">
                    Confirm Transaction
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
