
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Trophy, Clock, Users, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock user data - replace with actual user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "January 2024",
    enrolledCourses: 3,
    completedCourses: 1,
    certificatesEarned: 1,
    totalLearningTime: "45 hours"
  };

  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      progress: 75,
      nextLesson: "JavaScript Functions",
      totalLessons: 12,
      completedLessons: 9,
      instructor: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Digital Marketing Basics",
      progress: 30,
      nextLesson: "Social Media Strategy",
      totalLessons: 8,
      completedLessons: 2,
      instructor: "Mike Chen"
    },
    {
      id: 3,
      title: "Data Analysis with Excel",
      progress: 100,
      nextLesson: "Course Completed",
      totalLessons: 10,
      completedLessons: 10,
      instructor: "Lisa Wang"
    }
  ];

  const achievements = [
    { title: "First Course Completed", description: "Completed your first course", earned: true },
    { title: "Quick Learner", description: "Completed 3 lessons in one day", earned: true },
    { title: "Dedicated Student", description: "Studied for 7 consecutive days", earned: false },
    { title: "Course Master", description: "Completed 5 courses", earned: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <div className="text-2xl font-bold">{user.enrolledCourses}</div>
              <div className="text-sm text-muted-foreground">Enrolled Courses</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold">{user.completedCourses}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Badge className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold">{user.certificatesEarned}</div>
              <div className="text-sm text-muted-foreground">Certificates</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <div className="text-2xl font-bold">{user.totalLearningTime}</div>
              <div className="text-sm text-muted-foreground">Learning Time</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>Continue learning where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold mb-1">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        </div>
                        <Badge variant={course.progress === 100 ? "default" : "secondary"}>
                          {course.progress === 100 ? "Completed" : "In Progress"}
                        </Badge>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">
                          {course.completedLessons}/{course.totalLessons} lessons completed
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <strong>Next:</strong> {course.nextLesson}
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/course/${course.id}`}>
                            <PlayCircle className="mr-2 h-4 w-4" />
                            {course.progress === 100 ? "Review" : "Continue"}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`flex items-center gap-3 p-2 rounded ${achievement.earned ? 'bg-green-50' : 'bg-gray-50'}`}>
                      <Trophy className={`h-5 w-5 ${achievement.earned ? 'text-yellow-500' : 'text-gray-400'}`} />
                      <div>
                        <div className={`text-sm font-medium ${achievement.earned ? 'text-green-800' : 'text-gray-600'}`}>
                          {achievement.title}
                        </div>
                        <div className={`text-xs ${achievement.earned ? 'text-green-600' : 'text-gray-500'}`}>
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/courses">Browse More Courses</Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/discussion">Join Discussions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
