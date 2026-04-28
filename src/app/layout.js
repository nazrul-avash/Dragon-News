import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins(
  {
    variable:"--font-poppins",
    subsets:["devanagari"],
    weight:["400","500","700"]
  }
);

export const metadata = {
  title: "Dragon News",
  description: "Get your dragons back",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme = "light"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
