import dbConnect from "@/config/db";
import { userModel } from "@/model/page";
import { NextResponse } from "next/server";

export async  function POST(req) {
const {title,description} =await req.json();
await dbConnect();
await userModel.create({title,description});
return NextResponse.json({message:"Topic Created"} ) 
}
export async function GET(req) {
    await dbConnect();
    const topics= await userModel.find();
    return NextResponse.json({topics});
}
export async function DELETE(req) {
    const id=req.nextUrl.searchParams.get("id");
    await dbConnect();
    await userModel.findByIdAndDelete(id);
    return NextResponse.json({message:"topic Deleted"},{status:200})

}
