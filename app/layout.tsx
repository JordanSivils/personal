import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css"
import HeadNav from "@/components/layout/headNav/headNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
        attribute={`class`}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <HeadNav />
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
