'use client'
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react";
import { FaRegPenToSquare } from "react-icons/fa6";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FieldGroup } from "@/components/ui/field"
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Tour } from "@/type";
import { useRouter } from "next/navigation";
// const initialForm = {
//     name: "",
//     country: "",
//     category: "",
//     price: "",
//     duration: "",
//     departuredate: "",
//     image: "",
//     description: ""
// }


export function Editdestination({ data }: { data: Tour }) {
    const router = useRouter()
    const [form, setForm] = useState(data)

    const update = (field: keyof typeof form, value: string) =>
        setForm((current) => ({ ...current, [field]: value }));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const { _id, ...updateData } = form
        const res = await fetch(`http://localhost:5000/destinations/${data._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData)
        })
        const editData = await res.json()

        // console.log(spot)
        toast.success('Data Update Successfully')
        if (editData.modifiedCount > 0) {
            router.refresh()
        }
    }

    return (
        <Dialog>
            <DialogTrigger render={<Button variant="outline"><FaRegPenToSquare /> Edit</Button>} />
            <DialogContent className="sm:max-w-lg lg:max-w-2xl">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>Update Travel Packeg</DialogTitle>
                        <DialogDescription>
                            Make changes to your Travel packeg details below.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Destination Name
                            </label>

                            <input
                                id="name"
                                value={form.name}
                                type="text"
                                onChange={(e) => update("name", e.target.value)}
                                placeholder="Bali Paradise"
                                className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Country + Category */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                            {/* Country */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Country
                                </label>

                                <input
                                    id="country"
                                    value={form.country}
                                    type="text"
                                    onChange={(e) => update("country", e.target.value)}
                                    
                                    className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Category
                                </label>

                                <div className="relative">
                                    <select
                                        id="category"
                                        value={form.category}
                                        onChange={(e) => update("category", e.target.value)}
                                        className="w-full appearance-none border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                                    >
                                        <option value="Beach">Beach</option>
                                        <option value="Mountain">Mountain</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="City">City</option>
                                        <option value="Cultural">Cultural</option>
                                    </select>

                                    <ChevronDown
                                        size={18}
                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Price + Duration */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                            {/* Price */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Price (USD)
                                </label>

                                <input
                                    id="price"
                                    value={form.price}
                                    type="number"
                                    onChange={(e) => update("price", e.target.value)}
                                    
                                    className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                                />
                            </div>

                            {/* Duration */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Duration
                                </label>

                                <input
                                    id="duration"
                                    value={form.duration}
                                    type="text"
                                    onChange={(e) => update("duration", e.target.value)}
                                    
                                    className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                                />
                            </div>

                        </div>

                        {/* Departure Date */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Departure Date
                            </label>

                            <input
                                is="departuredate"
                                value={form.departuredate}
                                type="date"
                                onChange={(e) => update("departuredate", e.target.value)}
                                className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-600 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Image URL
                            </label>

                            <input
                                id="image"
                                value={form.image}
                                type="url"
                                onChange={(e) => update("image", e.target.value)}
                                
                                className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Description
                            </label>

                            <textarea
                                id="description"
                                value={form.description}
                                onChange={(e) => update("description", e.target.value)}
                                
                                className="w-full resize-none border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            ></textarea>
                        </div>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose render={<Button variant="outline">Cancel</Button>} />
                        <DialogClose render={<Button type="submit" className="bg-blue-400">Save changes</Button>} />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
