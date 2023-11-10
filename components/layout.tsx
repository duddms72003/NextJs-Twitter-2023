import { useRouter } from "next/router";

interface LayoutProps {
  canGoBack?: boolean;
  children: React.ReactNode;
  special: string;
}

export default function Layout({ canGoBack, children, special }: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  const baseClass =
    "w-full h-screen justify-center px-10 text-lg font-medium fixed text-gray-800 border-b top-0 flex items-center";
  const specialClass = "bg-[#151f28]";
  const bgClasses = special ? `${baseClass} ${specialClass}` : baseClass;

  return (
    <>
      <div>
        <div className="relative z-10 left-4 top-7 cursor-pointer inline-block">
          {canGoBack ? (
            <button onClick={onClick}>
              <svg
                className={special ? "w-6 h-6 text-white" : "w-6 h-6"}
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
      <div className={bgClasses}>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
