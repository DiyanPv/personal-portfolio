"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure"],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
    },
 
    {
      title: "CI/CD & Automation",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps",],
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
    },
    {
      title: "Containerization",
      skills: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300",
    },
    {
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "Zabbix"],
      color: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
    },
    {
      title: "Configuration Management",
      skills: ["Ansible"],
      color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A comprehensive toolkit for building, deploying, and maintaining modern infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { skill: "AWS", level: 85 },
              { skill: "Kubernetes", level: 90 },
              { skill: "Terraform", level: 92 },
              { skill: "Docker", level: 94 },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-medium mb-2">{item.skill}</div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
                <div className="text-sm text-foreground/60">{item.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
