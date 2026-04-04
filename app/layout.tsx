import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_compont/navbar/navbar";
import { Toaster } from "sonner";
import Footer from "./_compont/footer/Footer";
import { ThemeProvider } from "./_compont/theme-provider"
import { LanguageProvider } from "./_compont/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justlena Tours | Premium Excursions & Luxury Experiences",
  description: "Discover the best luxury tours in Sharm El-Sheikh with Justlena Tours. Book exclusive yacht trips, desert safaris, and diving adventures with high-end concierge service.",
  keywords: ["Justlena Tours", "Sharm El-Sheikh", "Luxury Excursions", "Desert Safari", "Diving Sharm", "Yacht Rental Sharm"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster position="top-right" richColors />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

