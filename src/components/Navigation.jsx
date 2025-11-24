import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, ChevronDown, ChevronRight, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location === path;

  const solutions = [
    {
      name: "LOCKAI Hotel Management System",
      path: "/solutions/lockai-hotel-management-system",
      testId: "nav-solution-lockai",
    },
    {
      name: "Mobile Key Solution",
      path: "/solutions/mobile-key-solution",
      testId: "nav-solution-mobile-key",
    },
    {
      name: "TT Hotel System",
      path: "/solutions/tt-hotel-system",
      testId: "nav-solution-tt-hotel",
    },
    {
      name: "HTLOCK Hotel Management System",
      path: "/solutions/htlock-hotel-management-system",
      testId: "nav-solution-htlock",
    },
  ];

  const productCategories = {
    "Hotel Lock": {
      subcategories: [],
      nestedSubcategories: {}
    },
    "Digital Lock": {
      subcategories: [],
      nestedSubcategories: {}
    },
    "Smart Switch": {
      subcategories: [],
      nestedSubcategories: {}
    },
    "Hotel Accessories": {
      subcategories: [],
      nestedSubcategories: {}
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-white shadow-sm border-border' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold" data-testid="logo">
              <img 
                src="/public/logo.png" 
                alt="" 
   className="w-20 h-20 sm:w-40 sm:h-40 md:w-[120px] md:h-[120px]" 
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link 
              href="/" 
              className={`transition-colors px-3 py-2 font-medium ${
                isScrolled
                  ? (isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary')
                  : 'text-white hover:text-gray-200'
              }`}
              data-testid="nav-home"
            >
              HOME
            </Link>

            <Link 
              href="/about" 
              className={`transition-colors px-3 py-2 font-medium ${
                isScrolled
                  ? (isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary')
                  : 'text-white hover:text-gray-200'
              }`}
              data-testid="nav-about"
            >
              ABOUT US
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative dropdown">
              <button 
                className={`flex items-center px-3 py-2 font-medium transition-colors ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white hover:text-gray-200'
                }`}
                data-testid="nav-products"
              >
                PRODUCTS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 w-64 mt-1 bg-white border rounded-lg shadow-lg dropdown-menu top-full border-border">
                <div className="py-2">
                  {Object.entries(productCategories).map(([category, data]) => (
                    <div key={category} className="relative group">
                      <Link
                        href={`/products/${encodeURIComponent(category)}`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary"
                        data-testid={`nav-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {category}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative dropdown">
              <button
                className={`flex items-center px-3 py-2 font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-gray-200"
                }`}
                data-testid="nav-solutions"
              >
                SOLUTIONS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-1 bg-white border rounded-lg shadow-lg w-72 dropdown-menu top-full border-border">
                <div className="py-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      href={solution.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-secondary"
                      data-testid={solution.testId}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link 
              href="/contact" 
              className={`transition-colors px-3 py-2 font-medium ${
                isScrolled
                  ? (isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary')
                  : 'text-white hover:text-gray-200'
              }`}
              data-testid="nav-contact"
            >
              CONTACT US
            </Link>
            
          </div>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <button 
              className={`transition-colors ${
                isScrolled
                  ? 'text-black hover:text-primary'
                  : 'text-black hover:text-gray-200'
              }`}
              data-testid="button-search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className={`md:hidden transition-colors ${
                isScrolled
                  ? 'text-black hover:text-primary'
                  : 'text-black hover:text-gray-200'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-200" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed left-0 right-0 w-full bg-white shadow-lg md:hidden" style={{ top: "5rem" }} data-testid="mobile-menu">
            <div className="flex flex-col py-4 border-t border-border">
              <Link 
                href="/" 
                className={`px-4 py-3 text-foreground hover:bg-gray-50 hover:text-primary ${isActive('/') ? 'bg-gray-50 text-primary' : ''}`} 
                data-testid="mobile-nav-home"
              >
                HOME
              </Link>
              <Link 
                href="/products" 
                className={`px-4 py-3 text-foreground hover:bg-gray-50 hover:text-primary ${isActive('/products') ? 'bg-gray-50 text-primary' : ''}`}
                data-testid="mobile-nav-products"
              >
                PRODUCTS
              </Link>
              
              {/* Mobile Solutions list */}
              <div className="pt-2 mt-2 border-t border-border">
                <div className="px-4 pb-2 text-xs font-semibold tracking-widest text-muted-foreground">
                  SOLUTIONS
                </div>
                {solutions.map((solution) => (
                  <Link
                    key={solution.path}
                    href={solution.path}
                    className={`px-6 py-2 text-sm text-foreground hover:bg-gray-50 hover:text-primary ${
                      isActive(solution.path) ? "bg-gray-50 text-primary" : ""
                    }`}
                    data-testid={`mobile-${solution.testId}`}
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>
              <Link 
                href="/contact" 
                className={`px-4 py-3 text-foreground hover:bg-gray-50 hover:text-primary ${isActive('/contact') ? 'bg-gray-50 text-primary' : ''}`}
                data-testid="mobile-nav-contact"
              >
                CONTACT US
              </Link>
              <Link 
                href="/about" 
                className={`px-4 py-3 text-foreground hover:bg-gray-50 hover:text-primary ${isActive('/about') ? 'bg-gray-50 text-primary' : ''}`}
                data-testid="mobile-nav-about"
              >
                ABOUT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
