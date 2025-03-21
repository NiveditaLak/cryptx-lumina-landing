
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Page Not Found - CryptX';
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cryptx-darker text-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="relative inline-block mb-8">
            <div className="text-[150px] md:text-[200px] font-display font-bold text-gradient-blue leading-none">
              404
            </div>
            <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-cryptx-purple to-cryptx-blue blur-sm"></div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Please check the URL or navigate back to the homepage.
          </p>
          
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cryptx-purple to-cryptx-blue text-white font-medium button-glow"
          >
            <ArrowLeft size={18} /> Return to Homepage
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
