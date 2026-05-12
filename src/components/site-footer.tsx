import type { Messages } from "@/i18n/messages";

export function SiteFooter({ t }: { t: Messages }) {
  return (
    <footer className="site-footer">
      <p className="site-footer__tagline">{t.footer.tagline}</p>
      <p className="site-footer__rights">{t.footer.rights}</p>
    </footer>
  );
}
