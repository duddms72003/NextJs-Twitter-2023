import Link from "next/link";
import React from "react";

interface BtnInterface {
  children: React.ReactNode;
  href: string;
}

export default function WriteBtn({ children, href }: BtnInterface) {
  return (
    <div className="flex items-center justify-center fixed right-[30px] bottom-[50px] w-[55px] h-[55px] px-4 py-2 bg-[#3BA9EE] hover:bg-[#3599d6] text-center text-white border border-transparent rounded-full shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-[#151f28] focus:outline-none text-sm ">
      <Link href={href}>
        <a className="block ">{children}</a>
      </Link>
    </div>
  );
}
