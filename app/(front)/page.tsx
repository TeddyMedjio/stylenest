import CollectionSection from "../../components/CollectionSection";
import Hero from "../../components/Hero";
import LastArrivals from "../../components/LastArrivals";
import Service from "../../components/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <LastArrivals />
      <CollectionSection />
      <Service />
    </main>
  );
}
