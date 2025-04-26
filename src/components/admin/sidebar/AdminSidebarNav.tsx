
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const AdminSidebarNav = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const navigation = [
    {
      name: t('admin.dashboard.title'),
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: t('admin.users.title'),
      href: "/admin/users",
      icon: Users,
    },
    {
      name: t('admin.blogManagement.title'),
      href: "/admin/posts",
      icon: FileText,
    },
    {
      name: t('admin.activityLogs.title'),
      href: "/admin/activity",
      icon: Activity,
    },
    {
      name: t('admin.settings.title'),
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/admin" && location.pathname === "/admin") {
      return true;
    }
    return location.pathname.startsWith(path) && path !== "/admin";
  };

  return (
    <nav className="px-2 space-y-1">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={cn(
            "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
            isActive(item.href)
              ? "bg-corporate-50 text-corporate-500 dark:bg-corporate-900/50 dark:text-corporate-300"
              : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700/50"
          )}
        >
          <item.icon className={cn(
            "flex-shrink-0 h-5 w-5",
            isCollapsed ? "mx-auto" : isRTL ? "ml-3" : "mr-3",
            isActive(item.href)
              ? "text-corporate-500 dark:text-corporate-300"
              : "text-gray-500 dark:text-gray-400"
          )} />
          {!isCollapsed && <span>{item.name}</span>}
        </Link>
      ))}
    </nav>
  );
};
