import Button from "@components/button";
import Layout from "@components/layout";
import Logo from "@components/logo";
import { NextPage } from "next";
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
      <Layout>
        <Logo />
        <div>
          <h1 className="text-center mb-10">Hello! Create your new account</h1>
          <form onSubmit={handleSubmit(onValid)}>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Write your name please." })}
              />
              <span>{errors?.name?.message}</span>
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Write your email please." })}
              />
              <span>{errors?.email?.message}</span>
            </div>
            <Button text={loading ? "Loading" : "Create Account"} />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default CreateAccount;
