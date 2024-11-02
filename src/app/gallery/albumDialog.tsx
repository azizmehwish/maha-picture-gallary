"use client"



import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { FcAddImage } from "react-icons/fc"
import { FolderCreate} from "./action"
import image from "cloudinary"
import Link from "next/link"
import src from "@/app/gallery/veiw"



 


function Album({imageData}:{imageData:any}){

 
 
 
 
  
const[open,setOpen]=useState(false)
const[album,setAlbum]=useState("")
    return(
           <div>
 <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
    <Link href={`album2?imageData=${src}`}>
        <Button variant="ghost"className="p-0 m-0">
        <FcAddImage className="w-8 h-8 cursor-pointer text-whithover:text-red-600 duration-300" /> 
        </Button>
</Link>
        
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Enter the Album name for the picture you want to add album. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 lg-grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={album}
              onChange={(e)=>{setAlbum(e.target.value)}}
              placeholder="Album name here....."
              className="col-span-3"
            />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div> */}
        </div>
        <DialogFooter>
        
          <Button 
          
          onClick={async()=>{
            console.log(imageData);
  
            
            {setOpen(false)}
          
        await FolderCreate(album,imageData)}} 

        
          type="submit"   >Add to album
        </Button>
        
        </DialogFooter>
      </DialogContent>
    </Dialog>
           </div>
           
           
    )

}
export default Album

