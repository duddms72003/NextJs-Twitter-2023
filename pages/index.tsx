import { NextPage } from "next";
import { Tweet } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";
import useUser from "@libs/client/useUser";
// import SubmitBtn from "@components/submitBtn";
import Layout from "@components/layout";
import WriteBtn from "@components/writeBtn";
import Item from "@components/item";
import Logo from "@components/logo";

interface TweetWithCount extends Tweet {
  _count: {
    favs: number;
  };
}

interface TweetsResponse {
  ok: boolean;
  tweets: TweetWithCount[];
}

const Home: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { data, error } = useSWR<TweetsResponse>("/api/tweets");
  console.log(user, data);

  useEffect(() => {
    if (error) {
      router.replace("/create-account");
    }
  }, [router, error]);

  if (!data) {
    return <div />;
  }

  return (
    <>
      <Layout>
        <Logo />
        <div className="overflow-y-scroll h-[300px]">
          {data?.tweets?.map((tweet) => (
            <Item
              id={tweet.id}
              key={tweet.id}
              title={tweet.name}
              hearts={tweet._count.favs}
            />
          ))}

          {/* <Input placeholder="적어주세요" /> */}
          {/* <SubmitBtn href="">가입하기/로그인하기</SubmitBtn> */}
        </div>
        <div className="mt-12">
          <WriteBtn href="/tweets/upload">글쓰기</WriteBtn>
        </div>
      </Layout>
    </>
  );
};

export default Home;
