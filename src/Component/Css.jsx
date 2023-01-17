import { useEffect, useState } from "react"
import Card from "./Card"
import styles from "./all.module.css"



function CSS(){

    const [data,setData]= useState([])


    const GetData= async ()=>{

        let res= await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:CSS`)
        let data1= await res.json()

        let items= data1.items

        setData(items)

    }

    console.log(data)

    useEffect(()=>{
   GetData()
    },[])

    return <>
  
  <div className={styles.main} >

    {data.map((e)=>{
        return <Card lang={e.language} fork={e.forks_count} star={e.stargazers_count} name={e.name}/>
    })}
  </div>
        
    </>
}

export default CSS