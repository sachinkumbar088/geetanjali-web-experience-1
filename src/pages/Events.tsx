import { Calendar, MapPin, Clock, Award, Music, BookOpen, Palette, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const upcomingEvents = [
  {
    title: "Annual Day Celebration",
    date: "March 15, 2025",
    time: "5:00 PM onwards",
    venue: "School Auditorium",
    description: "Grand celebration featuring cultural performances, awards, and recognition of student achievements.",
    icon: Music,
  },
  {
    title: "Science Exhibition",
    date: "February 20, 2025",
    time: "9:00 AM - 4:00 PM",
    venue: "Science Labs",
    description: "Students will showcase innovative science projects and experiments.",
    icon: BookOpen,
  },
  {
    title: "Sports Day",
    date: "February 10, 2025",
    time: "8:00 AM - 2:00 PM",
    venue: "School Playground",
    description: "Inter-house athletic competitions including track events, field events, and team sports.",
    icon: Trophy,
  },
  {
    title: "Art Exhibition",
    date: "March 5, 2025",
    time: "10:00 AM - 5:00 PM",
    venue: "Art Room",
    description: "Display of creative artwork by students from all grades.",
    icon: Palette,
  },
];

const pastEvents = [
  {
    title: "Republic Day Celebration 2025",
    date: "January 26, 2025",
    description: "Flag hoisting ceremony followed by cultural performances and distribution of prizes to achievers.",
  },
  {
    title: "Christmas Celebration 2024",
    date: "December 23, 2024",
    description: "Festive celebration with carol singing, Secret Santa, and cake cutting.",
  },
  {
    title: "Annual Sports Championship 2024",
    date: "December 10-12, 2024",
    description: "Three-day sports extravaganza with inter-school competitions. Our students won 15 medals.",
  },
  {
    title: "Diwali Celebration 2024",
    date: "November 1, 2024",
    description: "Traditional celebrations with rangoli competition, lamp lighting, and cultural programs.",
  },
];

const activities = [
  {
    icon: Music,
    title: "Music & Dance",
    description: "Classical and contemporary music, dance classes in various forms",
  },
  {
    icon: Palette,
    title: "Art & Craft",
    description: "Painting, sketching, pottery, and various artistic expressions",
  },
  {
    icon: BookOpen,
    title: "Literary Club",
    description: "Debate, elocution, creative writing, and poetry competitions",
  },
  {
    icon: Trophy,
    title: "Sports Training",
    description: "Professional coaching in cricket, football, basketball, and athletics",
  },
  {
    icon: Award,
    title: "NCC & Scouts",
    description: "Leadership development and community service programs",
  },
];

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-lighter to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enriching experiences beyond academics that nurture creativity, leadership,
              and teamwork
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Badge className="bg-secondary text-secondary-foreground">Upcoming</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Upcoming Events
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card key={index} className="shadow-lg border-none hover:shadow-xl transition-base">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-full bg-primary-lighter flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <Badge variant="secondary">Upcoming</Badge>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4">{event.title}</h3>
                    <div className="space-y-2 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Award className="h-10 w-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Recent Events
            </h2>
          </div>
          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="shadow-md border-l-4 border-l-success">
                <CardContent className="py-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      {event.date}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Activities */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Co-Curricular Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diverse programs to discover and nurture your talents
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="text-center shadow-md border-none">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary-lighter flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clubs & Organizations */}
      <section className="py-20 bg-primary-lighter">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Student Clubs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join like-minded peers and pursue your interests
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Literary Club",
              "Science Club",
              "Math Club",
              "Art & Craft Club",
              "Music Club",
              "Dance Club",
              "Sports Club",
              "Eco Club",
              "Drama Club",
            ].map((club, index) => (
              <Card key={index} className="shadow-md border-none">
                <CardContent className="py-6 text-center">
                  <p className="font-semibold">{club}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-2xl border-none bg-accent text-accent-foreground">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Special Programs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Yoga & Meditation</h3>
                  <p className="opacity-90 mb-4">
                    Daily sessions to promote physical and mental well-being. Professional
                    instructors guide students in traditional yoga practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Leadership Programs</h3>
                  <p className="opacity-90 mb-4">
                    Student council, prefect system, and leadership workshops to develop
                    management and organizational skills.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Community Service</h3>
                  <p className="opacity-90 mb-4">
                    Regular initiatives to give back to society through social awareness
                    campaigns, cleanliness drives, and charity programs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Field Trips</h3>
                  <p className="opacity-90 mb-4">
                    Educational excursions to museums, historical sites, industries, and
                    nature camps for experiential learning.
                  </p>
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
