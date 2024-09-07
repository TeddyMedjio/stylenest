import Image from "next/image";
import { Collection } from "@/lib/models/ProductModel";
import Link from "next/link";

async function getCollection() {
  const res = await fetch("http://localhost:4000/collections");
  return res.json();
}

export default async function CollectionSection() {
  const collections: Collection[] = await getCollection();
  return (
    <div className="py-10 flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="w-[90%]">
        <h3 className="text-noire font-semibold text-3xl mb-6 capitalize">
          our collections
        </h3>
        <div className=" cursor-pointer w-full h-[520px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-6 ">
          {collections.map((item: Collection) => (
            <Link
              href={`/collections/${item.slug}`}
              key={item.name}
              className="group  overflow-hidden relative row-span-2 md:odd:row-span-1 border rounded-lg"
            >
              <Image
                src={item.image_url}
                width={500}
                height={500}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="z-50 absolute bottom-3 left-3 ">
                <p className="text-gray-100 text-sm mb-1 lg:-translate-x-28 lg:group-hover:translate-x-0 lg:transition-all duration-400">
                  {item.name}
                </p>
                <h3 className="text-gray-50 text-xl">{item.description}</h3>
              </div>
              <div className="absolute w-full top-0 bg-black h-full p-4 opacity-40 group-hover:opacity-50 transition-all duration-300 "></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className=" overflow-hidden relative row-span-2 md:row-span-1 border rounded-lg bg-[url('/woman.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="z-50 absolute bottom-3 left-3">
              <p className="text-gray-100 text-sm mb-1">Cozy Comfort</p>
              <h1 className="text-gray-50 font-semibold text-2xl">
                Plush fabrics and shooting designs
              </h1>
            </div>
            <div className="absolute w-full bg-black h-full p-4 opacity-30"></div>
          </div>
          <div className=" overflow-hidden relative row-span-2 md:row-span-1 border rounded-lg bg-[url('/woman.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="z-50 absolute bottom-3 left-3">
              <p className="text-gray-100 text-sm mb-1">Cozy Comfort</p>
              <h1 className="text-gray-50 font-semibold text-2xl">
                Plush fabrics and shooting designs
              </h1>
            </div>
            <div className="absolute w-full bg-black h-full p-4 opacity-30"></div>
          </div> */
}
