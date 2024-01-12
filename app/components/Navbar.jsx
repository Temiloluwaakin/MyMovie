import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className='left-nav'>
          <Link href='/'> <h1>MyMovie</h1> </Link>
          <Link href='/movies'> <h2>Movies</h2> </Link>
          <Link href='/series'> <h2>Series</h2> </Link>
        </div>
    </nav>
  )
}
