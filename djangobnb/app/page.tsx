import Image from "next/image";
import Catgories from "./components/Catgories";
import PropertyList from "./components/properties/PropertyList";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Catgories />

      <div className="mt-4 grid grid-cols-1 md:grid-cols3 lg:grid-cols-5 gap-6 ">
        <PropertyList />
      </div>

    </main>
  );
}
