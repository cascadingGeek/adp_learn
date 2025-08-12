import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export function Footer() {
  const quickLinks = [
    { label: "About", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Features", href: "#" },
  ];

  const navigationLinks = [
    { label: "Pricing", href: "#" },
    { label: "Packages", href: "#" },
  ];

  const contactInfo = [
    { label: "Email", value: "info@adplearn.com" },
    { label: "Address", value: "123 Learning Street, Education City" },
    { label: "Phone number", value: "(+234) 123-4567-789" },
  ];

  const socialLinks = [
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  const legalLinks = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies Policy", href: "#" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden px-20">
      <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-10">
        <div className="text-[12rem] md:text-[16rem] xl:text-[220px] font-bold text-[#D6CEFF] leading-none select-none">
          ADPLearn
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-12">
        {/* Top section - Brand and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          {/* Brand section */}
          <div className="flex-1 max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#D6CEFF]">
              ADPLearn
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Erat amet turpis ultrices
              semper. Eget feugiat malesuada
            </p>
          </div>

          {/* Newsletter subscription */}
          <div className="flex-1 max-w-md">
            <h3 className="text-lg font-normal mb-4">
              Subscribe to our Newsletter
            </h3>
            <div className="flex gap-2 relative w-auto bg-white rounded-full border-2 border-white">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-0 text-white placeholder:text-gray-400 focus:border-none focus:ring-purple-400"
              />
              <Button className="bg-[#FDC21D] hover:bg-[#FDC21D] text-[#000B11] font-normal px-2 py-2 text-xs rounded-full whitespace-nowrap absolute right-0 bottom-0">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* Middle section - Navigation columns and social */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigate</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <div className="text-gray-300">
                    <span className="block font-medium">{contact.label}</span>
                    <span className="text-sm">{contact.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex md:justify-end">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 ADPLearn, All right reserved
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap gap-6 text-sm">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
