type Props = {
  title: string;
  intro?: string;
  id?: string;
  align?: "center" | "start";
};

export function PageHeader({ title, intro, id = "page-title", align = "center" }: Props) {
  const start = align === "start";

  return (
    <>
      <h1
        id={id}
        className={`flat-section__title${start ? " flat-section__title--start" : ""}`}
      >
        {title}
      </h1>
      {intro ? (
        <p
          className={`flat-section__intro flat-section__intro--lead${start ? " flat-section__intro--start" : ""}`}
        >
          {intro}
        </p>
      ) : null}
    </>
  );
}
