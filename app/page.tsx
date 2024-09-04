import CollectionSection from "./components/CollectionSection";
import Hero from "./components/Hero";
import LastArrivals from "./components/LastArrivals";
import Service from "./components/Service";

export default function Home() {
  return (
    <main className="px-5 md:px-20 lg:mx-10 bg-blanc rounded-lg shadow-md space-y-5 mt-10 max-w-[1440px] xl:mx-auto">
      <Hero />
      <LastArrivals />
      <CollectionSection />
      <Service />
    </main>
  );
}
