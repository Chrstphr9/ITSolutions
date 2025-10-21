import { Instagram, Linkedin } from "lucide-react";

const WhatsAppIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 11.5A9.5 9.5 0 1 1 11.5 2a9.4 9.4 0 0 1 9.5 9.5z"></path>
      <path d="M17.2 14.8c-.3-.1-1.7-.8-2-.9-.4-.1-.6-.1-.9.1-.3.2-1.1.9-1.3 1.1-.2.2-.4.2-.7.1-.6-.2-2-1.2-2.6-2.1-.2-.3 0-.5.1-.8.1-.3.3-.4.5-.6.2-.2.3-.3.5-.5.2-.1.2-.3.3-.5.1-.2 0-.4-.1-.6-.1-.2-1-2.3-1.4-3.1-.4-.8-.9-.7-1.3-.7-.3 0-.6 0-.9 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.4 0 1.3 1 2.6 1.2 2.8.2.3 2.1 3.5 5 4.8 2.9 1.2 3.4 1.1 4 1 .6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.4-.2-.7-.3z"></path>
    </svg>
);

export default function SocialMediaIcons() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      href: "https://wa.me/1234567890",
      color: "hover:text-green-500"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:text-pink-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-700"
    }
  ];

  return (
    <div className="fixed z-50 hidden transform -translate-y-1/2 right-4 top-1/2 lg:block">
      <div className="flex flex-col p-3 space-y-4 border border-gray-200 rounded-full shadow-lg bg-white/90 backdrop-blur-sm">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-white shadow-md transition-all duration-300 text-gray-600 ${social.color} hover:scale-110 hover:shadow-lg`}
              aria-label={`Follow us on ${social.name}`}
              data-testid={`social-${social.name.toLowerCase()}`}
            >
              <IconComponent className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

