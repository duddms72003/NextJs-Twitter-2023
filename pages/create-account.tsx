import Button from "@components/button";
import Layout from "@components/layout";
import Logo from "@components/logo";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  name: string;
  email: string;
}

const CreateAccount: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onValid = async (data: IForm) => {
    if (!loading) {
      setLoading(true);
      const request = await fetch("/api/users/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (request.status === 200) {
        alert("Account already exists! Please log in!");
      }
      if (request.status === 201) {
        alert("Account created! Please log in!");
      }
      if (request.status !== 405) {
        router.push("/log-in");
      }

      setLoading(false);
    }
  };
  return (
    <>
      <Layout special="">
        <Logo />
        <div>
          <h1 className="text-center mb-[50px] font-bold">
            See what's happening in the world right now.
          </h1>
          <form onSubmit={handleSubmit(onValid)}>
            <div className="mb-5 relative">
              <label htmlFor="name"></label>
              <div className="relative">
                <input
                  className="font-medium text-[15px] placeholder-gray-300 w-full border-2 border-gray-300 rounded-[15px] py-[6px] pl-[40px] pr-[6px]"
                  id="name"
                  type="text"
                  placeholder="name"
                  {...register("name", { required: "Write your name please." })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#b9bfc9"
                  className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <span className="text-red-600 text-sm font-normal block pt-1 pl-2">
                {errors?.name?.message}
              </span>
            </div>
            <div className="mb-[45px] relative ">
              <label htmlFor="email"></label>
              <div className="relative">
                <input
                  className="font-medium text-[15px] placeholder-gray-300 w-full border-2 border-gray-300 rounded-[15px] py-[6px] pl-[40px] pr-[6px]"
                  id="email"
                  type="email"
                  placeholder="email"
                  {...register("email", {
                    required: "Write your email please.",
                  })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#b9bfc9"
                  className="w-6 h-6 absolute left-[10px]  translate-y-[-50%] top-[50%]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <span className="text-red-600 text-sm font-normal block pt-1 pl-2">
                {errors?.email?.message}
              </span>
            </div>
            <Button text={loading ? "Loading" : "Sign Up"} />
          </form>

          <p className="text-gray-400 font-normal text-[17px] mt-5 text-center">
            Have an account already?
            <span className="text-[#3BA9EE]">
              <Link href={"/log-in"}> Sign in</Link>
            </span>
          </p>
        </div>
      </Layout>
    </>
  );
};

export default CreateAccount;
