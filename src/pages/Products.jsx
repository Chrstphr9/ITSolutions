import { useState } from "react";
import { useParams, useLocation } from "wouter";
import ProductCard from "../components/ProductCard";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Grid, List, Search } from "lucide-react";
import { sampleProducts } from "../../constant";

export default function Products() {
  const { category } = useParams();
  const [location] = useLocation();
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");

  // Get subcategory from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const subcategory = urlParams.get('subcategory');

  // Use sample products from constant.js instead of API
  const products = sampleProducts;
  const isLoading = false;

  // Filter products based on search and subcategory
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesSubcategory = true;
    if (subcategory) {
      // Special grouping logic for Commercial digital locks
      if (category && decodeURIComponent(category) === "Commercial digital locks") {
        if (subcategory === "Frameless door lock") {
          // Frameless maps to Glass door products only
          matchesSubcategory = product.subcategory === "Glass door lock";
        } else if (subcategory === "Framed door lock") {
          // Framed maps to the rest (excluding glass door and apartment)
          const framedNested = new Set([
            "Slim door/window lock",
            "Cylinder lock",
            "Deadbolt lock",
            "Knob Lock",
            "Lever handle lock",
            "Rim lock",
            "Interior door lock",
          ]);
          matchesSubcategory = framedNested.has(product.subcategory);
        } else if (subcategory === "Apartment lock") {
          matchesSubcategory = product.subcategory === "Apartment lock";
        } else if (subcategory === "Glass door lock") {
          // Directly selecting the nested item also works
          matchesSubcategory = product.subcategory === "Glass door lock";
        } else {
          matchesSubcategory = product.subcategory === subcategory;
        }
      } else {
        matchesSubcategory = product.subcategory === subcategory;
      }
    }

    return matchesSearch && matchesSubcategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "new":
        return b.isNew - a.isNew;
      case "hot":
        return b.isHot - a.isHot;
      default:
        return 0;
    }
  });

  const categories = [
    {
      name: "Push and pull Lock",
      count: products.filter(p => p.category === "Push and pull Lock").length,
      subcategories: [
        "Models For Local Offline Brand",
        "Models for Online RTS"
      ],
      nestedSubcategories: {
        "Models For Local Offline Brand": [
          "New Product",
          "Double system", 
          "Single system"
        ]
      }
    },
    {
      name: "Commercial digital locks",
      count: products.filter(p => p.category === "Commercial digital locks").length,
      subcategories: [
        "Frameless door lock",
        "Framed door lock",
        "Apartment lock",
      ],
      nestedSubcategories: {
        "Frameless door lock": [
          "Glass door lock"
        ],
        "Framed door lock": [
          "Slim door/window lock",
          "Cylinder lock",
          "Deadbolt lock",
          "Knob Lock",
          "Lever handle lock",
          "Rim lock",
          "Interior door lock",
        ]
      }
    }
  ];

  const currentCategory = categories.find(cat => cat.name === decodeURIComponent(category || ""));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8" data-testid="breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li>›</li>
            {category && (
              <>
                <li><a href="/products" className="hover:text-primary">Products</a></li>
                <li>›</li>
                <li className="text-foreground">{decodeURIComponent(category)}</li>
                {subcategory && (
                  <>
                    <li>›</li>
                    <li className="text-foreground">{subcategory}</li>
                  </>
                )}
              </>
            )}
            {!category && <li className="text-foreground">Products</li>}
          </ol>
        </nav>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <div className="lg:w-1/4" data-testid="products-sidebar">
            <div className="sticky p-6 bg-white border rounded-lg border-border top-24">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Product Category</h3>
              
              <div className="space-y-4">
                {categories.map((cat) => (
                  <div key={cat.name}>
                    <a
                      href={`/products/${encodeURIComponent(cat.name)}`}
                      className={`flex items-center justify-between py-2 px-3 rounded hover:bg-secondary transition-colors ${
                        category === cat.name ? 'bg-secondary text-primary' : 'text-foreground'
                      }`}
                      data-testid={`category-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span>{cat.name}</span>
                      <span className="px-2 py-1 text-xs rounded bg-muted">({cat.count})</span>
                    </a>
                    
                    {category === cat.name && (
                      <div className="mt-2 ml-4 space-y-1">
                        {cat.subcategories.map((sub) => (
                          <div key={sub}>
                            <a
                              href={`/products/${encodeURIComponent(cat.name)}?subcategory=${encodeURIComponent(sub)}`}
                              className={`block py-1 px-2 text-sm rounded hover:bg-secondary transition-colors ${
                                subcategory === sub ? 'text-primary bg-secondary' : 'text-muted-foreground'
                              }`}
                              data-testid={`subcategory-${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {sub}
                            </a>
                            {cat.nestedSubcategories && cat.nestedSubcategories[sub] && (
                              <div className="mt-1 ml-4 space-y-1">
                                {cat.nestedSubcategories[sub].map((nestedSub) => (
                                  <a
                                    key={nestedSub}
                                    href={`/products/${encodeURIComponent(cat.name)}?subcategory=${encodeURIComponent(nestedSub)}`}
                                    className={`block py-1 px-2 text-sm rounded hover:bg-secondary transition-colors ${
                                      subcategory === nestedSub ? 'text-primary bg-secondary' : 'text-muted-foreground'
                                    }`}
                                    data-testid={`nested-subcategory-${nestedSub.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {nestedSub}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="p-6 mb-6 bg-white border rounded-lg border-border">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h1 className="text-2xl font-bold text-foreground" data-testid="products-page-title">
                    {category ? decodeURIComponent(category) : "All Products"}
                    {subcategory && (
                      <span className="text-lg text-muted-foreground"> - {subcategory}</span>
                    )}
                  </h1>
                  <p className="text-muted-foreground" data-testid="products-count">
                    {sortedProducts.length} Results
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64 pl-10"
                      data-testid="input-search"
                    />
                  </div>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40" data-testid="select-sort">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="new">New Products</SelectItem>
                      <SelectItem value="hot">Hot Products</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Mode */}
                  <div className="flex border rounded-lg border-border">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      data-testid="button-grid-view"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      data-testid="button-list-view"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="p-6 bg-white border rounded-xl border-border animate-pulse" data-testid={`product-skeleton-${i}`}>
                    <div className="w-full h-40 mb-4 rounded sm:h-48 md:h-56 lg:h-64 bg-muted"></div>
                    <div className="h-4 mb-2 rounded bg-muted"></div>
                    <div className="w-3/4 h-4 rounded bg-muted"></div>
                  </div>
                ))}
              </div>
            ) : sortedProducts.length === 0 ? (
              <div className="py-12 text-center" data-testid="no-products">
                <h3 className="mb-2 text-lg font-semibold text-foreground">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div 
                className={viewMode === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  : "space-y-4"
                }
                data-testid="products-grid"
              >
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
