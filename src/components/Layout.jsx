import Navigation from "./Navigation";
import SocialMediaIcons from "./SocialMediaIcons";
import { MessageCircle } from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      
      {/* Fixed Social Media Icons */}
      <SocialMediaIcons />
      
      {/* Footer */}
      <footer className="py-16 text-white bg-foreground">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">
              <img 
                src="/logo.png" 
                alt="Chima Logo" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-[180px] md:h-[180px]" 
              />
              </div>
              <p className="text-gray-300">
                Advanced smart lock technology solutions for modern businesses and homes.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-primary hover:bg-pink-600"
                  data-testid="social-instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-primary hover:bg-blue-600"
                  data-testid="social-facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-primary hover:bg-black"
                  data-testid="social-tiktok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-primary hover:bg-blue-600"
                  data-testid="social-linkedin"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">About Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="transition-colors hover:text-white" data-testid="footer-mission">Core Mission</a></li>
                <li><a href="#" className="transition-colors hover:text-white" data-testid="footer-manual">User Manual</a></li>
                <li><a href="#" className="transition-colors hover:text-white" data-testid="footer-dealer">Dealer</a></li>
                <li><a href="#" className="transition-colors hover:text-white" data-testid="footer-service">Service Provider</a></li>
                <li><a href="#" className="transition-colors hover:text-white" data-testid="footer-oem">OEM Service</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">Stay Updated</h4>
              <p className="mb-4 text-gray-300">Subscribe to get the latest updates and product launches.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-800 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  data-testid="input-newsletter"
                />
                <button 
                  className="w-full py-3 font-semibold rounded-lg gradient-button text-primary-foreground"
                  data-testid="button-subscribe"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-medium">Address:</p>
                 <p>PLOT 7 ONYIUKE STREET THINKERS CORNER ENUGU</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <a href="mailto:info@starrychima.com" className="transition-colors hover:text-white">
                    info@starryitsolutions.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-12 text-center text-gray-300 border-t border-gray-700">
            <p>Copyright 2025 — Starry IT Solutions. All rights reserved. Shopwell WordPress Theme</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Button */}
      <div className="fixed z-50 bottom-6 right-6">
        <button 
          className="p-4 text-white transition-all transform bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110"
          data-testid="button-whatsapp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
