import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, ChevronDown, ChevronRight } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location === path;

  const productCategories = {
    "Push and pull Lock": {
      subcategories: [
        "Models For Local Offline Brand",
        "Models for Online RTS", 
        "New Product",
        "Single system",
        "Double system"
      ]
    },
    "Commercial digital locks": {
      subcategories: [
        "Frameless door lock",
        "Framed door lock",
        "Apartment lock",
        "Slim door/window lock",
        "Cylinder lock",
        "Deadbolt lock",
        "Knob Lock",
        "Lever handle lock",
        "Rim lock",
        "Interior door lock"
      ]
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm border-border">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold" data-testid="logo">
              <span className="text-foreground">TOPT</span>
              <span className="text-primary">EQ</span>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link 
              href="/" 
              className={`transition-colors px-3 py-2 font-medium ${
                isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
              data-testid="nav-home"
            >
              HOME
            </Link>

            <Link 
              href="/about" 
              className={`transition-colors px-3 py-2 font-medium ${
                isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
              data-testid="nav-about"
            >
              ABOUT US
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative dropdown">
              <button 
                className="flex items-center px-3 py-2 font-medium transition-colors text-foreground hover:text-primary"
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
                        className="flex items-center justify-between block px-4 py-2 text-sm text-foreground hover:bg-secondary"
                        data-testid={`nav-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {category}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                      <div className="absolute top-0 invisible w-64 ml-1 transition-all duration-200 bg-white border rounded-lg shadow-lg opacity-0 left-full border-border group-hover:opacity-100 group-hover:visible">
                        <div className="py-2">
                          {data.subcategories.map((subcategory) => (
                            <Link
                              key={subcategory}
                              href={`/products/${encodeURIComponent(category)}?subcategory=${encodeURIComponent(subcategory)}`}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-secondary"
                              data-testid={`nav-subcategory-${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {subcategory}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/solution" 
              className={`transition-colors px-3 py-2 font-medium ${
                isActive('/solution') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
              data-testid="nav-solution"
            >
              SOLUTION
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors px-3 py-2 font-medium ${
                isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
              data-testid="nav-contact"
            >
              CONTACT US
            </Link>
            
          </div>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-foreground hover:text-primary"
              data-testid="button-search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="md:hidden text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="py-4 border-t md:hidden border-border" data-testid="mobile-menu">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="px-3 py-2 text-foreground hover:text-primary" data-testid="mobile-nav-home">
                HOME
              </Link>
              <Link href="/products" className="px-3 py-2 text-foreground hover:text-primary" data-testid="mobile-nav-products">
                PRODUCTS
              </Link>
              <Link href="/solution" className="px-3 py-2 text-foreground hover:text-primary" data-testid="mobile-nav-solution">
                SOLUTION
              </Link>
              <Link href="/contact" className="px-3 py-2 text-foreground hover:text-primary" data-testid="mobile-nav-contact">
                CONTACT US
              </Link>
              <Link href="/about" className="px-3 py-2 text-foreground hover:text-primary" data-testid="mobile-nav-about">
                ABOUT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
