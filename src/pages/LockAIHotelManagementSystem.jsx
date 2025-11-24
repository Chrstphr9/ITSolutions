import { Button } from "../components/ui/button";

export default function LockAIHotelManagementSystem() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden" data-testid="lockai-hero">
        <div className="absolute inset-0">
          <img
            src="/public/hero/hero1.jpg"
            alt="LOCKAI Hotel Management System"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              LOCKAI Hotel Management System
            </h1>
            <p className="max-w-2xl text-lg text-white/90">
              A smart, cloud-ready hotel management platform that connects your locks,
              front desk, and reporting into one seamless solution.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white" data-testid="lockai-content">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
            <img src="/public/solution/solution1.jpg" alt="LOCKAI Hotel Management System" className="w-full h-full" />
            </div>
            <div className="p-6 border rounded-xl bg-card border-border">
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Key Benefits
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Faster front desk operations</li>
                <li>• Reduced keycard costs and lockouts</li>
                <li>• Better visibility across all hotel doors</li>
              </ul>
              <div className="mt-6">
                <Button className="px-8" data-testid="lockai-contact-btn">
                  Talk to us about LOCKAI
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


