// interface InputProps {
//   placeholder: string;
// }

// export default function Input({ placeholder }: InputProps) {
//   return (
//     <>
//       <div className="w-full bg-white">
//         <label htmlFor="userInput"></label>
//         <input
//           id="userInput"
//           type="text"
//           placeholder={placeholder}
//           className="w-full px-[10px] py-[5px] border border-blue-400  rounded-full"
//         />
//       </div>
//     </>
//   );
// }

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
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      {kind === "text" ? (
        <div className="rounded-md relative flex  items-center ">
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-[#3BA9EE] focus:border-[#3BA9EE]"
          />
        </div>
      ) : null}
    </div>
  );
}
