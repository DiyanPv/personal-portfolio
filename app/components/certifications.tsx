"use client"

import { Award, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-PSA-12345",
      image: "/placeholder.svg?height=100&width=100",
      verifyUrl: "https://aws.amazon.com/verification",
      status: "Active",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CKA-67890",
      image: "/placeholder.svg?height=100&width=100",
      verifyUrl: "https://cncf.io/verification",
      status: "Active",
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "2022",
      credentialId: "HC-TA-11111",
      image: "/placeholder.svg?height=100&width=100",
      verifyUrl: "https://hashicorp.com/verification",
      status: "Active",
    },
    {
      title: "Microsoft Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "MS-AZ400-22222",
      image: "/placeholder.svg?height=100&width=100",
      verifyUrl: "https://microsoft.com/verification",
      status: "Active",
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2021",
      credentialId: "GCP-PCA-33333",
      image: "/placeholder.svg?height=100&width=100",
      verifyUrl: "https://cloud.google.com/verification",
      status: "Active",
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc",
      date: "2021",
      credentialId: "DCA-44444",
      image: "/placeholder.svg?height=100&width=100",
      verifyUrl: "https://docker.com/verification",
      status: "Active",
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
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.title} badge`}
                    className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
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
              <Badge variant="secondary">Currently Studying: AWS Security Specialty</Badge>
              <Badge variant="secondary">Next Goal: CKAD Certification</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
