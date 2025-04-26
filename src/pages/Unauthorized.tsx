
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AlertTriangle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const Unauthorized = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    // Auto redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageLayout>
      <div className="container max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg border border-red-100 dark:border-red-800">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t('errors.unauthorized.title', 'Unauthorized Access')}
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t('errors.unauthorized.message', 'You do not have permission to access this page. Please contact your administrator if you believe this is an error.')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link to="/" className="flex items-center">
                {isRTL ? null : <span className="mr-2">←</span>}
                {t('navigation.home')}
                {isRTL ? <span className="ml-2">→</span> : null}
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/auth/login">
                {t('auth.login')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Unauthorized;
