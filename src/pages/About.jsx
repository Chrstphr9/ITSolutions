import { MapPin, Mail, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden" data-testid="about-hero">
        <div className="absolute inset-0">
          <img
            src="/public/hero1.png"
            alt="Smart Lock Technology"
            className="object-cover w-full h-full"
            data-testid="hero-image"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-[2px]">
          <div className="flex flex-col justify-center h-full text-[#3B3B3B]">
            <h1 className="mb-4 text-5xl font-bold" data-testid="hero-title">
              About Starry IT Solutions
            </h1>
            {/* <p className="max-w-2xl text-xl text-[#3B3B3B]" data-testid="hero-description">
              Leading the way in smart lock innovation with advanced technology 
              and comprehensive security solutions for modern living.
            </p> */}
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-white" data-testid="company-profile">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 mb-16 lg:grid-cols-2">
            <div className="text-left">
              <h1 className="mb-8 text-4xl font-bold text-foreground" data-testid="about-title">
                Company Profile
              </h1>
              <div className="p-8 text-black rounded-2xl md:p-1">
                <p className="text-lg leading-relaxed" data-testid="company-description">
                  Stary IT Solutions is a foundational Yiwu high-tech company based in Dongguan, China. Our factory, 
                  located in Zhongshan, spans over 1,000 square meters and employs 50+ staff members. Our key 
                  mission is promoting quality devices solutions to various import-export services such as 
                  factory inspections, quality control, and procurement to meet diverse customer requirements.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/public/hero/about.jpg" 
                alt="SITS Smart Factory"
                className="object-cover w-full h-full"
                data-testid="company-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Core Products and Services */}
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-center text-foreground" data-testid="services-title">
              Core Products And Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-8 border bg-card rounded-xl border-border">
                <h3 className="mb-4 text-xl font-semibold text-foreground" data-testid="smart-lock-title">
                  Smart Lock Technology
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Our primary products are our field lock and China brand offering customers advanced smart lock technology and 
                  robust security options. Push-and-pull lock technology for residential windows and doors.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center" data-testid="feature-modular">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Modular Designs
                  </li>
                  <li className="flex items-center" data-testid="feature-maintenance">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Components and equipment, and understanding ease of maintenance
                  </li>
                </ul>
              </div>

              <div className="p-8 border bg-card rounded-xl border-border">
                <h3 className="mb-4 text-xl font-semibold text-foreground" data-testid="solutions-title">
                  Unique Solutions
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Through our network of retail and smart locks, built-in high recommendatory to prevent reconnections
                  locks that data via compromised security, we have developed dual-coded intelligent products.
                </p>
                <p className="mb-4 text-muted-foreground">
                  <strong>Key Features:</strong> Emergency key limiting access anout in case of malfunction or dead battery.
                </p>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground" data-testid="brand-support">
                    <strong>Brand Support:</strong> Starry IT Solutions smart manual lock, unlimited business systems, going global.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid gap-8 mb-16 md:grid-cols-2">
            <div className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl" data-testid="stat-factory">
              <div className="mb-4 text-5xl font-bold text-primary">1,000m²</div>
              <div className="text-xl text-muted-foreground">Factory floor area</div>
            </div>
            <div className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl" data-testid="stat-development">
              <div className="mb-4 text-5xl font-bold text-accent">7</div>
              <div className="text-xl text-muted-foreground">years development</div>
            </div>
          </div>

          {/* Innovation Section */}
          <div className="text-center">
            <h3 className="mb-8 text-3xl font-bold text-foreground" data-testid="innovation-title">
              Innovation And Customization
            </h3>
            <div className="p-8 border bg-card rounded-xl border-border">
              <p className="mb-6 text-lg " data-testid="innovation-description">
                Our dedicated R&D development holds 16 patents, offering comprehensive OEM/ODM services. 
                We continue to develop products addressing industry challenges, eliminate, information, 
                and user-friendly experience.
              </p>
              <Button className="px-8 py-3 font-semibold gradient-button text-primary-foreground" data-testid="button-learn-innovation">
                Learn More About Our Innovation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" data-testid="video-section">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-black rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Smart Lock Installation Video" 
              className="object-cover w-full h-96 opacity-60"
              data-testid="video-thumbnail"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="px-6 py-2 mb-4 text-2xl font-bold text-black bg-yellow-500 rounded-full" data-testid="video-badge">
                  SMART LOCK<br />I9908
                </div>
                <p className="text-lg" data-testid="video-subtitle">Installation Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 text-black" data-testid="contact-section">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold" data-testid="contact-title">Get In Touch</h2>
            <p className="text-xl text-muted-foreground" data-testid="contact-subtitle">
              Do not hesitate to reach out. Just fill in the contact form here and we'll be sure to reply as fast as possible.
            </p>
          </div>

          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl" data-testid="contact-office">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-semibold text-muted-foreground">Visit Our Office</h3>
              <p className="text-muted-foreground">
                13 Licheng 2nd Road, Xiaolan Town,<br />
                Zhongshan City, Guangdong Province,<br />
                China 528414
              </p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl" data-testid="contact-email">
              <Mail className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-semibold text-muted-foreground">Email Us</h3>
              <p className="text-muted-foreground">wu@topteq.cn</p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl" data-testid="contact-whatsapp">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-semibold text-muted-foreground">WhatsApp</h3>
              <p className="text-muted-foreground">+86 18586991896</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
