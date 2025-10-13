import HKUSTLogo from '@/assets/hkust-logo.svg';
import ISDLogo from '@/assets/isd-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const navItems = [
        {
            name: 'About ISD',
            href: '/about-isd',
            submenu: {
                items: [
                    {
                        name: "Head's Message",
                        href: '/about-isd#heads-message',
                    },
                    { name: 'What is ISD', href: '/about-isd#what-is-isd' },
                    { name: 'Join Us', href: '/about-isd#join-us' },
                ],
            },
        },
        {
            name: 'People',
            href: '/people',
            submenu: {
                items: [
                    { name: 'ISD Faculty', href: '/people' },
                    { name: 'Affiliates', href: '/people' },
                    { name: 'ISD Staff', href: '/people' },
                ],
            },
        },
        {
            name: 'Academics',
            href: '/academics',
            submenu: {
                items: [
                    { name: 'Programs', href: '/academics#programs' },
                    { name: 'Scholarships', href: '/academics' },
                    { name: 'Internship & Exchange', href: '/academics' },
                    { name: 'Facilities', href: '/academics' },
                ],
            },
        },
        { name: 'Research', href: '/research' },
        {
            name: 'News & Events',
            href: '/news',
            submenu: {
                items: [
                    { name: 'News', href: '/news' },
                    { name: 'Events', href: '/news' },
                    { name: 'Achievement', href: '/news' },
                ],
            },
        },
        { name: 'Collaborators', href: '/collaborators' },
        {
            name: 'Student Life',
            href: '/student-life',
            submenu: {
                items: [
                    { name: 'Student Competitions', href: '/student-life' },
                    {
                        name: 'Extracurricular Activities',
                        href: '/student-life',
                    },
                    { name: 'Internships', href: '/student-life' },
                    { name: 'Exchange', href: '/student-life' },
                    { name: 'Alumni Sharing', href: '/student-life' },
                    { name: 'Useful Links', href: '/student-life' },
                ],
            },
        },
    ];

    return (
        <nav className="bg-white px-section-gap sticky z-40 top-12 py-8">
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
                    {navItems.map((item, i) => (
                        <div className="relative group pb-2" key={item.name}>
                            <Link
                                href={item.href}
                                className="relative z-50 text-isd-font-3 text-nav group-hover:underline group-hover:underline-offset-10 group-hover:decoration-isd-primary group-hover:decoration-4"
                            >
                                {item.name}
                            </Link>

                            {item.submenu && (
                                <div className={"absolute mt-2 hidden group-hover:block group-focus-within:block bg-white border-gray-300 shadow-lg z-40" + (i === navItems.length - 1 ? ' right-0' : ' left-0')}>
                                    {item.submenu.items.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="block px-4 py-2 text-isd-font-3 text-nav-sub hover:bg-gray-100 whitespace-nowrap"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
