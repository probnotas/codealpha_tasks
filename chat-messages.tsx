import type { Message } from "./chatbot"
import { ChatBubble } from "./chat-bubble"
import { TypingIndicator } from "./typing-indicator"

interface ChatMessagesProps {
  messages: Message[]
  isLoading: boolean
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-gradient-to-b from-white to-blue-50">
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
      <div className="h-4" />
    </div>
  )
}
