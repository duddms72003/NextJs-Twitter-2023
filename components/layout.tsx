import { useRouter } from "next/router";

interface LayoutProps {
  canGoBack?: boolean;
  children: React.ReactNode;
}

export default function Layout({ canGoBack, children }: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <>
      <div>
        <div className="relative z-10 left-4 top-7 cursor-pointer inline-block">
          {canGoBack ? (
            <button onClick={onClick}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          ) : null}
        </div>
      </div>
      <div className=" w-full h-screen justify-center text-lg px-10 font-medium  fixed text-gray-800 border-b top-0  flex items-center">
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
