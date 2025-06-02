'use client'
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Image src="/logo.png" alt="Right Connect LLC" width={200} height={100} className="h-20 w-auto" />
          </div>
          <div className="text-slate-400 text-center md:text-right">
            <p>&copy; 2025 Right Connect LLC. All rights reserved.</p>
            <p className="text-sm mt-1">Transforming businesses through AI innovation</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
