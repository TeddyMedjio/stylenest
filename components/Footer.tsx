import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Separator } from "./ui/separator";
import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  YoutubeIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="">
      {/* Newsletter */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mt-32 mb-20  ">
        <div className="text-center md:text-start">
          <h3 className="text-xl font-semibold">Join our newsletter</h3>
          <p className="text-sm text-gray-500">
            We'll send you a nice letter once per week. No spam.
          </p>
        </div>
        <form action="/" method="get">
          <fieldset className="flex flex-col md:flex-row items-center md:space-x-2 gap-2 md:gap-0">
            {/* EMAIL */}
            <div className="w-full relative">
              <EnvelopeIcon className="size-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="email"
                type="text"
                name="email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="email@domaine.com"
                required
                placeholder="Enter your email"
                className=" text-sm w-full pl-10 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-[3px] outline-none"
              />
              <QuestionMarkCircleIcon className="size-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
            <input
              type="Submit"
              value="Subscribe"
              className="cursor-pointer text-sm md:text-base bg-violet hover:bg-indigo-800 duration-300  text-white rounded-[3px] py-2 px-5 w-full md:w-fit"
            />
          </fieldset>
        </form>
      </div>
      {/* Logo et navigation */}
      <div className="flex flex-col md:items-start md:flex-row justify-between mb-10 md:gap-10 lg:gap-0 ">
        <div className="mb-10 md:mb-0">
          <div className="w-fit">
            <Link
              href="/"
              className="text-noire text-3xl font-bold flex items-center justify-center mb-3"
            >
              <span className="bg-violet text-blanc text-4xl rounded-full px-2 mr-1">
                S
              </span>
              StyleNest
            </Link>
          </div>
          <p className="text-sm text-gray-500 max-w-[320px] ">
            Craft stunning style journeys that weave more joy into every thread.
          </p>
        </div>

        <div className="flex gap-20">
          <div>
            <p className="uppercase text-sm text-noire font-semibold mb-2">
              shop categories
            </p>
            <ul className="flex flex-col space-y-2">
              <li className="text-sm text-noire">
                <Link href="#">Unisex</Link>
              </li>
              <li className="text-sm text-noire">
                <Link href="#">Women</Link>
              </li>
              <li className="text-sm text-noire">
                <Link href="#">Men</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="uppercase text-sm mb-2 text-noire font-semibold">
              shop collections
            </p>
            <ul className="flex flex-col space-y-2">
              <li className="text-sm text-noire">
                <Link href="#">Latest arrivals</Link>
              </li>
              <li className="text-sm text-noire">
                <Link href="#">Urban Oasis</Link>
              </li>
              <li className="text-sm text-noire">
                <Link href="#">Cozy Comfort</Link>
              </li>
              <li className="text-sm text-noire">
                <Link href="#">Fresh Fusion</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* reseaux sociaux */}
      <div className="pb-16">
        <Separator
          orientation="vertical"
          className="w-full bg-gray-300 h-[1px] mb-5"
        />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-sm text-gris">
            © Copyright {new Date().getFullYear()} - Developed by{" "}
            <span>
              <Link
                href="https://www.medjio.me"
                target="_blank"
                className="text-violet font-medium"
              >
                www.medjio.me
              </Link>
            </span>
          </p>
          <div className="flex items-center gap-2">
            <YoutubeIcon
              size={25}
              strokeWidth={1.5}
              className="text-gray-500"
            />
            <Instagram size={20} strokeWidth={1.5} className="text-gray-500" />
            <Facebook size={20} strokeWidth={1.5} className="text-gray-500" />
            <Github size={20} strokeWidth={1.5} className="text-gray-500" />
            <Twitter size={20} strokeWidth={1.5} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
