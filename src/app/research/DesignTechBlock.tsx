import DesignTech from '@/assets/research/design-tech.png';
import ResearchInfoCard from './ResearchInfoCard';
import SubHeading from './SubHeading';
import Image from 'next/image';

export default function DesignTechBlock() {
    return (
        <div className="w-full bg-isd-primary-2">
            <div className="container flex flex-col gap-component-gap-sm py-section-gap max-w-full">
                <div className="flex flex-row items-center gap-component-gap">
                    {/* Left: Research Info */}
                    <div className="flex basis-1/2 flex-col gap-[12px] justify-center">
                        <SubHeading text="Design-Tech" />
                        {DesignTechTopics.map((topic) => (
                            <ResearchInfoCard
                                key={topic.title}
                                title={topic.title}
                                description={topic.description}
                                supervisor={topic.supervisor}
                            />
                        ))}
                    </div>

                    {/* Middle: Vertical Divider (Large Screens Only) */}
                    <div className="hidden lg:block h-[288px] w-[5px] bg-primary rounded-full mx-auto"></div>

                    {/* Right: Image */}
                    <div className="flex basis-1/2 justify-center">
                        <Image
                            src={DesignTech}
                            alt="Design Tech"
                            className="w-full h-auto rounded-lg aspect-[1.5] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const DesignTechTopics = [
    {
        title: '3D asset generation',
        description:
            'Automatically creating 3D assets, including 3D meshes, motion, avatars and 3D scenes, for video games or films using generative models.',
        supervisor: 'Yuan LIU',
    },
    {
        title: '3D-aware video generation',
        description:
            'Generating videos using underlying 3D representations to improve consistency and controllability.',
        supervisor: 'Yuan LIU',
    },
    {
        title: 'Fashion design',
        description: '',
        supervisor: 'Li LI, Tracy MOK, Yuan LIU',
    },
    {
        title: 'Robot-aware 3D assembly design And fabrication',
        description:
            'Generating 3D assemblies that fulfill customized user requirements and are suitable for robotic fabrication.',
        supervisor: 'Ziqi WANG',
    },
    {
        title: 'Wearable robotics',
        description:
            'Soft, wearable systems that are comfortable to wear and have integrated robotic assistance for an immersive experience and therapeutic potential.',
        supervisor: 'Richard GU',
    },
    {
        title: 'Creativity Support',
        description:
            'AR/VR performances, Generative AI for interactive experiences.',
        supervisor: 'Tristan Camille BRAUD',
    },
];
