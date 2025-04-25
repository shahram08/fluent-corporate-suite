
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.services'), path: '/services' },
    { name: t('navigation.portfolio'), path: '/portfolio' },
    { name: t('navigation.blog'), path: '/blog' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.contact'), path: '/contact' },
  ];

  const isRTL = i18n.dir() === 'rtl';
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div 
        className="container mx-auto px-4 h-24 flex items-center justify-between"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold bg-gradient-to-r from-corporate-500 to-corporate-700 bg-clip-text text-transparent"
        >
          CorporatePro
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-corporate-500 ${
                isActive(item.path)
                  ? 'text-corporate-500'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>{t('navigation.login')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link to="/auth/login">{t('navigation.login')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/auth/register">{t('navigation.register')}</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/admin">{t('navigation.admin')}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <LanguageSwitcher size="sm" className="mr-2" />
          
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden bg-white dark:bg-gray-900 pb-6 px-4 shadow-lg"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors hover:text-corporate-500 ${
                  isActive(item.path)
                    ? 'text-corporate-500'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 my-2 pt-4">
              <Link
                to="/auth/login"
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-corporate-500"
              >
                {t('navigation.login')}
              </Link>
              <Link
                to="/auth/register"
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-corporate-500"
              >
                {t('navigation.register')}
              </Link>
              <Link
                to="/admin"
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-corporate-500"
              >
                {t('navigation.admin')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
