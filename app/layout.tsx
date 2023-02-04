import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-slate-800">
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
