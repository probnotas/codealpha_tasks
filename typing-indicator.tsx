export function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-in fade-in duration-300">
      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">
        🤖
      </div>
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-400"></div>
      </div>
    </div>
  )
}
