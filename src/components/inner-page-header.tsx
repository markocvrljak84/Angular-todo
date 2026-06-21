import { PageHeader } from "@/components/page-header";
import type { PageHeaderContent } from "@/lib/inner-page-content";

type Props = PageHeaderContent;

export function InnerPageHeader({ title, intro }: Props) {
  return (
    <div className="flat-section flat-section--page">
      <div className="flat-wrap">
        <PageHeader title={title} intro={intro} />
      </div>
    </div>
  );
}
