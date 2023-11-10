import { NextPage } from "next";
import { Tweet } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";
import useUser from "@libs/client/useUser";
import WriteBtn from "@components/writeBtn";
import Item from "@components/item";

interface TweetWithCount extends Tweet {
  user: {
    name: string;
  };
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
  // console.log(user, data);

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
      <div className=" fixed top-0 w-full bg-white py-5">
        <svg
          width="50px"
          height="50px"
          viewBox="328 355 335 276"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            d="
      M 630, 425
      A 195, 195 0 0 1 331, 600
      A 142, 142 0 0 0 428, 570
      A  70,  70 0 0 1 370, 523
      A  70,  70 0 0 0 401, 521
      A  70,  70 0 0 1 344, 455
      A  70,  70 0 0 0 372, 460
      A  70,  70 0 0 1 354, 370
      A 195, 195 0 0 0 495, 442
      A  67,  67 0 0 1 611, 380
      A 117, 117 0 0 0 654, 363
      A  65,  65 0 0 1 623, 401
      A 117, 117 0 0 0 662, 390
      A  65,  65 0 0 1 630, 425
      Z"
            fill="#3BA9EE"
          />
        </svg>
      </div>
      <div className="mt-[90px]">
        {data?.tweets?.map((tweet) => (
          <Item
            id={tweet.id}
            key={tweet.id}
            title={tweet.name}
            name={tweet.user.name}
            description={tweet.description}
            hearts={tweet._count.favs}
            createdAt={tweet.createdAt}
          />
        ))}
      </div>
      <div>
        <WriteBtn href="/tweets/upload">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </WriteBtn>
      </div>
    </>
  );
};

export default Home;
