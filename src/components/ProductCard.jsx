import { Heart, Eye } from "lucide-react";
import { Link } from "wouter";

export default function ProductCard({ product }) {
  const {
    name,
    description,
    features = [],
    imageUrl,
    isNew,
    isHot,
    tags = []
  } = product;

  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="overflow-hidden transition-all duration-300 border shadow-sm cursor-pointer bg-card rounded-xl border-border card-hover" data-testid={`product-card-${name.toLowerCase()}`}>
        <img 
          src={imageUrl} 
          alt={name} 
          loading="lazy"
          decoding="async"
          className="object-cover w-full h-40 sm:h-48 md:h-56 lg:h-64" 
          data-testid={`product-image-${name.toLowerCase()}`}
        />
        <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          {isNew && (
            <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full" data-testid="badge-new">
              New Product
            </span>
          )}
          {isHot && (
            <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full" data-testid="badge-hot">
              Hot
            </span>
          )}
          {tags.includes("Single system") && (
            <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full" data-testid="badge-single">
              Single system
            </span>
          )}
          {tags.includes("Double system") && (
            <span className="px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full" data-testid="badge-double">
              Double system
            </span>
          )}
          {tags.includes("Slim Design") && (
            <span className="px-2 py-1 text-xs font-medium text-orange-700 bg-orange-100 rounded-full" data-testid="badge-slim">
              Slim Design
            </span>
          )}
        </div>
        
        <h3 className="mb-2 text-lg font-semibold text-foreground" data-testid={`product-name-${name.toLowerCase()}`}>
          {name}
        </h3>
        
        <p className="mb-4 text-sm text-muted-foreground" data-testid={`product-description-${name.toLowerCase()}`}>
          {description}
        </p>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center" data-testid={`product-feature-${index}`}>
              <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {feature}
            </div>
          ))}
        </div>
        
          <div className="flex items-center mt-4 space-x-2">
            <button 
              className="transition-colors text-muted-foreground hover:text-primary"
              data-testid={`button-favorite-${name.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Handle favorite functionality
              }}
            >
              <Heart className="w-5 h-5" />
            </button>
            <button 
              className="transition-colors text-muted-foreground hover:text-primary"
              data-testid={`button-view-${name.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Handle view functionality
              }}
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
