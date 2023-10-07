"use client"
import React from 'react'
const fetchProducts=async ()=>{
  let Products=await fetch("https://fakestoreapi.com/products")
  Products= await Products.json()
  return Products
}
const Home =async () => {
 const products=await fetchProducts();
  return (
    <div>
      <h1>Products</h1>
  {products.length ?
      <table>
      <tr>
        <th>id</th>
        <th>image</th>
        <th>category</th>
        <th>description</th>
        <th>price</th>
      </tr>
      {products.map((product,i)=>{
        return(
          <>
          <tr key={i}>
            <td>{product.id}</td>
            <td><img src={product.image} width={50} alt="" /></td>
            <td>{product.category}</td>
            <td>{product.description.slice(1,25)}...</td>
            <td>{product.price}</td>
          </tr>
          </>
        )
      })}
    </table>:
    <div>No Data Found</div>}

    </div>
  )
}

export default Home








// "use client"
// import React from 'react'
// import { useState ,useEffect } from 'react'
// const Home = () => {
//   const[products,setProducts]=useState([])
//   const[loader,setLoader]=useState(true)
//   const fetchProducts=async ()=>{
//     let Products=await fetch("https://fakestoreapi.com/products")
//     Products= await Products.json()
//     console.log(Products);
//     setProducts(Products)
//     setLoader(false)
//   }
//   useEffect(()=>{
//     fetchProducts()
//   },[])
//   return (
//     <div>
//       <h1>Products</h1>
//   {products.length ?
//       <table>
//       <tr>
//         <th>id</th>
//         <th>image</th>
//         <th>category</th>
//         <th>description</th>
//         <th>price</th>
//       </tr>
//       {products.map((product,i)=>{
//         return(
//           <>
//           <tr key={i}>
//             <td>{product.id}</td>
//             <td><img src={product.image} width={50} alt="" /></td>
//             <td>{product.category}</td>
//             <td>{product.description.slice(1,25)}...</td>
//             <td>{product.price}</td>
//           </tr>
//           </>
//         )
//       })}
//     </table>:
//     loader ?<div className='loader'>Loading...</div> :<div>No Data Found</div>}

//     </div>
//   )
// }

// export default Home
