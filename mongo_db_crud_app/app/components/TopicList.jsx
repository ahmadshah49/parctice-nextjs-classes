import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'
const TopicList = () => {
  return (
    <div className='flex border mt-4 justify-between  py-4 px-4 border-slate-400'>
      <div>
<h1 className='text-2xl font-bold'>Topic Title</h1>
<p>Topic Description</p>
      </div>
      <div className='flex gap-3'>
<RemoveBtn/>
<Link href={"/editTopic/122"}><HiPencilAlt size={24}/></Link>
      </div>
    </div>
  )
}

export default TopicList