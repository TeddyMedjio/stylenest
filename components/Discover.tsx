import { DiscoverTab } from "./DiscoverTab";

export default function Discover() {
  return (
    <div className="lg:w-[95%]">
      <div className="mb-10">
        <h2 className=" text-2xl lg:text-4xl font-semibold text-noire mb-2">
          Discover timeless elegance
        </h2>
        <p className="text-noire text-sm lg:text-base">
          Step into a world where quality meets quintessent al charm with our
          collection. Every thread weaves a promise of unparalleled quality,
          ensuring that each garment is not just a part of your wardrobe, but a
          piece of art. Here's the essence of what makes our apparel the
          hallmark for those with an eye for excellence and a heart for the
          environment.
        </p>
      </div>
      <DiscoverTab />
    </div>
  );
}
