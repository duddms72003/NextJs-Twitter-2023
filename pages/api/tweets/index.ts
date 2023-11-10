import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const tweets = await client.tweet.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
        _count: {
          select: {
            favs: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      tweets,
    });
  }

  if (req.method === "POST") {
    const {
      body: { name, description },
      session: { user },
    } = req;
    const tweet = await client.tweet.create({
      data: {
        name,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      tweet,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
