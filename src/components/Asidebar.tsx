'use client'
import React from 'react';
import { ArrowRight, CalendarDays, Check } from "lucide-react";
import { Tour } from '@/type';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';



const Asidebar = ({ data }: { data: Tour }) => {
    //console.log(data)

    const { data: session } = authClient.useSession()
    //console.log(session?.user)
    const handleBooking = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target=e.target as HTMLFormElement
        const departuredate = target.departuredate.value
        //console.log(departuredate)
        const userdata = {
            userName: session?.user.name,
            email: session?.user.email,
            ...data,
            departuredate: departuredate,
            BookingDate: new Date()
        }
        //console.log(userdata)
        const res = await fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
        const bookdata= await res.json()
        //console.log(bookdata)
        if(bookdata){
            toast.success('Your tour plan booking successfully')
        }

    }

    return (
        <div>
            <aside className="lg:col-span-1">
                <div className="sticky top-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

                    <p className="text-xs text-gray-500">
                        Starting from
                    </p>

                    <div className="mt-1">
                        <span className="text-2xl font-bold text-cyan-600">
                            {data.price}
                        </span>
                    </div>

                    <p className="text-xs text-gray-500">
                        per person
                    </p>

                    <form onSubmit={handleBooking}>
                        {/* Date */}
                        <div className="mt-6">
                            <label className="mb-2 block text-xs text-gray-600">
                                Travel Date
                            </label>

                            <div className="flex items-center rounded-md bg-gray-50 px-3 py-3">
                                <CalendarDays size={16} className="mr-2 text-gray-500" />

                                <input
                                    type="date"
                                    name='departuredate'
                                    defaultValue="2026-05-15"
                                    className="w-full bg-transparent text-sm outline-none"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-cyan-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-cyan-700">
                            Book Now
                            <ArrowRight size={16} />
                        </button>
                    </form>

                    {/* Benefits */}
                    <div className="mt-5 space-y-3 border-t border-gray-100 pt-4">

                        <Benefit text="Free cancellation up to 7 days" />
                        <Benefit text="Travel insurance included" />
                        <Benefit text="24/7 customer support" />

                    </div>
                </div>
            </aside>
        </div>
    );
};

/* Benefit Component */
function Benefit({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2 text-xs text-gray-500">
            <Check size={15} className="shrink-0 text-green-600" />
            <span>{text}</span>
        </div>
    );
}

export default Asidebar;