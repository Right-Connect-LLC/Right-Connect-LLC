'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { LogIn, UserPlus } from 'lucide-react'

export default function Header() {
  const router = useRouter()

  return (
    <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image src="/logo.png" alt="Right Connect LLC" width={120} height={60} className="h-20 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-slate-300 hover:text-white hidden sm:flex"
              onClick={() => router.push('/login')}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => router.push('/signup')}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>
        </div>
      </header>
  );
}
