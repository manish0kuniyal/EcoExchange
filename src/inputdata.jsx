import React, { useState } from 'react'

import { db } from './firebase'
import { collection ,addDoc} from 'firebase/firestore'

const Inputdata = () => {
    const [name,setName]=useState("")
    const [title,setTitle]=useState("")
    const [link,setLink]=useState("")
    const dataCollectionRef= collection(db,'Data')

    const SubmitData=async()=>{
        try{
        await addDoc(dataCollectionRef,{
            name:name,
            title:title,
            link:link
        })}
        catch(err){
            console.log(err)
        }
    }

  return (
    <div>
      <input placeholder='name' onChange={(event)=>setName(event.target.value)}/><br/><br/>
      <input placeholder='title' onChange={(event)=>setTitle(event.target.value)}/><br/><br/>
      <input placeholder='link' onChange={(event)=>setLink(event.target.value)}/><br/><br/>
      <button onClick={SubmitData}>Submit</button>
    </div>
  )
}

export default Inputdata
