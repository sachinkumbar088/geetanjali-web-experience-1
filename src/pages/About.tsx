import { Award, Heart, Target, Users, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import principalImage from "@/assets/principal.jpg";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "Upholding honesty, ethics, and moral principles in all actions",
  },
  {
    icon: BookOpen,
    title: "Excellence",
    description: "Striving for the highest standards in academics and character",
  },
  {
    icon: Users,
    title: "Respect",
    description: "Valuing diversity and treating everyone with dignity",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Encouraging creativity and forward-thinking approaches",
  },
];

const achievements = [
  "100% Pass Rate in CBSE Board Exams for 5 consecutive years",
  "State-level Science Exhibition Winners 2023",
  "Best School Award by District Education Department 2024",
  "National Sports Championship Qualifiers in Cricket & Athletics",
  "Outstanding Achievement in Arts & Cultural Activities",
  "ISO 9001:2015 Certified for Quality Management",
];

const timeline = [
  { year: "2000", event: "School established with 100 students" },
  { year: "2005", event: "Received CBSE affiliation" },
  { year: "2010", event: "Expanded infrastructure with new science labs" },
  { year: "2015", event: "Introduced smart classroom technology" },
  { year: "2020", event: "Achieved 100% board exam success rate" },
  { year: "2024", event: "Celebrating 24 years of excellence" },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-lighter to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              About Geetanjali School
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A legacy of excellence in education, committed to nurturing young minds
              and shaping future leaders since 2000
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Geetanjali English Medium High School was founded in 2000 with a vision
                  to provide quality education that combines academic excellence with
                  holistic development. What began as a small institution with just 100
                  students has grown into one of the most respected educational institutions
                  in Bijapur.
                </p>
                <p>
                  Over the past two decades, we have consistently maintained our commitment
                  to educational excellence, innovative teaching methodologies, and character
                  building. Our state-of-the-art infrastructure, experienced faculty, and
                  comprehensive curriculum ensure that every student receives the best
                  possible education.
                </p>
                <p>
                  We believe in nurturing not just academic achievers, but well-rounded
                  individuals who are equipped to face the challenges of tomorrow. Our
                  focus on values, leadership, and community service prepares students
                  to become responsible citizens and future leaders.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="shadow-2xl border-none">
                <CardContent className="p-0">
                  <img
                    src={principalImage}
                    alt="School Principal"
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-xl border-none">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Principal's Message
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dear Parents and Students,
                </p>
                <p>
                  It gives me immense pleasure to welcome you to Geetanjali English Medium
                  High School. As the Principal, I am proud to lead an institution that has
                  been at the forefront of educational excellence for over two decades.
                </p>
                <p>
                  Our school is built on the foundation of strong values, academic rigor,
                  and holistic development. We believe that education is not just about
                  acquiring knowledge, but about developing character, critical thinking,
                  and a lifelong love for learning. Our dedicated faculty works tirelessly
                  to create an environment where every child can discover their potential
                  and pursue their dreams.
                </p>
                <p>
                  We are committed to providing world-class facilities, innovative teaching
                  methods, and a nurturing atmosphere that encourages students to excel in
                  academics, sports, arts, and community service. I invite you to join our
                  vibrant community and be part of our journey towards excellence.
                </p>
                <p className="font-semibold text-foreground">
                  Dr. Sunita Deshmukh<br />
                  Principal
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-10 w-10 text-primary" />
                  <h3 className="text-2xl font-serif font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be a premier educational institution that empowers students with
                  knowledge, skills, and values to become confident, compassionate, and
                  responsible global citizens who contribute positively to society and
                  lead with integrity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/20 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-10 w-10 text-accent" />
                  <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education through innovative teaching methodologies,
                  state-of-the-art infrastructure, and a nurturing environment. We strive
                  to develop intellectual curiosity, emotional intelligence, social
                  responsibility, and leadership qualities in every student.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary-lighter flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating excellence and success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-md border-l-4 border-l-secondary">
                <CardContent className="py-6">
                  <p className="text-foreground">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary-lighter">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones in our path to excellence
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                    {item.year}
                  </div>
                </div>
                <Card className="flex-1 shadow-md">
                  <CardContent className="py-6">
                    <p className="text-foreground text-lg">{item.event}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
