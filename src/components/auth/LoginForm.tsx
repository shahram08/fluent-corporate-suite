
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: t('auth.error'),
        description: t('auth.fillAllFields'),
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate authentication
    try {
      // This would be replaced with actual authentication logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // For demo purposes, let's just check for a dummy admin account
      if (email === "admin@example.com" && password === "password") {
        toast({
          title: t('auth.success'),
          description: t('auth.loginSuccess'),
        });
        // Redirect would happen here
      } else {
        toast({
          title: t('auth.error'),
          description: t('auth.invalidCredentials'),
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t('auth.error'),
        description: t('auth.loginError'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">{t('auth.email')}</Label>
        <div className="relative">
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
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-white">{t('auth.password')}</Label>
          <Link to="/auth/forgot-password" className="text-sm text-white/80 hover:text-white">
            {t('auth.forgotPassword')}
          </Link>
        </div>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('auth.enterPassword')}
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
      
      <div className="flex items-center">
        <Checkbox
          id="remember"
          checked={rememberMe}
          onCheckedChange={(checked) => setRememberMe(checked === true)}
          className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-corporate-500"
        />
        <label htmlFor="remember" className={`${isRTL ? 'mr-2' : 'ml-2'} text-sm text-white cursor-pointer`}>
          {t('auth.rememberMe')}
        </label>
      </div>
      
      <Button
        type="submit"
        className="w-full bg-white text-corporate-500 hover:bg-white/90"
        disabled={isLoading}
      >
        {isLoading ? t('auth.loggingIn') : t('auth.login')}
      </Button>
      
      <div className="text-center text-white/80">
        <p>
          {t('auth.noAccount')}{" "}
          <Link to="/auth/register" className="text-white hover:underline">
            {t('auth.signUp')}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
