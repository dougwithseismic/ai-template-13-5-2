// Define initial payloads for different examples
export const initialPayloads: Record<string, any> = {
  'conversation-summarizer': {
    role: 'user',
    content: `Given the following text, distill it into a concise summary that captures the essence, key players, and major points. Use newline characters for paragraph breaks. Text:\n`,
    max_tokens: 5000,
    temperature: 0.7,
    title: 'Executive Text Summarizer',
    description:
      'Turn verbose articles or conversations into concise, actionable summaries.',
    placeholder: 'Paste an article, email thread, or any long text here.'
  },
  'spell-check': {
    role: 'user',
    content: `Given the following text, identify any spelling errors and suggest corrections. Return a JSON array of typo objects with the typo, its correction, and a brief reason. The keys should be typo, correction, reason. Text:\n`,
    max_tokens: 200,
    temperature: 0,
    title: 'Intelligent Spell Checker',
    description:
      'Catch spelling mistakes and understand why they happened. Perfect for editing important documents.',
    placeholder: 'Type or paste text to check for spelling errors.'
  },
  'sentiment-analyzer': {
    role: 'user',
    content: `Analyze the sentiment of the following text and categorize it into one of the 100 types of emotions. Return the three most dominant emotions. Text:\n`,
    max_tokens: 50,
    temperature: 0.5,
    title: 'Deep Sentiment Analyzer',
    description:
      'Understand the emotional tone of text at a granular level. Ideal for customer feedback, social media monitoring, and more.',
    placeholder: 'Type a sentence or paragraph for sentiment analysis.'
  },
  'cockney-translator': {
    role: 'user',
    content: `Translate the following standard English text into Cockey dialect and rhyming slang. Text:\n`,
    max_tokens: 200,
    temperature: 0.7,
    title: 'Cockney Translator',
    description: `Experience the old china of the Cockey rabbit. Translate yer dog and bone and 'ave a bubble bath!`,
    placeholder: 'Type or paste text for translation into Cockney.'
  },
  'code-commenter': {
    role: 'user',
    content: `Given the following code snippet, generate comments explaining what each line does. Refactor for dopeness. You should send back the code along with comments in a markdown form of three backticks and the code language. Text:\n`,
    max_tokens: 800,
    temperature: 0,
    title: 'Code Commenter',
    description:
      'Automatically comment your code to make it more understandable.',
    placeholder: 'Paste your code snippet here.'
  }
  // Add more examples here
}
