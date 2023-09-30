// Define initial payloads for different examples
export const initialPayloads: Record<string, any> = {
  'conversation-summarizer': {
    role: 'user',
    content: `Given the following text, summarize it in a few sentences. Include the names of people involved and the main points of the story. Deliver your response with paragraphs using the newline characters where needed. Text:\n`,
    max_tokens: 5000,
    temperature: 0.7
  },
  'spell-check': {
    role: 'user',
    content: `Given the following post content, detect if it has typo or not. Also return a reason as to why it's a typo. Respond with a JSON array of typo objects [{"typo": typo1, correction:"correction1", reason: "hint1"}, ...] or an empty [] if there's none. Only respond with an array. Post content:\n`,
    max_tokens: 200,
    temperature: 0
  },
  'sentiment-analyzer': {
    role: 'user',
    content: `Given the following text, analyze its sentiment and categorize it as one of 100 types of emotion. Reply with three words that accurately reflect the sentiment. Text:\n`,
    max_tokens: 50,
    temperature: 0.5
  }
  // Add your examples here
}
