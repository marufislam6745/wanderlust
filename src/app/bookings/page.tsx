
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from "next/image";
import { CalendarDays, Eye} from "lucide-react";
import DeleteBooking from '@/components/DeleteBooking';




interface bookingType {
    _id: string,
    image: string,
    name: string,
    departuredate: string,
    price: string,
    BookingDate: string
}

const MyBooking = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    //console.log(session?.user)
    const res = await fetch(`http://localhost:5000/bookings/${session?.user.email}`)
    const datas = await res.json()
    //console.log(data)
    return (
        <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-10">
            <div className="mb-6">
                <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                    My Bookings
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    Manage and view your upcoming travel plans
                </p>
            </div>
            {
                datas.map((data: bookingType) => <div key={data._id}>
                    <div className="mx-auto max-w-7xl mb-5">

                        {/* Booking Card */}
                        <div className="border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
                            <div className="flex flex-col gap-5 md:flex-row md:items-center">

                                {/* Image */}
                                <div className="relative h-full w-full shrink-0 overflow-hidden sm:h-52 md:h-32 md:w-52 lg:h-29 lg:w-53">
                                    <Image
                                        src={data.image} alt='image'
                                        fill
                                        className='object-center'
                                    />
                                </div>

                                {/* Booking Information */}
                                <div className="flex min-w-0 flex-1 flex-col">
                                    {/* Status */}
                                    <div className="mb-1">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[11px] font-medium text-green-600">
                                            <span className="flex h-3 w-3 items-center justify-center rounded-full border border-green-500">
                                                ✓
                                            </span>
                                            Confirmed
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {data.name}
                                    </h2>

                                    {/* Date */}
                                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                                        <CalendarDays size={13} />
                                        <span>Departure: {data.departuredate}</span>
                                    </div>

                                    {/* Booking ID */}
                                    <p className="mt-2 text-xs text-gray-500">
                                        <span className="mr-1">◉</span>
                                        Booking ID: {data.BookingDate}
                                    </p>

                                    {/* Price */}
                                    <p className="mt-2 text-xl font-medium text-cyan-600">
                                        {data.price}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-center gap-2 md:w-auto md:items-end">
                                    <DeleteBooking data={data}></DeleteBooking>

                                    <button
                                        className="flex flex-1 items-center justify-center gap-1.5 bg-cyan-600 px-5 py-2 text-xs font-medium text-white transition hover:bg-cyan-700 md:flex-none"
                                    >
                                        <Eye size={13} /> View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyBooking;