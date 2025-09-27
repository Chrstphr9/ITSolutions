import { Heart, Eye } from "lucide-react";

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
    <div className="bg-card rounded-xl border border-border shadow-sm card-hover transition-all duration-300 overflow-hidden" data-testid={`product-card-${name.toLowerCase()}`}>
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-48 object-cover" 
        data-testid={`product-image-${name.toLowerCase()}`}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          {isNew && (
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium" data-testid="badge-new">
              New Product
            </span>
          )}
          {isHot && (
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium" data-testid="badge-hot">
              Hot
            </span>
          )}
          {tags.includes("Single system") && (
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium" data-testid="badge-single">
              Single system
            </span>
          )}
          {tags.includes("Double system") && (
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium" data-testid="badge-double">
              Double system
            </span>
          )}
          {tags.includes("Slim Design") && (
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium" data-testid="badge-slim">
              Slim Design
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`product-name-${name.toLowerCase()}`}>
          {name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4" data-testid={`product-description-${name.toLowerCase()}`}>
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
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid={`button-favorite-${name.toLowerCase()}`}
          >
            <Heart className="w-5 h-5" />
          </button>
          <button 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid={`button-view-${name.toLowerCase()}`}
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
