
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-corporate-500 dark:text-corporate-300">CorporatePro</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Delivering excellence in business solutions and services. Our team is dedicated to helping your company reach its full potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-corporate-500 dark:text-corporate-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-corporate-500 dark:text-corporate-300">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/consulting" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">Business Consulting</Link>
              </li>
              <li>
                <Link to="/services/marketing" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services/strategy" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">Strategic Planning</Link>
              </li>
              <li>
                <Link to="/services/market-research" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">Market Research</Link>
              </li>
              <li>
                <Link to="/services/development" className="text-gray-600 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300">Business Development</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-corporate-500 dark:text-corporate-300">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                123 Corporate Avenue, Business District
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                New York, NY 10001
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Phone: +1 (555) 123-4567
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Email: info@corporatepro.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CorporatePro. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300 text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-corporate-500 dark:text-gray-400 dark:hover:text-corporate-300 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
