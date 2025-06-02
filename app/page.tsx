import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Brain, MessageSquare, Search, Zap, CheckCircle, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function HomePage() {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Natural Language AI Agent Builder",
      description: "Design AI agents and workflows using natural language, eliminating the need for coding or visual programming.",
      features: ["Language-Based Creation", "Instant Prototyping", "Workflow Generation"],
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "RAG Systems",
      description: "Retrieval-Augmented Generation systems for enhanced AI knowledge and accuracy.",
      features: ["Knowledge Base Integration", "Real-time Data Retrieval", "Context-Aware Responses"],
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Chatbots",
      description: "Intelligent conversational AI solutions for customer service and engagement.",
      features: ["Multi-platform Support", "Natural Conversations", "24/7 Availability"],
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Natural Language Search",
      description: "Advanced search systems that understand and process natural language queries.",
      features: ["Semantic Search", "Query Understanding", "Relevant Results"],
    },
  ]

  const benefits = [
    "Cutting-edge AI technology implementation",
    "Custom solutions tailored to your needs",
    "Scalable and maintainable architectures",
    "Expert consultation and ongoing support",
    "Rapid deployment and integration",
    "Cost-effective AI transformation",
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 border-amber-600 text-amber-400">
            AI Consulting Excellence
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Right Connect LLC delivers cutting-edge AI solutions including Natural Language AI Agent Builder, RAG
            Systems, Chatbots, and Advanced Search Technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-700 hover:bg-slate-800 hover:text-white">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AI Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We specialize in building sophisticated AI systems that understand, learn, and adapt to your business
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-amber-600/20 rounded-lg text-amber-400 group-hover:bg-amber-600/30 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-300 text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="h-4 w-4 text-amber-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Right Connect LLC?</h2>
              <p className="text-xl text-slate-300 mb-8">
                We combine deep AI expertise with practical business understanding to deliver solutions that drive real
                results.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Zap className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to Get Started?</h3>
              <p className="text-slate-300 text-center mb-6">
                Let's discuss how AI can transform your business operations and customer experience.
              </p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" size="lg">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your business with AI? Contact us today to discuss your project requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Email Us</h3>
                <p className="text-slate-300">sales@rightcon.dev</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Call Us</h3>
                <p className="text-slate-300">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Location</h3>
                <p className="text-slate-300">Remote & On-site Services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
