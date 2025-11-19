import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold">
                  Geetanjali English Medium High School
                </span>
                <span className="text-sm opacity-90">Bijapur</span>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4 max-w-md">
              Excellence in education since establishment. We are committed to nurturing young minds
              and building future leaders through quality education, values, and holistic development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-base">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-base">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-base">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-base">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="opacity-90 hover:opacity-100 transition-base">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="opacity-90 hover:opacity-100 transition-base">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="opacity-90 hover:opacity-100 transition-base">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/events" className="opacity-90 hover:opacity-100 transition-base">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 opacity-80" />
                <span className="opacity-90">
                  School Road, Bijapur, Karnataka, India
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 opacity-80" />
                <span className="opacity-90">+91 1234567890</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 opacity-80" />
                <span className="opacity-90">info@geetanjalischool.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>© {currentYear} Geetanjali English Medium High School. All rights reserved.</p>
            <p>Affiliated with CBSE | Accredited by NAAC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
