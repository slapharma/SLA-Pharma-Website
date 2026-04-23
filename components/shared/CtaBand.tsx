import Link from "next/link";
import { ArrowRightIcon } from "@/components/shared/icons";

export function CtaBand({
  heading = "Start a conversation with us today",
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
}: {
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-primary-soft">
      <div className="container-page py-16 md:py-20 flex flex-col items-center text-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{heading}</h2>
        <Link href={ctaHref} className="btn-primary-pill">
          {ctaLabel}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
