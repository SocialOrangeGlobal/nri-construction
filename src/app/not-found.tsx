"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white">
      <h1 className="text-9xl font-black text-nri-navy opacity-10">404</h1>
      <h2 className="text-4xl font-bold text-nri-navy -mt-12 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button className="bg-nri-orange hover:bg-nri-orange/90 text-white rounded-full px-8">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
