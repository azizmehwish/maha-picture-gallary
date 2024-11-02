"use client" 

import {  Upload } from 'lucide-react';
import { CldUploadButton } from 'next-cloudinary';

import { CldImage } from 'next-cloudinary';
import Sidebar from '@/components/sidebar';
import Image from "next/image";
import { Result } from 'postcss';
import { useState } from 'react';

type UploadImage ={
  event:"success"
  info:{public_id:string}
}
export default function Home() {


  const  [imageid,setImageid]=useState(" ")



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
   <CldUploadButton
    
    uploadPreset='jmoifnkm'
      
       onUpload=	{(results:unknown)=>{
     let res =results as UploadImage
      
      
        setImageid(res.info.public_id)
        console.log(setImageid);
        
      }}   
 />  
       
        <Image
src="/k.jfif"
height={400}
width={400}
alt="a"
/>
 {imageid &&
<CldImage
  width="600"
  height="600"
  src={imageid}
 sizes="100vw"
  alt="image"
  className='mx-auto'
/>
  
}
    </main>
  );
}