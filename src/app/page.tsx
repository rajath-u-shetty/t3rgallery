import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  console.log(images);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 ">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "_" + index} className="w-48">
            <img src={image.url} alt="image" width={300} height={300} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
