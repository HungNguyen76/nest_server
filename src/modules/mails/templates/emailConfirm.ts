import * as Mailgen from 'mailgen';

interface MailBody {
    productName: string;
    productWebUrl: string;
    receiverName: string;
    confirmLink: string;
    language: string;
}

function genEmailString(mailBody: MailBody) {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: mailBody.productName,
            link: mailBody.productWebUrl
        }
    });

    const email = {
        body: {
            greeting: "Hello",
            signature: "Xin Chào",
            name: mailBody.receiverName,
            intro: "Chúng tôi là",
            action: {
                instructions: `Xin chào ${mailBody.productName} bấm vào nút xác nhận!`,
                button:  {
                    color: '#22BC66',
                    text: "Xác nhận",
                    link: mailBody.confirmLink
                }
            },
            outro: `Outro`
        }
    }
    return mailGenerator.generate(email)
}

export default genEmailString;