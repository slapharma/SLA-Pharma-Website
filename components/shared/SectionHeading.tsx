import type { ReactNode } from "react";

export function SectionHeading({
  children,
  subtitle,
  align = "center",
}: {
  children: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center mb-10" : "mb-8"}>
      <h2 className={`text-2xl md:text-3xl font-bold text-primary ${align === "center" ? "" : ""}`}>
        {children}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-gray-600 leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
