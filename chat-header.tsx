export function ChatHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-lg font-bold">
            🤖
          </div>
          <div>
            <h1 className="font-bold text-lg">CodeAlpha Support Bot</h1>
            <p className="text-sm text-blue-100">Get instant answers about internships</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm">Online</span>
        </div>
      </div>
    </div>
  )
}
