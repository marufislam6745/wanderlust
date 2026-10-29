'use client'
import React from 'react';
import { MapPin, Star, CalendarDays, Check } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { Editdestination } from '@/components/Editdestination';
import { Tour } from '@/type';
import DeleteDestination from './DeleteDestination';
import Asidebar from './Asidebar';


const Fetchbook = ({ data }:{data:Tour}) => {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <div className='mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8 flex items-center justify-between'>
                <Link href={'/destinations'}><p className='text-gray-400 text-lg'>Back to Destinations</p></Link>
                <div className='flex items-center gap-3'>
                    <Editdestination data={data}></Editdestination>
                    <DeleteDestination data={data}></DeleteDestination>
                </div>
            </div>
            <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

                {/* Hero Image */}
                <div className="overflow-hidden rounded-xl">
                    <Image
                        src={data.image}
                        alt="Bali Paradise"
                        width={1400}
                        height={600}
                        className="h-55 w-full object-cover sm:h-87.5 lg:h-120"
                    />
                </div>

                {/* Main Content */}
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* Left Content */}
                    <section className="lg:col-span-2">

                        {/* Location */}
                        <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                            <MapPin size={15} />
                            <span>{data.country}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
                            {data.name}
                        </h1>

                        {/* Rating & Duration */}
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                                <Star
                                    size={16}
                                    fill="currentColor"
                                    className="text-green-600"
                                />
                                <span className="font-semibold">4.9</span>
                                <span className="text-gray-500">(234 reviews)</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CalendarDays size={15} />
                                <span>{data.duration}</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px bg-gray-200" />

                        {/* Overview */}
                        <div>
                            <h2 className="text-xl font-medium">Overview</h2>

                            <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500">
                                Discover the magic of Bali with pristine beaches, ancient
                                temples, and vibrant culture. Experience luxury resorts,
                                tropical landscapes, and unforgettable sunsets.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="mt-7">
                            <h2 className="text-xl font-medium">Highlights</h2>

                            <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500">
                                Discover the magic of Bali with pristine beaches, ancient
                                temples, and vibrant culture. Experience luxury resorts,
                                tropical landscapes, and unforgettable sunsets.
                            </p>

                            {/* Highlight List */}
                            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                                <Highlight text="Luxury beachfront accommodation" />
                                <Highlight text="Visit Uluwatu Temple at sunset" />
                                <Highlight text="Traditional Balinese spa treatment" />
                                <Highlight text="Private beach dinner experience" />
                                <Highlight text="Sunrise trek to Mount Batur" />

                            </div>
                        </div>
                    </section>

                    {/* Booking Card */}
                    <Asidebar data={data}></Asidebar>
                </div>
            </div>
        </main>
    );
};
function Highlight({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-2 text-sm text-gray-600">
            <Check
                size={16}
                className="mt-0.5 shrink-0 text-green-600"
            />
            <span>{text}</span>
        </div>
    );
}


export default Fetchbook;