import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import HeroSlider from "../components/HeroSlider";
import MiniCarousel from "../components/MiniCarousel";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { sampleProducts } from "../../constant";


export default function Home() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  const newProducts = sampleProducts.filter(product => product.isNew || product.isHot).slice(0, 4);

  return (
    <div>
      {/* Hero Section with Background Image Slider */}
      <section className="relative h-screen overflow-hidden" data-testid="hero-section">
        <HeroSlider />
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8 text-white fade-in">
                <h1 className="text-5xl font-bold leading-tight lg:text-6xl" data-testid="hero-title">
                  UNLOCK THE FUTURE<br />
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text">
                    WITH CUSTOM SMART LOCKS
                  </span>
                </h1>
                <p className="text-xl leading-relaxed text-white/90" data-testid="hero-subtitle">
                  Advanced smart lock technology with IoT integration, biometric access, and enterprise-grade security solutions for modern businesses.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/products">
                    <Button className="px-8 py-4 text-lg font-semibold gradient-button text-primary-foreground" data-testid="button-explore">
                      Explore Products
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      className="px-8 py-4 text-lg font-semibold text-black border-2 border-white hover:bg-white hover:text-gray-900"
                      data-testid="button-quote"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Carousel below Hero */}
      <MiniCarousel />

      {/* New Product Launch Section */}
      <section className="py-20 bg-white" data-testid="products-section">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground" data-testid="products-title">
              New Product Launch
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="products-subtitle">
              Discover our latest smart lock innovations
            </p>
          </div>

          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-6 border bg-card rounded-xl border-border animate-pulse" data-testid={`product-skeleton-${i}`}>
                  <div className="w-full h-48 mb-4 rounded bg-muted"></div>
                  <div className="h-4 mb-2 rounded bg-muted"></div>
                  <div className="w-3/4 h-4 rounded bg-muted"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" data-testid="products-grid">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/products">
              <Button className="px-8 py-3 font-semibold gradient-button text-primary-foreground" data-testid="button-view-all">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* IoT Integration Section */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-r from-blue-900 to-purple-900" data-testid="iot-section">
        <div className="absolute inset-0">
          <img 
            src="" 
            alt="IoT smart home network" 
            className="object-cover w-full h-full opacity-20" 
          />
        </div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl" data-testid="iot-title">
            LET EVERY OBJECT "SPEAK"
          </h2>
          <p className="mb-8 text-xl text-blue-100" data-testid="iot-subtitle">
            IoT makes life simpler and smarter!
          </p>
          <Button 
            className="px-8 py-4 text-lg font-semibold text-blue-900 bg-white hover:bg-blue-50"
            data-testid="button-learn-iot"
          >
            Learn More About IoT
          </Button>
        </div>
      </section>
    </div>
  );
}
