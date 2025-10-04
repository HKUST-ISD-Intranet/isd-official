import Link from 'next/link';

export default function Footer() {
    const navTitles = [
        {
            title: 'About ISD',
            subheadings: [
                'Head’s Message',
                'What is ISD',
                'Join Us',
                'Contact Us',
            ],
        },
        {
            title: 'People',
            subheadings: ['ISD Faculty', 'Affiliates', 'ISD Staff'],
        },
        {
            title: 'Academics',
            subheadings: [
                'Programs',
                'Scholarships',
                'Internship & Exchange',
                'Facilities',
            ],
        },
        {
            title: 'News & Events',
            subheadings: ['News', 'Events', 'Achievement'],
        },
        {
            title: 'Student Life',
            subheadings: [
                'Student Competitions',
                'Extracurricular Activities',
                'Internship',
                'Exchange',
                'Alumni Sharing',
            ],
        },
    ];

    const divisionInfo = [
        {
            title: 'Division of Integrative Systems and Design',
            subtexts: [
                'Location: Room 5591, Lift 29-30, The Hong Kong University of Science and Technology, Clear Water Bay, Hong Kong',
                'Tel: +852 3469 2723',
                'Fax: +852 3521 0943',
                'Email: isd@ust.hk',
            ],
        },
    ];
    return (
        <footer className="bg-isd-primary text-white px-section-gap py-[61px]">
            <div className="container flex flex-col gap-[60px]">
                <div>
                    <div className="flex flex-row justify-start divide-x-1 divide-white gap-component-gap pb-[24px]">
                        <div className="flex flex-row justify-start gap-component-gap-sm pr-component-gap w-full">
                            {navTitles.map((nav) => (
                                <div key={nav.title} className="flex flex-col">
                                    <h3 className="font-bold uppercase mb-[24px]">
                                        {nav.title}
                                    </h3>
                                    <div className="flex flex-col gap-[24px] text-sm">
                                        {nav.subheadings.map((sub) => (
                                            // TODO: add hrefs
                                            <Link key={sub} href="">
                                                {sub}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-start gap-component-gap-sm flex-1/3">
                            {divisionInfo.map((nav) => (
                                <div key={nav.title} className="flex flex-col">
                                    <h3 className="font-bold uppercase mb-[24px]">
                                        {nav.title}
                                    </h3>
                                    <div className="flex flex-col gap-[24px] text-sm">
                                        {nav.subtexts.map((sub) => (
                                            <p key={sub}>{sub}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="justify-start font-bold uppercase flex flex-row gap-component-gap-sm">
                        <p>research</p>
                        <p>collaboration</p>
                    </div>
                </div>

                {/* TODO - bottom row undone */}
                <div>
                    <p className="text-center text-xs">
                        Copyright &copy; The Hong Kong University of Science and
                        Technology. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
