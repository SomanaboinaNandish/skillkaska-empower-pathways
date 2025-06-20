
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Users, TrendingUp, Plus, Search, Filter } from "lucide-react";

const Discussion = () => {
  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [newTopicContent, setNewTopicContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock discussion data
  const discussionTopics = [
    {
      id: 1,
      title: "Best practices for learning web development",
      content: "I'm starting my web development journey and would love to hear about the best practices...",
      author: "Sarah Johnson",
      authorAvatar: "",
      replies: 23,
      views: 156,
      lastActivity: "2 hours ago",
      category: "Web Development",
      tags: ["HTML", "CSS", "JavaScript", "Beginner"]
    },
    {
      id: 2,
      title: "Digital Marketing success stories",
      content: "Share your digital marketing success stories and what you learned...",
      author: "Mike Chen",
      authorAvatar: "",
      replies: 12,
      views: 89,
      lastActivity: "4 hours ago",
      category: "Digital Marketing",
      tags: ["Social Media", "SEO", "Content Marketing"]
    },
    {
      id: 3,
      title: "Excel formulas that changed my workflow",
      content: "Here are some Excel formulas that completely transformed how I work with data...",
      author: "Lisa Wang",
      authorAvatar: "",
      replies: 8,
      views: 45,
      lastActivity: "6 hours ago",
      category: "Data Analysis",
      tags: ["Excel", "Productivity", "Data"]
    },
    {
      id: 4,
      title: "Study group for upcoming certification",
      content: "Looking to form a study group for the upcoming digital marketing certification...",
      author: "Alex Rodriguez",
      authorAvatar: "",
      replies: 15,
      views: 78,
      lastActivity: "1 day ago",
      category: "Study Groups",
      tags: ["Certification", "Study Group", "Collaboration"]
    }
  ];

  const popularTags = ["JavaScript", "HTML", "CSS", "Excel", "Marketing", "Certification", "Beginner", "Advanced"];

  const handleCreateTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTopicTitle && newTopicContent) {
      // Mock topic creation - in real app, this would send to backend
      console.log("Creating new topic:", { title: newTopicTitle, content: newTopicContent });
      setNewTopicTitle("");
      setNewTopicContent("");
      // Show success message or redirect
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Community Discussions</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Connect with fellow learners, share knowledge, and get support from our community.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="discussions" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="discussions">All Discussions</TabsTrigger>
                <TabsTrigger value="create">Create Topic</TabsTrigger>
              </TabsList>

              <TabsContent value="discussions" className="space-y-4">
                {discussionTopics.map((topic) => (
                  <Card key={topic.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="hover:text-primary transition-colors">
                            {topic.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {topic.content}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">{topic.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={topic.authorAvatar} />
                              <AvatarFallback>{topic.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-muted-foreground">{topic.author}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              {topic.replies}
                            </div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-4 w-4" />
                              {topic.views}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{topic.lastActivity}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {topic.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="create">
                <Card>
                  <CardHeader>
                    <CardTitle>Create New Discussion Topic</CardTitle>
                    <CardDescription>
                      Start a new conversation with the community
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCreateTopic} className="space-y-4">
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium mb-2">
                          Topic Title
                        </label>
                        <Input
                          id="title"
                          placeholder="Enter a descriptive title for your topic"
                          value={newTopicTitle}
                          onChange={(e) => setNewTopicTitle(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="content" className="block text-sm font-medium mb-2">
                          Content
                        </label>
                        <Textarea
                          id="content"
                          placeholder="Share your thoughts, questions, or insights..."
                          rows={6}
                          value={newTopicContent}
                          onChange={(e) => setNewTopicContent(e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Create Topic
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Active Members</span>
                  <Badge variant="secondary">2,847</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Topics Today</span>
                  <Badge variant="secondary">23</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Messages Today</span>
                  <Badge variant="secondary">156</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Study Groups
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Q&A Section
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Trending Topics
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

export default Discussion;
