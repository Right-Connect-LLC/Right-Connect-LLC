import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Users,
  Award,
  Target,
  Lightbulb,
  Shield,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  Calendar,
  TrendingUp,
  Code,
  Database,
  Cpu,
} from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Chief AI Architect",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former AI Research Lead at Google with 12+ years in machine learning and natural language processing. PhD in Computer Science from Stanford.",
      expertise: ["Deep Learning", "NLP", "MLOps", "AI Strategy"],
      linkedin: "#",
      github: "#",
      email: "sarah@rightconnectllc.com",
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior AI Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ex-Microsoft AI specialist with expertise in RAG systems and conversational AI. Led development of enterprise chatbot solutions for Fortune 500 companies.",
      expertise: ["RAG Systems", "Chatbots", "Azure AI", "Python"],
      linkedin: "#",
      github: "#",
      email: "marcus@rightconnectllc.com",
    },
    {
      name: "Dr. Priya Patel",
      role: "AI Research Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former OpenAI researcher specializing in language models and AI safety. Published 30+ papers in top-tier AI conferences.",
      expertise: ["LLMs", "AI Safety", "Research", "Ethics"],
      linkedin: "#",
      github: "#",
      email: "priya@rightconnectllc.com",
    },
    {
      name: "James Thompson",
      role: "Solutions Architect",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Cloud architecture expert with 10+ years building scalable AI systems. Specialized in enterprise AI deployment and integration.",
      expertise: ["Cloud Architecture", "DevOps", "System Design", "AWS"],
      linkedin: "#",
      github: "#",
      email: "james@rightconnectllc.com",
    },
  ]

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "50+ Successful Projects",
      description: "Delivered AI solutions across healthcare, finance, e-commerce, and technology sectors",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Fortune 500 Clients",
      description: "Trusted by leading enterprises for mission-critical AI implementations",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "95% Client Satisfaction",
      description: "Consistently exceeding expectations with innovative AI solutions",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "5+ Years Experience",
      description: "Deep expertise in AI consulting and enterprise solution development",
    },
  ]

  const values = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Innovation First",
      description: "We stay at the forefront of AI technology to deliver cutting-edge solutions.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Ethical AI",
      description: "We prioritize responsible AI development with transparency and fairness.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Results Driven",
      description: "Every solution is designed to deliver measurable business impact.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Collaborative Approach",
      description: "We work closely with clients to understand and solve their unique challenges.",
    },
  ]

  const expertise = [
    {
      category: "AI Technologies",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        "Large Language Models",
        "Computer Vision",
        "Natural Language Processing",
        "Machine Learning",
        "Deep Learning",
        "Reinforcement Learning",
      ],
    },
    {
      category: "Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "TensorFlow", "PyTorch", "Hugging Face", "LangChain", "OpenAI API", "Anthropic Claude"],
    },
    {
      category: "Infrastructure",
      icon: <Database className="h-6 w-6" />,
      skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Vector Databases", "MLOps"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 border-amber-600 text-amber-400">
            About Right Connect LLC
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            AI Experts Driving Innovation
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            We are a team of world-class AI researchers, engineers, and strategists dedicated to transforming businesses
            through intelligent automation and cutting-edge AI solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                To democratize AI technology by making sophisticated artificial intelligence accessible, practical, and
                transformative for businesses of all sizes.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                We believe that AI should augment human capabilities, not replace them. Our solutions are designed to
                empower teams, enhance decision-making, and create new opportunities for growth and innovation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To be the leading AI consulting firm that bridges the gap between cutting-edge research and practical
                business applications, creating a future where AI enhances every aspect of human productivity and
                creativity.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <div className="text-amber-400 mb-4 flex justify-center">{achievement.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                  <p className="text-slate-300 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our diverse team combines decades of experience in AI research, engineering, and business strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="rounded-lg bg-slate-700"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                      <p className="text-amber-400 mb-3">{member.role}</p>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="border-slate-600 text-slate-300 text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <a href={member.linkedin} className="text-slate-400 hover:text-amber-400 transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a href={member.github} className="text-slate-400 hover:text-amber-400 transition-colors">
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-slate-400 hover:text-amber-400 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep technical knowledge across the entire AI technology stack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {expertise.map((area, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-amber-600/20 rounded-lg text-amber-400">{area.icon}</div>
                    <CardTitle className="text-xl text-white">{area.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 flex-shrink-0"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <div className="text-amber-400 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-white text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-2xl border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our expertise can help transform your business with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-700 hover:text-white hover:bg-slate-800">
                View Our Services
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
