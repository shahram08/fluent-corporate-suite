
import { useTranslation } from "react-i18next";
import { LogOut, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

interface AdminSidebarFooterProps {
  isCollapsed: boolean;
  user: { name: string; email: string; } | null;
  handleLogout: () => void;
}

export const AdminSidebarFooter = ({ isCollapsed, user, handleLogout }: AdminSidebarFooterProps) => {
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={cn(
      "p-4 border-t border-gray-200 dark:border-gray-700",
      isCollapsed ? "flex justify-center" : ""
    )}>
      {!isCollapsed && user && (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
              <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                {user.name.charAt(0)}
              </span>
            </div>
            <div className="leading-none">
              <p className="font-medium">{user.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-auto flex-shrink-0"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
      )}
      {isCollapsed && (
        <div className="flex flex-col space-y-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="flex-shrink-0"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="flex-shrink-0 text-gray-500"
          >
            <LogOut size={18} />
          </Button>
        </div>
      )}
    </div>
  );
};
