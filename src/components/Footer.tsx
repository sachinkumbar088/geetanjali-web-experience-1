import { Link } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-sm font-serif font-bold">
                  Geetanjali English Medium High School
                </span>
                <span className="text-xs opacity-90">Bijapur</span>
              </div>
            </div>
            <p className="text-xs opacity-90 mb-1 max-w-md leading-tight">
              Excellence in education. Nurturing minds and building future
              leaders.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-base"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-base"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-base"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-base"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold mb-1">Quick Links</h3>
            <ul className="space-y-0.5 text-xs">
              <li>
                <Link
                  to="/about"
                  className="opacity-90 hover:opacity-100 transition-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="opacity-90 hover:opacity-100 transition-base"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="opacity-90 hover:opacity-100 transition-base"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="opacity-90 hover:opacity-100 transition-base"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="opacity-90 hover:opacity-100 transition-base"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold mb-1">Contact Us</h3>
            <ul className="space-y-0.5 text-xs leading-tight">
              <li className="flex items-start gap-1.5">
                <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="opacity-90">
                  School Road, Bijapur, Karnataka
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <Phone className="h-3 w-3 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="opacity-90">+91 1234567890</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Mail className="h-3 w-3 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="opacity-90">info@geetanjalischool.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-3 border-t border-primary-foreground/20 pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1 text-xs opacity-90">
            <p>
              © {currentYear} Geetanjali English Medium High School. All rights
              reserved.
            </p>
            <p>Affiliated with CBSE | Accredited by NAAC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
