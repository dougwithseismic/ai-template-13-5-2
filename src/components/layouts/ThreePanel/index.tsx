'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse
} from 'react-icons/tb'
import { cn } from '@/lib/utils'
import NavBar from '@/components/NavBar'
import { LayoutDrawerProvider, useLayoutDrawers } from '../LayoutDrawersContext'

interface ThreePanelProps {
  children: React.ReactNode
}

// Encapsulated Panel Content
const PanelContent: React.FC<{ title: string }> = ({ title }) => (
  <>
    <h3 className="rounded-md px-2 py-1 text-sm font-semibold whitespace-nowrap mb-4">
      {title}
    </h3>
    <div className="grid gap-4">
      <Button variant={'default'}>Create New Chat</Button>
      <Button variant={'outline'}>Button</Button>
      <Button variant={'outline'}>Button</Button>
    </div>
  </>
)

const ThreePanel: React.FC<ThreePanelProps> = ({ children }) => (
  <LayoutDrawerProvider
    initialLeftPanelOpen={true}
    initialRightPanelOpen={false}
  >
    <ThreePanelContainer>{children}</ThreePanelContainer>
  </LayoutDrawerProvider>
)

const ThreePanelContainer: React.FC<ThreePanelProps> = ({ children }) => {
  const { leftPanelOpen, rightPanelOpen, toggleLeftPanel, toggleRightPanel } =
    useLayoutDrawers()

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="z-50">
          <NavBar />
        </div>
        <div className="flex z-40 h-full">
          <div
            className={cn(
              'bg-card-secondary absolute top-16 bottom-0 transition-all duration-500 ease-in-out w-72 bg-secondary/30',
              leftPanelOpen ? '-left-96 border-secondary' : 'left-0'
            )}
          >
            <div
              className={cn(
                'left-panel--content flex flex-col h-full justify-between p-4 transition-all ease-in-out',
                leftPanelOpen ? 'opacit' : 'opaci'
              )}
            >
              <PanelContent title="Chat History" />
            </div>
          </div>

          <div className="flex-1 h-full">{children}</div>

          <div className="flex z-40">
            <div
              className={cn(
                'bg-card-secondary absolute top-16 bottom-0 transition-all duration-500 ease-in-out border-r border-muted w-64 bg-secondary/50',
                leftPanelOpen ? '-right-96 border-secondary' : 'right-0'
              )}
            >
              <div
                className={cn(
                  'left-panel--content flex flex-col h-full justify-between p-4 transition-all ease-in-out',
                  leftPanelOpen ? 'opacit' : 'opaci'
                )}
              ><h4>Right Panel</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThreePanel
