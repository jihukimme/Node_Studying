//이메일을 발송하는 프로그램

//npm install nodemailer

//mail server를 대행해주는 mailtrap사용
const nodemailer = require("nodemailer");

const email = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "24410b333d40b2",
    pass: "ee150f0ed48eb8",
  },
});

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "jihookim1004@gmail.com",
  to: "jihu0210@naver.com",
  subject: "테스트 메일입니다.",
  text: "node.js를 이용해서 메일을 보내봅시다.",
};

send(email_data);
