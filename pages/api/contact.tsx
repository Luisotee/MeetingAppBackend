import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.EMAIL_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, subject, message, name } = req.body;
  console.log(email);
  const msg = {
    to: "luisotaviomgr1@gmail.com",
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
