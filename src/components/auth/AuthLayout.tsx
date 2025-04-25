
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
  backgroundImage?: string;
  className?: string;
};

const AuthLayout = ({ 
  children, 
  title, 
  description, 
  backgroundImage = "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80",
  className = ""
}: AuthLayoutProps) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
      style={{ 
        backgroundImage: `linear-gradient(to right bottom, rgba(15, 76, 129, 0.7), rgba(26, 54, 93, 0.8)), url(${backgroundImage})` 
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-corporate-500/30 to-corporate-900/50 z-0"></div>
      
      {/* Home button */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 flex items-center text-white hover:text-white/80 transition-colors z-10"
      >
        <ArrowLeft className={`${isRTL ? 'ml-2 flip-in-rtl' : 'mr-2'} h-4 w-4`} />
        {t('auth.backToHome')}
      </Link>
      
      {/* Language switcher */}
      <div className="absolute top-8 right-8 z-10">
        <LanguageSwitcher variant="ghost" className="text-white" />
      </div>
      
      <div className={cn(
        "w-full max-w-md z-10 glass-card",
        className
      )}>
        <div className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="text-white/80 mt-1">{description}</p>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
