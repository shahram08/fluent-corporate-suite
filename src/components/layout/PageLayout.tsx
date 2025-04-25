
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow pt-24 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
