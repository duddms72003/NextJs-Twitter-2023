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
    <Layout canGoBack>
      <Logo />
      <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
        <Input
          register={register("name", { required: true })}
          required
          label="Title"
          name="name"
          type="text"
        />
        <TextArea
          register={register("description", { required: true })}
          name="description"
          label="Description"
          required
        />

        <Button text={loading ? "Loading..." : "Upload item"} />
      </form>
    </Layout>
  );
};

export default Upload;
