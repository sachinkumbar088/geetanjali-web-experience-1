import { FileText, Download, CheckCircle2, Clock, FileCheck, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const admissionSteps = [
  {
    step: "1",
    title: "Inquiry & Registration",
    description: "Visit the school office or fill out the online inquiry form to express your interest.",
  },
  {
    step: "2",
    title: "Application Form",
    description: "Download and fill the admission form with accurate information and required documents.",
  },
  {
    step: "3",
    title: "Document Submission",
    description: "Submit completed application form along with all required documents at the admission office.",
  },
  {
    step: "4",
    title: "Interaction/Assessment",
    description: "Age-appropriate interaction for the child and discussion with parents.",
  },
  {
    step: "5",
    title: "Admission Confirmation",
    description: "Upon selection, complete the fee payment and confirm admission.",
  },
];

const requiredDocuments = [
  "Birth Certificate (Original + 2 photocopies)",
  "Transfer Certificate (TC) from previous school (for Class II onwards)",
  "Aadhar Card of student and parents",
  "Passport size photographs (4 copies)",
  "Previous academic records/mark sheets",
  "Medical fitness certificate",
  "Caste certificate (if applicable)",
  "Residence proof",
];

const eligibility = [
  { grade: "Nursery", age: "3+ years as on June 1" },
  { grade: "LKG", age: "4+ years as on June 1" },
  { grade: "UKG", age: "5+ years as on June 1" },
  { grade: "Class I", age: "6+ years as on June 1" },
  { grade: "Class II-X", age: "As per CBSE norms" },
];

const faqs = [
  {
    question: "When do admissions open?",
    answer: "Admissions for the new academic year typically open in December and continue till March, subject to seat availability.",
  },
  {
    question: "Is there an entrance test?",
    answer: "For pre-primary (Nursery to UKG), there's an informal interaction. For classes I onwards, there's an age-appropriate assessment.",
  },
  {
    question: "What is the teacher-student ratio?",
    answer: "We maintain a healthy ratio of approximately 1:25 to ensure personalized attention to every student.",
  },
  {
    question: "Do you provide transportation?",
    answer: "Yes, we have school buses covering major areas of Bijapur with GPS tracking and trained staff.",
  },
  {
    question: "Can I visit the school before admission?",
    answer: "Absolutely! We encourage parents to schedule a campus visit. Please contact the admission office to book an appointment.",
  },
  {
    question: "What is the fee structure?",
    answer: "Fee structure varies by grade. Please download the fee structure document or contact the admission office for detailed information.",
  },
];

export default function Admissions() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary/20 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Now Open - Academic Year 2025-26
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Admissions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our community of learners and embark on a journey of excellence,
              growth, and discovery
            </p>
            <Button size="lg" className="text-base">
              <Download className="mr-2 h-4 w-4" />
              Download Application Form
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <FileCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple and transparent steps to join Geetanjali School
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {admissionSteps.map((item, index) => (
              <Card key={index} className="shadow-md border-l-4 border-l-primary">
                <CardContent className="py-6 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Age requirements for different grades
            </p>
          </div>
          <Card className="max-w-3xl mx-auto shadow-xl border-none">
            <CardContent className="p-8">
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-4 border-b last:border-0"
                  >
                    <span className="font-semibold text-lg">{item.grade}</span>
                    <Badge variant="secondary" className="text-base px-4 py-1">
                      {item.age}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please prepare the following documents for admission
            </p>
          </div>
          <Card className="max-w-3xl mx-auto shadow-xl border-none">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-2xl border-none bg-primary-lighter">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Fee Structure</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our fee structure is designed to be affordable while maintaining the highest
                quality of education and facilities. Fee varies by grade and includes tuition,
                library, sports, and other activities.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-3">Payment Schedule</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Quarterly payment option available</li>
                    <li>• Annual payment discount offered</li>
                    <li>• Multiple payment methods accepted</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">What's Included</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Tuition and examination fees</li>
                    <li>• Library and sports facilities</li>
                    <li>• Co-curricular activities</li>
                  </ul>
                </div>
              </div>
              <Button variant="default">
                <Download className="mr-2 h-4 w-4" />
                Download Detailed Fee Structure
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Timings */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto shadow-xl border-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-serif font-bold">School Timings</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Pre-Primary (Nursery - UKG)</h3>
                  <p className="text-muted-foreground">
                    Morning Session: 8:30 AM - 12:30 PM
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Classes I to X</h3>
                  <p className="text-muted-foreground">
                    Full Day: 8:00 AM - 2:30 PM
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Timings may vary slightly during summer months.
                  Saturday is a half-day with classes from 8:00 AM to 12:30 PM.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about admissions
            </p>
          </div>
          <Card className="max-w-3xl mx-auto shadow-xl border-none">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Begin the Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact our admission office for more information or to schedule a campus visit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Admission Office
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
