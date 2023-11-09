import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;
  const tweet = await client.tweet.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  const terms = tweet?.name.split(" ").map((word) => ({
    name: {
      contains: word,
    },
  }));
  const relatedtweets = await client.tweet.findMany({
    where: {
      OR: terms,
      AND: {
        id: {
          not: tweet?.id,
        },
      },
    },
  });

  const isLiked = Boolean(
    await client.fav.findFirst({
      where: {
        tweetId: tweet?.id,
        userId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );
  res.json({ ok: true, tweet, isLiked, relatedtweets });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
