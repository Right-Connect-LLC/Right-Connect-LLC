'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Bot,
    Brain,
    MessageSquare,
    Search,
    ArrowRight,
    CheckCircle,
    Zap,
    Code,
    Cloud,
    Settings,
    Users,
    BarChart3,
    Shield,
    Clock,
    Target,
    Lightbulb,
} from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useRouter } from 'next/navigation'

export default function ServicesPage() {
    const router = useRouter()
    const services = [
        {
            id: "ai-agent-builder",
            icon: <Bot className="h-12 w-12" />,
            title: "Natural Language AI Agent Builder",
            subtitle: "Build AI Agents with Just a Prompt",
            description:
                "A no-code framework for generating functional AI agents and workflows directly from natural language. Empower teams to prototype, test, and deploy intelligent agents without writing code.",
            features: [
                "Natural Language to Agent Conversion",
                "Agent Workflow Composition",
                "Tool-Usage & Context Awareness",
                "Visual Builder Integration",
                "Modular & Extensible Design",
                "Multi-language Prompt Support",
            ],
            benefits: [
                "Accelerate agent development cycles",
                "Enable non-developers to build AI tools",
                "Improve reliability through schema validation",
                "Plug-and-play with any backend or toolset",
            ],
            useCases: [
                "Internal automation for business teams",
                "Custom GPT agents for vertical SaaS",
                "AI research tooling and experimentation",
                "Prototyping new AI-driven applications",
                "Dynamic task routing and coordination",
            ],
            technologies: ["OpenAI GPT", "Anthropic Claude", "LangChain", "Python", "FastAPI", "Docker"],
        },
        {
            id: "rag-systems",
            icon: <Brain className="h-12 w-12" />,
            title: "RAG Systems",
            subtitle: "Retrieval-Augmented Generation",
            description:
                "Advanced RAG systems that combine the power of large language models with your proprietary data to provide accurate, contextual, and up-to-date responses.",
            features: [
                "Knowledge Base Integration",
                "Real-time Data Retrieval",
                "Context-Aware Responses",
                "Multi-source Integration",
                "Semantic Search",
                "Dynamic Updates",
            ],
            benefits: [
                "Access to current information",
                "Reduced hallucinations",
                "Domain-specific expertise",
                "Improved accuracy and relevance",
            ],
            useCases: [
                "Enterprise knowledge management",
                "Technical documentation assistance",
                "Legal document analysis",
                "Medical information systems",
                "Research and development support",
            ],
            technologies: ["Vector Databases", "Embeddings", "Elasticsearch", "Pinecone", "Weaviate", "ChromaDB"],
        },
        {
            id: "chatbots",
            icon: <MessageSquare className="h-12 w-12" />,
            title: "Intelligent Chatbots",
            subtitle: "Conversational AI Solutions",
            description:
                "Deploy intelligent chatbots that provide natural, context-aware conversations to enhance customer engagement and support across multiple channels.",
            features: [
                "Multi-platform Support",
                "Natural Conversations",
                "24/7 Availability",
                "Sentiment Analysis",
                "Escalation Handling",
                "Analytics Dashboard",
            ],
            benefits: [
                "Instant customer support",
                "Reduced support costs",
                "Improved customer satisfaction",
                "Multilingual capabilities",
            ],
            useCases: [
                "Customer support automation",
                "Lead qualification",
                "E-commerce assistance",
                "Internal help desk",
                "Appointment scheduling",
            ],
            technologies: ["Dialogflow", "Microsoft Bot Framework", "Rasa", "WebSocket", "REST APIs", "NLU"],
        },
        {
            id: "search-systems",
            icon: <Search className="h-12 w-12" />,
            title: "Natural Language Search",
            subtitle: "Advanced Search Technologies",
            description:
                "Implement sophisticated search systems that understand natural language queries and deliver highly relevant results using semantic understanding.",
            features: [
                "Semantic Search",
                "Query Understanding",
                "Relevant Results",
                "Faceted Search",
                "Auto-suggestions",
                "Search Analytics",
            ],
            benefits: [
                "Improved search accuracy",
                "Better user experience",
                "Reduced search time",
                "Higher conversion rates",
            ],
            useCases: [
                "E-commerce product search",
                "Document retrieval systems",
                "Knowledge base search",
                "Content discovery platforms",
                "Research databases",
            ],
            technologies: ["Elasticsearch", "Solr", "Neural Search", "BERT", "Sentence Transformers", "Lucene"],
        },
    ]

    const process = [
        {
            step: "01",
            title: "Discovery & Analysis",
            description:
                "We analyze your business needs, existing systems, and define clear objectives for your AI solution.",
            icon: <Target className="h-8 w-8" />,
        },
        {
            step: "02",
            title: "Solution Design",
            description:
                "Our experts design a custom AI architecture tailored to your specific requirements and constraints.",
            icon: <Lightbulb className="h-8 w-8" />,
        },
        {
            step: "03",
            title: "Development & Testing",
            description:
                "We build and rigorously test your AI solution using industry best practices and cutting-edge technologies.",
            icon: <Code className="h-8 w-8" />,
        },
        {
            step: "04",
            title: "Deployment & Integration",
            description:
                "Seamless deployment and integration with your existing systems with minimal disruption to operations.",
            icon: <Cloud className="h-8 w-8" />,
        },
        {
            step: "05",
            title: "Monitoring & Optimization",
            description:
                "Continuous monitoring, performance optimization, and ongoing support to ensure maximum effectiveness.",
            icon: <BarChart3 className="h-8 w-8" />,
        },
    ]

    const whyChooseUs = [
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Enterprise-Grade Security",
            description: "Your data security and privacy are our top priorities with enterprise-level protection.",
        },
        {
            icon: <Clock className="h-8 w-8" />,
            title: "Rapid Deployment",
            description: "Get your AI solutions up and running quickly with our streamlined development process.",
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Expert Team",
            description: "Work with AI specialists who have deep experience across various industries and use cases.",
        },
        {
            icon: <Settings className="h-8 w-8" />,
            title: "Custom Solutions",
            description: "Every solution is tailored to your specific needs, not a one-size-fits-all approach.",
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
                        Our AI Services
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        Comprehensive AI Solutions
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                        From intelligent agents to advanced search systems, we deliver AI solutions that transform how your business
                        operates and serves customers.
                    </p>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <div key={service.id} className="max-w-7xl mx-auto">
                                <Card className="bg-slate-800/30 border-slate-700 overflow-hidden">
                                    <div className="grid lg:grid-cols-2 gap-0">
                                        {/* Content Side */}
                                        <div className="p-8 lg:p-12">
                                            <div className="flex items-center space-x-4 mb-6">
                                                <div className="p-3 bg-amber-600/20 rounded-lg text-amber-400">{service.icon}</div>
                                                <div>
                                                    <h2 className="text-3xl font-bold mb-2 text-white">{service.title}</h2>
                                                    <p className="text-amber-400 text-lg">{service.subtitle}</p>
                                                </div>
                                            </div>

                                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">{service.description}</p>

                                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                <div>
                                                    <h4 className="text-lg font-semibold mb-4 text-white">Key Features</h4>
                                                    <ul className="space-y-2">
                                                        {service.features.map((feature, featureIndex) => (
                                                            <li key={featureIndex} className="flex items-center text-slate-300">
                                                                <CheckCircle className="h-4 w-4 text-amber-400 mr-3 flex-shrink-0" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="text-lg font-semibold mb-4 text-white">Benefits</h4>
                                                    <ul className="space-y-2">
                                                        {service.benefits.map((benefit, benefitIndex) => (
                                                            <li key={benefitIndex} className="flex items-center text-slate-300">
                                                                <Zap className="h-4 w-4 text-amber-400 mr-3 flex-shrink-0" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                                                Learn More
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>

                                        {/* Details Side */}
                                        <div className="bg-slate-900/50 p-8 lg:p-12">
                                            <div className="space-y-8">
                                                <div>
                                                    <h4 className="text-lg font-semibold mb-4 text-white">Use Cases</h4>
                                                    <div className="space-y-2">
                                                        {service.useCases.map((useCase, useCaseIndex) => (
                                                            <div key={useCaseIndex} className="flex items-center text-slate-300">
                                                                <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 flex-shrink-0"></div>
                                                                {useCase}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="text-lg font-semibold mb-4 text-white">Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {service.technologies.map((tech, techIndex) => (
                                                            <Badge key={techIndex} variant="outline" className="border-slate-600 text-slate-300">
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Development Process</h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            A proven methodology that ensures successful AI implementation from concept to deployment.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {process.map((step, index) => (
                                <Card key={index} className="bg-slate-800/50 border-slate-700 relative">
                                    <CardContent className="p-6">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className="text-4xl font-bold text-amber-400">{step.step}</div>
                                            <div className="text-amber-400">{step.icon}</div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                        <p className="text-slate-300 leading-relaxed">{step.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose Right Connect LLC</h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            We combine technical expertise with business acumen to deliver AI solutions that drive real results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {whyChooseUs.map((item, index) => (
                            <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                                <CardContent className="p-6">
                                    <div className="text-amber-400 mb-4 flex justify-center">{item.icon}</div>
                                    <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Let's discuss which AI solution is right for your specific needs and goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" onClick={() => router.push('/onboarding')}>
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800" onClick={() => router.push('/contact')}>
                                Contact Us
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
