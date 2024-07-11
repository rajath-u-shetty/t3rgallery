import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/89a2d6af-f647-46cf-bf17-685a490e1bbe-t2mwbt.jpeg",
    "https://utfs.io/f/db341579-4878-4607-b856-ebf585b50cf6-fi5tjr.jpeg",
    "https://utfs.io/f/fbff0a4b-9c02-4a53-8086-97fd6f782ca4-7zclk2.png",
    "https://utfs.io/f/fd4fa1e2-4810-4b6e-b819-991d8ecb46fb-7kcux2.png"
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url: url
  }))

  return (
    <main className="">
      <div className="flex flex-wrap gap-4 ">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" width={300} height={300} />
          </div>
        ))}
      </div>
    </main>
  );
}
