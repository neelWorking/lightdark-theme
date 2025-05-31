import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Next Theme App",
  description: "Simple theme toggle with next-themes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
