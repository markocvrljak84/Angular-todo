import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { ContactForm } from "@/components/contact-form";

export const dynamic = "force-static";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: l } = await params;
  if (!isLocale(l)) return {};
  const t = getMessages(l as Locale);
  return { title: t.contact.title };
}

export default async function ContactPage({ params }: Props) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const t = getMessages(l as Locale);

  return (
    <article className="content-page">
      <h1>{t.contact.title}</h1>
      <p className="lead">{t.contact.intro}</p>

      <div className="contact-layout">
        <div className="contact-card">
          <h2 className="contact-card__h">{t.contact.detailsHeading}</h2>
          <dl className="contact-dl">
            <dt>{t.contact.addressLabel}</dt>
            <dd>{t.contact.addressMock}</dd>
            <dt>{t.contact.phoneLabel}</dt>
            <dd>
              <a href={`tel:${t.contact.phoneMock.replace(/\s/g, "")}`}>{t.contact.phoneMock}</a>
            </dd>
            <dt>{t.contact.emailLabel}</dt>
            <dd>
              <a href={`mailto:${t.contact.emailMock}`}>{t.contact.emailMock}</a>
            </dd>
          </dl>
        </div>
        <div className="contact-card">
          <h2 className="contact-card__h">{t.contact.messageHeading}</h2>
          <ContactForm
            nameLabel={t.contact.formName}
            emailLabel={t.contact.formEmail}
            messageLabel={t.contact.formMessage}
            submitLabel={t.contact.submit}
            formNote={t.contact.formNote}
            mockToast={t.contact.mockToast}
          />
        </div>
      </div>
    </article>
  );
}
