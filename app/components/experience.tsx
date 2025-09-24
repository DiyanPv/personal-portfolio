"use client"

import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Devops Engineer",
      company: "Haemimont AD",
      location: "Sofia, Bulgaria",
      period: "2024 - Present",
      description:
        "Designed and maintained CI/CD pipelines using GitHub/GitLab, automating build, test, and deployment workflows. Leveraged Docker, Ansible, and cloud services (AWS EC2, Lambda, S3) to create scalable, reliable infrastructure. Automated monitoring with Zabbix, Graylog, and AWS CloudWatch, improving uptime and issue detection. Skilled in scripting (Python, Bash, PowerShell) and infrastructure-as-code to streamline releases and enhance system reliability. Created Datadog dashboards for custom monitors. Managed web services with Nginx, Apache, Certbot, and firewall automation. Interviewed candidates for DevOps position. Experienced in PostgreSQL, LDAP, and Linux networking.",
      achievements: [
        "Reduced deployment time from 2 hours to 15 minutes with CI/CD Pipelines",
        "Implemented DataDog monitoring to sufficiently improve SLA",
        "Participating in migrating from GlusterFS to CephFS storage solution",
        "Created IaC for our web servers reducing manual errors"
      ],
    },
    {
      title: "Senior CSR",
      company: "Nexo",
      location: "Sofia, Bulgaria",
      period: "2021 - 2024",
      description:
        "Proven expertise in Nexo products, user administration, issue resolution, cross-department collaboration, shift management, and mentoring new agents and helping other agents on advanced queries.",
      achievements: [
        "Suggested and helped implement a solution for recovering smart-contract tokens",
        "Made a procedure to recover ERC-20 tokens easily",
        "Organized Confluence documentation accross multiple teams",
      ],
    },
    {
      title: "Assistant Manager",
      company: "Zagora Eco LTD",
      location: "Stara Zagora, Bulgaria",
      period: "2013 - 2021",
      description:
        "Poultry farm - I was responsible for almost everything. Managing and helping with organizational tasks. Replacing people on sick leave. Managing microclimate, food portions, drinkable resources, etc. Gained good overall knowledge on construction, machinery, etc.",
      achievements: [
        "Re-isolation of the roof and walls for better temperature control",
        "Installation of new cooling system",
        "Built second building which houses 10,000+ hen"
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
