
import { useRouter } from "next/navigation"

const EditTopicForm = ({id,title,description}) => {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const router=useRouter();
   const handleSubmit=async (e)=>{
e.preventDefault();

try {
  const res= await fetch(`http://localhost:3000/api/topics/${id}`,{
    method:"PUT",
    headers:{
      'Content-type':"application/json"
    },
    body:JSON.stringify({setNewTitle,setNewDescription}),
  })
  if (res.ok) {
router.push("/");
  }else{
    throw new Error("Failed to update a topic")
  }
} catch (error) {
  console.log(error);
}
   }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        
    <input 
    onChange={(e)=>setTitle(e.target.value)}
    value={title}
    className='border border-slate-500 px-4 py-4'
    type="text" 
    placeholder='Edit Title' />
    <input 
    onChange={(e)=>setTitle(e.target.value)}
    value={title}
    className='border border-slate-500 px-4 py-4'
    type="text" 
    placeholder='Edit Description' />
    <button type='submit' className='font-bold mt-2 py-2 px-2 bg-red-400 text-white '>
Edit Topic
    </button>
</form>
  )
}

export default EditTopicForm