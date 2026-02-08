import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import CartIcon from './CartIcon'

const NavBar = () => {
  const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-red-500 uppercase'>
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">Massimo</Link>
      </div>
      <div className='md:hidden'>
        <Menu />
      </div>
      <div className='hidden md:flex gap-4 items-center flex-1'>
        <div className='flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt="phone" width={32} height={32} />
          <span className='ml-2'>+1 234 567 890</span>
        </div>
        {!user ? <Link href="/login">Login</Link>
        : ( <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  )
}

export default NavBar
