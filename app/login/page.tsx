"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card } from "@/components/Card"

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await signIn("credentials", {
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Invalid access code. Please try again.")
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
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#ff2d9b]/20 to-[#2dffb5]/20 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#ff2d9b]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white">Enter Access Code</h2>
            <p className="text-sm text-[#8a8a8a] mt-2">Enter your password to access your projects</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Password Field */}
            <div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-4 bg-white/[0.02] border border-white/10 rounded-lg text-white text-center text-lg tracking-widest placeholder-[#8a8a8a] focus:outline-none focus:ring-2 focus:ring-[#ff2d9b] focus:border-transparent transition-all"
                placeholder="••••••••"
                autoFocus
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-[#ff2d9b]/10 border border-[#ff2d9b]/30 text-[#ff2d9b] px-4 py-3 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#ff2d9b] to-[#2dffb5] hover:opacity-90 disabled:opacity-50 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff2d9b] focus:ring-offset-2 focus:ring-offset-black flex items-center justify-center gap-2"
            >
              {loading ? (
                "Unlocking..."
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  Unlock
                </>
              )}
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
