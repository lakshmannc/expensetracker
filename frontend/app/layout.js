import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] }); 

export const metadata = {
  title: "Expense Tracker",
  description: "Expense Tracker using AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/*Header*/}
        <Header/>
       <main className="min-h-screen">{children}</main>
        {/*Footer*/}

        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Copyright © 2025 Expense Tracker. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
    </ClerkProvider>
  );
}
