import cloudinary from "cloudinary";

import Upload from "../gallery/upload";
import Veiw from "./veiw";
import Image from "next/image";

interface MyImage {
  public_id: string;
  tags: string[];
}
const Page = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    // .max_results(30)
    .with_field("tags")
    .execute()) as { resources: MyImage[] };

  return (
    <>
      <div className=" py-4 px-5 flex  items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">Gallery</h2>
        <Upload />
      </div>
      <div className=" columns-2 lg:columns-3 gap-4  space-y-4 mx-auto p-5">
        {res.resources.map((items, i) => {
          return (
            <div key={i} className="break-inside-avoid">
              <Veiw src={items.public_id} tag={items.tags} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Page;
