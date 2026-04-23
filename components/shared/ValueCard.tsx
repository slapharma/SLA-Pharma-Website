import type { ReactNode } from "react";

export function ValueCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="hover-lift rounded-lg bg-white p-8 shadow-lg border border-gray-100">
      {icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}
