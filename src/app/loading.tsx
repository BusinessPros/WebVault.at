export default function Loading() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-shell pt-28 sm:pt-32">
        <div className="skeleton h-px w-full max-w-3xl" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="skeleton h-3 w-44" />
            <div className="mt-6 space-y-3">
              <div className="skeleton h-14 w-full max-w-3xl sm:h-20" />
              <div className="skeleton h-14 w-10/12 max-w-2xl sm:h-20" />
              <div className="skeleton h-14 w-8/12 max-w-xl sm:h-20" />
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <div className="skeleton h-12" />
              <div className="skeleton skeleton-soft h-12" />
            </div>
          </div>
          <div className="skeleton min-h-[320px] rounded-lg sm:min-h-[420px] lg:min-h-[560px]" />
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="rounded-lg border border-border bg-card p-4">
              <div className="skeleton h-36" />
              <div className="mt-5 skeleton h-6 w-2/3" />
              <div className="mt-3 skeleton skeleton-soft h-4 w-full" />
              <div className="mt-2 skeleton skeleton-soft h-4 w-4/5" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
