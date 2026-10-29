import Image from "next/image";
import Link from "next/link";
import Traveler from '@/components/Traveler'
import FeatureDestination from "@/components/FeatureDestination";


export default function Home() {
  return (
    <div>
      <section className="relative min-h-[calc(90vh-64px)] w-full overflow-hidden">

        {/* Background Image */}
        <Image
          src="/assets/Banner.png"
          alt="Travel destination"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[calc(90vh-64px)] items-center justify-center px-4 pb-24">
          <div className="mx-auto max-w-3xl text-center text-white">

            <h1 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Discover Your
              <br />
              Next Adventure
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-100 sm:text-base">
              Explore breathtaking destinations and create unforgettable
              memories with our curated travel experiences.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/destinations"
                className="flex items-center justify-center gap-3 bg-cyan-500 px-7 py-3 text-xs font-medium uppercase tracking-wide transition hover:bg-cyan-600"
              >
                Explore Now
                <span className="text-lg">→</span>
              </Link>

              <Link
                href="/destinations"
                className="flex items-center justify-center bg-white/20 px-7 py-3 text-xs font-medium uppercase text-white backdrop-blur-sm transition hover:bg-white/50"
              >
                View Destination
              </Link>

            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute bottom-0 left-0 z-20 w-full px-3 pb-3 sm:px-5">
          <div className="mx-auto grid grid-cols-1 overflow-hidden text-white bg-white/20 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-5">

            {/* Location */}
            <div className="border-b border-gray-300 px-4 py-3 sm:border-r lg:border-b-0">
              <p className="text-sm font-semibold ">
                Location
              </p>
              <p className="mt-1 text-[11px] ">
                Address, City Or Zip
              </p>
            </div>

            {/* Date */}
            <div className="border-b border-gray-300 px-4 py-3 sm:border-r lg:border-b-0">
              <p className="text-sm font-semibold ">
                Date/Duration
              </p>
              <p className="mt-1 text-[11px] ">
                Anytime / 3 Days
              </p>
            </div>

            {/* Budget */}
            <div className="border-b border-gray-300 px-4 py-3 sm:border-r lg:border-b-0">
              <p className="text-sm font-semibold ">
                Budget
              </p>
              <p className="mt-1 text-[11px] ">
                $0-$3000
              </p>
            </div>

            {/* People */}
            <div className="border-b border-gray-300 px-4 py-3 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold ">
                People
              </p>
              <p className="mt-1 text-[11px] ">
                5-10
              </p>
            </div>

            {/* Search Button */}
            <button className="bg-cyan-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-cyan-600">
              Search
            </button>

          </div>
        </div>
      </section>

    {/*FeatureDestinations Card*/}
    <FeatureDestination></FeatureDestination>

      <section className="bg-cyan-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Wanderlust
            </h2>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              Your trusted partner for exceptional travel experiences
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:gap-4 min-h-36">
            {/* Icon */}
            <div className="bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <Image src={'/assets/ShieldCheck.png'} alt="image" width={50} height={80}></Image>
              <h3>Expert Guides</h3>
              <p>Your safety is our priority with comprehensive travel insurance and 24/7 support.</p>
            </div>

            {/* Title */}
            <div className="bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <Image src={'/assets/MapTrifold.png'} alt="image" width={50} height={80}></Image>
              <h3>Safe & Secure</h3>
              <p>Local experts who bring destinations to life with authentic cultural insights.</p>
            </div>

            {/* Description */}
            <div className="bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <Image src={'/assets/Headset.png'} alt="image" width={50} height={80}></Image>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer service to assist you wherever your journey takes you.</p>
            </div>
          </div>
        </div>
      </section>

      <Traveler></Traveler>

      <section className="relative w-full overflow-hidden">

        {/* Background Image */}
        <Image
          src="/assets/CTA.png"
          alt="Ready to start your journey"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex min-h-87.5 items-center justify-center px-4 py-16 sm:min-h-100 sm:px-6 lg:min-h-107.5">

          <div className="w-full max-w-3xl text-center text-white">

            {/* Heading */}
            <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Ready To Start Your Journey?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-200 sm:text-base">
              Join thousands of travelers who have discovered the world with us
            </p>

            {/* Button */}
            <Link
              href="/bookings"
              className="mx-auto mt-8 flex w-fit items-center gap-5 bg-white px-7 py-3.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-500 hover:text-white sm:px-8"
            >
              BOOK YOUR TRIP TODAY

              <span className="text-xl">
                →
              </span>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
