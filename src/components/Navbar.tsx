import HKUSTLogo from '@/assets/hkust-logo.svg';
import ISDLogo from '@/assets/isd-logo.svg';
// Image import removed: SVGs are rendered as components directly
import Link from 'next/link';

export default function Navbar() {
    const navItems = [
        { name: 'About ISD', href: '/about-isd' },
        { name: 'People', href: '/people' },
        { name: 'Academics', href: '/academics' },
        { name: 'Research', href: '/research' },
        { name: 'News & Events', href: '/news' },
        { name: 'Collaborators', href: '/collaborators' },
        { name: 'Student Life', href: '/student-life' },
    ];

    return (
        <nav className="bg-white px-section-gap sticky z-40 top-12 py-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 divide-x-1 divide-isd-primary">
                    <Link href="https://hkust.edu.hk/">
                        {/* HKUSTLogo is an SVG React component (SVGR) - render directly */}
                        <HKUSTLogo
                            className="h-14 w-auto pr-6"
                            aria-hidden
                            alt="HKUST Logo"
                        />
                    </Link>
                    <Link href="/">
                        {/* ISDLogo is an SVG React component (SVGR) - render directly */}
                        <ISDLogo
                            className="h-14 w-auto"
                            aria-hidden
                            alt="ISD Logo"
                        />
                    </Link>
                </div>

                <div className="inline-flex justify-center items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-isd-font-3 text-nav"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
