"use client"
import { Router } from 'next/router'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from "next/navigation";
const RemoveBtn = ({ id }) => {
  const router=useRouter()
  const removeTopic = async () => {
    const confirmed = confirm("Are You Delete This")
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE"
      })
      if (res.ok) {
        router.refresh();
        
      }
    }
  }
  return (
    <div>
      <button onClick={removeTopic}>
        <HiOutlineTrash className='text-red-500' size={24} />
      </button>
    </div>
  )
}

export default RemoveBtn