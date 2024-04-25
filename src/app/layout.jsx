import "./globals.scss";

export const metadata = {
  title: "GSAP With Next App Router",
  description: "Testing a bunch of GSAP features with NextJS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
