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
        <NavBar />
        <div className="flex h-full">
          <div
            className={cn(
              'relative bg-card-secondary transition-all duration-300 ease-in-out border-r border-transparent',
              leftPanelOpen ? 'w-64 border-secondary' : 'w-0'
            )}
          >
            <div
              className={cn(
                'left-panel--content flex flex-col justify-between p-4 transition-all ease-in-out',
                leftPanelOpen ? 'opacity-100' : 'opacity-0'
              )}
            >
              <PanelContent title="Chat History" />
            </div>
          </div>
          <div className="z-10 w-16 h-16 m-4">
            <Button variant={'outline'} onClick={toggleLeftPanel}>
              {leftPanelOpen ? (
                <TbLayoutSidebarLeftCollapse />
              ) : (
                <TbLayoutSidebarRightCollapse />
              )}
            </Button>
          </div>
          <div className="flex-1">{children}</div>
          <div className="z-10 w-16 m-4 h-16 flex justify-end">
            <Button variant={'outline'} onClick={toggleRightPanel}>
              {rightPanelOpen ? (
                <TbLayoutSidebarRightCollapse />
              ) : (
                <TbLayoutSidebarLeftCollapse />
              )}
            </Button>
          </div>
          <div
            className={cn(
              'relative bg-secondary transition-all duration-300 ease-in-out',
              rightPanelOpen ? 'w-48' : 'w-0'
            )}
          />
        </div>
      </div>
    </>
  )
}

export default ThreePanel
