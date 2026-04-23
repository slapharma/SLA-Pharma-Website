import type { ReactNode } from "react";
import { CheckIcon } from "@/components/shared/icons";

export function NumberedStepCard({
  number,
  title,
  description,
  bullets = [],
}: {
  number: string | number;
  title: string;
  description: ReactNode;
  bullets?: string[];
}) {
  return (
    <div className="rounded-xl bg-white p-6 md:p-8 shadow-md border border-gray-100 flex gap-5 md:gap-8 items-start">
      <div className="flex-none">
        <div className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-primary text-primary flex items-center justify-center text-xl md:text-2xl font-bold">
          {number}
        </div>
      </div>
      <div className="min-w-0">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-3">{description}</p>
        {bullets.length > 0 && (
          <ul className="space-y-1.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-gray-700 text-sm">
                <CheckIcon className="mt-1 h-3.5 w-3.5 flex-none text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
