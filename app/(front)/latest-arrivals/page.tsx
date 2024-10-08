import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/models/ProductModel";

async function getProducts() {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
}

export default async function page() {
  const products: Product[] = await getProducts();
  return (
    <div className="pb-20 mt-16 lg:mt-0">
      <div className="flex items-center justify-between ">
        <h3 className="capitalize font-semibold text-3xl text-noire">
          latest arrivals
        </h3>
        <Link
          href="/latest-arrivals"
          className="text-gris text-sm font-semibold p-2 border border-gray-200 rounded-sm"
        >
          View all
        </Link>
      </div>
      <div className="mt-6">
        <div className="w-full flex items-center flex-wrap gap-6 ">
          {products.slice(0, 4).map((product) => (
            <div key={product.slug} className="w-[250px] flex-grow relative">
              <div className=" group relative h-[250px] md:h-[320px] w-full rounded-lg overflow-hidden">
                <Link href={`latest-arrivals/${product.slug}`}>
                  <PlusCircleIcon className="z-50 opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 -translate-x-1/2 size-10 text-white transition-opacity duration-300" />
                  <span className="bg-black absolute top-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-30 "></span>
                  <Image
                    src={product.image_url}
                    width={150}
                    height={350}
                    alt="image"
                    className="h-full w-full object-cover object-center "
                  />
                </Link>
              </div>
              <div className="mt-5">
                <div className="space-y-1">
                  <p className="text-xs capitalize text-gray-400 font-semibold">
                    {product.color}
                  </p>
                  <p className="capitalize font-medium text-lg text-noire group-hover:text-violet duration-300">
                    {product.name}
                  </p>
                </div>
              </div>
              <div className="my-2 flex items-end gap-1">
                <p className="text-gray-400 font-medium">${product.price}</p>
                <p className="text-gray-300 text-sm font-medium line-through ">
                  ${product.price}
                </p>
              </div>
              <div
                style={{ backgroundColor: `${product.color}` }}
                className={` h-4 w-4 rounded-full border border-gray-400`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
