import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "wouter";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowLeft, Heart, Share2, Check, Star, Shield, Wrench, Clock } from "lucide-react";
import { sampleProducts } from "../../constant";

export default function ProductDetails() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundProduct = sampleProducts.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Product Not Found</h2>
          <p className="mb-6 text-gray-600">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const {
    name,
    description,
    detailedDescription,
    features,
    images = [product.imageUrl],
    specifications = {},
    installation,
    warranty,
    isNew,
    isHot,
    tags = [],
    category,
    subcategory
  } = product;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>›</li>
            <li><Link href="/products" className="hover:text-primary">Products</Link></li>
            <li>›</li>
            <li><Link href={`/products/${encodeURIComponent(category)}`} className="hover:text-primary">{category}</Link></li>
            <li>›</li>
            <li className="text-foreground">{name}</li>
          </ol>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setLocation('/products')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="overflow-hidden border aspect-square rounded-xl border-border">
              <img
                src={images[selectedImageIndex] || product.imageUrl}
                alt={name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-primary ring-2 ring-primary ring-offset-2"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${name} view ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                {isNew && (
                  <Badge variant="secondary" className="text-blue-700 bg-blue-100">
                    New Product
                  </Badge>
                )}
                {isHot && (
                  <Badge variant="secondary" className="text-red-700 bg-red-100">
                    Hot
                  </Badge>
                )}
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="mb-2 text-3xl font-bold text-foreground">{name}</h1>
              <p className="mb-4 text-lg text-muted-foreground">{description}</p>

              <div className="flex items-center gap-4">
                <Button
                  variant={isFavorite ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="flex items-center gap-2"
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
                  {isFavorite ? "Saved" : "Save"}
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Key Features</h3>
              <div className="grid gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <p className="text-sm font-medium">{warranty}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Wrench className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-medium">Easy Installation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="warranty">Warranty</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {detailedDescription || description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.keys(specifications).length > 0 ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-border">
                          <span className="font-medium text-foreground">{key}</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No specifications available.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Installation Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {installation || "Installation information will be provided with the product."}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="warranty" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Warranty Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {warranty || "Warranty information will be provided with the product."}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
