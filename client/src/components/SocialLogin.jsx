import React from "react";
import { supabase } from "../lib/supabaseClient"; // keep path consistent
import toast from "react-hot-toast";

const SocialLogin = () => {
  // --- Common social login handler ---
  const handleSocialLogin = async provider => {
    try {
      toast.loading(`Redirecting to ${provider}...`);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.origin, // return to your app after login
        },
      });
      if (error) throw error;
    } catch (err) {
      console.error(`${provider} login error:`, err.message);
      toast.dismiss();
      toast.error(`${provider} login failed. Please try again.`);
    }
  };

  return (
    <div className="mt-6">
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Social buttons */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {/* Google */}
        <button
          onClick={() => handleSocialLogin("google")}
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 transition-transform duration-300 hover:scale-105"
        >
          <svg className="h-5 w-5 text-[#DB4437]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
          </svg>
          <span className="ml-2">Google</span>
        </button>

        {/* GitHub */}
        <button
          onClick={() => handleSocialLogin("github")}
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 transition-transform duration-300 hover:scale-105"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="ml-2">GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
