
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="bg-gray-900 text-white pt-16 pb-8"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CorporatePro</h3>
            <p className="text-gray-400 mb-4">
              Professional business solutions that help companies thrive in today's competitive marketplace.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('navigation.services')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services#consulting" className="hover:text-white transition-colors">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link to="/services#marketing" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services#development" className="hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#analytics" className="hover:text-white transition-colors">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('navigation.company')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  {t('navigation.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  {t('navigation.blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('navigation.contact')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@corporatepro.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business Ave, Suite 100</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} CorporatePro. {t('footer.allRightsReserved')}
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              {t('footer.termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
