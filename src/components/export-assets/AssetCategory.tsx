import React from 'react'
import { Twitter } from 'lucide-react'
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@/components/ui/accordion'
import { AssetCard } from '.' // Assuming AssetCard is extracted to its own file

type AssetCategoryProps = {
  platform: string
  items: any[]
  IconComponent: React.ReactNode
}

/**
 * AssetCategory: Function Component to render assets categorized by platform.
 * It uses an Accordion to toggle the display of items.
 *
 * @param {string} platform - Platform name
 * @param {any[]} items - List of asset items
 * @param {React.ReactNode} IconComponent - React Node to display as the platform icon
 * @returns JSX.Element
 */
const AssetCategory: React.FC<AssetCategoryProps> = ({
  platform,
  items,
  IconComponent
}) => {

  // Jobs to be done:
  // 1. Display platform with icon
  // 2. Provide an Accordion to toggle asset items
  // 3. Render asset items when Accordion is expanded
  
  return (
        <AccordionItem value={`asset-${platform}`} className='border-0'>
          <AccordionTrigger>
            <div className="row flex items-center justify-between">
              <h3 className="flex gap-2 items-center justify-center text-muted-foreground font-semibold">
                {IconComponent} {platform}
              </h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="assets grid md:grid-cols-2 gap-4">
              {items?.map((item, index) => (
                <AssetCard
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
  )
}

export default AssetCategory