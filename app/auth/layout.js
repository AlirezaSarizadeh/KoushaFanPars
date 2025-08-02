
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { UserProvider } from "@/context/UserContext";
export const metadata = {
  title: "ورود یا ثبت نام",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="">
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
