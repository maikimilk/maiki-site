// サーバーサイドの実装 (server.ts)
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const port = 8000;

// body-parserミドルウェアを使用してフォームデータを解析
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// フォームデータを受け取るエンドポイントを作成
app.post('/send-email', async (req: Request, res: Response) => {
    try {
        // フォームデータを取得
        const { name, email, message } = req.body;

        // nodemailerの設定
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'your-gmail-account@gmail.com', // 送信元のGmailアカウント
                pass: 'your-gmail-password', // 送信元のGmailアカウントのパスワード
            },
        });

        // メールの内容
        const mailOptions = {
            from: 'your-gmail-account@gmail.com', // 送信元のメールアドレス
            to: 'recipient@example.com', // 送信先のメールアドレス
            subject: 'お問い合わせ', // メールの件名
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // メールの本文
        };

        // メール送信
        const info = await transporter.sendMail(mailOptions);

        console.log('Message sent: %s', info.messageId);

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to send email');
    }
});

// サーバーを起動
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
