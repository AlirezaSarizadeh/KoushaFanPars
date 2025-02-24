
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./globals.css";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import SearchModalBtn from "./components/SearchModal/SearchModal";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="container-custom">
        <Header />
        {children}
        <SearchModalBtn />
        <Footer />
      </body>
    </html>
  );
}
