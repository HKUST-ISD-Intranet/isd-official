import HKUSTLogo from '@/assets/hkust-logo.svg';
import ISDLogo from '@/assets/isd-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const navItems = [
        { name: 'About ISD', href: '/about' },
        { name: 'People', href: '/people' },
        { name: 'Academics', href: '/academics' },
        { name: 'Research', href: '/research' },
        { name: 'News & Events', href: '/news' },
        { name: 'Collaborators', href: '/collaborators' },
        { name: 'Student Life', href: '/student-life' },
    ];

    return (
        <nav className="container bg-white px-2 py-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 divide-x-1 divide-isd-primary">
                    <Link href="https://hkust.edu.hk/">
                        <Image
                            src={HKUSTLogo}
                            alt="HKUST Logo"
                            className="h-14 w-auto pr-6"
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src={ISDLogo}
                            alt="ISD Logo"
                            className="h-14 w-auto"
                        />
                    </Link>
                </div>

                <div className="inline-flex justify-center items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-isd-font-3 font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
