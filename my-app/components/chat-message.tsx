"use client"

interface ChatMessageProps {
  message: {
    id: string
    role: "user" | "assistant"
    content: string
    avatar?: string
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-sm">
          {message.avatar}
        </div>
      )}

      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isUser ? "bg-primary text-primary-foreground rounded-br-none" : "bg-secondary text-foreground rounded-bl-none"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-sm">
          {message.avatar}
        </div>
      )}
    </div>
  )
}
