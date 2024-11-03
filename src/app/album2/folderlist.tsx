import src from "@/app/gallery/veiw";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderType } from "./page";
import Link from "next/link";

import imageData from "@/app/gallery/albumDialog";

function Folderlist({ folder }: { folder: FolderType }) {
  return (
    <div>
      <Card className=" w-[350px] ">
        <CardHeader>
          <CardTitle>{folder.name}</CardTitle>
          <CardDescription>
            Click to view the picture in the {folder.name}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-end">
          <Link href={`/album2/${folder.name}`}>
            <Button>View Album</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Folderlist;
