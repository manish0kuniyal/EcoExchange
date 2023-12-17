import React, { useRef, useState } from 'react'
import Auth from './Components/Auth'
import Data from './data'
import Inputdata from './inputdata'
import Cookies from 'universal-cookie'
import Chat from './Components/Chat'
const cookies=new Cookies()
function App(){
const [isAuth,setIsAuth]=useState(cookies.get("auth-token"))
const [room,setRoom]=useState(null)
const roomInputRef=useRef(null)
if(!isAuth){
  return(
  <div className=''>
   <Auth setIsAuth={setIsAuth}/>
   </div>
  )}

 return(
<>
{room ?(
<Chat room={room}/>):(
  <div className=' py-[45%] sm:py-[15%] items-center flex flex-col '>
    <label className='text-[2rem] font-mono'>ENTER A ROOM </label>
    <input placeholder='type a room name...' className='border-2 rounded-[12px] p-2 mt-6' ref={roomInputRef}/>
    <button className='bg-green-600 p-2 text-white font-bold rounded-[12px] mt-6' onClick={()=>{
      setRoom(roomInputRef.current.value)
    }}>Enter Room

    </button>
  </div>
)
  
}
</>  )



} 
export default App