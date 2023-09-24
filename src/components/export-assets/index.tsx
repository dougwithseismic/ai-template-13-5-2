'use client'
/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  TbBrandLinkedin,
  TbBrandTiktok,
  TbBrandTiktokFilled
} from 'react-icons/tb'
import { Twitter, Youtube, YoutubeIcon } from 'lucide-react'
import { FormEventHandler, useState } from 'react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'
import { Separator } from '../ui/separator'
import AssetCategory from './AssetCategory'
import { Accordion } from '../ui/accordion'

type Category = 'articles' | 'video' | 'social' | 'podcast' | 'seo'
const categories: Category[] = ['articles', 'video', 'social', 'podcast', 'seo']

// Create a Button Wrapper component
/**
 * The purpose of this function is to wrap a button that:
 * 1. Sets the category onClick
 * 2. Changes its appearance if it is the currently selected category
 *
 * @param {object} props - The properties passed to the component
 * @returns JSX.Element
 */
const CategoryButton: React.FC<{
  label: string
  active: boolean
  onClick: () => void
}> = ({ label, active, onClick }) => (
  <Button
    variant={active ? 'default' : 'outline'}
    className="w-full"
    onClick={onClick}
  >
    {label}
  </Button>
)

export function ExportAssets() {
  return (
    <Dialog>
      <Trigger />
      <Content />
    </Dialog>
  )

  function Content() {
    const [category, setCategory] = useState<Category>('social')

    return (
      <DialogContent className="sm:max-w-[425px] md:max-w-[800px] border-secondary p-0">
        <div className="grid grid-cols-12">
          {/* Left */}
          <div className="col-span-3 border-r border-secondary hidden sm:flex">
            <div className="actions flex flex-col gap-4 w-full justify-between h-full p-4">
              <div className="top flex flex-col">
                <div className="font-bold text-lg">Asset Library</div>
                <p className="leading-6 mt-4 text-muted-foreground">
                  Export assets to use in your content.
                </p>
              </div>

              <div className="actions w-full">
                <Button className="w-full">Export All</Button>
              </div>
              {/* {
                  // Map through categories to render buttons
                  categories.map(cat => (
                    <CategoryButton
                      key={cat}
                      label={cat}
                      active={cat === category}
                      onClick={() => setCategory(cat)}
                    />
                  ))
                } */}
            </div>
          </div>
          <div className="main col-span-full md:col-span-9 p-4">
            <div className="row flex flex-col flex-1 mb-8 gap-2">
              <div className="font-bold text-lg">Export Assets</div>
              <p className="m-0 text-muted-foreground">
                Choose the assets you want to generate from the list below.
              </p>
            </div>
            <Separator />
            <div className="max-h-[600px] p-4">
              <Accordion type="single" collapsible className="w-full">
                {assetsData.map((data, index) => (
                  <AssetCategory
                    key={index}
                    platform={data.platform}
                    items={data.items}
                    IconComponent={data.IconComponent}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </DialogContent>
    )
  }
}

type AssetCardProps = {
  title?: string
  icon?: React.ReactNode
  description?: string
}

type AssetPlatformData = {
  platform: string
  items: Array<{ title: string; description: string }>
  IconComponent: React.ReactNode
}

const assetsData: AssetPlatformData[] = [
  {
    platform: 'Twitter',
    items: [
      {
        title: 'Hot Take',
        description: 'Bold opinions on trending topics.'
      },
      {
        title: 'Thread',
        description: 'A series of tweets for deeper discussions.'
      },
      {
        title: 'Poll',
        description: 'Quick engagement with your audience.'
      }
    ],
    IconComponent: <Twitter />
  },
  {
    platform: 'LinkedIn',
    items: [
      {
        title: 'Article',
        description: 'Long-form professional insight.'
      },
      {
        title: 'Networking Post',
        description: 'Connect with peers and industry leaders.'
      },
      {
        title: 'Job Post',
        description: 'Find or advertise new opportunities.'
      }
    ],
    IconComponent: <TbBrandLinkedin />
  },
  {
    platform: 'YouTube',
    items: [
      {
        title: 'Tutorial',
        description: 'Educate your audience on a topic.'
      },
      {
        title: 'Vlog',
        description: 'A diary style video log.'
      },
      {
        title: 'Review',
        description: 'Review products, software or events.'
      }
    ],
    IconComponent: <YoutubeIcon />
  },
  {
    platform: 'TikTok',
    items: [
      {
        title: 'Dance Video',
        description: 'Move to the latest trending song.'
      },
      {
        title: 'Challenge',
        description: 'Engage with viral challenges.'
      },
      {
        title: 'Quick Tips',
        description: 'Share quick tips and lifehacks.'
      }
    ],
    IconComponent: <TbBrandTiktok />
  }
]

export const AssetCard = ({
  title = 'Test Asset',
  description
}: AssetCardProps) => {
  const [checked, setChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = async (event: any) => {
    if (isLoading) return

    setChecked(event)
    setIsLoading(true)
    if (!event) return

    toast.loading('Exporting Asset', {
      duration: 2000,
      position: 'bottom-right',
      style: {
        background: '#333',
        color: '#fff'
      }
    })
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsLoading(false)
    setChecked(false)

    toast.success('Asset Exported', {
      duration: 2000,
      position: 'bottom-right',
      style: {
        background: '#333',
        color: '#fff'
      }
    })
  }

  return (
    <div
      className={cn(
        `item-card p-6 w-full items-center flex gap-4 rounded-md border hover:border-red-500 transition-all duration-300 ease-in-out cursor-pointer`,
        isLoading ? 'border-red-600 hover:border-red-600' : 'border-secondary'
      )}
      onClick={() => handleChange(!checked)}
    >
      <div className="relative flex-1 gap-4 flex justify-between items-center">
        <div className="font-light pointer-events-none  gap-4">
          {!isLoading ? (
            <div className="w-full h-16 items-center justify-center relative">
              <div className="title font-bold">{title}</div>
              <p className="line-clamp-2 mt-2 text-muted-foreground text-sm font-medium">
                {description}
              </p>
            </div>
          ) : (
            <div className="loading-progress  h-16">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 border-2 rounded-full border-t-accent-foreground animate-spin" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Trigger() {
  return (
    <DialogTrigger asChild>
      <Button variant="outline">Export Assets</Button>
    </DialogTrigger>
  )
}
