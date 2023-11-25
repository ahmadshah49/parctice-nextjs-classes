import dbConnect from "@/config/db";
import { userModel } from "@/model/page";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
dbConnect()
export const GET=async(req,route)=>{
    try {
        const data= await userModel.find()
        console.log("data",data);
        return NextResponse.json({message:"success",data:data})

    } catch (error) {
        console.log("ERROR", error);
        return NextResponse.json({message:"error",error})
    }
}