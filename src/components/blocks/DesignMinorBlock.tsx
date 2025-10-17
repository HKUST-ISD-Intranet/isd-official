export default function DesignMinorBlock() {
    const content = [
        {
            subheading: 'Overview',
            content: (
                <p>
                    Design attributes, such as creativity and aesthetic
                    sensibility, are natural talents that can be cultivated
                    through education. The Minor Program in Design helps
                    students unleash their design potential and build up a
                    creative portfolio. Solving complex problems through systems
                    thinking, ISD can achieve its vision of a better life for
                    everyone. In the program, students learn fundamental design
                    theories, principles and methods, and how to solve
                    real-world problems via project-based learning. Students can
                    apply design knowledge to their own projects in their
                    disciplines to advance innovation, which is the key
                    objective of this Minor Program.
                </p>
            ),
        },
        {
            subheading: 'Program requirements and course list',
            content: (
                <p>
                    Please visit{' '}
                    <a
                        href=""
                        className="font-bold text-isd-secondary underline"
                    >
                        Undergraduate Minor Program in Design
                    </a>
                    .
                </p>
            ),
        },
        {
            subheading: 'Eligibility',
            content: (
                <p>
                    The Minor Program in Design is open to all HKUST students
                    except for those studying in the BSc program in Integrative
                    Systems and Design. Undergraduate students with an overall
                    CGA of 2.5 or above may enroll in this Minor Program.
                </p>
            ),
        },
        {
            subheading: 'Graduation requirements',
            content: (
                <p>
                    To graduate with a minor in Design, students must be
                    enrolled in the Minor Program and have completed a minimum
                    of 18 credits and all of its requirements, as well as all
                    the requirements of their major program of study. For credit
                    transfers, students can transfer a maximum of 6 credits to
                    the Minor Program. Out of the total credits required by the
                    minor program, at least 9 credits should be single-counted
                    within the minor and are not used to fulfill any other
                    requirements for graduation except the 120-credit degree
                    requirement. Students may use no more than 6 credits earned
                    from courses offered in pure online delivery mode to satisfy
                    the graduation requirements of a degree program. This
                    6-credit limit does not apply to credits obtained through
                    the credit transfer procedures of the University.
                </p>
            ),
        },
        {
            subheading: 'Application',
            content: (
                <p>
                    Students must declare their intention to enroll in the Minor
                    Program no earlier than the first regular term of their
                    second year of study but no later than the last day of the
                    add/drop period in the first regular term of their final
                    year of study.  To graduate with a minor program, students
                    must declare their intention and complete 
                    <a
                        href="https://registry.hkust.edu.hk/system/files/internal/Form%20RR-37.pdf?check_logged_in=1"
                        className="font-bold text-isd-secondary underline"
                    >
                        Form RR-37
                    </a>
                     (Declaration / Withdrawal of Undergraduate Minor Program)
                    to enroll in the minor program. For registration procedure
                    and schedule, please refer to {' '}
                    <a
                        href="https://registry.hkust.edu.hk/resource-library/minor-program-ug"
                        className="font-bold text-isd-secondary underline"
                    >
                        ARO's Minor Programs
                    </a>
                    website (ITSC login required) and pay attention to the
                    department's deadlines.
                </p>
            ),
        },
        {
            subheading: 'Enquiry',
            content: (
                <p>
                    Please email to the Division of Integrative Systems and
                    Design at{' '}
                    <a
                        href="mailto:isd@ust.hk "
                        className="font-bold text-isd-secondary underline"
                    >
                        isd@ust.hk 
                    </a>
                </p>
            ),
        },
    ];

    return (
        <>
            <div className="container overflow-y-clip flex flex-col pt-section-gap gap-component-gap-sm dot-pattern before:top-[-95px] before:-mr-component-gap-sm before:right-0 [--dot-color:var(--isd-primary-2)]">
                <h1 className="text-h1 offset-text-background text-isd-font-1 ">
                    Design Minor
                </h1>
                <div className="">
                    <h2 className="text-sm  tracking-wide text-isd-font-1">
                        Design for good. Design for a difference.
                    </h2>
                </div>
            </div>

            <div className="container overflow-y-clip flex flex-col mt-component-gap-sm">
                {content.map((section, index) => (
                    <div
                        key={index}
                        className="flex flex-col mb-component-gap "
                    >
                        {section.subheading && (
                            <h3 className="text-[36px] leading-[36px] font-bold font-isd-font-1 text-isd-primary">
                                {section.subheading}
                            </h3>
                        )}
                        <div className="text-lg leading-[28px] text-isd-font-3 mt-component-gap-sm">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
