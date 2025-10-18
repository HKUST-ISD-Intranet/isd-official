export default function ResearchAreasBlock() {
    const areas = [
        'Marine Tech, Underwater Vision, Transport, Communications',
        'Bio Health, Bio-inspired Design, [Tele] Medical Design, Wearable Healthcare Devices',
        'AI Hardware, Edge AI',
        'Low Energy System Design, Architectural Geometry, Sustainable Design',
        'Design Theory, Innovative Design, Human-centred Design',
        'Computer-Aided Design and Manufacturing (CAD/CAM)',
        'Computer Vision, Computer Graphics, Computation Design',
        'Augmented Reality, Pervasive and Cloud Computing',
        'System Designs, Embedded Systems',
        'Microelectronics, Beyond 5G, IoT',
        'Robotics Dynamics and Control, Systems Simulation and Modelling',
    ];

    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="text-[36px] leading-[36px] font-bold text-isd-primary">
                Research Areas
            </h2>

            <p>
                Through the program study, candidates will establish a robust
                foundation in the following areas, a profound sense of
                curiosity, and an aptitude for learning are ideal for this
                program.
            </p>

            <ul>
                {areas.map((area) => (
                    <li
                        key={area}
                        className="flex before:text-center before:content-['•'] leading-[26px] before:w-component-gap-sm"
                    >
                        {area}
                    </li>
                ))}
            </ul>
        </div>
    );
}
