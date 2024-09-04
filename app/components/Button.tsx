import Link from "next/link";

type props = {
  text: string;
};

export default function Button({ text }: props) {
  return (
    <Link href="#">
      <button className=" text-sm md:text-base bg-violet hover:bg-indigo-800 duration-300 text-white rounded-md py-4 px-10">
        {text}
      </button>
    </Link>
  );
}
