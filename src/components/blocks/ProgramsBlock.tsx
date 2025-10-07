import TextCard from '@/components/TextCard';
export default function ProgramBlock() {
    const programsInfo = [
        {
            heading: 'Undergraduate',
            content: 'BSc in Integrative Systems and Design',
        },
        {
            heading: 'Undergraduate',
            content: 'Design Minor',
        },
        {
            heading: 'Postgraduate',
            content: 'Msc in Technology Leadership and Entrepreneurship',
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
        },
    ];

    return (
        <div>
            <div className="container relative overflow-clip flex flex-col py-section-gap gap-section-title-gap dot-pattern before:top-[-95px] before:right-0 [--dot-color:var(--isd-secondary-1)]">
                <h1 className="text-h1 offset-text-background uppercase">
                    Programs
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-component-gap-sm">
                    {programsInfo.map((program, index) => (
                        <TextCard
                            key={index}
                            heading={program.heading}
                            content={program.content}
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
