import Link from 'next/link';

export default function AboutISDBlock() {
    const links = [
        { title: "Head's Message", href: '' },
        { title: 'What is ISD', href: '' },
        { title: 'Academics', href: '' },
    ];

    return (
        <div className="container flex flex-col py-section-gap gap-section-title-gap">
            <h1 className="text-h1 offset-text-background">ABOUT ISD</h1>

            <div className="flex flex-col gap-component-gap-sm">
                <p className="text-md text-isd-font-1">
                    The mission of the Division of Integrative Systems and
                    Design is to nurture a new generation of innovators who can
                    work across multiple disciplines and create disruptive
                    innovations to solve the world’s great challenges.
                </p>

                <div className="flex flex-row gap-component-gap-sm text-white">
                    {links.map((link) => (
                        <Link
                            href={link.href}
                            className="flex flex-1 items-center justify-between h-component-gap p-element-gap bg-isd-primary rounded-sm"
                        >
                            <span className="text-lg font-bold">
                                {link.title}
                            </span>
                            <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.25 7.00098C15.25 7.12957 15.2263 7.2574 15.1797 7.37695C15.1331 7.49658 15.0641 7.60619 14.9766 7.69922L10.0264 12.9687L10.0205 12.9736C9.84187 13.1528 9.60161 13.2539 9.34961 13.25C9.09771 13.2461 8.86081 13.1374 8.6875 12.9531C8.51469 12.7693 8.41783 12.5243 8.41406 12.2705C8.41035 12.0166 8.49987 11.7683 8.66699 11.5791L8.67187 11.5732L12.0273 8L1.7002 8C1.44297 7.99998 1.19928 7.89037 1.02246 7.70215C0.84637 7.51448 0.75 7.26286 0.75 7.00391C0.750082 6.74491 0.846236 6.49328 1.02246 6.30566C1.19928 6.11744 1.44297 6.00881 1.7002 6.00879L12.0361 6.00879L8.67187 2.42969L8.66699 2.4248C8.49892 2.23567 8.40883 1.98693 8.41211 1.73242C8.41543 1.47785 8.51232 1.23128 8.68555 1.04687C8.85921 0.862172 9.09713 0.753729 9.34961 0.75C9.60226 0.746268 9.84276 0.848346 10.0215 1.02832L10.0264 1.0332L14.9766 6.30176L15.0391 6.375C15.0974 6.45067 15.1448 6.53532 15.1797 6.625C15.2262 6.74452 15.25 6.87243 15.25 7.00098Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="0.5"
                                />
                            </svg>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
