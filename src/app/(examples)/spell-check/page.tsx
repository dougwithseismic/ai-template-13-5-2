'use client'

import { Input } from '@/components/ui/input'
import { useCompletion } from 'ai/react'
import { useDebouncedCallback } from 'use-debounce'

export default function Completion() {
  const { complete, completion, isLoading } = useCompletion({
    api: '/api/examples/conversation-summarizer',
    onResponse: res => {
      // trigger something when the response starts streaming in
      // e.g. if the user is rate limited, you can show a toast
      if (res.status === 429) {
        // toast.error('You are being rate limited. Please try again later.')
      }
    },
    onFinish: completion => {
      console.log('completion :>> ', completion)
      // do something with the completion result
      //   toast.success('Successfully generated completion!')
    }
  })

  const handleInputChange = useDebouncedCallback(e => {
    complete(e.target.value)
  }, 500)

  return (
    <div className="container flex flex-col h-full items-center justify-center">
      <div className="example flex flex-col gap-4 md:max-w-lg w-full">
        <div className="row flex flex-col w-full">
          <h2 className="font-bold">Spell Checker</h2>
          <p className="text-white/50">
            Make some spelling mistakes, I dare ya.
          </p>
        </div>
        <p>Current state: {isLoading ? 'Generating...' : 'Idle'}</p>
        <Input
          placeholder="Feed me spelling mistakes, please."
          onChange={handleInputChange}
        />
        <div className="min-h-[64px] rounded-md border border-muted/50 p-4 flex items-center w-full justify-center">
          {completion}
        </div>
      </div>
    </div>
  )
}
