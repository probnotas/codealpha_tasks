import type { Message } from "./chatbot"

interface ChatBubbleProps {
  message: Message
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isBot = message.type === "bot"

  return (
    <div
      className={`flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">
          🤖
        </div>
      )}
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${
          isBot
            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-bl-none"
            : "bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-br-none"
        }`}
      >
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">{message.content}</p>
        <p className={`text-xs mt-2 ${isBot ? "text-orange-100" : "text-blue-100"}`}>
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  )
}
