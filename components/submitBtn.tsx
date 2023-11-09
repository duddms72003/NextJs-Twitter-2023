import Link from "next/link";
import React from "react";

interface BtnInterface {
  children: React.ReactNode;
  href: string;
}

export default function SubmitBtn({ children, href }: BtnInterface) {
  return (
    <div className="w-full bg-[#3BA9EE] hover:bg-[#3599d6] cursor-pointer text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none py-2 text-sm text-center">
      <Link href={href}>
        <a className=" ">{children}</a>
      </Link>
    </div>
  );
}
