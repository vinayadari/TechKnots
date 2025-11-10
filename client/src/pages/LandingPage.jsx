import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function LandingPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch current user
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "John Doe",
      rating: 4.8,
      students: 1200,
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Mike Johnson",
      rating: 4.7,
      students: 1500,
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Sarah Williams",
      rating: 4.6,
      students: 1800,
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "David Brown",
      rating: 4.5,
      students: 1100,
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
    },
    {
      id: 6,
      title: "Cloud Infrastructure",
      instructor: "Lisa Anderson",
      rating: 4.8,
      students: 900,
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
    },
    {
      id: 7,
      title: "Machine Learning Basics",
      instructor: "Robert Garcia",
      rating: 4.7,
      students: 1300,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Subtle Premium Glows */}
      <div
        className="pointer-events-none absolute top-1/4 right-[-250px] w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,179,89,0.15) 0%, rgba(0,179,89,0.08) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-[-250px] w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,179,89,0.12) 0%, rgba(0,179,89,0.05) 45%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-32 px-6 relative z-10">
        {/* Greeting */}
        <p className="text-xl text-green-700 mb-4">
          {user
            ? `${getGreeting()}, ${user.email.split("@")[0]}!`
            : "Welcome to TechKnots, your premium learning platform!"}
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-green-600">
          Learn, Build, and Innovate
        </h1>
        <p className="text-xl text-green-700 mb-10 max-w-2xl">
          Master AI, Cybersecurity, Web3, Data Science, and Cloud. A premium learning platform for
          builders.
        </p>
        <Link to="/explore" className="inline-block">
          <button className="bg-gradient-to-r from-green-500 to-green-400 px-8 py-4 rounded-full text-lg font-semibold text-white border border-green-300 hover:scale-105 transition-transform duration-300">
            Explore Courses
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 pb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-600">
          Why Learn with TechKnots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature Cards */}
          {[
            {
              title: "Expert Instructors",
              desc: "Learn from industry veterans and practitioners.",
              icon: (
                <svg
                  className="h-6 w-6 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
                  />
                </svg>
              ),
            },
            {
              title: "Hands-on Projects",
              desc: "Build real-world projects and portfolios.",
              icon: (
                <svg
                  className="h-6 w-6 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              ),
            },
            {
              title: "Certifications",
              desc: "Earn shareable certificates and badges.",
              icon: (
                <svg
                  className="h-6 w-6 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9V7a5 5 0 10-10 0v2M5 9h14v11H5z"
                  />
                </svg>
              ),
            },
            {
              title: "Community",
              desc: "Join peers, mentors, and career guidance.",
              icon: (
                <svg
                  className="h-6 w-6 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M12 12a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
              ),
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-green-700 mb-1">{f.title}</h3>
              <p className="text-sm text-green-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="container mx-auto px-6 pb-20 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-600">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map(course => (
            <div
              key={course.id}
              className="overflow-hidden bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-700">{course.title}</h3>
                <p className="text-green-600 mb-4">by {course.instructor}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-yellow-500 font-semibold">★ {course.rating}</span>
                  <span className="text-green-600">{course.students} students</span>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-400 text-white py-2 rounded-lg font-medium hover:scale-105 transition-transform duration-300">
                  Go to Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Progress / Badges / Activity Section */}
      <div className="container mx-auto px-6 pb-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-600">
          Your Learning Progress
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Progress Cards */}
          <div className="p-6 space-y-5 bg-white border border-gray-200 rounded-xl">
            {[
              { title: "AI Foundations", percent: 64 },
              { title: "Cybersecurity 101", percent: 38 },
              { title: "Data Science Bootcamp", percent: 82 },
            ].map((prog, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-green-600">{prog.title}</span>
                  <span className="text-green-700">{prog.percent}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 rounded-full h-2"
                    style={{ width: `${prog.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="p-6 space-y-4 bg-white border border-gray-200 rounded-xl">
            <h3 className="text-lg font-semibold text-green-700">Badges</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Rookie Builder", delay: "0s" },
                { name: "Data Diver", delay: "0.3s" },
                { name: "Security Scout", delay: "0.6s" },
              ].map((badge, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-800 px-2 py-1 rounded"
                  style={{ animationDelay: badge.delay }}
                >
                  <svg
                    className="h-4 w-4 text-green-600 inline mr-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z" />
                  </svg>
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-6 space-y-4 bg-white border border-gray-200 rounded-xl">
            <h3 className="text-lg font-semibold text-green-700">Recent Activity</h3>
            {[
              { title: "Completed: Linear Regression Lab", time: "2h ago" },
              { title: "Earned badge: Git Basics", time: "1d ago" },
              { title: "New course started: Web3 Wallets", time: "3d ago" },
            ].map((activity, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <p className="text-green-600">{activity.title}</p>
                  <span className="text-xs text-green-700">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
