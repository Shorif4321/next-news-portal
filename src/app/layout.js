import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "the news website",
  description: "Discover the latest news, insights, and updates with [Website Name]. Stay informed on trending topics, technology, entertainment, and more with our user-friendly platform. Get access to up-to-date content and engage with a dynamic community. Whether you're seeking breaking news or in-depth analysis, [Website Name] is your go-to source for all things current.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
