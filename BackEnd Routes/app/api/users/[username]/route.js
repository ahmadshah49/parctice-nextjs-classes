import { NextResponse } from "next/server";
export const GET=(req,route)=>{
    console.log("route",route.params);

    return NextResponse.json({message:"GET Method Call /users/username/dynamic ",data:route.params.username})
}