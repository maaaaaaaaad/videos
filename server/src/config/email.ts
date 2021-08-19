import 'dotenv/config';

export default () => ({
  email: {
    transport: `smtps://${process.env.NODEMAILER_EMAIL}:${process.env.NODEMAILER_PASS}@${process.env.NODEMALIER_HOST}`,
    defaults: {
      from: `"${process.env.NODEMAILER_NAME}" <${process.env.NODEMAILER_EMAIL}>`,
    },
  },
});
