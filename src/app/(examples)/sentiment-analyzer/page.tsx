import GenericAnalyzer from '@/components/generic-analyzer'

export default function SentimentAnalyzer() {
  return (
    <GenericAnalyzer
      apiEndpoint="/api/examples/sentiment-analyzer"
      title="Sentiment Analyzer"
      description="Type some text and I'll analyze its sentiment."
      placeholder="Type text for sentiment analysis."
    />
  )
}
