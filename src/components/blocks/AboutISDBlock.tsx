import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutISDBlock() {
    const links = [
        { title: "Head's Message", href: '/heads-message' },
        { title: 'What is ISD', href: '/what-is-isd' },
        { title: 'Academics', href: '/academics' },
    ];

    return (
        <div className="container flex flex-col py-section-gap gap-section-title-gap dot-pattern before:top-[-95px] before:right-0 [--dot-color:var(--isd-secondary-1)]">
            <h1 className="text-h1 offset-text-background uppercase">
                ABOUT ISD
            </h1>

            <div className="flex flex-col gap-component-gap-sm">
                <p className="text-md text-isd-font-1">
                    The mission of the Division of Integrative Systems and
                    Design is to nurture a new generation of innovators who can
                    work across multiple disciplines and create disruptive
                    innovations to solve the world&apos;s great challenges.
                </p>

                <div className="flex flex-row gap-component-gap-sm text-white">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex flex-1 items-center justify-between h-component-gap p-element-gap bg-isd-primary rounded-sm"
                        >
                            <span className="text-h2 font-bold">
                                {link.title}
                            </span>
                            <ArrowRight size={20} strokeWidth={3} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
