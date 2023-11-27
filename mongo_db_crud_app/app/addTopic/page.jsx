import React from 'react'

const AddTopic = () => {
  return (
    <form action="submit" className='flex flex-col gap-2'>
        
        <input 
        className='border border-slate-500 px-4 py-4'
        type="text" 
        placeholder=' Title' />
        <input 
        className='border border-slate-500 px-4 py-4'
        type="text" 
        placeholder=' Description' />
        <button type='submit' className='font-bold mt-2 py-2 px-2 bg-red-400 text-white '>
Add Topic
        </button>
    </form>
  )
}

export default AddTopic