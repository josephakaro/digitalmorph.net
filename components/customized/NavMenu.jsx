"use client"

import React from 'react'
import Link from 'next/link'

function NavMenu() {
  return (
    <ul className='hidden sm:flex flex-none gap-5  font-bold text-primary align-middle justify-between'>
      <li className=''>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/">What We do</Link>
      </li>
      <li>
        <Link href="/">Pricing</Link>
      </li>
      <li>
        <Link href="/">FAQ</Link>
      </li>
      <li>
        <Link href="/">Contact</Link>
      </li>
    </ul>
  )
}

export default NavMenu