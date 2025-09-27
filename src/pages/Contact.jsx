import { MapPin, Mail, MessageCircle, Facebook, Twitter } from "lucide-react";
import ContactForm from "../../src/components/ContactForm";

export default function Contact() {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground" data-testid="contact-page-title">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="contact-page-subtitle">
            Do not hesitate to reach out. Just fill in the contact form here and we'll be sure to reply as fast as possible.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-foreground" data-testid="office-title">
                Visit Our Office
              </h2>
              <div className="p-6 border bg-card rounded-xl border-border">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground" data-testid="office-address-label">Address</h3>
                    <p className="text-muted-foreground" data-testid="office-address">
                      13 Licheng 2nd Road, Xiaolan Town, Zhongshan City,<br />
                      Guangdong Province, China 528414
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold text-foreground" data-testid="message-title">
                Message Us
              </h2>
              <div className="space-y-4">
                <div className="p-6 border bg-card rounded-xl border-border">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground" data-testid="email-label">Email</h3>
                      <p className="text-muted-foreground" data-testid="email-address">wu@topteq.cn</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 border bg-card rounded-xl border-border">
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground" data-testid="whatsapp-label">WhatsApp</h3>
                      <p className="text-muted-foreground" data-testid="whatsapp-number">+86 18586991896</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-4 font-semibold text-foreground" data-testid="social-title">Follow us</h3>
                <div className="flex space-x-4">
                  <button 
                    className="flex items-center justify-center w-12 h-12 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
                    data-testid="social-facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </button>
                  <button 
                    className="flex items-center justify-center w-12 h-12 text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
                    data-testid="social-twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </button>
                  <button 
                    className="flex items-center justify-center w-12 h-12 text-white transition-colors bg-green-500 rounded-full hover:bg-green-600"
                    data-testid="social-whatsapp"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="overflow-hidden border bg-card rounded-2xl border-border" data-testid="map-section">
            <img 
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
              alt="Map location - Zhongshan City, Guangdong Province" 
              className="object-cover w-full h-96"
              data-testid="map-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
