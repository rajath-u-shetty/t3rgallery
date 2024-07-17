import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default function omePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

export async function Images() {
  const images = await getImages()
   return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col h-48 w-48">
          <Image src={image.url} alt={image.name} style={{ objectFit: "fill" }} width={198} height={198} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

