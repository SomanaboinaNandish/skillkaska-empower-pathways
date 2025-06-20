
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    content: "SkillKaska changed my life. I went from unemployment to landing my dream job as a web developer in just 6 months.",
    rating: 5,
    image: "photo-1649972904349-6e44c42644a7"
  },
  {
    name: "Michael Chen",
    role: "Digital Marketer",
    content: "The courses are incredibly well-structured and the community support is amazing. I've gained skills that directly impact my career.",
    rating: 5,
    image: "photo-1581091226825-a6a2a5aee158"
  },
  {
    name: "Priya Patel",
    role: "Small Business Owner",
    content: "Thanks to the financial literacy course, I successfully launched my small business and now employ 5 people in my community.",
    rating: 5,
    image: "photo-1488590528505-98d2b5aba04b"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from learners whose lives have been transformed through education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={`https://images.unsplash.com/${testimonial.image}?auto=format&fit=crop&w=100&q=80`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
