import FilterBar from '@/components/FilterBar/FilterBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FilterBar>{children}</FilterBar>
    </>
  );
}
