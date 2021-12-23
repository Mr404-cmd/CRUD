import nodemailer from "nodemailer";

module.exports = async (req, res, link) => {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SENDER_EMAIL, //Email
      pass: process.env.SENDER_PASS, // Password
    },
  });

  var mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: req.body.email,
    subject: "Email Authentication",
    text: `Hi you have successfully registerd please click on the ${link} for verify your email`,
  };
  const response = await transporter.sendMail(mailOptions);
  return response;
};
