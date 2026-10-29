"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, PlaneTakeoff, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";

const links = [
  { href: "/", label: "Home", active: true },
  { href: "/destinations", label: "Destinations" },
  { href: "/bookings", label: "My Bookings" },
  { href: "/addDestination", label: "Admin" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session } = authClient.useSession()
  //console.log(session?.user)
  const handleSignOut = () => {
     authClient.signOut()
    redirect('/')

  }

  return (
    <nav className="w-full border-b border-neutral-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-cyan-500 text-white">
            <PlaneTakeoff className="size-4" />
          </span>
          <span className="text-xl font-bold tracking-tight text-neutral-900">
            Wanderlust
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${link.active
                ? "font-medium text-neutral-900"
                : "text-neutral-600 hover:text-cyan-600"
                }`}
            >
              {link.label}

            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 text-sm md:flex">
          {
            session?.user ?
              < Popover >
                <PopoverTrigger render={<Button variant="outline" className="bg-black rounded-full text-white" />}>
                  ♙ {session?.user.name.charAt(0)}
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader>
                    <PopoverTitle><Link href={'/profile'}>♙ Profile</Link></PopoverTitle>
                    <PopoverDescription>
                      <Button onClick={handleSignOut} variant={'destructive'}>Sign Out</Button>
                    </PopoverDescription>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
              :
              <div className="flex gap-3">
                <Link
                  href="/login"
                  className="text-base text-neutral-600 transition hover:text-neutral-900 font-bold"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-base text-neutral-600 transition hover:text-neutral-900 font-bold"
                >
                  Sign Up
                </Link>
              </div>
          }
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-neutral-700 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {
        menuOpen && (
          <div className="border-t border-neutral-100 px-5 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={link.active ? "text-cyan-600" : "text-neutral-600 hover:text-cyan-600"}
                >
                  {link.label}

                </Link>
              ))}

              <hr className="border-neutral-100" />

              {
                session?.user ?
                  < Popover >
                    <PopoverTrigger render={<Button variant="outline" className="bg-black rounded-full text-white" />}>
                      ♙ {session?.user.name.charAt(0)}
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader>
                        <PopoverTitle><Link href={'/profile'}>♙ Profile</Link></PopoverTitle>
                        <PopoverDescription>
                          <Button onClick={handleSignOut} variant={'destructive'}>Sign Out</Button>
                        </PopoverDescription>
                      </PopoverHeader>
                    </PopoverContent>
                  </Popover>
                  :
                  <div className="flex gap-3">
                    <Link
                      href="/login"
                      className="text-base text-neutral-600 transition hover:text-neutral-900 font-bold"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="text-base text-neutral-600 transition hover:text-neutral-900 font-bold"
                    >
                      Sign Up
                    </Link>
                  </div>
              }
            </div>
          </div>
        )
      }
    </nav >
  );
}
