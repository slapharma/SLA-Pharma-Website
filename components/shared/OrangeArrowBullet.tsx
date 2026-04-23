import { TriangleBullet } from "@/components/shared/icons";

export function OrangeArrowBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <TriangleBullet className="mt-1.5 h-3.5 w-3.5 flex-none text-primary" />
      <span className="text-gray-700">{children}</span>
    </li>
  );
}
