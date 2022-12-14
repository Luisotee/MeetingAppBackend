import { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config();

const PASSWORD = process.env.PASSWORD;

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "meetingappupxaf@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  //send();

  //console.log(req.body);

  async function send() {
    const result = await transporter.sendMail({
      from: "meetingappupxaf@gmail.com",
      to: req.body.email,
      subject: "Hello World",
      text: "Hello World",
    });

    console.log(JSON.stringify(result, null, 4));
  }
};
