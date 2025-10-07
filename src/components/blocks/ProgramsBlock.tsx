import TextCard from '@/components/TextCard';
export default function ProgramBlock() {
    const programsInfo = [
        {
            heading: 'Undergraduate',
            content: 'BSc in Innovation, Design and Technology (IDT)',
            link: '/academics/ug/idt',
        },
        {
            heading: 'Undergraduate',
            content: 'Design Minor',
            link: '/academics/ug/design-minor',
        },
        {
            heading: 'Postgraduate',
            content: 'Msc in Technology Leadership and Entrepreneurship',
            link: '/academics/pg/tle',
        },
        {
            heading: 'Postgraduate',
            content: 'MPhil in Technology Innovation and Entrepreneurship',
            link: '/academics/pg/tie',
        },
        {
            heading: 'Postgraduate',
            content: 'MPhil & PhD Program',
            link: '/academics/pg/mphi-phd',
        },
        {
            heading: 'Postgraduate',
            content: 'Early Admissions Scheme',
            link: '/academics/pg/early-admission',
        },
    ];

    return (
        <div>
            <div className="container relative overflow-clip flex flex-col py-section-gap gap-section-title-gap">
                <h1 className="text-h1 offset-text-background uppercase">
                    Programs
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-section-title-gap">
                    {programsInfo.map((program, index) => (
                        <TextCard
                            key={index}
                            heading={program.heading}
                            content={program.content}
                            link={program.link}
                        />
                    ))}
                </div>
            </div>
            <div
                className="dot-pattern before:bottom-[25px] before:left-[-90px] [--dot-color:var(--isd-secondary-1)] "
                aria-hidden
            />
        </div>
    );
}
