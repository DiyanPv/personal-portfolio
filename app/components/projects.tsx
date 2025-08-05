"use client"
import { ImageLoader } from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { images } from "../assets/Projects/images"
export default function Projects() {
  const projects = [
    {


      title: `Verius`,
      image: images.verius,
      description:
        "Verius is an NFT marketplace demo product. It allows users to send networks to a pre-generated Goerli-only contract and interact with the Giphy API to generate an array of images, which are shown at the bottom.",
      date: "28.12.2022",
      github: `https://github.com/DiyanPv/VERIUS-Marketplace`,
      demo: "https://verius-web3.vercel.app/",
      tech: ["React", "Kubernetes", "Prometheus", "Grafana", "Jenkins"],
      featured: true,
    },
    {
      title: `Invaders 2.0`,
      image: images.invaders,
      description:
        "Invaders 2.0 is my first attempt for a Javascript-native sidescroller 2D game. It utilizes basic HTML instead of canvas and has basic functionalities like shooting, moving targets and tracking score.",
      date: "14.09.2022",
      tech: ["Javascript", "HTML", "CSS"],
      github: `https://github.com/DiyanPv/sidescrolling-game-JS`,
      demo: "https://invaders-2-0.web.app/",
    },
    {
      title: `Food Stop`,
      image: images.reactfood,
      description:
        "One of my first React Projects. It utilizes Firebase as a store of order data and stores context data using the React context API instead of Redux. Persistent data in context to be added via requests to firebase at every page open.",
      date: "02.11.2022",
      github: `https://github.com/DiyanPv/React-Demos/tree/main/ReactFood`,
      demo: "https://diyan-test.web.app/",
      tech: ["React", "Firebase", "React Context"],
      
    },
    {
      title: `Native NFT`,
      image: images.nativeNFT,
      description:
        "Basic landing page website for my NFT Expo (React Native) app. Expo app currently available for Android-only users due to Apple policies.",
      date: "20.01.2023",
      sourceCode: `https://github.com/DiyanPv/Native_NFTstore`,
      github: `https://github.com/DiyanPv/Native_NFTstore`,
      tech: ["React Native"],
      demo: "https://native-nft-marketplace.vercel.app/"
      
    },
    {
      title: `Expense Tracker`,
      image: images.expenseTracker,
      description:
        "My second React project. This is simply an expense tracker with basic input fields like date/item/price. As soon as submitted, it logs and displays the filtered array at the bottom for the specific year selected. There is also a 12-month breakdown for each spending year.",
      date: "15.07.2022",
      github: `https://github.com/DiyanPv/React-Demos/tree/main/my-app`,
      demo: "https://expenses-track-react.web.app/",
      tech: ["React", "TailwindCSS", "HTML"],
     
    },
    {
      title: `Krypt`,
      image: images.krypt,
      description:
        "A fetching service that uses the CryptoCompare library to fetch data from different exchanges dynamically. Users can also sort the prices in ascending/descending order and can also fetch data by going to www.url.com/{cryptoPair} and www.url.com/{cryptoPair}/details",
      date: "27.02.2023",
      tech: ["HTML", "CSS", "React"],
      github: `https://github.com/DiyanPv/nexo-fe-task`,
      demo: "https://nexo-fe-task.vercel.app/",
     
    },
    {
      title: `The Shoe Stop`,
      image: images.theshoestop,
      description:
        "An eccomerce website in which you can order different types of shoes from which you can sort by price/alphabetical or filter by price/color/gender. You also have a cart and a load more button functionality.",
      date: "10.08.2023",
      tech: ["React", "Redux", "Redux Toolkit", "HTML", "CSS"],
      github: `https://github.com/DiyanPv/TheShoeStop`,
      demo: "https://the-shoe-stop.vercel.app/",
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
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${project.featured ? "lg:col-span-2" : ""
                }`}
            >
              <div className={`${project.featured ? "md:flex" : ""}`}>
                <div className={`${project.featured ? "md:w-1/2" : ""}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                  <img
                src={typeof project.image === "string" ? project.image : project.image.src}
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
