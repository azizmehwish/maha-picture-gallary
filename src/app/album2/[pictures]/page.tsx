import cloudinary from "cloudinary";
import Veiw from "./veiw";

interface MyImage {
  public_id: string;
  tags: string[];
}
const Page = async ({ params }: { params: { pictures: string } }) => {
  let res = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${params.pictures}`)
    .sort_by("created_at", "desc")
    // .max_results(30)
    .with_field("tags")
    .execute()) as { resources: MyImage[] };

  return (
    <>
      <div className=" py-4 px-5 flex  items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">
          Picture Album {params.pictures}
        </h2>
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
