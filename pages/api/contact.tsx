import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(
  "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"
);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, subject, message, name } = req.body;
  console.log(email);
  const msg = {
    to: "luisotaviomgr1@hotmail.com",
    from: email,
    subject,
    name,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
    console.log(msg);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error sending email" });
  }
};
