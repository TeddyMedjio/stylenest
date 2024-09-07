import { AccordionDemo } from "@/components/Accordion";
import Button from "@/components/Button";
import Counter from "@/components/Counter";
import ProductNotFound from "@/components/ProductNotFound";
import { Product } from "@/lib/models/ProductModel";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
}
export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const products: Product[] = await getProducts();
  const product = products.find((x) => x.slug === params.slug);
  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="relative py-20 w-full grid grid-cols-1 md:grid-cols-2 md:gap-4  lg:gap-8 ">
      <Link
        href="/latest-arrivals"
        className="absolute text-gris text-sm font-semibold p-2 border border-gray-200 rounded-sm lg:flex items-center w-fit hover:text-white hover:bg-violet transition-all duration-400 hidden "
      >
        <ArrowLeftIcon className="size-5 mr-2 " />
        Back to Latest Arrivals
      </Link>
      <div className="relative overflow-hidden rounded-lg md:h-[600px] lg:h-[600px] w-full">
        <Image
          src={product.image_url}
          alt={product.name}
          fill={true}
          className="w-1/2 h-full absolute object-cover"
        />
      </div>
      <div className="w-full space-y-4 ">
        <h3 className="font-semibold text-4xl text-noire">{product.name}</h3>
        <div className="">
          <div className="flex items-end ">
            <p className="text-[28px] text-gray-400 font-medium">
              ${product.price}
            </p>
            <p className="text-xl text-gray-300 font-medium line-through mb-1 ml-2">
              ${product.price}
            </p>
          </div>
          <p className="bg-yellow-100 border border-yellow-200 text-xs py-1 px-2 rounded-full text-red-600 font-medium w-fit">
            20% OFF
          </p>
        </div>
        <p className="text-gris">{product.description}</p>
        <div className="">
          <p className="text-gris text-sm">Available colors</p>
          <div
            style={{ backgroundColor: `${product.color}` }}
            className="h-6 w-6 border border-gray-300 rounded-full mt-3 "
          ></div>
        </div>
        <div>
          <p className="text-gris text-sm">Quantity</p>
          <Counter />
        </div>
        <div className="">
          <Button width="full" href="#" text="Add to Cart" />
        </div>

        {/* FEATURES, FABRIC... */}
        <div className="pt-5">
          <AccordionDemo value="item-1" title="Features">
            {product.features.map((text) => (
              <ul key={text[0]}>
                <li className=" flex items-center text-gris">
                  <div className="bg-gris w-[5px] h-[5px] rounded-full mr-3"></div>
                  {text}
                </li>
              </ul>
            ))}
          </AccordionDemo>
          <AccordionDemo value="item-2" title="Fabric & Care">
            <ul>
              {product.fabric.map((text) => (
                <li key={text[0]} className="flex items-center text-gris">
                  <div className="bg-gris w-[5px] h-[5px] rounded-full mr-3"></div>
                  {text}
                </li>
              ))}
            </ul>
          </AccordionDemo>
          <AccordionDemo value="item-3" title="Shipping">
            <ul>
              {product.shipping.map((text) => (
                <li key={text[0]} className="flex items-center text-gris">
                  <div className="bg-gris w-[5px] h-[5px] rounded-full mr-3"></div>
                  {text}
                </li>
              ))}
            </ul>
          </AccordionDemo>
        </div>
      </div>
    </div>
  );
}
