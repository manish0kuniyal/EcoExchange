import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import { getDocs,collection } from 'firebase/firestore'

const Data = () => {
    const[dataList,setdataList]=useState([])
    const dataCollectionRef=collection(db,"Data")
    useEffect(()=>{
        const getdataList=async()=>{
            try{
            const data=await getDocs(dataCollectionRef)
                const filtererdData=data.docs.map((doc)=>({
                    ...doc.data(),
                    id:doc.id,
                }))
                setdataList(filtererdData)
        }
        catch(err){
            console.log(err)
        }
        }
        getdataList()
    },[])

  return (
    <div>
      {dataList.map((data)=>(
        <div>
        <h1>{data.name}</h1>
        <a href={data.link}>clcik</a>
        <h2>{data.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Data
