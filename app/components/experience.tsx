"use client"

import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Leading infrastructure automation initiatives and cloud migration projects. Architected and implemented CI/CD pipelines serving 50+ microservices with 99.9% uptime.",
      achievements: [
        "Reduced deployment time from 2 hours to 15 minutes",
        "Implemented infrastructure as code reducing manual errors by 90%",
        "Led cloud migration saving $200K annually in infrastructure costs",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "CloudFirst Inc",
      location: "Austin, TX",
      period: "2020 - 2022",
      description:
        "Designed and maintained scalable infrastructure on AWS and Azure. Implemented monitoring and alerting systems using Prometheus and Grafana.",
      achievements: [
        "Built automated disaster recovery system with 15-minute RTO",
        "Implemented comprehensive monitoring reducing MTTR by 60%",
        "Mentored junior engineers and established DevOps best practices",
      ],
    },
    {
      title: "Systems Administrator",
      company: "DataFlow Systems",
      location: "Denver, CO",
      period: "2019 - 2020",
      description:
        "Managed on-premises infrastructure and began transition to cloud-native solutions. Automated routine tasks and improved system reliability.",
      achievements: [
        "Automated backup processes reducing manual effort by 80%",
        "Improved system uptime from 95% to 99.5%",
        "Implemented configuration management with Ansible",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A journey through roles that shaped my expertise in DevOps and cloud engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden md:block" />

                <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-200">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-foreground/60 mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-foreground/60">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>

                    <div>
                      <h4 className="font-medium mb-2 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-foreground/70">
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
