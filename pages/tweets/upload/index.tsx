import type { NextPage } from "next";
import Input from "@components/input";
import Layout from "@components/layout";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Tweet } from "@prisma/client";
import { useRouter } from "next/router";
import Button from "@components/button";
import TextArea from "@components/textarea";
import Logo from "@components/logo";

interface UploadTweetForm {
  name: string;
  description: string;
}

interface UploadTweetMutation {
  ok: boolean;
  tweet: Tweet;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadTweetForm>();
  const [uploadTweet, { loading, data }] =
    useMutation<UploadTweetMutation>("/api/tweets");
  const onValid = (data: UploadTweetForm) => {
    if (loading) return;
    uploadTweet(data);
  };
  useEffect(() => {
    if (data?.ok) {
      router.replace(`/tweets/${data.tweet.id}`);
    }
  }, [data, router]);
  return (
    <Layout canGoBack special="specialClass">
      <Logo />
      <div className="bg-[#ebeef4] rounded-xl p-10">
        <p className="pb-9 font-normal text-center text-[21px]">
          What are you thinking of ?
        </p>
        <Input
          register={register("name", { required: true })}
          required
          label=""
          name="name"
          type="text"
        />
        <form className="space-y-4" onSubmit={handleSubmit(onValid)}>
          <TextArea
            register={register("description", { required: true })}
            name="description"
            required
          />

          <Button text={loading ? "Loading..." : "Upload"} />
        </form>
      </div>
    </Layout>
  );
};

export default Upload;
