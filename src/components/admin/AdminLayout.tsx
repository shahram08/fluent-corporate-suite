import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  Activity,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "../ThemeProvider";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "Blog Posts",
      href: "/admin/posts",
      icon: FileText,
    },
    {
      name: "Activity Logs",
      href: "/admin/activity",
      icon: Activity,
    },
    {
      name: "Settings",
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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar for desktop */}
      <div
        className={cn(
          "hidden md:flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all",
          sidebarCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className={cn(
          "p-4 flex items-center justify-between",
          sidebarCollapsed ? "justify-center" : "justify-between"
        )}>
          {!sidebarCollapsed && (
            <Link to="/admin" className="text-xl font-bold text-corporate-500 dark:text-corporate-300">
              Admin
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-gray-500"
          >
            {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>
        <Separator />
        <div className="flex-1 overflow-y-auto py-4">
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
                  "flex-shrink-0 h-5 w-5 mr-3",
                  sidebarCollapsed ? "mr-0" : "mr-3",
                  isActive(item.href)
                    ? "text-corporate-500 dark:text-corporate-300"
                    : "text-gray-500 dark:text-gray-400"
                )} />
                {!sidebarCollapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>
        <div className={cn(
          "p-4 border-t border-gray-200 dark:border-gray-700",
          sidebarCollapsed ? "flex justify-center" : ""
        )}>
          {!sidebarCollapsed && (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
                  <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">A</span>
                </div>
                <div className="leading-none">
                  <p className="font-medium">Admin User</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
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
          {sidebarCollapsed && (
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
                className="flex-shrink-0 text-gray-500"
              >
                <LogOut size={18} />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-gray-600 bg-opacity-75 z-20 transition-opacity md:hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 left-0 flex flex-col z-30 w-full max-w-xs bg-white dark:bg-gray-800 transform transition-transform md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex items-center justify-between">
          <Link to="/admin" className="text-xl font-bold text-corporate-500 dark:text-corporate-300">
            Admin
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ChevronLeft size={18} />
          </Button>
        </div>
        <Separator />
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                  isActive(item.href)
                    ? "bg-corporate-50 text-corporate-500 dark:bg-corporate-900/50 dark:text-corporate-300"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700/50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className={cn(
                  "flex-shrink-0 h-5 w-5 mr-3",
                  isActive(item.href)
                    ? "text-corporate-500 dark:text-corporate-300"
                    : "text-gray-500 dark:text-gray-400"
                )} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
                <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">A</span>
              </div>
              <div className="leading-none">
                <p className="font-medium">Admin User</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 flex-shrink-0"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navbar */}
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
              <Button variant="ghost" size="sm" asChild className="mr-2">
                <Link to="/">View Site</Link>
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                <Link to="/auth/login">Logout</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
