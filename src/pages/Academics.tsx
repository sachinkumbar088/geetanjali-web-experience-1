import { BookOpen, GraduationCap, Users, Calendar, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programs = [
  {
    level: "Pre-Primary",
    grades: "Nursery to KG",
    description: "Foundation learning through play-based activities, storytelling, and creative expression",
    subjects: ["Early Literacy", "Numbers & Shapes", "Art & Craft", "Music & Movement", "Moral Values"],
  },
  {
    level: "Primary",
    grades: "Class I to V",
    description: "Building fundamental skills in reading, writing, mathematics, and environmental awareness",
    subjects: ["English", "Hindi", "Mathematics", "EVS", "Computer Science", "Art", "Physical Education"],
  },
  {
    level: "Middle School",
    grades: "Class VI to VIII",
    description: "Comprehensive curriculum with emphasis on conceptual understanding and practical application",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science", "Sanskrit", "Art & Music", "Physical Education"],
  },
  {
    level: "High School",
    grades: "Class IX to X",
    description: "CBSE curriculum preparing students for board examinations and higher education",
    subjects: ["English", "Hindi", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Science", "Computer Applications", "Sanskrit/Third Language"],
  },
];

const methodology = [
  {
    title: "Activity-Based Learning",
    description: "Hands-on experiences that make learning engaging and meaningful",
  },
  {
    title: "Smart Classrooms",
    description: "Technology-enabled interactive teaching with digital content",
  },
  {
    title: "Project-Based Learning",
    description: "Collaborative projects that develop critical thinking and teamwork",
  },
  {
    title: "Personalized Attention",
    description: "Small class sizes ensuring individual focus and support",
  },
];

const teachers = [
  {
    name: "Dr. Rajesh Sharma",
    subject: "Mathematics",
    qualification: "Ph.D. in Mathematics",
    experience: "15 years",
  },
  {
    name: "Prof. Meena Kulkarni",
    subject: "Science",
    qualification: "M.Sc. in Physics",
    experience: "12 years",
  },
  {
    name: "Mrs. Anita Desai",
    subject: "English",
    qualification: "M.A. in English Literature",
    experience: "18 years",
  },
  {
    name: "Mr. Suresh Patil",
    subject: "Social Studies",
    qualification: "M.A. in History",
    experience: "10 years",
  },
];

export default function Academics() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-lighter to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Academic Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive CBSE-affiliated curriculum designed to foster academic excellence
              and holistic development
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Age-appropriate learning experiences from pre-primary to high school
            </p>
          </div>
          <div className="space-y-8">
            {programs.map((program, index) => (
              <Card key={index} className="shadow-lg border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-2">{program.level}</h3>
                      <Badge className="mb-4">{program.grades}</Badge>
                    </div>
                    <GraduationCap className="h-12 w-12 text-primary opacity-20" />
                  </div>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3">Subjects Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary">{subject}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Teaching Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative approaches that make learning effective and enjoyable
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((method, index) => (
              <Card key={index} className="text-center shadow-md border-none">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-xl border-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold">Academic Calendar 2024-25</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-3">First Term</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Session Begins: April 1, 2024</li>
                    <li>• First Term Exams: August 2024</li>
                    <li>• Parent-Teacher Meeting: September 2024</li>
                    <li>• Half-Yearly Break: October 2024</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Second Term</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Second Term Begins: November 2024</li>
                    <li>• Annual Exams: February-March 2025</li>
                    <li>• Results Declaration: March 2025</li>
                    <li>• Session Ends: March 31, 2025</li>
                  </ul>
                </div>
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Full Calendar (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Experienced Faculty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Qualified and dedicated teachers committed to student success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 rounded-full bg-primary-lighter flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{teacher.name}</h3>
                  <p className="text-sm text-primary mb-2">{teacher.subject}</p>
                  <p className="text-sm text-muted-foreground">{teacher.qualification}</p>
                  <p className="text-sm text-muted-foreground">{teacher.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Academic Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consistent outstanding performance in board examinations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-none">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Pass Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-none">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">First Division</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-none">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Above 90%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
