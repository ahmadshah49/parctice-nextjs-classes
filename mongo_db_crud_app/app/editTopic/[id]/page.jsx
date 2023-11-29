import EditTopicForm from "@/app/components/EditTopicForm"
const getTopic=async (id)=>{
  try {
    const res=await  fetch(`http://localhost:3000/api/${id}`,{cache:"no-store"})
    if (!res.ok) {
      throw new Error("Network response was not ok");
    } 
    const topic=await res.json()
    return topic
  } catch (error) {
    console.log(error);
  }
}

const EditTopic = async ({params}) => {
const {id}=params
const {topic}=await getTopic(id)
const {title,description  }=topic
  return (
    <>
<EditTopicForm  id={id} title={title} description={description}/> 
    </>
  )
}

export default EditTopic