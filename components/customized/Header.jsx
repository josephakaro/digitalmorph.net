import React from 'react'
import NavMenu from './NavMenu'
import Image from 'next/image'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='flex justify-between align-middle items-center sm:w-full'>
      <Image src="/digital-morph.png" width={50} height={50} alt='Digital Morph brand logo' />
      <NavMenu/>
      <Button>Get Quotes</Button>
    </div>
  )
}

export default Header