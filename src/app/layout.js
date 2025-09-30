import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nasim Ahamed - Full Stack Developer | PHP Laravel React Next.js Expert",
  description: "Professional full-stack developer specializing in PHP, Laravel, React, Next.js, and modern web technologies. 3+ years experience building scalable web applications. View portfolio projects and hire me for your next development project.",
  keywords: [
    "Nasim Ahamed",
    "full stack developer",
    "PHP developer",
    "Laravel developer",
    "React developer",
    "Next.js developer",
    "web development",
    "software engineer",
    "portfolio",
    "hire developer",
    "Bangladesh developer",
    "freelance developer",
    "web applications",
    "CodeIgniter",
    "Django",
    "MySQL",
    "PostgreSQL",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap"
  ],
  authors: [{ name: "Nasim Ahamed", url: "https://nasimahamed.dev" }],
  creator: "Nasim Ahamed",
  publisher: "Nasim Ahamed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nasimahamed.dev'),
  alternates: {
    canonical: '/',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  openGraph: {
    title: "Nasim Ahamed - Full Stack Developer | PHP Laravel React Expert",
    description: "Professional full-stack developer with 3+ years experience. Specializing in PHP, Laravel, React, Next.js. View my portfolio and let's build your next project together.",
    url: 'https://nasimahamed.dev',
    siteName: 'Nasim Ahamed Portfolio',
    images: [
      {
        url: '/images/nasim.jpg',
        width: 1200,
        height: 630,
        alt: 'Nasim Ahamed - Full Stack Developer Portfolio',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Bangladesh',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nasim Ahamed - Full Stack Developer | PHP Laravel React Expert",
    description: "Professional full-stack developer with 3+ years experience. Specializing in PHP, Laravel, React, Next.js. View portfolio and hire me.",
    images: ['/images/nasim.jpg'],
    creator: '@nasimahamed',
    site: '@nasimahamed',
  },
  facebook: {
    appId: 'your-facebook-app-id',
  },
  linkedin: {
    profile: 'https://linkedin.com/in/nasimahamed',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    bing: 'your-bing-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
  },
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nasim Ahamed",
    "jobTitle": "Full Stack Developer",
    "description": "Professional full-stack developer specializing in PHP, Laravel, React, Next.js, and modern web technologies with 3+ years of experience.",
    "url": "https://nasimahamed.dev",
    "image": "https://nasimahamed.dev/images/nasim.jpg",
    "sameAs": [
      "https://github.com/nasimahamed",
      "https://linkedin.com/in/nasimahamed",
      "https://twitter.com/nasimahamed"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Bangladesh",
      "addressRegion": "Dhaka"
    },
    "knowsAbout": [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
      "Git",
      "REST APIs",
      "Web Development",
      "Full Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Bangladesh"
      },
      "estimatedSalary": "Competitive",
      "experienceRequirements": "3+ years"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nasimahamed.dev"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
