import Image from "next/image";
import Link from "next/link";
import SteelersLogo from "../public/Steelers-Club-Logo-_1_-transformed.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src={SteelersLogo}
            width={70}
            className="rounded-full inline"
            height={70}
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Sign up to join!
        </Link>
      </div>
    </header>
  );
}
