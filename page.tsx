import { ChatBot } from "@/components/chatbot"

export const metadata = {
  title: "CodeAlpha FAQ Bot",
  description: "Get instant answers about CodeAlpha internship programs",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <ChatBot />
    </main>
  )
}
