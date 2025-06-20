
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Star, Search, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
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
  },
  {
    id: 4,
    title: "Python Programming Basics",
    description: "Start your programming journey with Python fundamentals",
    image: "photo-1518770660439-4636190af475",
    duration: "10 weeks",
    students: 1845,
    rating: 4.6,
    level: "Beginner",
    category: "Technology"
  },
  {
    id: 5,
    title: "Graphic Design Fundamentals",
    description: "Learn design principles and create stunning visuals",
    image: "photo-1488590528505-98d2b5aba04b",
    duration: "8 weeks",
    students: 1567,
    rating: 4.7,
    level: "Intermediate",
    category: "Design"
  },
  {
    id: 6,
    title: "Small Business Management",
    description: "Essential skills for starting and running a successful business",
    image: "photo-1501854140801-50d01698950b",
    duration: "14 weeks",
    students: 2156,
    rating: 4.8,
    level: "Intermediate",
    category: "Business"
  }
];

const categories = ["All", "Technology", "Marketing", "Finance", "Design", "Business"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 mx-auto py-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">All Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover free, high-quality courses designed to help you build valuable skills
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-muted">
                <img
                  src={`https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3">{course.level}</Badge>
                <Badge variant="secondary" className="absolute top-3 right-3">{course.category}</Badge>
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

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedLevel("All");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
