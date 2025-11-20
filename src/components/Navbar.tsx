import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Facilities", href: "/facilities" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-base bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-md",
        scrolled && "backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo - Left Corner */}
        <Link
          to="/"
          className="flex items-center gap-2 group bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-2 rounded-md"
        >
          <GraduationCap className="h-8 w-8 text-primary group-hover:text-primary-light transition-base" />
          <span className="text-lg font-serif font-bold text-foreground whitespace-nowrap">
            Geetanjali Model School
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex lg:gap-x-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium text-white relative px-3 py-2 rounded-md transition-all duration-300 ease-out",
                "before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-center before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:ease-out",
                "after:absolute after:inset-0 after:bg-white/10 after:rounded-md after:opacity-0 after:transition-opacity after:duration-300 after:ease-out",
                "hover:before:scale-x-100 hover:after:opacity-100 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-white/20",
                location.pathname === item.href
                  ? "bg-blue-500/80 text-white shadow-md before:scale-x-100 before:bg-white"
                  : ""
              )}
            >
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Apply Now Button - Right Corner */}
        <div className="hidden lg:flex">
          <Button variant="default" asChild className="font-medium">
            <Link to="/admissions">Apply Now</Link>
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="space-y-1 px-6 pb-6 pt-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300 ease-out",
                  "relative overflow-hidden",
                  "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary before:scale-y-0 before:transition-transform before:duration-300 before:ease-out",
                  location.pathname === item.href
                    ? "bg-primary/10 text-primary shadow-sm before:scale-y-100 pl-5"
                    : "text-foreground hover:bg-primary/5 hover:pl-5 hover:shadow-sm hover:before:scale-y-100"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" asChild className="w-full mt-4">
              <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
