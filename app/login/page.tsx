"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card } from "@/components/Card"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Invalid credentials. Please check your email and password.")
      } else {
        router.push("/")
        router.refresh()
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/assets/ivlogo.png"
              alt="IV Strategies Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-[#ff2d9b] to-[#2dffb5] bg-clip-text text-transparent">
            Research & Strategy Hub
          </h1>
          <p className="text-[#8a8a8a] text-sm">IV Strategies Client Portal</p>
        </div>

        {/* Login Card */}
        <Card>
          <h2 className="text-2xl font-semibold text-white mb-6">Client Login</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#8a8a8a] mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:ring-2 focus:ring-[#ff2d9b] focus:border-transparent transition-all"
                placeholder="client@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#8a8a8a] mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:ring-2 focus:ring-[#ff2d9b] focus:border-transparent transition-all"
                placeholder="Enter your password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-[#ff2d9b]/10 border border-[#ff2d9b]/30 text-[#ff2d9b] px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#ff2d9b] to-[#2dffb5] hover:opacity-90 disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff2d9b] focus:ring-offset-2 focus:ring-offset-black"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 text-center pt-6 border-t border-white/5">
            <p className="text-xs text-[#8a8a8a]">
              Need access? Contact your account manager.
            </p>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-[#8a8a8a]">
          Research & Strategy Hub | IV Strategies | 2025
        </div>
      </div>
    </div>
  )
}
