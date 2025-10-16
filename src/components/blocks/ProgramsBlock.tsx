import TextCard from '@/components/TextCard';
export default function ProgramBlock() {
    const programsInfo = [
        {
            heading: 'Undergraduate',
            content: 'BSc in Innovation, Design and Technology (IDT)',
        },
        {
            heading: 'Undergraduate',
            content: 'Design Minor',
        },
        {
            heading: 'Postgraduate',
            content: 'Msc in Technology Leadership and Entrepreneurship',
            link: '/academics/msc-tle/',
        },
        {
            heading: 'Postgraduate',
            content: 'MPhil in Technology Innovation and Entrepreneurship',
        },
        {
            heading: 'Postgraduate',
            content: 'MPhil & PhD Program',
        },
        {
            heading: 'Postgraduate',
            content: 'Early Admissions Scheme',
            link: '/early-admission/',
        },
    ];

    return (
        <div id="programs">
            <div className="w-full overflow-clip pt-section-gap gap-section-title-gap dot-pattern before:top-[-95px] before:right-[-10px] [--dot-color:var(--isd-secondary-1)]">
                <div className="container relative flex flex-col pb-section-gap gap-section-title-gap">
                    <h1 className="text-h1 offset-text-background uppercase container">
                        Programs
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-section-title-gap">
                        {programsInfo.map((program, index) =>
                            program.link ? (
                                <a key={index} href={program.link}>
                                    <TextCard
                                        heading={program.heading}
                                        content={program.content}
                                    />
                                </a>
                            ) : (
                                <TextCard
                                    key={index}
                                    heading={program.heading}
                                    content={program.content}
                                />
                            )
                        )}
                    </div>
                </div>
                <div
                    className="dot-pattern before:bottom-[25px] before:left-[-90px] [--dot-color:var(--isd-secondary-1)] "
                    aria-hidden
                />
            </div>{' '}
        </div>
    );
}
