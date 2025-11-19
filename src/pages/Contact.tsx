import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "Geetanjali English Medium High School",
      "School Road, Near City Center",
      "Bijapur, Karnataka - 586101",
      "India",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: [
      "Office: +91 1234567890",
      "Admission: +91 0987654321",
      "Principal: +91 1122334455",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@geetanjalischool.edu.in",
      "admissions@geetanjalischool.edu.in",
      "principal@geetanjalischool.edu.in",
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday - Friday: 8:00 AM - 4:00 PM",
      "Saturday: 8:00 AM - 1:00 PM",
      "Sunday: Closed",
    ],
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-lighter to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with us for admissions, inquiries,
              or to schedule a campus visit
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="shadow-md border-none">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary-lighter flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-none">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXXXXXXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Write your message here..." 
                      rows={5}
                      required 
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-xl border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square lg:aspect-auto lg:h-full bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.5531580634146!2d75.71253631483243!3d16.82484718853753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6fde8e1c18c69%3A0x5e5c7fb1e2c0a8a2!2sBijapur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location"
                    className="h-full min-h-[400px] lg:min-h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Helpdesk Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-2xl border-none bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Need Immediate Assistance?</h2>
              <p className="text-lg opacity-90 mb-8">
                Our admission helpdesk is available to answer all your queries and schedule
                campus visits. Call us during office hours or send us an email anytime.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">General Inquiries</h3>
                  <p className="text-sm opacity-90">+91 1234567890</p>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Admission Office</h3>
                  <p className="text-sm opacity-90">+91 0987654321</p>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm opacity-90">info@geetanjalischool.edu.in</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="shadow-xl border-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold">How to Reach Us</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">By Car/Auto</h3>
                  <p className="text-muted-foreground">
                    The school is located on School Road, easily accessible from the city
                    center. Ample parking space available on campus.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">By Bus</h3>
                  <p className="text-muted-foreground">
                    Several local bus routes connect to the school area. The nearest bus
                    stop is 200 meters away on Main Road.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Landmarks</h3>
                  <p className="text-muted-foreground">
                    Near City Center, opposite to Central Park, 500m from District Hospital
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
