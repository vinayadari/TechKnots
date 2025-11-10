import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSignup = async e => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      toast.success("Signup successful! Check your email to confirm your account.");
      e.target.reset();
    } catch (err) {
      toast.error(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/4 right-[-200px] w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,179,89,0.25) 0%, rgba(0,179,89,0.12) 40%, transparent 80%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-[-200px] w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,179,89,0.2) 0%, rgba(0,179,89,0.1) 45%, transparent 85%)",
        }}
      />

      <div className="w-full max-w-md mx-auto p-6 relative z-10">
        <div
          className="bg-white backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-8 w-full"
          style={{
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 179, 89, 0.1) inset, 0 0 20px rgba(0, 179, 89, 0.15), 0 0 40px rgba(0, 179, 89, 0.1)",
          }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-600">
              Join TechKnots and start your journey to building amazing projects.
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-green-500 border-gray-200 rounded bg-white focus:ring-green-500"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{" "}
                <a href="#" className="text-green-500 hover:text-green-600">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-500 hover:text-green-600">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg glow-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-medium transition disabled:opacity-70"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:text-green-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
