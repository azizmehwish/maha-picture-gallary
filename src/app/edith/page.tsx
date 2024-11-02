import { Tab } from "./tab"



 function Edit ({searchParams: { public_id }}:{searchParams: { public_id:string}})
    
    
     
{
    console.log(public_id);
    
    
    return(
<div >
<h2 className="text-3xl">Edit Picture</h2>
<Tab src={public_id}/> 


        </div>
    )
}
export default Edit