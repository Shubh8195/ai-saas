import Image from 'next/image'
import React from 'react'

export const Loader = () => {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
        <div className='w-10 h-10 relative animate-spin'>
            <Image alt="logo" src="/logo.png" fill/>
        </div>
        <p className='text-muted-foreground text-sm md:text-lg text-center'>Smart AI is thinking...</p>
    </div>
  )
}

