import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-white">
      <span className="editorial-kicker text-[#70111A]">404 ERROR</span>
      <h1 className="font-serif text-4xl sm:text-5xl font-black text-[#111111] mt-2 mb-4">
        Out of Bounds
      </h1>
      <p className="text-sm text-neutral-600 max-w-md mb-8">
        The tactical play you are looking for has crossed the sideline or does not exist in the MarlBros FC archive.
      </p>
      <Link
        href="/"
        className="inline-flex items-center space-x-2 bg-[#111111] text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-black transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home Turf</span>
      </Link>
    </div>
  );
}
