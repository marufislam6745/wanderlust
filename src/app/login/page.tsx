"use client";
import { useState } from "react";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget)
        const userdata = Object.fromEntries(formdata.entries()) as { email: string, password: string }

        const { data, error } = await authClient.signIn.email({
            ...userdata,
            callbackURL: '/'
        })
        if(data){
            toast.success('Login successfully')
        }
        if(error){
            toast.error(error.message || 'Something wrong!')
        }
    }

    return (
        <main className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-116">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-[30px] font-bold sm:text-[34px] text-gray-900 tracking-tight">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 text-sm sm:text-[15px] mt-1">
                        Start your adventure with Wanderlust
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white border border-gray-200 shadow-md px-7 sm:px-8 py-7">

                    <form onSubmit={handleLogin} className="space-y-3.5">

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-1.5">
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail
                                    size={17}
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full h-9 sm:h-10 bg-[#f5f7f8] border border-gray-200 pl-9 pr-3 text-sm text-gray-700 outline-none focus:border-[#18a3c1] focus:ring-1 focus:ring-[#18a3c1] transition"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-1.5">
                                Password
                            </label>

                            <div className="relative">
                                <Lock
                                    size={17}
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Create a password"
                                    className="w-full h-9 sm:h-10 bg-[#f5f7f8] border border-gray-200 pl-9 pr-10 text-sm text-gray-700 outline-none focus:border-[#18a3c1] focus:ring-1 focus:ring-[#18a3c1] transition"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeOff size={17} />
                                    ) : (
                                        <Eye size={17} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Create Account Button */}
                        <button
                            type="submit"
                            className="w-full h-11 bg-[#18a3c1] hover:bg-[#1294b1] text-white text-sm font-medium transition mt-1"
                        >
                            Log In
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-4">
                        <div className="h-px bg-gray-200 flex-1"></div>

                        <span className="text-sm text-gray-500 whitespace-nowrap">
                            Or sign up with
                        </span>

                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    {/* Google Button */}
                    <button
                        type="button"
                        className="w-full h-11 border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center gap-2 text-sm text-gray-800 transition"
                    >
                        {/* Google Icon */}
                        <span className="font-bold text-[17px]">
                            <span className="text-blue-500"><FcGoogle /></span>
                        </span>

                        <span>Sign Up With Google</span>
                    </button>

                    {/* Sign In */}
                    <p className="text-center text-sm text-gray-500 mt-5">
                        Don`t have an Account?{" "}
                        <a
                            href="/signup"
                            className="text-[#00a1c6] font-medium hover:underline"
                        >
                            Sign Up
                        </a>
                    </p>

                </div>
            </div>
        </main>
    );
};

export default LoginPage;