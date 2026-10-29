import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tour } from '@/type';


const Destinationdata = ({data}:{data:Tour[]}) => {
    return (
        <div>
            <div className='text-center mt-5'>
                <h2 className='text-4xl'>Explor all Destinations</h2>
                <p className='text-lg'>Find your perfect travel experience form our curated collection </p>
            </div>
            <div className='sm:grid grid-cols-3 gap-4 max-w-7xl mx-auto my-10'>
                {
                    data.map((plan) => <div key={plan._id}>
                        <div className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={plan.image}
                                    alt={plan.name}
                                    width={300}
                                    height={180}
                                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Category / Badge */}
                                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow backdrop-blur-sm">
                                    {plan.country}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">

                                <div className="mb-4">
                                    <p className="mb-1 text-sm font-medium text-blue-600">
                                        {plan.country}
                                    </p>

                                    <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
                                        {plan.name}
                                    </h3>

                                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                                        <span>🕒</span>
                                        <span>{plan.duration}</span>
                                    </div>
                                </div>

                                {/* Price + Button */}
                                <div className="flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

                                    <div>
                                        <p className="text-xs text-gray-400">Starting from</p>
                                        <h2 className="text-xl font-bold text-gray-900">
                                            {plan.price}
                                            <span className="text-sm font-normal text-gray-500"> /person</span>
                                        </h2>
                                    </div>

                                    <Link href={`/book/${plan._id}`}>
                                        <button className="w-full rounded-xl bg-blue-400 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg sm:w-auto">
                                            Book Now →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Destinationdata;