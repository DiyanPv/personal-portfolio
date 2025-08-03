"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Platform",
      description:
        "Built a comprehensive infrastructure platform supporting AWS, Azure, and GCP with unified monitoring, logging, and deployment pipelines. Reduced deployment time by 70% and improved system reliability.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Terraform", "Kubernetes", "Prometheus", "Grafana", "Jenkins"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "Automated CI/CD Pipeline",
      description:
        "Designed and implemented a fully automated CI/CD pipeline using GitLab CI and Kubernetes, supporting multiple environments with automated testing, security scanning, and deployment strategies.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["GitLab CI", "Docker", "Kubernetes", "Helm", "SonarQube"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Microservices Monitoring Stack",
      description:
        "Implemented comprehensive monitoring and observability for microservices architecture using Prometheus, Grafana, and Jaeger. Achieved 99.9% uptime and reduced MTTR by 60%.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Prometheus", "Grafana", "Jaeger", "ELK Stack", "Kubernetes"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Infrastructure as Code Framework",
      description:
        "Created a reusable IaC framework with Terraform modules for rapid deployment of standardized infrastructure across multiple cloud providers with built-in security and compliance.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Terraform", "AWS", "Azure", "Ansible", "Vault"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Container Security Platform",
      description:
        "Developed a comprehensive container security platform with vulnerability scanning, policy enforcement, and runtime protection for Kubernetes clusters.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Kubernetes", "Falco", "OPA", "Trivy", "Istio"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Disaster Recovery Automation",
      description:
        "Built automated disaster recovery solution with cross-region replication, automated failover, and recovery testing for critical business applications.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["AWS", "Terraform", "Lambda", "CloudFormation", "Route53"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A showcase of infrastructure solutions and automation projects that demonstrate expertise in modern DevOps
            practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`${project.featured ? "md:flex" : ""}`}>
                <div className={`${project.featured ? "md:w-1/2" : ""}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                <div className={`${project.featured ? "md:w-1/2" : ""}`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
