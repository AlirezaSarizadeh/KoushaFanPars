import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../globals.css";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import SearchModalBtn from "./components/SearchModal/SearchModal";
import { UserProvider } from "@/context/UserContext";

export const metadata = {
  title: "کوشافن پارس | تجهیزات دندانپزشکی و آموزش",
  description: "شرکت کوشافن پارس ارائه‌دهنده تجهیزات دندانپزشکی، دوره‌های آموزشی و خدمات تخصصی.",
  keywords: "تجهیزات دندانپزشکی, آموزش دندانپزشکی, کوشافن پارس",
  openGraph: {
    title: "کوشافن پارس | تجهیزات و آموزش دندانپزشکی",
    description: "بهترین تجهیزات و دوره‌های آموزش دندانپزشکی را از کوشافن پارس دریافت کنید.",
    url: "https://yourdomain.com",
    siteName: "KoushaFan Pars",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "کوشافن پارس",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children  }) {
  return (

        <UserProvider>
          <Header />
          {children}
          <SearchModalBtn />
          <Footer />
        </UserProvider>

  );
}
