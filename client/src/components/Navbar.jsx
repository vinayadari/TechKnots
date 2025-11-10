import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import toast from "react-hot-toast";

export default function Navbar({ user }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState("Search courses...");
  const [showTrending, setShowTrending] = useState(false);
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error logging out");
    } else {
      toast.success("Logged out successfully");
      navigate("/");
    }
  };

  // Theme handling
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleSearch = e => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const trendingCourses = [
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "Data Science",
    "Web3 & Blockchain",
    "Internet of Things (IoT)",
  ];

  const trendingSearches = [
    "React hooks",
    "JavaScript ES6",
    "Python data science",
    "Cloud architecture",
    "Cybersecurity basics",
  ];

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[1600px] md:min-w-[800px] bg-white backdrop-blur-xl border border-gray-200 rounded-xl flex items-center justify-between px-6 py-5"
      style={{
        boxShadow:
          "0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 179, 89, 0.1) inset, 0 0 20px rgba(0, 179, 89, 0.15), 0 0 40px rgba(0, 179, 89, 0.1)",
      }}
    >
      {/* Left Section: Logo + Explore */}
      <div className="hidden md:flex items-center gap-6 flex-shrink-0">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="mirror-effect w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/30 transition-all duration-300 group-hover:border-green-500 group-hover:scale-110">
            <img
              src={logo}
              alt="App Logo"
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="font-bold text-xl text-gray-900 transition-colors duration-300 group-hover:text-green-500">
            TechKnots
          </span>
        </Link>

        {/* Explore dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="font-medium text-gray-900 hover:text-green-500 transition-colors cursor-pointer relative group">
            Explore
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </button>

          {showDropdown && (
            <div className="absolute left-0 mt-2 w-64 py-2 z-50 animate-fade-in bg-white border border-gray-200 rounded-2xl shadow-lg">
              {trendingCourses.map((course, index) => (
                <Link
                  key={index}
                  to={`/explore/${course.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-4 py-2.5 text-sm text-gray-900 hover:text-green-500 hover:bg-gray-100 transition-all duration-200 cursor-pointer border-l-2 border-transparent hover:border-green-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {course}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center Section: Search Bar */}
      <div className="hidden md:flex flex-1 justify-center mx-8 min-w-0">
        <div className="relative w-full max-w-2xl min-w-[300px]">
          <form
            onSubmit={handleSearch}
            className="relative flex items-center bg-white backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500"
          >
            <svg
              className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder={placeholder}
              className="bg-transparent text-gray-900 text-sm focus:outline-none py-1 w-full placeholder:text-gray-600"
              value={searchTerm}
              onFocus={() => setShowTrending(true)}
              onBlur={() => setTimeout(() => setShowTrending(false), 150)}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </form>

          {showTrending && (
            <div
              className="absolute w-full mt-2 py-2 z-50 bg-white border border-gray-200 rounded-2xl shadow-lg animate-fade-in"
              onMouseDown={e => e.preventDefault()}
            >
              {trendingSearches.map((search, index) => (
                <button
                  key={index}
                  type="button"
                  onMouseDown={e => {
                    e.preventDefault();
                    setSearchTerm(search);
                    setShowTrending(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm text-gray-900 hover:text-green-500 hover:bg-gray-100 transition-all duration-200 cursor-pointer border-l-2 border-transparent hover:border-green-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {search}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Section: Auth Buttons */}
      <div className="hidden md:flex items-center gap-6 flex-shrink-0">
        <Link
          to="/contact"
          className="font-medium text-gray-900 hover:text-green-500 transition-colors cursor-pointer relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {user ? (
          <>
            <Link
              to="/dashboard"
              className="text-gray-900 hover:text-green-500 transition-colors font-medium"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="glow-button bg-green-500 text-white px-5 py-2 rounded-full font-medium cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-900 hover:text-green-500 transition-colors cursor-pointer px-3 py-1 rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="glow-button bg-green-500 text-white px-5 py-2 rounded-full font-medium cursor-pointer"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
