
import React, { useEffect, useRef } from 'react';
import { Shield, Zap, Share2 } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="glass-card rounded-xl p-6 transform opacity-0 translate-y-10 transition-all duration-700 ease-out hover:border-cryptx-blue/30"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-cryptx-purple/20 to-cryptx-blue/20 border border-white/10 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Shield className="text-cryptx-purple" />,
      title: "Secure Blockchain Transactions",
      description:
        "End-to-end encryption and smart contract validation ensure your transactions remain secure and tamper-proof.",
      delay: 100,
    },
    {
      icon: <Zap className="text-cryptx-blue" />,
      title: "Fast & Reliable",
      description:
        "Lightning-fast transaction processing with minimal gas fees, making cryptocurrency transfers efficient and cost-effective.",
      delay: 200,
    },
    {
      icon: <Share2 className="text-cryptx-neon" />,
      title: "Decentralized & Transparent",
      description:
        "Fully decentralized architecture with transparent ledger records, giving you complete control and visibility.",
      delay: 300,
    },
  ];

  return (
    <section id="features" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cryptx-purple/10 blur-[150px] rounded-full"></div>
      <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-cryptx-blue/10 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-4">
        <div
          ref={featuresRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full glass-card border border-cryptx-blue/20">
            <span className="text-sm font-medium text-cryptx-blue">Key Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why Choose <span className="text-gradient-purple">CryptX</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform offers cutting-edge blockchain technology with a focus on security,
            speed, and decentralization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
