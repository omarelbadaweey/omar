import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import CustomCursor from "./components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://your-domain.com"; // استبدله بدومينك الفعلي

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Omar Elbadawey | Senior Full-Stack & MERN Developer",
    template: "%s | Omar Elbadawey",
  },
  description:
    "Portfolio of Omar Elbadawey, a Full-Stack Web Developer specializing in MERN stack, Next.js, TypeScript, and modern scalable web applications.",
  keywords: [
    "Omar Elbadawey",
    "عمر البدوي",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer Egypt",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Omar Elbadawey", url: siteUrl }],
  creator: "Omar Elbadawey",
  publisher: "Omar Elbadawey",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Omar Elbadawey | Senior Full-Stack & MERN Developer",
    description:
      "Full-Stack Web Developer specializing in MERN stack, Next.js, and modern high-performance web applications.",
    url: siteUrl,
    siteName: "Omar Elbadawey Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Omar Elbadawey - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Elbadawey | Senior Full-Stack Developer",
    description:
      "Specializing in MERN stack, Next.js, and modern web application development.",
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omar Elbadawey",
    alternateName: "عمر البدوي",
    url: siteUrl,
    image: `${siteUrl}/logo.jpeg`,
    jobTitle: "Full-Stack & MERN-Stack Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Self-Employed",
    },
    sameAs: [
      "https://github.com/omarelbadaweey?tab=repositories",
      "https://www.linkedin.com/in/omar-elbadawey-4950832b3",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Full Stack Web Development",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <CustomCursor/>
        <Header />
          <AnimatePresence>{children}</AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}