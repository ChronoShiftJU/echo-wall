import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Twitter, Github, ExternalLink, Linkedin } from "lucide-react";

import HeaderLanding from "@/components/HeaderLanding";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Pritam Das",
      headline: "Full Stack Developer",
      imgUrl: "https://bit.ly/4kLRKkK",
      twitter: "https://x.com/frank06n",
      github: "https://github.com/frank06n",
      linkedin: "https://linkedin.com/in/pritamdas2006",
    },
    {
      name: "Suparno Saha",
      headline: "Frontend Developer",
      imgUrl: "https://bit.ly/4hdTCzQ",
      twitter: "https://x.com/letsbecool9792",
      github: "https://github.com/letsbecool9792",
      linkedin: "https://linkedin.com/in/letsbecool9792",
    },
    {
      name: "Sagnik Goswami",
      headline: "Backend Developer",
      imgUrl: "https://bit.ly/4hhIbHs",
      twitter: "https://x.com/sagnikgos",
      github: "https://github.com/sagnikgos",
      linkedin: "https://linkedin.com/in/sagnikgos06",
    },
  ];

  return (
    <>
      <HeaderLanding />
      <div className="min-h-svh w-full bg-background text-foreground">
        {/* About Section */}
        <section className="py-12 md:py-24 lg:py-24 bg-background w-full">
            <div className="container w-full max-w-none px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
                <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About EchoWall
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Your one-stop social media aggregator built for simplicity and efficiency.
                </p>
                </div>
                <div className="max-w-3xl text-center">
                <p className="text-lg text-muted-foreground">
                    EchoWall was created to solve the problem of social media fragmentation. We believe that your online presence should be easy to manage and showcase, without switching between multiple platforms and interfaces.
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-12 bg-muted/50 w-full">
            <div className="container w-full max-w-none px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4">Meet Team x11.core</h2>
                <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Built with passion during IEMHacks 3.0 2025
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                <Card key={index}>
                    <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                        <img
                        src={member.imgUrl}
                        alt={member.name}
                        className="rounded-full w-32 h-32 object-cover mb-4"
                        />
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-muted-foreground mb-4">{member.headline}</p>
                        <div className="flex gap-2">
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Twitter className="h-4 w-4" />
                            </Button>
                        </a>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Github className="h-4 w-4" />
                            </Button>
                        </a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Linkedin className="h-4 w-4" />
                            </Button>
                        </a>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Hackathon Section */}
        <section className="py-16 md:py-24 w-full">
            <div className="container w-full max-w-none px-4 md:px-6">
            <div className="rounded-lg bg-primary/10 border border-primary/20 p-8 md:p-12 text-center">
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4">Built for IEMHacks 3.0</h2>
                <p className="md:text-lg mb-6 max-w-2xl mx-auto text-muted-foreground">
                EchoWall was created during the IEMHacks 3.0 2025 hackathon, where our team had 48 hours to build a solution that addresses the challenges of modern social media management.
                </p>
                <a href="https://iemhacks.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-12">
                    Learn About IEMHacks
                    <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                </a>
            </div>
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;