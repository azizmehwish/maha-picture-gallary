
import cluodinary from "cloudinary"
import Folderlist from "./folderlist"
export interface FolderType{
    name:string,
    path:string,
    
}

const AAlbum =async () => {
    const {folders}=(await cluodinary.v2.api.root_folders()
     





) as{
        folders:FolderType[];
    };
    
    
    
     

    return(
        <div>
  <div className="py-4 px-5">
<h2 className="text-3xl font-semibold tracking-tight">Picture Album</h2>

        </div>
        {/* data  folder */}
        <div className="px-5 py-4 grid  grid-cols-1 lg:grid-cols-3 gap-4">
            {folders.map((item,i)=>{
                return(
                <div key={i}>
 <Folderlist  folder={item} />
                </div>
                )
            })}
           
        </div>
        </div>
    )
}
export default AAlbum