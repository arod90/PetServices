'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function NavLink({ href, children }) {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}`;
  console.log({ href, active, segment });

  return <Link href={href}>{children}</Link>;
}
