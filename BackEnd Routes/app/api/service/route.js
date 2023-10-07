import { NextResponse } from "next/server";
// query Method
// export default (req) => {
//     const title = new URL(req.url).searchParams.get("title");
//     const title2 = new URL(req.url).searchParams.get("title2");
//     const title3 = new URL(req.url).searchParams.get("title3");
//     const title4 = new URL(req.url).searchParams.get("title4");
//     return NextResponse.json({ message: "Post Method", Data: title, Data2: title2, Data3: title3, data4: title4 });
// };
// body method
// export const POST= async(req)=>{
// const body=await req.json()
// console.log("body",body);
// return NextResponse.json({message:"post method call ",body})
// }



// export const POST= async(req)=>{
// console.log("Get Function Runing");
// const body=await req.json()
// console.log("body",body);
// // let services={
// //     name:"ahmad",
// //     description:"Any Thing",
// //     img:'url'
// // }
// return NextResponse.json({message:"Next Get My  Method Call"})
// // return NextResponse.json(services)
// }



export const POST=async(req)=>{
    console.log("Get Function Runing");
    let body=await req.json()
    console.log("body",body);
    return NextResponse.json({message:"Post Method Called"})
}