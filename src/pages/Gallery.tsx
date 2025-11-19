import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import classroomImage from "@/assets/classroom.jpg";
import scienceLabImage from "@/assets/science-lab.jpg";
import libraryImage from "@/assets/library.jpg";
import sportsImage from "@/assets/sports.jpg";
import heroImage from "@/assets/hero-school.jpg";

const categories = ["All", "Infrastructure", "Academics", "Sports", "Events", "Activities"];

const galleryItems = [
  { image: heroImage, title: "School Building", category: "Infrastructure" },
  { image: classroomImage, title: "Smart Classroom", category: "Academics" },
  { image: scienceLabImage, title: "Science Laboratory", category: "Academics" },
  { image: libraryImage, title: "School Library", category: "Infrastructure" },
  { image: sportsImage, title: "Sports Day", category: "Sports" },
  { image: classroomImage, title: "Interactive Learning", category: "Academics" },
  { image: heroImage, title: "Campus View", category: "Infrastructure" },
  { image: sportsImage, title: "Cricket Match", category: "Sports" },
  { image: scienceLabImage, title: "Lab Experiment", category: "Academics" },
  { image: classroomImage, title: "Group Activity", category: "Activities" },
  { image: libraryImage, title: "Reading Session", category: "Activities" },
  { image: heroImage, title: "Annual Day", category: "Events" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-lighter to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A visual journey through our vibrant campus, activities, and celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background sticky top-0 z-40 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-base"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden shadow-md hover:shadow-xl transition-base cursor-pointer border-none"
              >
                <CardContent className="p-0 relative aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-base duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-base flex flex-col justify-end p-6">
                    <Badge className="mb-2 w-fit bg-secondary text-secondary-foreground">
                      {item.category}
                    </Badge>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Want to See More?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Visit our campus to experience the vibrant atmosphere and world-class facilities
          </p>
          <Button size="lg">Schedule a Campus Tour</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
