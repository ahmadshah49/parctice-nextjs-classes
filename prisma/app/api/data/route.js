import { NextResponse } from "next/server";
import prisma from "@/app/config/prisma";
import { data } from "autoprefixer";
export const POST = async (req) => {
  try {
    const body = await req.json();
    const data = await prisma.data.create({
      data: {
        name: body?.name,
        email: body?.email,
        phone: body?.phone,
        location: body?.location,
        hobby: body?.hobby,
      },
    });

    return NextResponse.json({ messsage: "Data created" });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: JSON.stringify(error),
    });
  }
};
export const PUT=async (req)=>{
    const url= await  URL(req.URL).searchParams.get("id")
        const body = await req.json();

    try {
      const updateUser = await prisma.user.update({
        where: { email: url.id },
        data: {
          name: body?.name,
          email: body?.email,
          phone: body?.phone,
          location: body?.location,
          hobby: body?.hobby,
        },
      }); 
      NextResponse.json({message:"Data Edited"}) 
    } catch (error) {
        console.log("error",error);
        NextResponse.json({message:"Something Went Wronge",error:JSON.stringify(error)})
    }
}

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const deleteUser = await prisma.data.delete({
      where: { id: body.id },
    });
    return NextResponse.json({
      message: "deleted",
    });
  } catch (error) {
    return NextResponse.json({
      message: "SomeThing Went Wronge...",
      error: JSON.stringify(error),
    });
  }
};

