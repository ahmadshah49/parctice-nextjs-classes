import React from 'react'

const EditTopic = () => {
  return (
    <form action="submit" className='flex flex-col gap-2'>
        
        <input 
        className='border border-slate-500 px-4 py-4'
        type="text" 
        placeholder='Edit Title' />
        <input 
        className='border border-slate-500 px-4 py-4'
        type="text" 
        placeholder='Edit Description' />
        <button type='submit' className='font-bold mt-2 py-2 px-2 bg-red-400 text-white '>
Edit Topic
        </button>
    </form>
  )
}

export default EditTopic