"use client"
import {useState} from "react";

export default function Home() {
  const userNames = ["Naveed", "Ali", "Umar", "Zain"]
  const [data, setData] = useState([])
  const [students, setStudents] = useState([{
    studentName: `Hello ${userNames[0]}`,
    rollNo: 234,
    section:"D",
  },
  {
    studentName: 'Ali',
    rollNo: 2341,
    section:"A",
  },


  {
    studentName: 'Zain',
    rollNo: 241,
    section:"F",
  }

])

const deleteHandler = (studentRollNo)=>{
  console.log("studentRollNo", studentRollNo)
// students.shift()
let restStudents = students.filter((student)=> {
  if(student.rollNo !== studentRollNo){
    return student
  }
})
console.log("restStudents",restStudents);
setStudents(restStudents)
console.log(students);
<h1>Hkoxog</h1>
}}