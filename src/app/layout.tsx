import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const mulish = Mulish({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Home | Division of Integrative Systems and Design',
    description:
        'The Division of Integrative Systems and Design aims to nurture innovators using design and technology, with a project-based pedagogy integrating disciplines.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="isd-official">
            <body
                className={`${mulish.className} antialiased min-h-screen flex flex-col`}
            >
                <Header />
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
