require("dotenv").config();
//var postmark = require("postmark");
//const serverToken = process.env.GATSBY_POSTMARK_API_TOKEN;
//const client = new postmark.ServerClient(serverToken);

var nodemailer = require('nodemailer')

const useHtmlTemplate = (data) => {
  delete data.read;
  delete data.submitted;
  const fields = Object.entries(data)
  return `<!DOCTYPE html>
<html lang="en">
  <body>
    <table style="font-size: 16px">
      ${fields?.map((field) => {
        return (
          `<tr style="margin-bottom: 3px">
            <td><strong>${field[0].charAt(0).toUpperCase() + field[0].slice(1)}:</strong> ${field[1]}</td>
          </tr>`
        )
      }).join("\r\n")}
    </table>
  </body>
</html>`;
}

const useTextTemplate = (data) => {
  const fields = Object.entries(data)
  return fields.map((field) => {
    return `${field[0].charAt(0).toUpperCase() + field[0].slice(1)}: ${field[1]}`
  }).join("; ")
}

exports.handler = async function(e) {

  const body = JSON.parse(`${e.body}`)

  const obj = {
    "First Name": body.form.firstname,
    "Last Name": body.form.lastname,
    "Email": body.form.email,
    "Phone": body.form.phone,
    "Message": body.form.message,
  }


  let transporter = nodemailer.createTransport({
    host: 'smtp.dreamhost.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GATSBY_AURA_MAILER_ADDRESS,
        pass: process.env.GATSBY_AURA_MAILER_PASSWORD
    }
  })

  let details = {
    from: { name: "Essence of Beauty", address:'contact@essenceofbeauty.ca'},
    replyTo: body.form.email,
    to: "bjsmi13@gmail.com",//process.env.GATSBY_POSTMARK_DESTINATION_EMAIL,
    subject: "New Contact Form Submission",
    text: useTextTemplate(obj),
    html: useHtmlTemplate(obj)
  }

  const sent = await transporter.sendMail(details)
    .then((res) => {
      if(res?.accepted?.length > 0) { return { "statusCode": 200, "body": 'Success' } }
      else { return { "statusCode": 500, "body": "Failed" } }
    })
    .catch((err) => {
        console.error(err)
        return { "statusCode": 500, "body": "Failed" }
    })

    return sent


//  const origin = body.type === 'contact' ? 'contact@essenceofbeauty.ca' : 'practicepolicies@essenceofbeauty.ca'
//  const submit = await client.sendEmailWithTemplate({
//    "From": origin,
//    "To": process.env.GATSBY_POSTMARK_DESTINATION_EMAIL,
//    "ReplyTo": body.form.email,
//    "TemplateAlias": body.template,
//    "TemplateModel": body.form
//    }).then(function(res) {
//      return res
//    }, function(err) {
//      return err
//    });
//    if(submit.ErrorCode === 0){
//      return { "statusCode": 200, "body": 'Success' }
//    }
}