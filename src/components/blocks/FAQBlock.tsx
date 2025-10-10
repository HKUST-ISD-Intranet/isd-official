import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FAQBlock() {
    const FAQ = [
        {
            Q: 'Q1: I haven’t taken the TOEFL/IELTS yet. Can I still apply?',
            A: 'Absolutely! You can submit your application now, but please note that meeting the University’s English language requirements will be necessary upon admission.',
        },
        {
            Q: 'Q2: When is the early admission application deadline?',
            A: 'Mark your calendars! The early admission application closes on August 15, 2026.',
        },
        {
            Q: 'Q3: When will I receive an offer?',
            A: 'Offers will start going out around late October or early November, with additional offers sent out as decisions are finalized, often with support from prospective advisors. Exceptional applicants may also receive early offers over the summer!',
        },
        {
            Q: 'Q4: I didn’t receive an offer in the first batch. Should I contact the faculty?',
            A: 'While it’s best to avoid mass emails, we encourage you to reach out thoughtfully. Differentiate your inquiry by highlighting your specific interest in their research and how your skills align. If you have insights or ideas based on their work, don’t hesitate to share!',
        },
    ];

    return (
        <div className="container overflow-clip flex flex-col py-section-gap gap-section-title-gap dot-pattern before:top-[-95px] before:right-0 [--dot-color:var(--isd-secondary-1)]">
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

                <div className="flex flex-col lg:flex-row gap-component-gap-sm text-white">
                    {FAQ.map((faq, i) => (
                        <div
                            className={
                                'flex flex-col text-black rounded-sm p-element-gap pt-component-gap-sm gap-[12px] ' +
                                (i % 2
                                    ? 'bg-isd-secondary-1 text-isd-secondary'
                                    : 'bg-isd-primary-2 text-isd-primary')
                            }
                        >
                            <p className="text-h4 font-bold">{faq.Q}</p>
                            <p className="text-md">{faq.A}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
