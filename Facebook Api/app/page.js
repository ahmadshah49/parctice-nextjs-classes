


  const fetchPosts=async ()=>{
  const res= await fetch("http://localhost:3000/api/posts",{ cache:"no-cache"})
  const response=await res.json()
  return response
  }

export default async function Posts(){
  const post=await fetchPosts()
  console.log("posts", post);
  return (
    <>
    Posts
    {post.map((post=>{
      return(
        <>
        <h1>{post.id}</h1>
        <h1>{post.name}</h1>
        <h1>{post.description}</h1>
        <h1>{post.img}</h1>
        <hr />
        </>
      )
    }))}
    </>
  )
}


