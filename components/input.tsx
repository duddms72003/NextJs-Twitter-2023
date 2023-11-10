import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text";
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  kind = "text",
  register,
  type,
  required,
}: InputProps) {
  return (
    <div>
      <label className="hidden" htmlFor={name}>
        {label}
      </label>
      {kind === "text" ? (
        <div className="relative flex items-center w-full ">
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            placeholder="Start here"
            className="text-[15px] text-normal placeholder-gray-300 px-3 py-2 focus:outline-none border-0 shadow-none w-full border-b border-dotted rounded-none rounded-tl-md rounded-tr-md "
          />
        </div>
      ) : null}
    </div>
  );
}
