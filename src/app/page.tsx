const panels=[{
  title:"Private CSV staging",
  body:"Drop offline CSVs under data/private and reference them through server actions or route handlers."
},{
  title:"Live popularity feeds",
  body:"Wire Twitch, Steam, or social APIs to /src/app/api routes so charts mix static and live trends."
},{
  title:"Visual layers",
  body:"Use Tailwind + React charts inside app/(routes) to compare franchises, genres, and sentiment."
}];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-widest text-indigo-500">Jarvis briefing</p>
        <h1 className="text-4xl font-semibold">Game popularity control room</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          This single Next.js stack hosts both the visualization UI and API routes. Local CSVs stay in{" "}
          <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">data/private</code>, while
          third-party metrics flow in through typed fetchers. Extend this page or add nested routes as
          you chart franchises, genres, and sentiment pulses.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {panels.map((panel)=>(
          <article key={panel.title} className="rounded-2xl border border-zinc-200/60 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-lg font-medium">{panel.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{panel.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
