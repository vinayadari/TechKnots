import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (err) {
      toast.error("Google login failed. Try again.");
    }
  };

  const handleGithubLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (err) {
      toast.error("GitHub login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-32">
      {/* Circular emerald glows */}
      <div
        className="pointer-events-none absolute top-1/4 right-[-200px] w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,179,89,0.2) 0%, rgba(0,179,89,0.12) 40%, rgba(0,179,89,0.04) 70%, transparent 85%)",
        }}
      ></div>
      <div
        className="pointer-events-none absolute bottom-1/4 left-[-200px] w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,179,89,0.18) 0%, rgba(0,179,89,0.1) 45%, rgba(0,179,89,0.03) 72%, transparent 85%)",
        }}
      ></div>

      <div className="w-full max-w-4xl mx-auto p-6 relative z-10">
        <div
          className="bg-white backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-8 w-full"
          style={{
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 179, 89, 0.1) inset, 0 0 20px rgba(0, 179, 89, 0.15), 0 0 40px rgba(0, 179, 89, 0.1)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 min-w-0">
            {/* Logo & Greeting Section */}
            <div className="flex flex-col items-center justify-center lg:flex-1 flex-shrink-0">
              <Link to="/" className="flex flex-col items-center gap-6 group">
                <div className="mirror-effect w-28 h-28 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/30 transition-all duration-300 group-hover:border-green-500 group-hover:scale-110">
                  <img
                    src={logo}
                    alt="TechKnots Logo"
                    className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="font-bold text-4xl text-gray-900 transition-colors duration-300 group-hover:text-green-500">
                  TechKnots
                </span>
              </Link>

              {/* Greeting Text */}
              <p className="mt-6 text-center text-gray-600 text-lg max-w-xs">
                Welcome back! Let’s get you logged in and ready to explore.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-full min-h-[400px] bg-gradient-to-b from-transparent via-gray-200 to-transparent flex-shrink-0"></div>

            {/* Form Section */}
            <div className="w-full lg:flex-1 space-y-7 min-w-0">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold display-font heading-gradient mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-600 mb-7">Login to continue your journey</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-lg glow-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-medium transition disabled:opacity-70"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-600">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-md shadow-sm bg-white text-sm font-medium text-gray-900 hover:bg-gray-50"
                  >
                    <svg className="h-5 w-5 text-[#4285F4]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                    </svg>
                  </button>
                  <button
                    onClick={handleGithubLogin}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-md shadow-sm bg-white text-sm font-medium text-gray-900 hover:bg-gray-50"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="font-medium text-green-500 hover:text-green-600">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
