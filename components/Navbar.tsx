'use client'
import React from 'react'
import { UserButton } from '@clerk/nextjs'

import MobileSidebar from '@/components/MobileSidebar'

interface SidebarProps {
  apiLimitCount: number
  isPro: boolean
}

const Navbar = ({apiLimitCount = 0, isPro=false} :SidebarProps) => {
  return (
    <div className='flex items-center p-4 '>
        <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount}/>
        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default Navbar