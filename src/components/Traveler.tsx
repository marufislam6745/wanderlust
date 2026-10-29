"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: `"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."`,
        name: "Michael Chen",
        location: "Singapore",
        image: "/assets/person1.png",
    },
    {
        id: 2,
        text: `"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"`,
        name: "Sarah Johnson",
        location: "New York, USA",
        image: "/assets/person2.png",
    },
    {
        id: 3,
        text: `"Our Japan journey was incredible! Everything was organized perfectly, from the hotels to the local experiences. I would definitely travel with Wanderlust again."`,
        name: "David Wilson",
        location: "London, UK",
        image: "/assets/person1.png",
    },
    {
        id: 4,
        text: `"A wonderful experience from start to finish. The destinations were beautiful and the support team was always available whenever we needed help."`,
        name: "Emily Davis",
        location: "Toronto, Canada",
        image: "/assets/person2.png",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const previousSlide = () => {
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const getSlide = (offset:number) => {
        return testimonials[(current + offset) % testimonials.length];
    };

    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
                            What Travelers Say
                        </h2>

                        <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                            Real experiences from our happy travelers
                        </p>
                    </div>

                    {/* Arrows */}
                    <div className="hidden gap-2 sm:flex">
                        <button
                            onClick={previousSlide}
                            aria-label="Previous testimonial"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:bg-gray-100"
                        >
                            <ArrowLeft size={16} />
                        </button>

                        <button
                            onClick={nextSlide}
                            aria-label="Next testimonial"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:bg-gray-100"
                        >
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Desktop / Tablet Carousel */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    {[0, 1].map((offset) => {
                        const testimonial = getSlide(offset);

                        return (
                            <div
                                key={`${testimonial.id}-${current}`}
                                className="flex min-h-45 border border-gray-200 p-3 transition-all duration-300"
                            >
                                {/* Text */}
                                <div className="flex flex-1 flex-col justify-between p-2 sm:p-3">

                                    <p className="text-sm leading-[1.15] text-gray-900 sm:text-[15px]">
                                        {testimonial.text}
                                    </p>

                                    <div className="mt-5">
                                        <p className="text-xs text-cyan-500">
                                            — {testimonial.name}
                                        </p>

                                        <p className="ml-3 mt-1 text-[10px] text-gray-500">
                                            {testimonial.location}
                                        </p>
                                    </div>

                                </div>

                                {/* Image */}
                                <div className="relative h-38 w-30 shrink-0 overflow-hidden sm:h-38 sm:w-32">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        );
                    })}

                </div>

                {/* Mobile Controls */}
                <div className="mt-6 flex justify-center gap-3 sm:hidden">
                    <button
                        onClick={previousSlide}
                        aria-label="Previous testimonial"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 active:bg-gray-100"
                    >
                        <ArrowLeft size={17} />
                    </button>

                    <button
                        onClick={nextSlide}
                        aria-label="Next testimonial"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 active:bg-gray-100"
                    >
                        <ArrowRight size={17} />
                    </button>
                </div>

            </div>
        </section>
    );
}