
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Empowering Lives Through
              <span className="text-primary block">Free Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join SkillKaska and unlock your potential with free, high-quality courses 
              designed to build valuable skills and create opportunities for everyone.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-lg px-8 py-3">
              <Link to="/courses">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Quality Courses</h3>
              <p className="text-sm text-muted-foreground text-center">
                Expert-designed curricula covering in-demand skills
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Community Support</h3>
              <p className="text-sm text-muted-foreground text-center">
                Connect with mentors and fellow learners
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Certification</h3>
              <p className="text-sm text-muted-foreground text-center">
                Earn recognized certificates upon completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
