
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: t('auth.error'),
        description: t('auth.enterEmailAddress'),
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate password reset request
    try {
      // This would be replaced with actual password reset logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      
      toast({
        title: t('auth.success'),
        description: t('auth.resetInstructionsSent'),
      });
    } catch (error) {
      toast({
        title: t('auth.error'),
        description: t('auth.resetRequestError'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-white mb-2">{t('auth.checkEmail')}</h3>
        <p className="text-white/80 mb-6">
          {t('auth.resetInstructionsSentTo')} {email}
        </p>
        <Button asChild className="bg-white text-corporate-500 hover:bg-white/90">
          <Link to="/auth/login">{t('auth.returnToLogin')}</Link>
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
      
      <Button
        type="submit"
        className="w-full bg-white text-corporate-500 hover:bg-white/90"
        disabled={isLoading}
      >
        {isLoading ? t('auth.sendingInstructions') : t('auth.sendResetInstructions')}
      </Button>
      
      <div className="text-center text-white/80">
        <p>
          {t('auth.rememberPassword')}{" "}
          <Link to="/auth/login" className="text-white hover:underline">
            {t('auth.backToLogin')}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
