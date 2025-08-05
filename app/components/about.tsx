"use client"

import { Code, Server, Cloud, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const highlights = [
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: "Infrastructure",
      description: "Expert in designing and managing scalable infrastructure using IaC principles",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Automation",
      description: "Passionate about automating workflows and eliminating manual processes",
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-600" />,
      title: "Cloud Native",
      description: "Experienced with AWS, Azure cloud platforms and services",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Security",
      description: "Implementing security best practices and compliance standards",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            With over 3 years of experience in DevOps and cloud engineering, I specialize in building robust, scalable
            infrastructure solutions that drive business growth and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Started as a system administrator and evolved into a DevOps engineer, I've been at the forefront of the
              infrastructure revolution. My passion lies in bridging the gap between development and operations teams.
            </p>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              I believe in the power of automation, continuous integration, and infrastructure as code to create
              reliable, scalable systems that enable teams to deliver value faster and more efficiently.
            </p>
          
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
