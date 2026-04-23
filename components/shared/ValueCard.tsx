import type { ReactNode } from "react";

export function ValueCard({
  icon,
  title,
  children,
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="hover-lift rounded-xl bg-white p-8 shadow-md border border-gray-100 text-center">
      {icon && (
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary mx-auto">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-gray-600 leading-relaxed text-sm">{children}</div>
    </div>
  );
}
