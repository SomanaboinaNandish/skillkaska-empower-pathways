
import { Users, BookOpen, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Lives Empowered"
  },
  {
    icon: BookOpen,
    value: "200+",
    label: "Free Courses"
  },
  {
    icon: Award,
    value: "35,000+",
    label: "Certificates Issued"
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries Reached"
  }
];

export const Statistics = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Impact</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Together, we're breaking down barriers and creating opportunities worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
