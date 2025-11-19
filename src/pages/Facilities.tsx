import { Library, Microscope, Computer, Palette, Trophy, Bus, Shield, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import libraryImage from "@/assets/library.jpg";
import scienceLabImage from "@/assets/science-lab.jpg";
import classroomImage from "@/assets/classroom.jpg";
import sportsImage from "@/assets/sports.jpg";

const facilities = [
  {
    icon: Library,
    title: "Modern Library",
    description: "Well-stocked library with over 10,000 books, journals, magazines, and digital resources. Quiet reading areas and research facilities available.",
    image: libraryImage,
  },
  {
    icon: Microscope,
    title: "Science Laboratories",
    description: "Fully equipped Physics, Chemistry, and Biology labs with modern equipment for hands-on experiments and scientific exploration.",
    image: scienceLabImage,
  },
  {
    icon: Computer,
    title: "Computer Lab",
    description: "State-of-the-art computer lab with 50+ systems, high-speed internet, and latest software for coding and digital learning.",
    image: classroomImage,
  },
  {
    icon: Palette,
    title: "Art & Music Room",
    description: "Dedicated spaces for creative expression with art supplies, musical instruments, and professional guidance.",
  },
  {
    icon: Trophy,
    title: "Sports Facilities",
    description: "Large playground with facilities for cricket, football, basketball, volleyball, badminton, and athletics.",
    image: sportsImage,
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Safe and reliable school bus service covering major routes across Bijapur with GPS tracking and trained drivers.",
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "24/7 CCTV surveillance, trained security personnel, fire safety equipment, and emergency response systems.",
  },
  {
    icon: Video,
    title: "Smart Classrooms",
    description: "Digital classrooms with projectors, interactive boards, and multimedia content for engaging learning experiences.",
  },
];

const additionalFacilities = [
  "Air-conditioned classrooms",
  "Drinking water with RO purification",
  "Clean and hygienic restrooms",
  "Medical room with first-aid",
  "Canteen with nutritious meals",
  "Spacious playground",
  "Indoor games room",
  "Yoga and meditation hall",
];

export default function Facilities() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-lighter to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              World-Class Facilities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to provide the best learning
              environment for our students
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={isEven ? "" : "md:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-lighter flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold">{facility.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                  {facility.image && (
                    <div className={isEven ? "" : "md:order-1"}>
                      <Card className="shadow-xl border-none overflow-hidden">
                        <CardContent className="p-0">
                          <img
                            src={facility.image}
                            alt={facility.title}
                            className="w-full h-80 object-cover hover:scale-105 transition-base duration-500"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Additional Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your child needs for a comfortable and enriching school experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFacilities.map((facility, index) => (
              <Card key={index} className="shadow-md border-none">
                <CardContent className="py-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground">{facility}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-2xl border-none bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-12 w-12" />
                <h2 className="text-3xl font-serif font-bold">Safety First</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Campus Security</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• 24/7 CCTV monitoring</li>
                    <li>• Trained security guards</li>
                    <li>• Controlled entry/exit system</li>
                    <li>• Visitor management protocol</li>
                    <li>• Emergency alarm systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Health & Hygiene</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• Medical room with first-aid</li>
                    <li>• Regular health check-ups</li>
                    <li>• Clean drinking water (RO)</li>
                    <li>• Hygienic restrooms</li>
                    <li>• Sanitization protocols</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transportation Details */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-xl border-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Bus className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-serif font-bold">School Transportation</h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                We provide safe and comfortable transportation for students across Bijapur.
                Our fleet of well-maintained buses is equipped with GPS tracking, first-aid
                kits, and trained drivers and attendants.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">Buses</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <p className="text-muted-foreground">Routes</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">GPS</div>
                  <p className="text-muted-foreground">Tracking</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
