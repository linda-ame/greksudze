import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function BrandLink({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`brand-link ${className}`.trim()}>
      <BrandMark className="brand-link-mark" size={36} />
      <span>Grēksūdze</span>
    </Link>
  );
}
