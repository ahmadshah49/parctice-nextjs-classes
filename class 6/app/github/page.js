"use client"

import axios from 'axios'
import { useState } from 'react'
const Github = () => {
    const [userName, setUserName] = useState('')
    const [data, setData] = useState(null)
    const [followers, setFollowers] = useState([])
    const onChangeHandler = (e) => {
        setUserName(e.target.value)
    }
    const onClickHandler = async () => {
        setFollowers([])
        let response = await axios.get(`https://api.github.com/users/${userName}`)
        setData(response.data)
    }
    const onfollowerHandler = async () => {
        let response = await axios.get(data.followers_url)
        setFollowers(response.data)
    }
    return (
        <>
            <label htmlFor="userName">Enter UserName</label>
            <input type="text" onChange={onChangeHandler} />
            <button onClick={onClickHandler}>Search</button>
            {data &&
                <>
                    <h1>GitHub User Data</h1>
                    <p>bio: {data.bio} - Name: {data.name} - {data.followers}</p>
                    <img src={data.avatar_url} width={100} alt="" />
                    <button onClick={onfollowerHandler}>Get Followers</button>
                </>
            }
            {followers.length >= 1 &&
                <table>
                    <tr>
                        <th>id</th>
                        <th>Display Picture</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                    {followers.map((e) => {
                        return (
                            <tr>
                                <td>{e.id}</td>
                                <td><img src={e.avatar_url} width={50} alt="" /></td>
                                <td>{e.login}</td>
                                <td>{e.type}</td>
                            </tr>
                        )
                    })}
                </table>
            }
        </>
    )
}


export default Github
// const [userName, setUserName] = useState("")
// const [followers, setFollowers] = useState([])
// const [data, setData] = useState(null)
// const onchangeHandler = (e) => {
//     setUserName(e.target.value)
// }
// const onclickHandler = async () => {
//     setFollowers([])
//     let response = await axios.get(`https://api.github.com/users/${userName}`)
//     setData(response.data)
// }
// const onfollowerHandler = async () => {
//     let response = await axios.get(data.followers_url)
//     setFollowers(response.data)
//     console.log(response);
// }
// return (
//     <>
//         <label htmlFor="userName">Enter UserName</label>
//         <input type="text" onChange={onchangeHandler} />
//         <button onClick={onclickHandler}>Search</button>
//         {data &&
//             <>
//                 <h1>GitHub User Data</h1>
//                 <p>bio is:{data.bio}-{data.followers}</p>
//                 <img src={data.avatar_url} width={100} alt="" />
//                 <button onClick={onfollowerHandler}>Get Followers</button>
//             </>
//         }
//         {followers.length >= 1 &&
//             <table>
//                 <tr>
//                     <th>id</th>
//                     <th>Avatar</th>
//                     <th>Name</th>
//                     <th>Type</th>
//                 </tr>
//                 {followers.map((e) => {
//                     return (
//                         <>
//                             <tr>
//                                 <td>{e.id}</td>
//                                 <td><img src={e.avatar_url} width={50} alt="" /></td>
//                                 <td>{e.login}</td>
//                                 <td>{e.type}</td>
//                             </tr>
//                         </>
//                     )
//                 })}
//             </table>
//         }
//     </>
// )