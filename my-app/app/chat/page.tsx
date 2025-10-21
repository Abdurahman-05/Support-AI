"use client"

import { useState } from "react"
import { ChatSidebar } from "@/components/chat-sidebar"
import { ChatArea } from "@/components/chat-area"
import { ChatHeader } from "@/components/chat-header"

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      {/* <ChatSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} /> */}
      <ChatSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        sidebarOpen={sidebarOpen}
      />
      
      {/* Main chat area */}
      {/* <div className="flex-1 flex flex-col">
        <ChatSidebar
        isOpen={true} 
          isHovering={isHovering}
          setIsHovering={setIsHovering}
          sidebarOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />

      {/* </div>  */}
      <ChatArea
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
    </div>
  )
}
