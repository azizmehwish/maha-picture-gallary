"use client"

import { useEffect, useState } from "react"
import Veiw from "../gallery/veiw"
import { MyImage } from "./page"



function Favlist({resources}:{resources:MyImage[]}){
    const[initialstate,setInitiatstate]=useState(resources)
    useEffect(()=>{
        setInitiatstate(resources)
    },[resources])
    return(
        
        <div className=" columns-2 lg:columns-3 gap-4  space-y-4 mx-auto p-5">
            

        {initialstate.map((items,i)=>{
            return(
            <div key={i} className="break-inside-avoid">
                <Veiw src={items.public_id}  tag= {items.tags} fun={(public_id:string)=>{
                    setInitiatstate((current)=>current.filter((val)=>val.public_id  !== public_id)
                )
                }}/ >
            </div>
            )
        }
        )}

    </div>
        
    )
}
export default Favlist