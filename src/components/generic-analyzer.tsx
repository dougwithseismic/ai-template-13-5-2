// GenericAnalyzer.tsx

'use client'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { funky as themeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { Input } from '@/components/ui/input'
import { useCompletion } from 'ai/react'
import { useDebouncedCallback } from 'use-debounce'
import { Copy } from 'lucide-react'
import { Button } from './ui/button'

interface Props {
  apiEndpoint: string
  title: string
  description: string
  placeholder: string
}

export default function GenericAnalyzer({
  apiEndpoint,
  title,
  description,

  placeholder
}: Props) {
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
    if (!e.target.value || e.target.value.length === 0) return
    complete(e.target.value)
  }, 500)

  return (
    <div className="container flex flex-col items-center  mt-32 ">
      <div className="example flex flex-col gap-4 md:max-w-2xl w-full ">
        <div className="row flex flex-col w-full">
          <h2 className="font-bold my-4">{title}</h2>
          <p className="text-white/50">{description}</p>
        </div>
        <p>Current state: {isLoading ? 'Processing...' : 'Idle'}</p>
        <Input placeholder={placeholder} onChange={handleInputChange} />
        <div className="min-h-[64px] min-w-full rounded-md border border-muted/50 p-2 flex items-center w-full justify-center">
          {/* <Editor defaultValue={completion} className={''} /> */}
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <div className=" relative border border-sm border-muted/50 rounded-md bg-transparent  p-4">
                    <div className="absolute top-0 right-0 m-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            children ? children.toString() : ''
                          )
                        }}
                      >
                        <Copy />
                      </Button>
                    </div>
                    <SyntaxHighlighter
                      style={themeStyle}
                      language={match[1]}
                      PreTag="div"
                      wrapLines={true}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                )
              }
            }}
            className={'max-w-2xl w-full'}
          >
            {completion}
          </Markdown>
        </div>
      </div>
    </div>
  )
}
