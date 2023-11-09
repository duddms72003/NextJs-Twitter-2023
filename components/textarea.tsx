import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function TextArea({
  label,
  name,
  register,
  ...rest
}: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        {...register}
        className="resize-none appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-[#3BA9EE] focus:border-[#3BA9EE]"
        rows={4}
        {...rest}
      />
    </div>
  );
}
