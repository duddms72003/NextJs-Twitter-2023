import Button from "@components/button";
import Layout from "@components/layout";
import Logo from "@components/logo";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";

interface IForm {
  email: string;
}

const Login: NextPage = () => {
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onValid = async (data: IForm) => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // mutate("/api/users/me");
    mutate("/api/users/me", null, false);

    if (!loading) {
      const request = await fetch("/api/users/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (request.status === 200) {
        router.push("/");
      } else {
        setLoading(false);
      }
    }
  };
  return (
    <>
      <Layout special="">
        <Logo />
        <div>
          <h1 className="text-center mb-[50px]">Let's get started!</h1>
          <form onSubmit={handleSubmit(onValid)}>
            <div className="mb-[50px] relative top-[50%]">
              <label htmlFor="email"></label>
              <input
                className="font-medium text-[15px] text-gray-400 placeholder-gray-300 w-full border-2 border-gray-300 rounded-[15px] py-[6px] pl-[40px] pr-[6px]"
                id="email"
                type="email"
                placeholder="email"
                {...register("email", { required: "Write your email please." })}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#b7bdc7"
                className="w-6 h-6 absolute left-[10px]  translate-y-[-50%] top-[50%]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <span>{errors?.email?.message}</span>
            </div>
            <Button text={loading ? "Loading" : "Sign In"} />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
