import dbConnect from "@/config/db";
import { userModel } from "@/model/page";
import { NextResponse } from "next/server";

export async function PUT(res,{params}) {
    const {id}=params;
    const {newTitle:title,newDescription:description}=await res.json()
    await dbConnect();
    await userModel.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Topic Upadated"})
}
export async function GET(res,{params}) {
    const {id}=params;
    await dbConnect()
    const topic=await userModel.findOne({_id:id});
    return NextResponse.json({topic})
    
}