const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "d1b415bd9da3ee",
          pass: "fa1fa2bba62b72"
        }
      });
    const mensaje={
        from: "VetyShop Store <tuCorreoMicrosoft>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;