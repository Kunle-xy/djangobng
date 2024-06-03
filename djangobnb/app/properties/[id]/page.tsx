import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

const PropertyDetailPage = () => {
    return (
        <main className="pb-6">
            <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/beach_1.jpg"
                    className="object-cover w-full h-full hover:scale-110 transition duration-300 ease-out"
                    alt="Beach House"
                />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">
                        Property Name
                    </h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 -guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/profile.jpg"
                            className="rounded-full"
                            width={50}
                            height={50}
                            alt="profile"
                        />
                        <p><strong>John Doe</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        This is a beautiful property located in the heart of the city. It is a 2 bedroom house with a private pool and a beautiful view of the ocean. The property is located in a quiet neighborhood and is perfect for a family vacation.
                    </p>
                </div>


                <ReservationSidebar />


            </div>
        </main>
    );
    }

export default PropertyDetailPage;