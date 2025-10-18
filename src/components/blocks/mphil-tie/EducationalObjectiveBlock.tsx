const objectives = [
    {
        title: 'A research-driven entrepreneurship education',
        body: 'This approach ensures graduates are well-equipped to be technical experts in specific areas and are able to originate solutions and overcome technical barriers of complex problems.',
    },
    {
        title: 'A research-to-industry ecosystem',
        body: 'A synergistic ecosystem linking students with industry practitioners, investors, and other relevant stakeholders to offer practical experience in commercializing original research outcomes to resolve real-life challenges.',
    },
    {
        title: 'Collaborative learning and personalized research endeavours',
        body: 'TIE promotes teamwork and individual research contribution. Students will pursue individual thesis topics linked to a prototype/service developed by their team.',
    },
];

export default function EducationalObjectiveBlock() {
    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="text-[36px] leading-[36px] font-bold text-isd-primary">
                Educational Objectives
            </h2>

            <div className="flex flex-col gap-[12px]">
                <p>
                    The TIE program encapsulates HKUST’s accumulated experience
                    in fostering innovation and entrepreneurship and propels
                    students to the forefront of technological advancement and
                    enterprise creation. TIE has three key features: 
                </p>

                {objectives.map((objective) => (
                    <div key={objective.title} className="flex flex-col">
                        <h3 className="text-isd-secondary font-bold">
                            {objective.title}
                        </h3>
                        <p className="text-isd-font-3">{objective.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
