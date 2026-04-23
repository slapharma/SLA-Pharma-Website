export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container-page py-16 md:py-24 text-center">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
