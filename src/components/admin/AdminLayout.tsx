
import { ReactNode, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AdminSidebarNav } from "./sidebar/AdminSidebarNav";
import { AdminSidebarHeader } from "./sidebar/AdminSidebarHeader";
import { AdminSidebarFooter } from "./sidebar/AdminSidebarFooter";
import { AdminHeader } from "./header/AdminHeader";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  // Store sidebar state in localStorage
  useEffect(() => {
    const savedSidebarState = localStorage.getItem('adminSidebarCollapsed');
    if (savedSidebarState) {
      setSidebarCollapsed(savedSidebarState === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('adminSidebarCollapsed', String(sidebarCollapsed));
  }, [sidebarCollapsed]);

  // Get user from localStorage
  const [user, setUser] = useState<{name: string; email: string} | null>(null);

  useEffect(() => {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      try {
        const userData = JSON.parse(authUser);
        setUser({
          name: userData.name || 'Admin User',
          email: userData.email || 'admin@example.com'
        });
      } catch (e) {
        console.error('Failed to parse user data');
      }
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem('authUser');
    window.location.href = '/auth/login';
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all",
          sidebarCollapsed ? "w-20" : "w-64"
        )}
      >
        <AdminSidebarHeader isCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
        <Separator />
        <div className="flex-1 overflow-y-auto py-4">
          <AdminSidebarNav isCollapsed={sidebarCollapsed} />
        </div>
        <AdminSidebarFooter 
          isCollapsed={sidebarCollapsed}
          user={user}
          handleLogout={handleLogout}
        />
      </div>

      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-gray-600 bg-opacity-75 z-20 transition-opacity md:hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 start-0 flex flex-col z-30 w-full max-w-xs bg-white dark:bg-gray-800 transform transition-transform md:hidden",
          mobileMenuOpen ? "translate-x-0" : isRTL ? "translate-x-full" : "-translate-x-full"
        )}
      >
        <AdminSidebarHeader isCollapsed={false} toggleSidebar={() => setMobileMenuOpen(false)} />
        <Separator />
        <div className="flex-1 overflow-y-auto py-4">
          <AdminSidebarNav isCollapsed={false} />
        </div>
        <AdminSidebarFooter 
          isCollapsed={false}
          user={user}
          handleLogout={handleLogout}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeader setMobileMenuOpen={setMobileMenuOpen} handleLogout={handleLogout} />
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
