
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, FileText, Users, Clock, Star, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [courseProgress, setCourseProgress] = useState(0);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    const enrolledData = localStorage.getItem("enrolledCourses");
    if (enrolledData) {
      const enrolled = JSON.parse(enrolledData);
      const thisCourse = enrolled.find((c: any) => c.id === id);
      if (thisCourse) {
        setIsEnrolled(true);
        setCourseProgress(thisCourse.progress);
      }
    }
  }, [id]);

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
      { id: 1, title: "Introduction to HTML", duration: "45 min", videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE" },
      { id: 2, title: "CSS Styling Basics", duration: "60 min", videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc" },
      { id: 3, title: "JavaScript Fundamentals", duration: "90 min", videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk" },
      { id: 4, title: "Building Your First Website", duration: "120 min", videoUrl: "https://www.youtube.com/embed/G3e-cpL7ofc" },
    ],
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    prerequisites: "Basic computer literacy"
  };

  const handleEnrollment = () => {
    if (!user) {
      toast.error("Please login to enroll in courses");
      navigate("/login");
      return;
    }

    const enrolledData = localStorage.getItem("enrolledCourses");
    let enrolled = enrolledData ? JSON.parse(enrolledData) : [];
    
    const newCourse = {
      id: course.id,
      title: course.title,
      instructor: course.instructor,
      progress: 0,
      nextLesson: course.lessons[0].title,
      totalLessons: course.lessons.length,
      completedLessons: 0
    };

    enrolled.push(newCourse);
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
    setIsEnrolled(true);
    toast.success("Successfully enrolled in the course!");
  };

  const watchLesson = (lessonId: number) => {
    if (!isEnrolled) {
      toast.error("Please enroll in the course first");
      return;
    }
    // Simulate lesson completion
    const newProgress = Math.min(100, (lessonId / course.lessons.length) * 100);
    setCourseProgress(newProgress);
    
    // Update stored progress
    const enrolledData = localStorage.getItem("enrolledCourses");
    if (enrolledData) {
      const enrolled = JSON.parse(enrolledData);
      const courseIndex = enrolled.findIndex((c: any) => c.id === id);
      if (courseIndex !== -1) {
        enrolled[courseIndex].progress = newProgress;
        enrolled[courseIndex].completedLessons = lessonId;
        localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
      }
    }
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
                <CardTitle>
                  {isEnrolled ? "Continue Learning" : "Start Learning Today"}
                </CardTitle>
                <CardDescription>
                  {isEnrolled ? `Progress: ${courseProgress}%` : "Join thousands of learners worldwide"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEnrolled ? (
                  <div className="space-y-4">
                    <Progress value={courseProgress} className="h-2" />
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/dashboard">
                        <BookOpen className="mr-2 h-5 w-5" />
                        Go to Dashboard
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full" size="lg" onClick={handleEnrollment}>
                    <BookOpen className="mr-2 h-5 w-5" />
                    Enroll Now - Free
                  </Button>
                )}
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
                    <div key={lesson.id} className="border rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="h-5 w-5 text-blue-500" />
                            <div>
                              <h4 className="font-medium">{lesson.title}</h4>
                              <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            onClick={() => watchLesson(lesson.id)}
                            disabled={!isEnrolled}
                          >
                            {isEnrolled ? "Watch" : "Enroll to Watch"}
                          </Button>
                        </div>
                        
                        {isEnrolled && (
                          <div className="mt-4">
                            <iframe
                              width="100%"
                              height="315"
                              src={lesson.videoUrl}
                              title={lesson.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="rounded-lg"
                            ></iframe>
                          </div>
                        )}
                      </div>
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
                      <span>{courseProgress}%</span>
                    </div>
                    <Progress value={courseProgress} className="h-2" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {isEnrolled ? (
                      <p>Keep up the great work!</p>
                    ) : (
                      <p>Enroll to start your learning journey!</p>
                    )}
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
