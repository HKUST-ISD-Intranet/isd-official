export default function EarlyAdmissionInfoBlock() {
    const faq = [
        {
            question:
                'Q1: I haven’t taken the TOEFL/IELTS yet. Can I still apply?',
            answer: 'Absolutely! You can submit your application now, but please note that meeting the University’s English language requirements will be necessary upon admission.',
        },
        {
            question: 'Q2: When is the early admission application deadline?',
            answer: 'Mark your calendars! The early admission application closes on August 15, 2026.',
        },
        {
            question: 'Q3: When will I receive an offer?',
            answer: 'Offers will start going out around late October or early November, with additional offers sent out as decisions are finalized, often with support from prospective advisors. Exceptional applicants may also receive early offers over the summer!',
        },
        {
            question:
                'Q4: I didn’t receive an offer in the first batch. Should I contact the faculty?',
            answer: 'While it’s best to avoid mass emails, we encourage you to reach out thoughtfully. Differentiate your inquiry by highlighting your specific interest in their research and how your skills align. If you have insights or ideas based on their work, don’t hesitate to share!',
        },
    ];

    const content = [
        {
            content: (
                <div className="flex flex-col gap-component-gap-sm">
                    <div className="flex flex-col">
                        <h1 className="text-h1 offset-text-background text-isd-font-1 uppercase">
                            Postgraduate Student Early Recruiting
                        </h1>
                        <div className="h-[60px] flex items-center">
                            <h2 className="text-h2 uppercase tracking-wide text-isd-secondary">
                                Fall 2027 Intake
                            </h2>
                        </div>
                    </div>
                    <p className="text-isd-font-1">
                        Are you ready to shape the future? The Division of
                        Integrative Systems and Design (ISD) at the Hong Kong
                        University of Science and Technology (HKUST) is on the
                        lookout for exceptional MPhil and PhD candidates to join
                        us in Fall 2027. If you&apos;re an outstanding
                        undergraduate or graduate student eager to tackle the
                        world&apos;s most pressing challenges, we want to meet
                        you!
                    </p>
                </div>
            ),
        },
        {
            subheading: 'Why Choose ISD?',
            content: (
                <p>
                    In a rapidly evolving global landscape, issues like climate
                    change, energy shortages, and the integration of artificial
                    intelligence into daily life present urgent, multifaceted
                    challenges. Established in 2017, ISD is committed to
                    nurturing a new generation of technology innovators. Our
                    cutting-edge educational approach, combined with our
                    commitment to high-impact research, empowers students to
                    develop innovative solutions and drive real change.
                </p>
            ),
        },
        {
            subheading: 'What We Offer?',
            content: (
                <ul className="flex flex-col gap-[24px] text-isd-primary">
                    <ul className="flex flex-col">
                        <li className="flex before:text-center before:content-['•'] text-h2 leading-[48px] font-bold before:w-component-gap-sm">
                            Vibrant Academic Community
                        </li>
                        <li className="flex pl-component-gap-sm text-isd-font-3">
                            Join a dynamic team of over 20 remarkable faculty
                            members and collaborate with about 40 MPhil and 50
                            PhD peers who are as passionate about innovation as
                            you are.
                        </li>
                    </ul>
                    <ul className="flex flex-col">
                        <li className="flex before:text-center before:content-['•'] text-h2 leading-[48px] font-bold before:w-component-gap-sm">
                            Scholarship Support
                        </li>
                        <li className="flex pl-component-gap-sm text-isd-font-3">
                            Enjoy substantial financial backing throughout your
                            studies at HKUST. Each postgraduate student is
                            awarded a generous scholarship of approximately HKD
                            229,620 (USD 29,200) annually, while the annual
                            tuition fee is HKD 47,000 (USD 6,026).
                        </li>
                    </ul>
                    <ul className="flex flex-col">
                        <li className="flex before:text-center before:content-['•'] text-h2 leading-[48px] font-bold before:w-component-gap-sm">
                            Prestigious Hong Kong PhD Fellowship
                        </li>
                        <li className="flex pl-component-gap-sm text-isd-font-3">
                            Exceptional PhD candidates have the opportunity to
                            apply for the renowned Hong Kong PhD Fellowship
                            (HKPF), which provides around HKD 28,400 monthly
                            plus a travel allowance of HKD 14,200 annually,
                            alongside a one-time reward of HKD 40,000 from
                            HKUST.
                        </li>
                    </ul>
                </ul>
            ),
        },
        {
            subheading: "What We're Looking For?",
            content: (
                <p>
                    We seek applicants with strong academic records and a
                    Bachelor’s degree by the time they enroll. Proficiency in
                    English is also a requirement, as per university standards.
                </p>
            ),
        },
        {
            subheading: 'Important Dates to Remember',
            content: (
                <div className="flex gap-component-gap-sm">
                    <p className="flex-1">
                        Our recruitment process unfolds in two exciting phases.{' '}
                        <span className="bold text-isd-secondary font-bold">
                            Early Recruiting (Phase One)
                        </span>{' '}
                        focuses on identifying top MPhil and PhD applicants
                        through brief interviews. To apply, complete the
                        preliminary application form (note: early admissions
                        registration is currently closed). Early admission
                        interviews will be held starting October 2026.
                        Candidates will receive interview results within one to
                        two weeks post-interview. Even after Phase One, don’t
                        worry—regular application packages can still be
                        submitted to the HKUST Postgraduate Admissions.
                    </p>
                    <div className="flex-1 flex flex-col gap-[12px]">
                        <span className="font-bold px-[12px] text-lg leading-[28px] text-isd-primary">
                            Timetable for Academic Year 2027/28
                        </span>
                        <table>
                            <thead>
                                <tr className="bg-isd-primary-2 text-isd-primary text-[16px] text-left">
                                    <th className="p-[12px] border-2 border-white">
                                        Intake Term
                                    </th>
                                    <th className="p-[12px] border-2 border-white">
                                        Application Deadlines
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-isd-font-1 leading-[16px] text-[12px]">
                                <tr className="bg-isd-secondary-1">
                                    <td className="p-[12px] border-2 border-white">
                                        Early Admission – Fall Term
                                        <br />
                                        (Commencing in Sep 2027)
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        August 15, 2026
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2">
                                    <td className="p-[12px] border-2 border-white">
                                        Regular Admission - Fall Term
                                        <br />
                                        (Commencing in Sep 2027)
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        Non-local Applicants: June 1, 2027
                                        (Full-time)
                                        <br />
                                        Local Applicants: July 15,
                                        2027(Full-time & Part-time)
                                        <br />
                                        <span className="font-bold text-isd-primary">
                                            TBC
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1">
                                    <td className="p-[12px] border-2 border-white">
                                        Regular Admission - Spring Term
                                        <br />
                                        (Commencing in Feb 2028)
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        Non-local Applicants: November 1, 2027
                                        (Full-time)
                                        <br />
                                        Local Applicants: December 15,
                                        2027(Full-time & Part-time)
                                        <br />
                                        <span className="font-bold text-isd-secondary">
                                            TBC
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ),
        },
        {
            subheading: 'PhD Applicants',
            content: (
                <p>
                    If you’re in the top 10% of your class, with an average
                    grade above 85/100 and outstanding English skills, we
                    encourage you to reach out about the HKPF application
                    process. More information is available on the HKUST HKPFS
                    webpage.
                </p>
            ),
        },
        {
            subheading: "We're Here to Help!",
            content: (
                <p>
                    Have questions? We’re just an email away at{' '}
                    <a
                        href="mailto:isdpg@ust.hk"
                        className="text-isd-secondary underline font-bold"
                    >
                        isdpg@ust.hk
                    </a>
                    . We look forward to supporting you on your journey to
                    becoming a future leader in technology innovation.
                </p>
            ),
        },
        {
            subheading: 'Frequently Asked Questions',
            content: (
                <div className="flex flex-col gap-component-gap-sm text-isd-font-1 dot-pattern before:top-[-120px] before:left-[-210px] [--dot-color:var(--isd-secondary-1)]">
                    {faq.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col gap-[18px] border-l-5 odd:bg-isd-primary-2 odd:border-l-isd-primary even:bg-isd-secondary-1 even:border-l-isd-secondary p-component-gap-sm rounded-md"
                        >
                            <p className="text-h2 leading-[32px]">
                                {item.question}
                            </p>
                            <p className="text-isd-font-3">{item.answer}</p>
                        </div>
                    ))}
                </div>
            ),
        },
    ];

    return (
        <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap dot-pattern before:top-[-95px] before:-mr-component-gap-sm before:right-0 [--dot-color:var(--isd-primary-2)]">
            {content.map((section, index) => (
                <div key={index} className="flex flex-col gap-component-gap-sm">
                    {section.subheading && (
                        <h3 className="text-[36px] leading-[36px] font-bold font-isd-font-1">
                            {section.subheading}
                        </h3>
                    )}
                    <div className="text-lg leading-[28px] text-isd-font-3">
                        {section.content}
                    </div>
                </div>
            ))}
        </div>
    );
}
