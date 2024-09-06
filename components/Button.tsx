import Link from "next/link";

type props = {
  text: string;
  href: string;
  width: string;
};

export default function Button({ text, href, width }: props) {
  return (
    <Link href={href}>
      <button
        className={` text-sm md:text-base bg-violet hover:bg-indigo-800 duration-300  text-white rounded-[3px] py-2 px-10 w-${width}`}
      >
        {text}
      </button>
    </Link>
  );
}
