// GenericAnalyzer.tsx

'use client'

import { Input } from '@/components/ui/input'
import { useCompletion } from 'ai/react'
import { useDebouncedCallback } from 'use-debounce'

interface Props {
  apiEndpoint: string;
  title: string;
  description: string;
  placeholder: string;
}

export default function GenericAnalyzer({ apiEndpoint, title, description, placeholder }: Props) {
  const { complete, completion, isLoading } = useCompletion({
    api: apiEndpoint,
    onResponse: res => {
      if (res.status === 429) {
        // Handle rate limiting
      }
    },
    onFinish: completion => {
      console.log('Completion :>> ', completion)
    }
  })

  const handleInputChange = useDebouncedCallback(e => {
    complete(e.target.value)
  }, 500)

  return (
    <div className="container flex flex-col h-full items-center justify-center">
      <div className="example flex flex-col gap-4 md:max-w-lg w-full">
        <div className="row flex flex-col w-full">
          <h2 className="font-bold">{title}</h2>
          <p className="text-white/50">
            {description}
          </p>
        </div>
        <p>Current state: {isLoading ? 'Processing...' : 'Idle'}</p>
        <Input
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        <div className="min-h-[64px] rounded-md border border-muted/50 p-4 flex items-center w-full justify-center">
          {completion}
        </div>
      </div>
    </div>
  )
}
