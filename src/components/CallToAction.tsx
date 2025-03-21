
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'scale-100');
            entry.target.classList.remove('opacity-0', 'scale-95');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="try" className="section-padding">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className="relative glass-card rounded-2xl overflow-hidden p-8 md:p-12 opacity-0 scale-95 transition-all duration-700 ease-out"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cryptx-purple/20 to-cryptx-blue/20"></div>
          
          {/* Glowing orbs */}
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-cryptx-purple/20 blur-[100px]"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-cryptx-blue/20 blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Experience Next-Gen <br/>
                <span className="text-gradient-blue">Crypto Transactions?</span>
              </h2>
              <p className="text-gray-300">
                Join thousands of users already enjoying fast, secure, and seamless 
                cryptocurrency transfers with CryptX. Try it today and revolutionize
                your blockchain experience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cryptx-purple to-cryptx-blue text-white font-medium button-glow flex items-center justify-center gap-2">
                Try CryptX Now <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
