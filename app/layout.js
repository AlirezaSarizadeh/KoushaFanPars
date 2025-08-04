import "./globals.css";

export const metadata = {
  title: "KoushaFan Pars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="container-custom">
        {children}
      </body>
    </html>
  );
}
