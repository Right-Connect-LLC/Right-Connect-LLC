import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      contact: "contact@rightconnectllc.com",
      action: "mailto:contact@rightconnectllc.com",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      description: "Speak directly with our AI experts",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Live Chat",
      description: "Chat with our team in real-time",
      contact: "Available 9 AM - 6 PM EST",
      action: "#",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Schedule Meeting",
      description: "Book a consultation at your convenience",
      contact: "Free 30-minute consultation",
      action: "#",
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed" },
  ]

  const services = [
    "Natural Language AI Agent Builder",
    "RAG Systems Development",
    "Chatbot Implementation",
    "Natural Language Search",
    "AI Strategy Consulting",
    "Custom AI Solutions",
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 border-amber-600 text-amber-400">
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Ready to transform your business with AI? Our team of experts is here to help you navigate the possibilities
            and create solutions that drive real results.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">How to Reach Us</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to answer your questions and discuss your AI needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-amber-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{method.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{method.description}</p>
                  <p className="text-amber-400 font-medium mb-4">{method.contact}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                    asChild
                  >
                    <a href={method.action}>Contact</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
                <p className="text-slate-300">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white">
                    Service Interest
                  </Label>
                  <select className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and how we can help..."
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-amber-400" />
                    <CardTitle className="text-xl text-white">Office Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-slate-300">{schedule.day}</span>
                        <span className="text-white font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-amber-400" />
                    <CardTitle className="text-xl text-white">Our Approach</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    We work with clients globally, offering both remote and on-site consulting services. Our distributed
                    team ensures we can provide support across different time zones and locations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      Remote consultations worldwide
                    </div>
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      On-site implementation support
                    </div>
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      24/7 technical support available
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-amber-400" />
                    <CardTitle className="text-xl text-white">Why Choose Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400 mb-1">50+</div>
                      <div className="text-sm text-slate-300">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400 mb-1">95%</div>
                      <div className="text-sm text-slate-300">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400 mb-1">24h</div>
                      <div className="text-sm text-slate-300">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400 mb-1">5+</div>
                      <div className="text-sm text-slate-300">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Quick answers to common questions about our AI consulting services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical AI project take?",
                answer:
                  "Project timelines vary based on complexity, but most implementations take 3-6 months from discovery to deployment. We provide detailed timelines during our initial consultation.",
              },
              {
                question: "Do you work with small businesses or just enterprises?",
                answer:
                  "We work with businesses of all sizes. Our solutions are scalable and can be tailored to fit different budgets and requirements.",
              },
              {
                question: "What kind of ongoing support do you provide?",
                answer:
                  "We offer comprehensive support including monitoring, optimization, updates, and 24/7 technical assistance to ensure your AI solutions continue performing optimally.",
              },
              {
                question: "How do you ensure data security and privacy?",
                answer:
                  "Data security is our top priority. We implement enterprise-grade security measures, comply with industry standards, and can work within your existing security frameworks.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-white">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-2xl border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a free consultation to discuss your AI needs and discover how we can help transform your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
