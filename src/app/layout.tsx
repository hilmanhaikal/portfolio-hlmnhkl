// app/layout.tsx
import FloatingBlobs from "./components/FloatingBlobs";
import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hilman Haikal | Frontend Developer",
  description: "Passionate frontend developer crafting modern, responsive, and user-friendly web experiences.",
  openGraph: {
    title: "Hilman Haikal | Frontend Developer",
    description: "Explore my modern and responsive web projects.",
    url: "https://hlmnhkl.netlify.app/",
    siteName: "Hilman Haikal Portfolio",
    images: [
      {
        url: "/logo.svg", // Add a thumbnail image in `public/`
        width: 1200,
        height: 630,
        alt: "Hilman Haikal Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilman Haikal | Frontend Developer",
    description: "Explore my modern and responsive web projects.",
    images: ["/logo.svg"], // Ensure the image exists in `public/`
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <FloatingBlobs />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hilman Haikal",
              "jobTitle": "Frontend Developer",
              "url": "https://hlmnhkl.netlify.app/",
              "sameAs": [
                "https://github.com/hilmanhaikal",
                "https://linkedin.com/in/hilmanhaikal"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
