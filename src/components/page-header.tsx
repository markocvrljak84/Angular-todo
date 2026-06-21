type Props = {
  title: string;
  intro?: string;
  id?: string;
};

export function PageHeader({ title, intro, id = "page-title" }: Props) {
  return (
    <header className="page-header">
      <h1 id={id} className="page-header__title">
        {title}
      </h1>
      {intro ? <p className="page-header__intro">{intro}</p> : null}
    </header>
  );
}
