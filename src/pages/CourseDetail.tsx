
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, FileText, Users, Clock, Star, BookOpen } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();

  // Mock course data - replace with actual data fetching
  const course = {
    id: id,
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development including HTML, CSS, and JavaScript. This comprehensive course will take you from beginner to confident web developer.",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    level: "Beginner",
    enrolled: 1250,
    rating: 4.8,
    lessons: [
      { id: 1, title: "Introduction to HTML", duration: "45 min", completed: false },
      { id: 2, title: "CSS Styling Basics", duration: "60 min", completed: false },
      { id: 3, title: "JavaScript Fundamentals", duration: "90 min", completed: false },
      { id: 4, title: "Building Your First Website", duration: "120 min", completed: false },
    ],
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    prerequisites: "Basic computer literacy"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link to="/courses" className="text-blue-600 hover:text-blue-800 text-sm">
                ← Back to Courses
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">{course.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span>{course.enrolled.toLocaleString()} enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-500" />
                <span>{course.duration}</span>
              </div>
              <Badge variant="secondary">{course.level}</Badge>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Skills you'll learn:</h3>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, index) => (
                  <Badge key={index} variant="outline">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Enrollment Card */}
          <div className="md:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Start Learning Today</CardTitle>
                <CardDescription>Join thousands of learners worldwide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Enroll Now - Free
                </Button>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>Instructor:</span>
                    <span className="font-medium">{course.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prerequisites:</span>
                    <span className="font-medium">{course.prerequisites}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <CardDescription>{course.lessons.length} lessons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.lessons.map((lesson, index) => (
                    <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <PlayCircle className="h-5 w-5 text-blue-500" />
                        <div>
                          <h4 className="font-medium">{lesson.title}</h4>
                          <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                        </div>
                      </div>
                      {lesson.completed && (
                        <Badge variant="default">Completed</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Course Progress</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Start your learning journey today!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
