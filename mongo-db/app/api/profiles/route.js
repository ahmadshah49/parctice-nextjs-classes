import dbConnect from "@/config/db";
import { NextResponse } from "next/server";
import { userModel } from "@/model/users";
dbConnect()
export const GET =async(req,route)=>{
    try {
        const data=await userModel.find()
        console.log("data",data);
        return NextResponse.json({message:"success",profiles:data})
        
    } catch (error) {
        console.log("error",error);
        return NextResponse.json({message:"error",error})
    }
}