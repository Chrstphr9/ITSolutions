import { Button } from "../components/ui/button";

export default function HTLOCKHotelManagementSystem() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden" data-testid="htlock-hero">
        <div className="absolute inset-0">
          <img
            src="/hero/aboutHero.png"
            alt="HTLOCK Hotel Management System"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              HTLOCK Hotel Management System
            </h1>
            <p className="max-w-2xl text-lg text-white/90">
              A robust hotel lock management system with strong security,
              audit trails, and centralized configuration.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white" data-testid="htlock-content">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="max-w-5xl">
              <img 
                src="/solution/solution4.jpg" 
                alt="HTLOCK Hotel Management System" 
                className="w-full h-full" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}