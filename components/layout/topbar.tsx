"use client"

import { signOut } from "next-auth/react"

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <h1 className="text-lg font-semibold text-zinc-800">
        AstraLab Dashboard
      </h1>

      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
      >
        Logout
      </button>
    </header>
  )
}