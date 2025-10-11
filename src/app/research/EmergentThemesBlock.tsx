import EmergentImg1 from '@/assets/research/emergent-Img1.png';
import EmergentImg2 from '@/assets/research/emergent-Img2.png';

import ResearchInfoCard from './ResearchInfoCard';
import SubHeading from './SubHeading';
import Image from 'next/image';

export default function EmergentThemesBlock() {
    return (
        <div>
            <div className="container flex flex-col gap-[12px] py-section-gap max-w-full">
                <div className="flex flex-row items-center gap-component-gap">
                    {/* Left: Image */}
                    <div className="flex flex-col gap-4 basis-1/2 justify-center">
                        <Image
                            src={EmergentImg1}
                            alt="Emergent Theme 1"
                            width={900}
                            height={675}
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>

                    {/* Middle: Vertical Divider (Large Screens Only) */}
                    <div className="hidden lg:block h-[288px] w-[5px] bg-primary rounded-full mx-auto"></div>

                    {/* Right: Research Info */}
                    <div className="flex basis-1/2 flex-col gap-[12px] justify-center">
                        <SubHeading text="Emergent Themes" />
                        {EmergentThemesTopics1.map((topic) => (
                            <ResearchInfoCard
                                key={topic.title}
                                title={topic.title}
                                description={topic.description}
                                supervisor={topic.supervisor}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center gap-component-gap">
                    {/* Left: Image */}
                    <div className="flex flex-col gap-4 basis-1/2 justify-center">
                        <Image
                            src={EmergentImg2}
                            alt="Emergent Theme 2"
                            width={900}
                            height={675}
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>

                    {/* Middle: Vertical Divider (Large Screens Only) */}
                    <div className="hidden lg:block h-[288px] w-[5px] bg-primary rounded-full mx-auto"></div>

                    {/* Right: Research Info */}
                    <div className="flex basis-1/2 flex-col gap-[12px] justify-center">
                        {EmergentThemesTopics2.map((topic) => (
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

const EmergentThemesTopics1 = [
    {
        title: 'Low-alttitude economy infrastructure',
        description: 'Zero-energy vertiport, Unmanned Logistics',
        supervisor: 'Changying XIANG',
    },
    {
        title: 'Automation in construction',
        description: 'Robotic construction for modular building',
        supervisor: 'Changying XIANG',
    },
    {
        title: '3D LLM Agents',
        description:
            'Making LLMs understand 3D data and improve spatial reasoning ability for 3D analysis or 3D creation',
        supervisor: 'Yuan LIU',
    },
    {
        title: 'Simulators for autonomous cars',
        description:
            'Creating a simulator using both reconstructed and generated 3D assets to simulate corner driving cases for autonomous driving training',
        supervisor: 'Yuan LIU',
    },
    {
        title: 'AI-powered Service Robots',
        description:
            'AI-powered service robots designed to assist with daily tasks',
        supervisor: 'Ziqi WANG',
    },
];

const EmergentThemesTopics2 = [
    {
        title: 'Embedding AI seamlessly into everyday life',
        description:
            'Our work transforms everyday objects—like your smartphone or even your pillow—into intelligent partners in well-being.',
        supervisor: 'Qijia SHAO',
    },
    {
        title: 'Socio-Technical AI ',
        description:
            'Our research moves beyond treating AI as a purely technical tool, focusing instead on its thoughtful integration into human contexts. We operate on the principle that to truly bridge the human-AI gap, intelligence must be simulated not just in language, but in emotion, empathy, and nuanced understanding—simulating the heart and soul of human experience.',
        supervisor: 'Qijia SHAO',
    },
    {
        title: 'Revolutionize Education Paradigm',
        description:
            'We aim to transform education from a teacher-centric model to a collaborative, student-informed experience. ',
        supervisor: 'Qijia SHAO',
    },
    {
        title: 'Robotic metamaterials',
        description:
            'Design new materials with active and robotic components to create unprecedented material properties and emergent behaviors.',
        supervisor: 'Richard GU',
    },
    {
        title: 'Distributed LLM Decoding in Edge',
        description:
            'Develop highly effective collaborative schemes to enhance distributed inference for large language models (LLMs) across heterogeneous, resource-constrained edge devices.',
        supervisor: 'Wenchao XU',
    },
];
