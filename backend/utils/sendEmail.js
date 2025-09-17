const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const sendEmail = async (
  subject,
  send_to,
  sent_from,
  reply_to,
  template,
  name,
  link
) => {
  try {
    // Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // smtp.gmail.com
      port: process.env.EMAIL_PORT || 587,
      secure: false, // use TLS
      auth: {
        user: process.env.EMAIL_USER, // Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password (16 char)
      },
    });

    // Verify connection
    transporter.verify((error) => {
      if (error) {
        console.log("SMTP Error:", error);
      } else {
        console.log("SMTP server ready ✅");
      }
    });

    // Handlebars options
    const handlebarOptions = {
      viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve("./views"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./views"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(handlebarOptions));

    // Email options
    const options = {
      from: sent_from,
      to: send_to,
      replyTo: reply_to,
      subject,
      template, // template file name (without extension)
      context: {
        name,
        link,
      },
    };

    await transporter.sendMail(options);
    console.log("Email sent successfully ✅");
  } catch (error) {
    console.error("Email sending failed ❌", error.message);
    throw new Error("Email not sent, please try again");
  }
};

module.exports = sendEmail;
