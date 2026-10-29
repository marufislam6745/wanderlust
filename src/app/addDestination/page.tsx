'use client'
import { authClient } from "@/lib/auth-client";
import { Save, Trash2, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
const initialForm = {
    name: "",
    country: "",
    category: "",
    price: "",
    duration: "",
    departuredate: "",
    image: "",
    description: ""
}

const AddDestinationPage = () => {

    const [form, setForm] = useState(initialForm)

    const update = (field: keyof typeof form, value: string) =>
        setForm((current) => ({ ...current, [field]: value }));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //client component
        const {data}=await authClient.token()
        //console.log(data)
        const res = await fetch('http://localhost:5000/addDestinations', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 authorization:`Bearer ${data?.token}`
            },
            body: JSON.stringify(form)
        })
        const dataAdd = await res.json()

        if (dataAdd) {
            toast.success('Data add Successfully')
        }
        else {
            toast.error(dataAdd.message || 'Something went wrong!')
        }
    }



    return (
        <div className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8">

            {/* Page Title */}
            <h1 className="text-4xl ml-5 font-light tracking-tight text-gray-900 sm:text-5xl">
                Add New Travel Package
            </h1>

            {/* Form Card */}
            <div className="mx-auto mt-16 mb-6 w-full max-w-3xl border border-gray-200 bg-white p-6 shadow-md sm:p-8 lg:p-10">

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Destination Name */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                            Destination Name
                        </label>

                        <input
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
                                type="text"
                                onChange={(e) => update("country", e.target.value)}
                                placeholder="Indonesia"
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
                                    onChange={(e) => update("category", e.target.value)}
                                    className="w-full appearance-none border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                                    defaultValue="Beach"
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
                                type="number"
                                onChange={(e) => update("price", e.target.value)}
                                placeholder="e.g., 1299"
                                className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Duration
                            </label>

                            <input
                                type="text"
                                onChange={(e) => update("duration", e.target.value)}
                                placeholder="e.g., 7 Days/6 Nights"
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
                            type="url"
                            onChange={(e) => update("image", e.target.value)}
                            placeholder="https://example.com/image.jpg"
                            className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                            Description
                        </label>

                        <textarea
                            onChange={(e) => update("description", e.target.value)}
                            placeholder="Describe the travel experience..."
                            className="w-full resize-none border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-700 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col justify-end gap-3 pt-3 sm:flex-row">

                        {/* Cancel */}
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 border border-red-400 px-5 py-2.5 text-sm text-red-500 transition hover:bg-red-50"
                        >
                            <Trash2 size={16} />
                            Cancel
                        </button>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 bg-cyan-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-600"
                        >
                            <Save size={16} />
                            Add Travel Package
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddDestinationPage;