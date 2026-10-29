'use client'
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';


interface dataType {
    _id: string
}

const DeleteBooking = ({ data }: { data: dataType }) => {
    const router = useRouter()

    const handlecancelbtn = async () => {
        const res = await fetch(`http://localhost:5000/bookings/${data._id}`, {
            method: "DELETE"
        })
        const cancelBooking = await res.json()
        // console.log(cancelBooking)
        if (cancelBooking) {
            toast.success('Your Booking Delete successfully')
        }
        if (cancelBooking.deletedCount > 0) {
            router.refresh()
        }
    }
    return (
        <div>
            <button
                onClick={handlecancelbtn}
                className="flex flex-1 items-center justify-center gap-1.5 border border-red-300 px-4 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 md:flex-none"
            >
                <Trash2 size={13} /> Cancel
            </button>
        </div>
    );
};

export default DeleteBooking;