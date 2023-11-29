import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'

const getTopics=async ()=>{
  try {
    const res= await fetch("http://localhost:3000/api/topics",{cache:'no-store'})
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return await res.json()
  } catch (error) {
    console.log("Error To Fetching Topics",error);
  }
}
 const  TopicList =async () => {
const {topics}=await getTopics()
  return (
    <>
    {topics?.map((t) => (
    <div className='flex border mt-4 justify-between  py-4 px-4 border-slate-400'>
      <div>
<h1 className='text-2xl font-bold'>{t.title}</h1>
<p>{t.description}</p>
      </div>
      <div className='flex gap-3'>
<RemoveBtn/>
<Link href={`/editTopic/${t._id}`}><HiPencilAlt size={24}/></Link>
      </div>
    </div>
    ))}
    </>
  )
}

export default TopicList