import { Button } from "../components/ui/button";

export default function TTHotelSystem() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden" data-testid="tt-hotel-hero">
        <div className="absolute inset-0">
          <img
            src="/public/hero/hero3.jpg"
            alt="TT Hotel System"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              TT Hotel System
            </h1>
            <p className="max-w-2xl text-lg text-white/90">
              A flexible solution for small and mid‑size properties that need
              reliable room management and access control.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white" data-testid="tt-hotel-content">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="max-w-5xl">
              <img 
                src="/public/solution/solution3.jpg" 
                alt="LOCKAI Hotel Management System" 
                className="w-full h-full" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}