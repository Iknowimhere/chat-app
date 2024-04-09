import axios from "axios"
import { useEffect, useState } from "react"

const Chats = () => {
 const [chats,setChats]=useState([])
  const getData=async ()=>{
    let {data}=await axios.get("http://localhost:5000/chats") 
    setChats(data)
  }
useEffect(()=>{
  getData()
},[])
        
  return <div>{chats.map(chat=>{
        return <div key={chat._id}>{chat.chatName}</div>
      })} </div>
}

export default Chats;
