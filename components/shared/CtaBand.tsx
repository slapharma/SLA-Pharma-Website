import Link from "next/link";

export function CtaBand({
  title = "Start a conversation with us today",
  body = "Whether you're exploring partnerships, clinical collaboration or have a general enquiry, we'd love to hear from you.",
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-primary">
      <div className="container-page py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-white/90">{body}</p>
        </div>
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-gray-100 transition"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
