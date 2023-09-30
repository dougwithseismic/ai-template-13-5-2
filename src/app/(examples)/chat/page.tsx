'use client'

import { useChat } from 'ai/react'
const Page = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="container flex flex-col gap-4 items-center justify-center h-full">
      <h1 className="font-bold">Chat</h1>
      <div>
        <ul>
          {messages.map((m, index) => (
            <li key={index}>
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'> 
            <input value={input} onChange={handleInputChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Page
