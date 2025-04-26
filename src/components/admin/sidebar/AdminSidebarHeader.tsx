
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AdminSidebarHeaderProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export const AdminSidebarHeader = ({ isCollapsed, toggleSidebar }: AdminSidebarHeaderProps) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <div className={cn(
      "p-4 flex items-center",
      isCollapsed ? "justify-center" : "justify-between"
    )}>
      {!isCollapsed && (
        <Link to="/admin" className="text-xl font-bold text-corporate-500 dark:text-corporate-300">
          {t('navigation.admin')}
        </Link>
      )}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="text-gray-500"
      >
        {isCollapsed ? 
          (isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />) : 
          (isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />)
        }
      </Button>
    </div>
  );
};
