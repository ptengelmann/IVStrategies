"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

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
        setError("Invalid access code")
      } else {
        router.push("/")
        router.refresh()
      }
    } catch (error) {
      setError("An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0a]">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Image
            src="/assets/ivlogo.png"
            alt="IV Strategies"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Form */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-semibold text-white mb-2">
            Welcome back
          </h1>
          <p className="text-sm text-[#666]">
            Enter your access code to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg text-white text-center tracking-widest placeholder-[#444] focus:outline-none focus:border-[#444] transition-colors"
              placeholder="••••••••"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-sm text-[#ff2d9b] text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white hover:bg-[#eee] disabled:opacity-50 text-black font-medium py-3 rounded-lg transition-colors"
          >
            {loading ? "..." : "Continue"}
          </button>
        </form>

        <p className="text-center text-xs text-[#444] mt-8">
          Need access? Contact your account manager.
        </p>
      </div>
    </div>
  )
}
