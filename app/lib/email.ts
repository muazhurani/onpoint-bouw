import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

type MailAttachment = {
  filename: string;
  path: string;
};

type SendMailInput = {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
  attachments?: MailAttachment[];
};

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

function smtpPort() {
  const raw = process.env.SMTP_PORT?.trim();
  if (!raw) return 587;

  const port = Number(raw);
  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("SMTP_PORT must be a positive integer");
  }

  return port;
}

function smtpSecure(port: number) {
  const raw = process.env.SMTP_SECURE?.trim().toLowerCase();
  if (raw === "true") return true;
  if (raw === "false") return false;
  return port === 465;
}

function mailTransport() {
  const port = smtpPort();
  const options: SMTPTransport.Options = {
    host: requiredEnv("SMTP_HOST"),
    port,
    secure: smtpSecure(port),
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASSWORD"),
    },
  };

  return nodemailer.createTransport(options);
}

export function inquiryRecipient() {
  return process.env.INQUIRY_TO_EMAIL?.trim() || "info@onpointgeo.nl";
}

export function mailFrom() {
  return process.env.SMTP_FROM?.trim() || inquiryRecipient();
}

export async function sendMail({
  to,
  subject,
  text,
  html,
  replyTo,
  attachments,
}: SendMailInput) {
  const transport = mailTransport();

  await transport.sendMail({
    from: mailFrom(),
    to,
    subject,
    text,
    html,
    replyTo,
    attachments,
  });
}
