
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredCourses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript from scratch to build modern websites",
    image: "photo-1461749280684-dccba630e2f6",
    duration: "12 weeks",
    students: 2847,
    rating: 4.8,
    level: "Beginner",
    category: "Technology"
  },
  {
    id: 2,
    title: "Digital Marketing Essentials",
    description: "Master social media marketing, SEO, and content strategy",
    image: "photo-1581091226825-a6a2a5aee158",
    duration: "8 weeks",
    students: 1923,
    rating: 4.7,
    level: "Intermediate",
    category: "Marketing"
  },
  {
    id: 3,
    title: "Financial Literacy & Planning",
    description: "Build financial knowledge for personal and business success",
    image: "photo-1649972904349-6e44c42644a7",
    duration: "6 weeks",
    students: 3421,
    rating: 4.9,
    level: "Beginner",
    category: "Finance"
  }
];

export const FeaturedCourses = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your learning journey with our most popular and impactful courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-muted">
                <img
                  src={`https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3">{course.level}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/course/${course.id}`}>
                    View Course
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
