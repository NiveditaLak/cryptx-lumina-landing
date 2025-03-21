
import React, { useEffect, useRef } from 'react';
import { Wallet, ArrowRight, RefreshCw, CheckCircle } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, delay }) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={stepRef}
      className="relative opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      {number < 4 && (
        <div className="hidden md:block absolute top-16 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-gradient-to-r from-cryptx-purple/50 to-cryptx-blue/50"></div>
      )}
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cryptx-purple to-cryptx-blue mb-6 animate-pulse-slow">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-cryptx-dark">
            {icon}
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 w-full">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="text-xs font-medium">Step {number}</span>
          </div>
          <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
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

  const steps = [
    {
      number: 1,
      title: "Connect Your Wallet",
      description: "Link your crypto wallet to CryptX. We support MetaMask, Coinbase Wallet, and more.",
      icon: <Wallet className="text-white" size={24} />,
      delay: 100,
    },
    {
      number: 2,
      title: "Enter Transaction Details",
      description: "Specify the recipient's address and the amount of cryptocurrency to send.",
      icon: <ArrowRight className="text-white" size={24} />,
      delay: 200,
    },
    {
      number: 3,
      title: "Confirm and Process",
      description: "Review the transaction details, confirm, and our system processes it securely.",
      icon: <RefreshCw className="text-white" size={24} />,
      delay: 300,
    },
    {
      number: 4,
      title: "Transaction Complete",
      description: "Your transaction is verified on the blockchain and the recipient receives the funds.",
      icon: <CheckCircle className="text-white" size={24} />,
      delay: 400,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cryptx-purple/10 blur-[150px] rounded-full"></div>
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-cryptx-blue/10 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full glass-card border border-cryptx-blue/20">
            <span className="text-sm font-medium text-cryptx-blue">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How <span className="text-gradient-purple">CryptX</span> Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sending cryptocurrency has never been easier. Our streamlined process 
            makes transfers fast, secure, and hassle-free.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={step.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
