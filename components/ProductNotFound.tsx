import Image from "next/image";

export default function ProductNotFound() {
  return (
    <div className="px-5 md:px-20 lg:mx-10 space-y-5 max-w-[1440px] xl:mx-auto flex flex-col items-center justify-center text-center">
      <Image
        src="/notfound.svg"
        height={240}
        width={200}
        alt="icon"
        className="text-gray-400"
      />
      <div className="py-5 space-y-3">
        <p className=" capitalize text-gray-400 text-5xl font-semibold">
          No Products found
        </p>
        <p className=" capitalize text-gray-400 text-2xl">
          your search did not match any products.
        </p>
        <p className=" capitalize text-gray-400 text-2xl">please try again.</p>
      </div>
    </div>
  );
}
