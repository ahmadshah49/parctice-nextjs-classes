import { userModel } from "./model/user"
import dbConnect from "./config/db"
import { data } from "autoprefixer"
dbConnect()
const fetchData= async()=>{
  try {
    const data =await userModel.find()
    console.log(data);
    return data
  } catch (error) {
    console.log("error",error);
  }
}
 async function Home() {
  const data=fetchData()
  return (
    <>
<h1>Home page</h1>
{
  (await data)?.map((item)=>{
    return(
      <h1>{item.firstName}</h1>
    )
  })
}
    </>
  )
}
export default Home
