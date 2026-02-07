import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const NavBar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-red-500 uppercase'>
      <div className='text-xl'>
        <Link href="/">Massimo</Link>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  )
}

export default NavBar
