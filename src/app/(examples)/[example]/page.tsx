'use client'
// pages/examples/[example].tsx

import { useRouter, useParams } from 'next/navigation'
import GenericAnalyzer from '@/components/generic-analyzer'
import { initialPayloads } from '@/examples'
import { useCompletion } from 'ai/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ExamplePage() {
  const { example } = useParams()

  const payload = initialPayloads[example as string]

  if (!payload) {
    return <InvalidExamplePage example={example} />
  }

  return (

    <GenericAnalyzer
      apiEndpoint={`/api/examples/${example}`}
      title={payload.title}
      description={payload.description}
      placeholder={payload.placeholder}
      />
  )
}

const InvalidExamplePage = ({ example }: { example: string | string[] }) => {
  const [suggestedLinks, setSuggestedLinks] = useState<
    string | null | undefined
  >()
  const { complete, completion, isLoading } = useCompletion({
    api: '/api/invalid-example-helper',
    onResponse: res => {
      if (res.status === 429) {
        // Handle rate limiting
      }
    }
  })

  useEffect(() => {
    if (!example) return
    complete(example.toString())
  }, [example])

  return (
    <div className="container items-center flex justify-center h-full">
      <div className="flex flex-col items-center h-64">
        <h1 className="font-bold mb-8">404</h1>
        <div>
          Hey, so this is awkward but I cant find the content for{' '}
          <code>/{example}</code> 😶
        </div>
        <div>
          No problem though, give me a sec and I can try find it for you.
        </div>
        {isLoading && (
          <div className="flex flex-col items-center justify-center my-4">
            Getting Directions..
            <div className="w-4 h-4 border-2 rounded-full border-t-accent-foreground animate-spin" />
          </div>
        )}
        {!isLoading && completion && completion.length > 0 && (
          <div className="recommendation flex flex-col gap-4 my-8 items-center justify-center">
            How about this one?
            <Link href={completion}>
              <Button size={'lg'}>Try {completion}, Instead</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
