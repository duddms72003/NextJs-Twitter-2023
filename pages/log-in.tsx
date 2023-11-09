import Button from "@components/button";
import Layout from "@components/layout";
import Logo from "@components/logo";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR, { useSWRConfig } from "swr";

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
    mutate("/api/users/me");

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
      <Layout>
        <Logo />
        <div>
          <h1 className="text-center mb-10">Let's get started!</h1>
          <form onSubmit={handleSubmit(onValid)}>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Write your email please." })}
              />
              <span>{errors?.email?.message}</span>
            </div>
            <Button text={loading ? "Loading" : "Log-in"} />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
