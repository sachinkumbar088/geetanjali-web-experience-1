import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Users,
  Award,
  Target,
  Heart,
  Lightbulb,
  Globe,
  Microscope,
  Palette,
  Trophy,
  Library,
  Bus,
  Shield,
  Bell,
  ChevronRight,
} from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";
import classroomImage from "@/assets/classroom.jpg";
import scienceLabImage from "@/assets/science-lab.jpg";
import libraryImage from "@/assets/library.jpg";
import sportsImage from "@/assets/sports.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { label: "Years of Excellence", value: "25+" },
  { label: "Students", value: "1200+" },
  { label: "Qualified Teachers", value: "80+" },
  { label: "Success Rate", value: "98%" },
];

const features = [
  {
    icon: BookOpen,
    title: "Modern Curriculum",
    description: "CBSE-affiliated comprehensive learning program",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Highly qualified and experienced teachers",
  },
  {
    icon: Microscope,
    title: "Smart Classrooms",
    description: "Technology-enabled interactive learning",
  },
  {
    icon: Palette,
    title: "Holistic Development",
    description: "Focus on academics, arts, and sports",
  },
  {
    icon: Library,
    title: "Modern Library",
    description: "Extensive collection of books and resources",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "CCTV surveillance and trained security",
  },
];

const gallery = [
  { image: classroomImage, title: "Modern Classrooms" },
  { image: scienceLabImage, title: "Science Laboratory" },
  { image: libraryImage, title: "School Library" },
  { image: sportsImage, title: "Sports Activities" },
];

const announcements = [
  "Admissions Open for Academic Year 2025-26 - Apply Now!",
  "Annual Sports Day scheduled for March 15, 2025",
  "Science Exhibition will be held on February 20, 2025",
  "Parent-Teacher Meeting on January 25, 2025",
];

const testimonials = [
  {
    name: "Mrs. Priya Sharma",
    role: "Parent",
    text: "The school has provided an excellent environment for my daughter's growth. The teachers are caring and the infrastructure is top-notch.",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Parent",
    text: "I'm impressed with the holistic approach to education. My son has excelled not just academically but also in sports and arts.",
  },
  {
    name: "Ananya Patil",
    role: "Class XII Student",
    text: "The guidance and support from teachers have been incredible. The school has prepared me well for my future endeavors.",
  },
];

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Geetanjali English Medium High School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Badge
            className="mb-4 bg-secondary text-secondary-foreground animate-fade-in-down"
            style={{ animationDelay: "0.2s" }}
          >
            Admissions Open 2025-26
          </Badge>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up text-balance"
            style={{ animationDelay: "0.4s" }}
          >
            Geetanjali English Medium High School
          </h1>
          <p
            className="text-xl md:text-2xl text-white/95 mb-8 animate-fade-in-up text-balance"
            style={{ animationDelay: "0.6s" }}
          >
            Excellence in Education • Nurturing Future Leaders
          </p>
          <p
            className="text-lg text-white/90 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Bijapur, Karnataka
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Button size="lg" variant="default" asChild className="text-base">
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-lighter">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 animate-stagger">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-md hover:shadow-lg transition-base hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            id="vision-mission"
            className={`text-center mb-16 animate-on-scroll ${
              visibleSections.has("vision-mission") ? "visible" : ""
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building a foundation for lifelong learning and success
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card
              id="vision-mission-card-1"
              className={`border-2 border-primary/20 shadow-lg animate-on-scroll hover:shadow-xl transition-base hover:scale-[1.02] ${
                visibleSections.has("vision-mission-card-1") ? "visible" : ""
              }`}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-serif font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be a center of excellence in education, fostering
                  creativity, critical thinking, and character development. We
                  aspire to create responsible global citizens who contribute
                  positively to society.
                </p>
              </CardContent>
            </Card>
            <Card
              id="vision-mission-card-2"
              className={`border-2 border-accent/20 shadow-lg animate-on-scroll hover:shadow-xl transition-base hover:scale-[1.02] ${
                visibleSections.has("vision-mission-card-2") ? "visible" : ""
              }`}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education that nurtures intellectual
                  curiosity, emotional intelligence, and social responsibility.
                  We are committed to developing well-rounded individuals
                  through innovative teaching and holistic development programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`text-center mb-16 animate-on-scroll ${
              visibleSections.has("why-choose") ? "visible" : ""
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Choose Geetanjali?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive education that goes beyond textbooks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-xl transition-base hover:scale-105 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary-lighter flex items-center justify-center mb-4 transition-base group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary transition-base group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`text-center mb-16 animate-on-scroll ${
              visibleSections.has("gallery") ? "visible" : ""
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Campus Life
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our vibrant learning environment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-stagger">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-base aspect-[4/3] hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-base duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity flex items-end">
                  <p className="text-white font-semibold p-4 transform group-hover:translate-y-0 translate-y-2 transition-transform">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`text-center animate-on-scroll ${
              visibleSections.has("gallery") ? "visible" : ""
            }`}
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:scale-105 transition-base"
            >
              <Link to="/gallery">
                View Full Gallery
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section id="announcements" className="py-20 bg-primary-lighter">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`flex items-center gap-3 mb-8 animate-on-scroll ${
              visibleSections.has("announcements") ? "visible" : ""
            }`}
          >
            <Bell className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Latest Announcements
            </h2>
          </div>
          <div className="space-y-4 animate-stagger">
            {announcements.map((announcement, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-secondary shadow-md hover:shadow-lg transition-base hover:translate-x-2"
              >
                <CardContent className="py-4">
                  <p className="text-foreground">{announcement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`text-center mb-16 animate-on-scroll ${
              visibleSections.has("testimonials") ? "visible" : ""
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Parents & Students Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 animate-stagger">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="shadow-lg border-none hover:shadow-xl transition-base hover:scale-105 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div
            id="cta"
            className={`animate-on-scroll ${
              visibleSections.has("cta") ? "visible" : ""
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Enroll your child in a school that values excellence, character,
              and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="hover:scale-105 transition-base"
              >
                <Link to="/admissions">Start Your Application</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-base"
              >
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
