import React from 'react'
import {HiOutlineTrash} from 'react-icons/hi'
const RemoveBtn = () => {
  return (
    <div>
      <button>
        <HiOutlineTrash className='text-red-500' size={24}/>
      </button>
    </div>
  )
}

export default RemoveBtn