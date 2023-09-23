'use client'
// components/FullWidthContainer.tsx

import React, { useState } from 'react'
import { Button } from '../ui/button' // Make sure Button component is imported

import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse
} from 'react-icons/tb'

/**
 * FullWidthContainer component: A full-width container with collapsible side panels.
 */
const ThreePanelContainer = ({ children }: any) => {
  // State to handle left and right panel visibility
  const [leftPanelOpen, setLeftPanelOpen] = useState(true)
  const [rightPanelOpen, setRightPanelOpen] = useState(true)

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Left panel */}
      <div
        className={`relative bg-secondary transition-all duration-300 ease-in-out ${
          leftPanelOpen ? 'w-48' : 'w-0'
        }`}
      >
        {/* Content for left panel */}
      </div>
      {/* Main content */}
      <div className="z-10 w-16 h-16">
        <Button
          variant={'outline'}
          onClick={() => setLeftPanelOpen(!leftPanelOpen)}
        >
          {leftPanelOpen ? (
            <TbLayoutSidebarLeftCollapse />
          ) : (
            <TbLayoutSidebarRightCollapse />
          )}
        </Button>
      </div>
      <div className="flex-1">{children}</div>
      <div className="z-10 w-16 h-16 flex justify-end">
        <Button
          variant={'outline'}
          onClick={() => setRightPanelOpen(!rightPanelOpen)}
        >
          {rightPanelOpen ? (
            <TbLayoutSidebarRightCollapse />
          ) : (
            <TbLayoutSidebarLeftCollapse />
          )}
        </Button>
      </div>

      {/* Right panel */}
      <div
        className={`relative bg-secondary transition-all duration-300 ease-in-out ${
          rightPanelOpen ? 'w-48' : 'w-0'
        }`}
      >
        {/* Content for right panel */}
      </div>
    </div>
  )
}

export default ThreePanelContainer
