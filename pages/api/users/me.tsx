import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
  } = req;

  if (!user?.id) {
    return res.status(401).end();
  }

  const clientUser = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });

  if (!clientUser) {
    return res.status(404).end();
  }

  res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
