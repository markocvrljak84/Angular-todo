/** Prerendered at build time (SSG). */
export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <h1>Next.js SSG boilerplate</h1>
      <p>
        This HTML is generated when you run <code>next build</code> and reused
        for every request. Redeploy to change the timestamp below.
      </p>
    </>
  );
}
