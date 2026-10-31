
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nor Shop",
  description: "Discover the latest styles at Nor Shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
            <CartProvider>

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          {children}
      </body>
    </html>
            </CartProvider>

  );
}

// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Pacifico } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";
// import "./globals.css";
// import { CartProvider } from "./context/CartContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const pacifico = Pacifico({
//   variable: "--font-pacifico",
//   subsets: ["latin"],
//   weight: "400",
// });

// export const metadata: Metadata = {
//   title: "Nor Shop",
//   description: "Discover the latest styles at Nor Shop.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html
//         lang="en"
//         className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} h-full antialiased`}
//       >
//         <body className="min-h-full flex flex-col">
//           <CartProvider>
//             {children}
//           </CartProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }