import Navbar from "@/components/layout/headNav/headNav";
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
