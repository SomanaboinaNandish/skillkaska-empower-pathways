
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen, Globe, Target, Award, Lightbulb, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand the challenges faced by underprivileged communities and design our programs with deep empathy and respect."
    },
    {
      icon: HandHeart,
      title: "Accessibility",
      description: "Education should be free and accessible to everyone, regardless of their economic background or geographic location."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage technology and innovative teaching methods to make learning engaging and effective."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of community-driven learning and peer support to achieve lasting change."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & CEO",
      description: "Former education policy researcher with 15 years of experience in NGO management.",
      expertise: ["Education Policy", "NGO Management", "Social Impact"]
    },
    {
      name: "James Rodriguez",
      role: "Head of Technology",
      description: "Tech industry veteran passionate about using technology for social good.",
      expertise: ["EdTech", "Platform Development", "Digital Innovation"]
    },
    {
      name: "Fatima Al-Zahra",
      role: "Head of Curriculum",
      description: "Experienced educator specializing in skill development and vocational training.",
      expertise: ["Curriculum Design", "Skill Development", "Adult Education"]
    },
    {
      name: "Michael Chen",
      role: "Community Manager",
      description: "Community building expert focused on creating inclusive learning environments.",
      expertise: ["Community Building", "Student Success", "Mentorship"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About SkillKaska
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Empowering underprivileged communities worldwide through free, 
              high-quality skill development and education.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At SkillKaska, we believe that everyone deserves access to quality education 
                  and skill development opportunities, regardless of their economic background. 
                  Our mission is to bridge the digital divide and create pathways to economic 
                  empowerment through free, accessible learning.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Break down barriers to education</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Reach underserved communities globally</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Provide recognized certifications</span>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Our Impact So Far</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Lives Empowered</span>
                    <Badge variant="secondary">50,000+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Free Courses</span>
                    <Badge variant="secondary">200+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Certificates Issued</span>
                    <Badge variant="secondary">35,000+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Countries Reached</span>
                    <Badge variant="secondary">150+</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-accent/20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and every decision we make
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate individuals dedicated to making education accessible for everyone
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you're a learner seeking new skills or an organization wanting to make an impact, 
              there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/register">Start Learning Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
