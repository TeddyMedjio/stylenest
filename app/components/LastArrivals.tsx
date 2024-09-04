import arrivals from "@/constants/arrivals.json";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function LastArrivals() {
  return (
    <div className="pb-20">
      <div className="flex items-center justify-between ">
        <h3 className="capitalize font-semibold text-3xl text-noire">
          latest arrivals
        </h3>
        <Link
          href="#"
          className="text-gris text-sm font-semibold p-2 border border-gray-200 rounded-sm"
        >
          View all
        </Link>
      </div>
      <div className="mt-6">
        <div className="w-full flex items-center flex-wrap gap-6 ">
          {arrivals.slice(4).map((item) => (
            <div key={item.id} className="w-[290px] flex-grow group relative">
              <div className=" group relative h-[250px] md:h-[350px] w-full rounded-lg overflow-hidden">
                <Link href="#">
                  <PlusCircleIcon className="z-50 opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 -translate-x-1/2 size-10 text-white transition-opacity duration-300" />
                  <span className="bg-black absolute top-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-30 "></span>
                  <Image
                    src={item.image_url}
                    width={150}
                    height={350}
                    alt="image"
                    className="h-full w-full object-cover "
                  />
                </Link>
              </div>
              <div className="mt-5">
                <Link href="#" className="space-y-1">
                  <p className="text-xs capitalize text-gray-400 font-semibold">
                    {item.color}
                  </p>
                  <p className="capitalize font-medium text-lg text-noire group-hover:text-violet duration-300">
                    {item.name}
                  </p>
                </Link>
                <div className="my-2 flex gap-2">
                  <p className="text-gray-400 font-medium">${item.price}</p>
                  <p className="text-gray-400 text-xs line-through">
                    {item.sale_price}
                  </p>
                </div>
                <div
                  style={{ backgroundColor: `${item.color}` }}
                  className={` h-4 w-4 rounded-full`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
