import type { NextPage } from "next";
import Layout from "@components/layout";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { Tweet, User } from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import useUser from "@libs/client/useUser";

interface TweetWithUser extends Tweet {
  user: User;
}
interface ItemDetailResponse {
  ok: boolean;
  tweet: TweetWithUser;
  relatedTweets: Tweet[];
  isLiked: boolean;
}

const ItemDetail: NextPage = () => {
  const { user, isLoading } = useUser();
  console.log(user);
  const router = useRouter();
  console.log(router.query);
  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/tweets/${router.query.id}` : null
  );

  const [toggleFav] = useMutation(`/api/tweets/${router.query.id}/fav`);
  const onFavClick = () => {
    if (!data) return;
    boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
    toggleFav({});
  };

  console.log(data);
  return (
    <Layout canGoBack>
      <div className="px-4 pt-4 pb-3 border rounded-lg">
        <div>
          <div>
            <div className="relative flex cursor-pointer py-3 items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div>
                <p className="flex items-center">
                  {data?.tweet?.user?.name}
                  <span className="pl-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#3BA9EE"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </p>
                <p className="text-gray-400 text-sm">@username</p>
              </div>
              <div className="absolute right-0 top-[12px]">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="328 355 335 276"
                  xmlns="http://www.w3.org/2000/svg"
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
            </div>
          </div>
          <div>
            {/* <h1 className="text-xl text-gray-666 mt-5">{data?.tweet?.name}</h1> */}
            <p className=" my-6 text-gray-666">{data?.tweet?.description}</p>
            <p className="mb-4 text-sm text-gray-400">
              {data?.tweet?.createdAt
                ? new Date(data.tweet.createdAt).toLocaleString()
                : ""}
            </p>
            <div className="flex">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="p-3 w-[48px] rounded-full flex items-center hover:bg-gray-100 justify-center text-gray-400 hover:text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="p-3 w-[48px] rounded-full flex items-center hover:bg-gray-100 justify-center text-gray-400 hover:text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
              </button>
              <button
                onClick={onFavClick}
                className={cls(
                  "p-3 w-[48px] rounded-full flex items-center hover:bg-gray-100 justify-center ",
                  data?.isLiked
                    ? "text-red-500  hover:text-red-600"
                    : "text-gray-400  hover:text-gray-500"
                )}
              >
                {data?.isLiked ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="p-3 w-[48px] rounded-full flex items-center hover:bg-gray-100 justify-center text-gray-400 hover:text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
