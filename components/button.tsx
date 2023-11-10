import { cls } from "@libs/client/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  text,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "w-full bg-[#3BA9EE] hover:bg-[#3599d6] text-center text-white  px-4 border border-transparent rounded-full shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-[#455a9b] focus:outline-none py-2 text-sm ",
        large ? "py-3 text-base" : "py-[12px] text-sm "
      )}
    >
      {text}
    </button>
  );
}
