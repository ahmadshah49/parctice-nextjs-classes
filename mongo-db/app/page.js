"use client"
import { useEffect,useState } from "react"
// import dbConnect from '@/config/db'
// import { userModel } from '@/model/users'
// import Image from 'next/image'
// dbConnect()
// const fetchData =async ()=>{
//   try {
//     const data=await userModel.find()
//     console.log("data",data);
//     return data
//   } catch (error) {
//     console.log("error",error);
//   }
// }
   function Home() {
  // const data=await fetchData()
  const [data, setData] = useState([])
 const  fetchUsers=async ()=>{
    const response= await fetch("http://localhost:3000/api/profiles")
    const result=await response.json()
    console.log("results",result);
    setData(result.profiles)
  }
useEffect(() => {
 fetchUsers()
}, [])

  return (
  <>
  {
    data?.map((item,index)=>{
      return (
        <div key={index}>
          <h1>{item.firstName}</h1>
          <h1>{item.lastName}</h1>
          <h1>{item.email}</h1>
        </div>
      )
    })
  }
  </>
  )
}
export default Home
