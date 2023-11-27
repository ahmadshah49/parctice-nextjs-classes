import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-600 py-4 px-8 flex items-center justify-between'>
        <Link className='font-bold text-2xl text-teal-50' href={"/"}>Home</Link>
        <Link className='py-2 px-4 bg-white font-bold' href={"/addTopic"}>Add Topic</Link>
    </div>
  )
}

export default Navbar