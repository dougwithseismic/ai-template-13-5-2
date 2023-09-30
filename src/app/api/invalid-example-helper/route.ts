import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextRequest } from 'next/server'
import { initialPayloads } from '@/examples'

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()

  // Create the messages array
  const messages = [
    {
      role: 'user',
      content: `I have landed on a 404 page whilst trying to use the pathname, ${prompt}. Suggest links that I am looking for instead based on my pathname. \n Potential Links: ${Object.keys(
        initialPayloads
      )}\n. Output as a single string, e.g. /suggestedLink1  Output:\n`
    }
  ] as any

  // Create the completion
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages,
    max_tokens: 250,
    temperature: 0,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0.5
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
