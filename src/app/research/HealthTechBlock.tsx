import HealthTech from '@/assets/research/health-tech.png';
import ResearchInfoCard from './ResearchInfoCard';
import SubHeading from './SubHeading';
import Image from 'next/image';

export default function HealthTechBlock() {
    return (
        <div>
            <div className="container flex flex-col gap-component-gap-sm py-section-gap max-w-full">
                <div className="flex flex-row items-center gap-component-gap">
                    {/* Left: Image */}
                    <div className="flex basis-1/2 justify-center">
                        <Image
                            src={HealthTech}
                            alt="health Tech"
                            className="w-full h-auto rounded-lg aspect-[1.5] object-cover"
                        />
                    </div>

                    {/* Middle: Vertical Divider (Large Screens Only) */}
                    <div className="hidden lg:block h-[288px] w-[5px] bg-primary rounded-full mx-auto"></div>

                    {/* Right: Research Info */}
                    <div className="flex basis-1/2 flex-col gap-[12px] justify-center">
                        <SubHeading text="health-Tech" />
                        {HealthTechTopics.map((topic) => (
                            <ResearchInfoCard
                                key={topic.title}
                                title={topic.title}
                                description={topic.description}
                                supervisor={topic.supervisor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const HealthTechTopics = [
    {
        title: 'Energy Storage',
        description:
            'Advanced manufacturing of solid-state lithium batteries as energy storage device for next-generation EV and portable electronic devices',
        supervisor: 'Mitch LI',
    },
    {
        title: 'Zero Carbon Architecture and future cities',
        description:
            'Smart building envelop design with advanced integrated renewable energy systems such as colour and semi-transparent photovoltaics. Low-carbon and resilient urban infrastructure for future cities.',
        supervisor: 'Changying XIANG',
    },
    {
        title: 'Urban Region 3D Reconstruction',
        description:
            'Using 3D reconstruction technique to create digital twins of buildings for planning, analysis and facility inspectation.',
        supervisor: 'Yuan LIU',
    },
    {
        title: 'Robot-aware modular integrated building (MIC) design and construction',
        description:
            'Design and construction of modular integrated buildings (MIC) tailored for temporary structures, optimized specifically for robotic assembly and construction.',
        supervisor: 'Ziqi WANG',
    },
    {
        title: 'Elastic Large Model Agent Serving at the Edge',
        description:
            'An elastic framework designed to optimize large model (LM) agent serving at the edge. By reducing latency and resource consumption while maintaining high accuracy and adaptability across varying edge conditions, it becomes essential for the development and deployment of LM-based edge intelligence.',
        supervisor: 'Wenchao XU',
    },
];
