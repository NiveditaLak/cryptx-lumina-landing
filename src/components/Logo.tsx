
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2L2 9L16 16L30 9L16 2Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 16L2 9V23L16 30L30 23V9L16 16Z"
          fill="url(#paint1_linear)"
          fillOpacity="0.8"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="2"
            y1="9"
            x2="30"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9D4EDD" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="2"
            y1="19.5"
            x2="30"
            y2="19.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C63FF" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display font-bold text-xl tracking-tight">CryptX</span>
    </div>
  );
};

export default Logo;
