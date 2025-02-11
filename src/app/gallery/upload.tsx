"use client";
import { Button } from "@/components/ui/button";

import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
export type UploadImage = {
  event: "success";
  info: { public_id: string };
};
function Upload() {
  const router = useRouter();
  // setTimeout(()=>{
  //   router.refresh()

  // },1000)

  return (
    <Button asChild className="curser-pointer  ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>

        <CldUploadButton
          uploadPreset="jmoifnkm"
          onUpload={(results: any) => {
            let res = results as UploadImage;
            setTimeout(() => {
              router.refresh();
            }, 1000);
          }}
        />
      </div>
    </Button>
  );
}
export default Upload;
