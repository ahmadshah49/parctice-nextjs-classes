import { NextResponse } from "next/server"
let posts=[
    {
        id:1,
        name:"ahmad",
        description:"Any Description",
        img:"url"
    },
    {
        id:2,
        name:"Raza",
        description:"Any Description",
        img:"url"
    }
]
export const GET=()=>{
    return NextResponse.json(posts)
}
export const POST=async (req)=>{
    const body=await req.json()
     posts.push(body)
     return NextResponse.json({message:"Post Succesfully Created"})
}
export const DELETE=(req)=>{
    const id=new URL(req.url).searchParams.get("id")
    posts=posts.filter((post)=> post.id !=id)
    return NextResponse.json({message:"Post SuccesFully Deletd"})
}
