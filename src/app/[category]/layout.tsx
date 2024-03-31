export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div style={{ height: 100, width: "100%", backgroundColor: "black" }} />
      {children}
    </>
  );
}
