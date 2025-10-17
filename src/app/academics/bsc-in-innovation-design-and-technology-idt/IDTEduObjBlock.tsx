export default function IDTEduObjBlock() {
    return (
        <div className="flex flex-col gap-[72px]">
            <p>
                The Division of Integrative Systems and Design developed its
                <b className="text-isd-secondary">
                    {' '}
                    Bachelor of Science (BSc) program in Innovation, Design and
                    Technology{' '}
                </b>
                (previously known as Integrative Systems and Design) with the
                objective to provide a stimulating environment for students to
                integrate design skills with domain expertise, which currently
                includes mechanical engineering, electrical and electronics
                engineering as well as computer science and engineering, in an
                interdisciplinary environment. The teaching methodology used by
                the Division is active learning, which engages students actively
                in the learning process. In this process, students increase
                their focus and attention helping them develop a deep
                understanding of complex issues related to engineering and
                design. A unique feature of this UG program is that this program
                adopts team-based and project-based learning as the primary
                method of instruction. Students have to work on project courses
                thought-out their four years of study. These project courses
                represent an important component of IDT design-infused
                curriculum, which provides students opportunities to practice
                integration of design skills while developing expertise in
                different engineering disciplines.
            </p>
            <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-bold text-primary">
                    Educational Objectives
                </h2>
                <div className="flex flex-col gap-3">
                    <p className="text-isd-secondary font-bold">
                        Provide education opportunities for students to
                        integrate design skills with domain expertise in an
                        interdisciplinary environment
                    </p>
                    <p className="text-isd-secondary font-bold">
                        Promote active project-based learning:
                    </p>
                </div>

                <ul className="list-disc list-outside pl-6">
                    <li>
                        Encourage students to take ownership of their projects,
                        develop project management and teamwork skills and
                        become independent learners
                    </li>
                    <li>
                        Motivate students to share their skills and knowledge
                        with each other and become good team players and leaders
                    </li>
                    <li>Empower students to develop into lifelong learners</li>
                    <li>
                        Prepare students to identify and solve problems that are
                        important and impactful to the communities
                    </li>
                    <li>
                        Provide a stimulating academic working environment,
                        which allows students to apply critical thinking skills
                        to innovate new product design solutions
                    </li>
                    <li>
                        Support development of effective communicating skills to
                        share their innovative ideas with each other and present
                        their solutions in various presentations
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-[24px] border-l-3 border-isd-primary px-component-gap-sm py-element-gap bg-isd-primary-2 p-element-gap">
                <h2 className="text-4xl font-bold text-primary">
                    Learning Outcomes
                </h2>
                <ul className="list-disc list-outside pl-6">
                    <li>
                        Be capable to identify and formulate problems in a
                        multidisciplinary context with an understanding of
                        science, engineering, technology, business and design
                        issues and constraints
                    </li>
                    <li>
                        Develop innovative problem-solving skills through
                        hands-on learning and application of knowledge of
                        science, engineering and design in integrative systems
                    </li>
                    <li>
                        Integrate knowledge and skills using a team-based,
                        project-based pedagogy to tackle challenging problems
                        considering ethics and societal needs
                    </li>
                    <li>
                        Can effectively communicate in the technical language of
                        engineering and of design
                    </li>
                    <li>Be life-long learners</li>
                </ul>
            </div>
        </div>
    );
}
