
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: t('auth.error'),
        description: t('auth.fillAllFields'),
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: t('auth.error'),
        description: t('auth.passwordsNotMatch'),
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration
    try {
      // This would be replaced with actual registration logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: t('auth.success'),
        description: t('auth.accountCreated'),
      });
      // Redirect would happen here
    } catch (error) {
      toast({
        title: t('auth.error'),
        description: t('auth.registrationError'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">{t('auth.fullName')}</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('auth.enterFullName')}
          required
          className="glass-input text-white bg-transparent border-white/20 placeholder:text-white/50 focus:border-white"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">{t('auth.email')}</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('auth.enterEmail')}
          required
          className="glass-input text-white bg-transparent border-white/20 placeholder:text-white/50 focus:border-white"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password" className="text-white">{t('auth.password')}</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('auth.createPassword')}
            required
            className={`glass-input text-white bg-transparent border-white/20 placeholder:text-white/50 focus:border-white ${isRTL ? 'pl-10' : 'pr-10'}`}
          />
          <button
            type="button"
            className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-white/70 hover:text-white`}
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-white">{t('auth.confirmPassword')}</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={t('auth.confirmYourPassword')}
            required
            className={`glass-input text-white bg-transparent border-white/20 placeholder:text-white/50 focus:border-white ${isRTL ? 'pl-10' : 'pr-10'}`}
          />
          <button
            type="button"
            className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-white/70 hover:text-white`}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            tabIndex={-1}
          >
            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>
      
      <Button
        type="submit"
        className="w-full bg-white text-corporate-500 hover:bg-white/90 mt-6"
        disabled={isLoading}
      >
        {isLoading ? t('auth.creatingAccount') : t('auth.signUp')}
      </Button>
      
      <div className="text-center text-white/80 mt-4">
        <p>
          {t('auth.haveAccount')}{" "}
          <Link to="/auth/login" className="text-white hover:underline">
            {t('auth.login')}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
