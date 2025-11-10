import React from 'react'

const LoginForm = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-card-bg rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-text-primary">Sign in to your account</h2>
      <form className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm">
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full px-3 py-2 text-text-primary bg-card-bg placeholder-text-secondary border border-text-secondary rounded-md appearance-none focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full px-3 py-2 text-text-primary bg-card-bg placeholder-text-secondary border border-text-secondary rounded-md appearance-none focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="w-4 h-4 text-accent border-text-secondary rounded focus:ring-accent bg-card-bg"
            />
            <label htmlFor="remember-me" className="block ml-2 text-sm text-text-primary">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-accent hover:text-[#00cc6a]">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-background bg-accent border border-transparent rounded-md group hover:bg-[#00cc6a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
