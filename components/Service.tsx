import Image from "next/image";

const services = [
  {
    icon: "/car.svg",
    name: "Elementary shipping",
    description:
      "Shop with confidence knowing that we stand behind our products, Should any issue arise within the first two years, rest assured we're here to help with a hassle-free replacement.",
  },
  {
    icon: "/quality.svg",
    name: "2-Year Quality Promise",
    description:
      "Shop with confidence knowing that we stand behind our products, Should any issue arise within the first two years, rest assured we're here to help with a hassle-free replacement.",
  },
  {
    icon: "/exchange.svg",
    name: "Easy Exchanges",
    description:
      "If your purchase isn't quite right, your friend who might love it, and let us know your happy to facilitate an exchange to purchase the perfect item to complement",
  },
];

export default function Service() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="max-w-[820px] text-center">
        <p className="capitalize text-violet font-semibold">
          elevate your experience
        </p>
        <h2 className="text-noire font-semibold text-3xl lg:text-5xl my-4 ">
          Our Commitment to Exceptional Service
        </h2>
        <p className="text-gris text-base lg:text-lg leading-6">
          We pride ourselves on a foundation of exceptional customer service,
          where every interaction is a testament to our dedication to
          excellence.
        </p>
      </div>

      <div className=" mt-16 lg:mt-20">
        <div className="flex items-center justify-center text-center flex-wrap gap-8 ">
          {services.map((item) => (
            <div
              key={item.name}
              className="w-full lg:w-[350px] flex flex-col items-center justify-center space-y-4 "
            >
              <div className="bg-blanc rounded-full shadow p-2 border border-gray-100 w-fit ">
                <Image src={item.icon} width={30} height={30} alt="icon" />
              </div>
              <p className="text-noire text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gris">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
