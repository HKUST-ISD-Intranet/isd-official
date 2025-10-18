export default function LearningOutcomeBlock() {
    const outcomes = [
        'Tackle challenges of technology innovation in a real context',
        'Diversify market sense.',
        'Converge resources to integrate supply chains and industry pain points.',
        'Possess outstanding technical capabilities and leadership.',
        'Communicate effectively to do market research and form groups.',
        'Learn fast from changing scenarios and study interdisciplinarity.',
        'Implement products to fit the market need and maintain sustainability.',
        'Iterate products continuously and have the ability to commercialize.',
    ];

    return (
        <div className="flex flex-col gap-[24px] border-l-5 bg-isd-primary-2 border-l-isd-primary text-isd-font-1 p-component-gap-sm">
            <h2 className="font-bold text-[36px] leading-[36px] text-isd-primary">
                Learning Outcomes
            </h2>
            <div className="gap-[12px] flex flex-col text-md">
                <p>
                    Upon completion of the program, graduates will be able to:
                </p>
                <ul>
                    {outcomes.map((outcome) => (
                        <li
                            key={outcome}
                            className="flex before:text-center before:content-['•'] leading-[26px] before:w-component-gap-sm"
                        >
                            {outcome}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
