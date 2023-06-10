import { NextApiRequest, NextApiResponse } from "next";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const api = "https://steelersserver.herokuapp.com/join";
      const { name, email, phoneNumber } = req.body;
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phoneNumber }),
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      } else {
        return res.status(200).json({ message: "Success" });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "We only support POST" });
  }
}
