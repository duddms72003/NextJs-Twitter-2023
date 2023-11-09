import Link from "next/link";

export default function InputArrow() {
  return (
    <>
      <div className="w-full bg-white relative">
        <label htmlFor="userInput"></label>
        <input
          id="userInput"
          type="text"
          className="w-full px-[10px] py-[5px] border border-blue-400 rounded-full"
        />
        <Link href={`/`}>
          <a className="absolute right-0 inline-block translate-x-[-50%] translate-y-[-50%] top-[50%] bg-blue-500 p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </Link>
      </div>
    </>
  );
}
