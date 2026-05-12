"use client";

import { useState } from "react";

type Props = {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitLabel: string;
  formNote: string;
  mockToast: string;
};

export function ContactForm({
  nameLabel,
  emailLabel,
  messageLabel,
  submitLabel,
  formNote,
  mockToast,
}: Props) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form__field">
        <span>{nameLabel}</span>
        <input name="name" type="text" autoComplete="name" placeholder="Jane Guest" required />
      </label>
      <label className="contact-form__field">
        <span>{emailLabel}</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </label>
      <label className="contact-form__field">
        <span>{messageLabel}</span>
        <textarea name="message" rows={5} placeholder="Mock message…" required />
      </label>
      <button type="submit" className="contact-form__submit">
        {submitLabel}
      </button>
      <p className="contact-form__note">{formNote}</p>
      {sent ? (
        <p className="contact-form__toast" role="status">
          {mockToast}
        </p>
      ) : null}
    </form>
  );
}
