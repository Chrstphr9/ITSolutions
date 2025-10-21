import { useState, useEffect } from "react";

const heroImages = [
  {
    url: "/hero/hero1.jpg",
    alt: "Smart lock collection"
  },
  {
    url: "/hero/hero2.jpg",
    alt: "Digital door lock with keypad"
  },
  {
    url: "/hero/hero3.jpg",
    alt: "Smart building entrance"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-full">
      {/* Background images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image.url})` }}
          data-testid={`hero-slide-${index}`}
        />
      ))}
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Slider indicators */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-6 left-1/2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            data-testid={`hero-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
