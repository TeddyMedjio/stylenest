import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import data from "@/lib/data";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function page() {
  return (
    <div className="py-20">
      <Link
        href="/"
        className="text-gris text-sm font-semibold p-2 border border-gray-200 rounded-sm lg:flex items-center w-fit hover:text-white hover:bg-violet transition-all duration-400 hidden "
      >
        <HomeIcon className="size-5 mr-2 " />
        Back to Home
      </Link>
      <div className="flex items-center justify-between lg:mt-10 ">
        <h3 className="capitalize font-semibold text-3xl text-noire">
          latest arrivals
        </h3>
      </div>
      <div className="mt-6">
        <div className="w-full flex items-center flex-wrap gap-6 lg:gap-y-20">
          {data.products.slice(0, 8).map((item) => (
            <div key={item.slug} className="w-[250px] flex-grow  relative">
              <div className=" group relative h-[250px] md:h-[350px] w-full rounded-lg overflow-hidden">
                <Link href={`products/${item.slug}`}>
                  <PlusCircleIcon className="z-50 opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 -translate-x-1/2 size-10 text-white transition-opacity duration-300" />
                  <span className="bg-black absolute top-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-30 "></span>
                  <Image
                    quality={100}
                    src={item.image_url}
                    width={150}
                    height={350}
                    alt="image"
                    className="h-full w-full object-cover "
                  />
                </Link>
              </div>
              <div className="mt-5">
                <div className="space-y-1">
                  <p className="text-xs capitalize text-gray-400 font-semibold">
                    {item.color}
                  </p>
                  <p className="capitalize font-medium text-lg text-noire group-hover:text-violet duration-300">
                    {item.name}
                  </p>
                </div>
              </div>
              <div className="my-2 flex items-end gap-1">
                <p className="text-gray-400 font-medium">${item.sold}</p>
                <p className="text-gray-300 text-sm font-medium line-through ">
                  ${item.price}
                </p>
              </div>
              <div className="flex gap-3">
                <div
                  style={{ backgroundColor: `${item.color}` }}
                  className={` h-4 w-4 rounded-full border border-gray-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
