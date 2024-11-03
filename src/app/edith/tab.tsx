"use client";

import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CldImage } from "next-cloudinary";

export function Tab({ src }: { src: any }) {
  return (
    <Tabs defaultValue="original" className="w-full py-5 px-4">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Gray scale</TabsTrigger>
        <TabsTrigger value="oil">oilPaint</TabsTrigger>
      </TabsList>
      {/* original */}
      <TabsContent value="original">
        <div className="flex gap-5 justify-center items-center py-4">
          <CldImage width="250" height="250" src={src} sizes="100vw" alt=" i" />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt=" m"
            className="mx-auto"
          />
        </div>
      </TabsContent>
      {/* blur */}
      <TabsContent value="blur">
        <div className="flex gap-5 justify-center items-center py-4">
          <CldImage width="250" height="250" src={src} sizes="100vw" alt=" a" />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="g"
            blur={true}
          />
        </div>
      </TabsContent>
      <TabsContent value="gray">
        <div className="flex gap-5 justify-center items-center py-4">
          <CldImage width="250" height="250" src={src} sizes="100vw" alt="e" />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="y im"
            grayscale={true}
          />
        </div>
      </TabsContent>
      <TabsContent value="oil">
        <div className="flex gap-5 justify-center items-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="age"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="ge"
            oilPaint={true}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}
