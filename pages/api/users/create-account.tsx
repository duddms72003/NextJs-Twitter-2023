import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    const user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return res.status(404).end();
    }
    await client.user.create({
      data: {
        name,
        email,
      },
    });
    return res.status(201).end();
  }
  return res.status(405).end();
}
