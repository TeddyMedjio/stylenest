import Button from "./Button";

export default function Hero() {
  return (
    <div className=" py-20 flex items-center justify-center">
      <div className="flex-1 max-w-[500px] md:pr-8 flex flex-col space-y-4 md:space-y-14">
        <div className="space-y-4">
          {" "}
          <h1 className=" text-4xl md:text-6xl text-noire font-semibold">
            Summer styles are finally here
          </h1>
          <p className=" text-base md:text-lg text-gris">
            This year, our summer collection will be your haven from the world's
            harsh elements.
          </p>
        </div>
        <Button href="/shop-all" text="Shop now" />
      </div>
      <div className="hidden md:block flex-1 bg-[url('/fashion.webp')] bg-cover bg-no-repeat bg-left rounded-lg h-[600px]"></div>
    </div>
  );
}
