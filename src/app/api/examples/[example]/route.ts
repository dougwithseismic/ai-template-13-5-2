import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextRequest } from 'next/server'
import { initialPayloads } from '@/examples'

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

export async function POST(req: NextRequest) {
  const exampleType = req.nextUrl.searchParams.get('example')
  const { prompt } = await req.json()

  if (!exampleType) {
    return new Response('Missing example type', { status: 400 })
  }

  // Get the initial payload based on the example type
  const initialPayload = initialPayloads[exampleType]

  if (!initialPayload) {
    return new Response('Invalid example type', { status: 400 })
  }

  // Create the messages array
  const messages = [
    {
      role: initialPayload.role,
      content: `${initialPayload.content}${prompt}\nOutput:\n`
    }
  ]

  // Create the completion
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages,
    max_tokens: initialPayload.max_tokens,
    temperature: initialPayload.temperature,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0.5
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
