import Button from "@/components/Button";
import Counter from "@/components/Counter";
import ProductNotFound from "@/components/ProductNotFound";
import data from "@/lib/data";
import Image from "next/image";

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = data.products.find((x) => x.slug === params.slug);
  if (!product) {
    return <ProductNotFound />;
  }
  return (
    <div className="py-20 w-full grid grid-cols-1 md:grid-cols-2 md:gap-4  lg:gap-8 ">
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
              ${product.sold}
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
        <ul>
          {product.features.map((index) => (
            <li key={index.length} className=" list-disc">
              {index.slice()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
