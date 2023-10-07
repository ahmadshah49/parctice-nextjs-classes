"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
// const page = () => {
//   // const userNames = ["Ahmad", "Raza", "Tayyab", "Sandhu", "Abdullah Akmal"]
//   // const [students, setStudents] = useState([
//   //   {
//   //     Name: "Ahmad",
//   //     rollno: "3535",
//   //     section: "D"
//   //   },
//   //   {
//   //     Name: "Ali",
//   //     rollno: "787",
//   //     section: "D"
//   //   },
//   //   {
//   //     Name: "Raza",
//   //     rollno: "5121",
//   //     section: "D"
//   //   },
//   //   {
//   //     Name: "Talha",
//   //     rollno: "54545",
//   //     section: "D"
//   //   },
//   //   {
//   //     Name: "Ahamd Shah",
//   //     rollno: "487",
//   //     section: "D"
//   //   },
//   //   {
//   //     Name: "Mr Beast",
//   //     rollno: "884",
//   //     section: "D"
//   //   },
//   //   {
//   //     Name: "Pew Di Pie",
//   //     rollno: "4545452",
//   //     section: "D"
//   //   },
//   // ])
//   // const clickhandler = (studentRollNo) => {
//   //   let restStudents = students.filter((student) => {
//   //     if (student.rollno !== studentRollNo) {
//   //       return student
//   //     }

//   //   })
//   //   // console.log("restStudents",restStudents);
//   //   setStudents(restStudents)
//   // }
//   // return (
//   //   <>
//   //     <table>
//   //       <tr>
//   //         <th>Students Name</th>
//   //         <th>Students Roll No</th>
//   //         <th>Students Section</th>
//   //         <th>Delete </th>
//   //       </tr>
//   //       {students.map((student, i) => {
//   //         return (
//   //           <tr key={i}>
//   //             <td>{student.Name}</td>
//   //             <td>{student.rollno}</td>
//   //             <td>{student.section}</td>
//   //             <td><button onClick={() => clickhandler(student.rollno)}>Delete</button></td>
//   //           </tr>
//   //         )
//   //       })}

//   //     </table>
//   //     {userNames.map((userName) => {
//   //       return (<>
//   //         <h1>Hello-Loop {userName}</h1>

//   //       </>)
//   //     })}
//   //     <hr/>
//   //     {
//   //       students.map((student) => {
//   //         return (
//   //           <>
//   //             <h1>Student Name is: {student.Name}</h1>
//   //             <h2>Roll No is : {student.rollno} </h2>
//   //             <h3>Section is : {student.section}</h3>
//   //             <hr/>
//   //           </>

//   //         )
//   //       })
//   //     }
//   //   </>
//   // )
//   // GitHub Followers And Following List
// }

// https://api.github.com/users/naveed-rana

const page = () => {
  const [data,setData]=useState([])
// const loadDataFromServer=async ()=>{
//   let response=await axios.get("https://api.github.com/users/naveed-rana")
//   setData(response.data)
// console.log(response,"response");
// }
const followersData= async()=>{
let response=await axios.get("https://api.github.com/users/naveed-rana/followers")
setData(response.data)
console.log(response);
}
  return (
    <>
{/* <button onClick={loadDataFromServer}>Get Data</button> */}
{/* <h1>userName {data.name}-Followers {data.followers}</h1> */}
<button onClick={followersData}>Get Followers </button>
{data?.map((item,i)=>{
    return(
      <div key={i}>
      followers Login -{item.login}
      </div>
    )
  })
}


    </>
  )
}

export default page
