import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import { Target } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareerCatalyst",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="border-t">
              <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 md:justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">CareerCatalyst</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} CareerCatalyst. All rights
                  reserved.
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
