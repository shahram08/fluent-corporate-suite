
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

interface AdminHeaderProps {
  setMobileMenuOpen: (open: boolean) => void;
  handleLogout: () => void;
}

export const AdminHeader = ({ setMobileMenuOpen, handleLogout }: AdminHeaderProps) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
      <div className="h-16 px-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex items-center ml-auto">
          <LanguageSwitcher variant="ghost" size="sm" className="mr-2" />
          
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link to="/">{t('navigation.viewSite')}</Link>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleLogout}
          >
            <LogOut className={isRTL ? "ml-2" : "mr-2"} size={16} />
            {t('navigation.logout')}
          </Button>
        </div>
      </div>
    </header>
  );
};
