import nodemailer from "nodemailer";
import { SITE_CONTACT } from "@/config/site-contact";

type MailConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
};

export type SendFormEmailResult =
  | { ok: true }
  | { ok: false; error: "mailNotConfigured" | "deliveryFailed"; detail?: string };

function createTransporter(config: MailConfig) {
  if (config.host === "smtp.gmail.com") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });
  }

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
}

function formatMailError(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Unknown SMTP error";
}

function normalizeSmtpPass(pass: string): string {
  return pass.replace(/\s+/g, "");
}

function isPlaceholderSmtpPass(pass: string): boolean {
  const normalized = pass.trim().toLowerCase();
  return (
    normalized === "your-gmail-app-password-here" ||
    normalized === "changeme" ||
    normalized === "your-app-password"
  );
}

function getMailConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const rawPass = process.env.SMTP_PASS?.trim();
  const pass = rawPass ? normalizeSmtpPass(rawPass) : "";
  const port = Number(process.env.SMTP_PORT ?? "587");
  const from = process.env.MAIL_FROM?.trim() || user || SITE_CONTACT.email;
  const to = process.env.MAIL_TO?.trim() || SITE_CONTACT.email;

  if (!host || !user || !pass || !Number.isFinite(port) || isPlaceholderSmtpPass(pass)) {
    return null;
  }

  return { host, port, user, pass, from, to };
}

export function isMailConfigured(): boolean {
  return getMailConfig() !== null;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendFormEmail(
  subject: string,
  fields: Record<string, string>,
  options: { replyTo?: string } = {}
): Promise<SendFormEmailResult> {
  const config = getMailConfig();
  if (!config) {
    return { ok: false, error: "mailNotConfigured" };
  }

  const text = Object.entries(fields)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const html = `<table style="border-collapse:collapse;width:100%;max-width:640px">${Object.entries(
    fields
  )
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600">${escapeHtml(key)}</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(value)}</td></tr>`
    )
    .join("")}</table>`;

  try {
    const transporter = createTransporter(config);

    await transporter.sendMail({
      from: config.from.includes("<")
        ? config.from
        : `Stars Peak <${config.from}>`,
      to: config.to,
      replyTo: options.replyTo,
      subject,
      text,
      html,
    });

    return { ok: true };
  } catch (error) {
    const detail = formatMailError(error);
    if (process.env.NODE_ENV === "development") {
      console.error("[mail] delivery failed:", detail);
    }
    return {
      ok: false,
      error: "deliveryFailed",
      detail: process.env.NODE_ENV === "development" ? detail : undefined,
    };
  }
}
