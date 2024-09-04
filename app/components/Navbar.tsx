import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto w-[90%] md:w-[85%] pt-9 flex items-center justify-between max-w-[1440px]">
      <div className="flex items-center gap-20">
        <Link
          href="/"
          className="text-noire text-xl font-bold flex items-center justify-center"
        >
          <span className="bg-violet animate-bounce text-blanc text-2xl rounded-full px-2 mr-1">
            S
          </span>
          StyleNest
        </Link>
        <ul className="flex items-center gap-6 text-gris font-medium duration-300">
          <li className="hover:text-violet">
            <Link href="#">Shop all</Link>
          </li>
          <li className="hover:text-violet">
            <Link href="/latest-arrivals">Latest arrivals</Link>
          </li>
        </ul>
      </div>
      <div className="relative">
        <p className="absolute -top-1 -left-1 bg-violet rounded-full px-1 text-xs text-white">
          0
        </p>
        <ShoppingBagIcon className="size-6 text-gris" />
      </div>
    </nav>
  );
}
