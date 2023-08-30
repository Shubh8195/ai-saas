'use client'
import React from 'react'
import { UserButton } from '@clerk/nextjs'

import MobileSidebar from '@/components/MobileSidebar'

interface SidebarProps {
  apiLimitCount: number
}

const Navbar = ({apiLimitCount = 0} :SidebarProps) => {
  return (
    <div className='flex items-center p-4 '>
        <MobileSidebar apiLimitCount={apiLimitCount}/>
        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default Navbar