import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserList = () => {
    const [post, setpost] = useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            setpost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
         <ul>
             {post.map(post =>(
                 <li key={post.id}>{post.title}</li>
             ))}
             </ul>   
        </div>
    )
}

export default UserList
