export default function AboutISDNavbarBlock() {
    const links = [
        { title: "Head's Message", href: '#heads-message' },
        { title: 'What is ISD', href: '#what-is-isd' },
        { title: 'Join Us', href: '#join-us' },
    ];

    return (
        <div className="w-full overflow-clip pt-section-gap gap-section-title-gap dot-pattern before:top-[-115px] before:right-0 [--dot-color:var(--isd-secondary-1)]">
            <div className="w-full flex items-center justify-center gap-component-gap-sm divide-x-2 divide-isd-font-2/30 text-isd-font-2">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-h2 first:text-isd-primary pr-component-gap-sm last:pr-0"
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    );
}
