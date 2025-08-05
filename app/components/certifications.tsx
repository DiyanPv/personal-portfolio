"use client"

import { Award, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { certificates } from "../assets/Certificates/certificates";

export default function Certifications() {
  const certifications = [
    {
      title: "DevOps Mastery",
      issuer: "Udemy",
      date: "2024",
      credentialId: "UC-6666066d-6a5e-47ff-8b5b-1d4b5d65fd9e",
      image: certificates.udemyDevOps,
      verifyUrl: "https://www.udemy.com/certificate/UC-6666066d-6a5e-47ff-8b5b-1d4b5d65fd9e/",
      status: "Completed",
    },
    {
      title: "React Frontend Developer",
      issuer: "Udemy",
      date: "2024",
      credentialId: "UC-5d8eff9c-3db1-42e7-a876-3805d9bf5891",
      image: certificates.udemyReact,
      verifyUrl: "https://www.udemy.com/certificate/UC-5d8eff9c-3db1-42e7-a876-3805d9bf5891/",
      status: "Completed",
    },
    {
      title: "Node.js Backend Developer",
      issuer: "Udemy",
      date: "2024",
      credentialId: "UC-67aacbd8-fb15-4d30-92c8-6c48cfd01a76",
      image: certificates.udemyNode,
      verifyUrl: "https://www.udemy.com/certificate/UC-67aacbd8-fb15-4d30-92c8-6c48cfd01a76/",
      status: "Completed",
    },
    {
      title: "Full Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "2024",
      credentialId: "UC-47d18b9b-d8cb-4fed-ac06-2c1b61809184",
      image: certificates.udemyBootcamp,
      verifyUrl: "https://www.udemy.com/certificate/UC-47d18b9b-d8cb-4fed-ac06-2c1b61809184/",
      status: "Completed",
    },
    {
      title: "Programming Basics - JavaScript",
      issuer: "SoftUni",
      date: "2021",
      credentialId: "d6c6a2fd",
      image: certificates.softuniBasics,
      verifyUrl: "https://softuni.bg/certificates/details/112724/d6c6a2fd",
      status: "Completed",
    },
    {
      title: "Programming Fundamentals - JavaScript",
      issuer: "SoftUni",
      date: "2021",
      credentialId: "a54c6c57",
      image: certificates.softuniFundamentals,
      verifyUrl: "https://softuni.bg/certificates/details/141482/a54c6c57",
      status: "Completed",
    },
    {
      title: "Containers and Cloud",
      issuer: "SoftUni",
      date: "2024",
      credentialId: "36c30466",
      image: certificates.diyancontainersandcloud,
      verifyUrl: "https://softuni.bg/certificates/details/224782/36c30466",
      status: "Completed",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      credentialId: "",
      image: certificates.diyanresponsiveweb,
      verifyUrl: "",
      status: "Completed",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2024",
      credentialId: "",
      image: certificates.diyanfccalgorithms,
      verifyUrl: "",
      status: "Completed",
    },

    {
      title: "Certified Kubernetes Administrator - CKA",
      issuer: "The Linux Foundation",
      date: "2025",
      credentialId: "",
      image: "",
      verifyUrl: "",
      status: "In progress",
    },
    {
      title: "Certified Kubernetes Administrator - With Practice Tests",
      issuer: "Udemy",
      date: "2025",
      credentialId: "",
      image: "",
      verifyUrl: "",
      status: "In progress",
    },

  ]

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Industry-recognized certifications that validate expertise in cloud platforms, DevOps tools, and modern
            infrastructure practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                <img
                src={typeof cert.image === "string" ? cert.image : cert.image.src}
                alt={cert.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
               
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{cert.issuer}</p>

                  <div className="flex items-center justify-center text-foreground/60 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>

                  <Badge
                    className={`mb-3 ${
                      cert.status === "Active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
                    }`}
                  >
                    <Award className="w-3 h-3 mr-1" />
                    {cert.status}
                  </Badge>
                </div>

                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-3">Credential ID: {cert.credentialId}</p>

                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <a href={cert.verifyUrl} className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Verify Credential
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-foreground/70 mb-6">
              Committed to staying current with the latest technologies and best practices in the rapidly evolving
              DevOps and cloud computing landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              
              <Badge variant="secondary">Next Goal: CKA Certification</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
