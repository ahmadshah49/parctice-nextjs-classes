import { NextResponse } from "next/server";
var posts=[
    {
        id:1,
        title:"Next js 13 COurse",
        description:" A Detail description ",
        img:"URL"
    },
    {
        id:2,
        title:"TypeScript Course",
        description:" A Detail description ",
        img:"URL"
    }
]
export const GET=()=>{
    return NextResponse.json(posts)
}
// for post
export const POST= async(req)=>{
    const body=await req.json()
    posts.push(body)
    return NextResponse.json({message:"Post Succesfully Created"})
}
// for delete
export const DELETE= async(req)=>{
const id =new URL(req.url).searchParams.get("id")
 posts=posts.filter((post)=>post.id =id)

    return NextResponse.json({message:"Post Succesfully Deleted"})
}