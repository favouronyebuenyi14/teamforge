import "./globals.css"

export const metadata = {
  title: "AstraLab Healthcare",
  description: "Clinic-on-the-go healthcare platform",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}