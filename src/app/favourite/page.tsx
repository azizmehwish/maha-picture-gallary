import cloudinary from "cloudinary"

import Veiw from "../gallery/veiw";
import { Grid } from "lucide-react";
import Favlist from "./favouritelist";
export interface MyImage{
    public_id:string,
    tags:string[]
}
const Page= async()=>{
 let res=(await   cloudinary.v2.search
    .expression('resource_type:image AND tags=favourite')
.sort_by('public_id','desc')
// .max_results(5)
.with_field("tags")
.execute()) as { resources: MyImage[] };




    return(
        <>
        <div className="flex  items-center justify-between">
<h2 className="text-4xl">Favourite</h2>

        </div>
        <Favlist resources={res.resources}/>
       
        </>
    )

}
export default Page