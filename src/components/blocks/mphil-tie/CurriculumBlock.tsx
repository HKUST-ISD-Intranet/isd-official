import Curriculum from '@/assets/mphil-curriculum.png';
import Image from 'next/image';

export default function CurriculumBlock() {
    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="text-[36px] leading-[36px] font-bold text-isd-primary">
                Educational Objectives
            </h2>

            <div className="flex flex-col gap-component-gap-sm">
                <p>
                    Students are required to take a total of 12 credits of
                    coursework (including 6 credits of core courses, i.e. Design
                    Thinking, Entrepreneurial Literacy, and 6 credits of
                    elective courses), to fulfill HKUST graduation requirements,
                    and complete individual thesis research. Besides the
                    required courses, students will be equipped with Graduate
                    Teaching Assistant Training, Professional Development
                    Courses, and Language courses for full-person development.
                    The detailed curriculum can be found in the{' '}
                    <a
                        href="https://prog-crs.hkust.edu.hk/pgprog/2025-26/mphil-tie"
                        className="font-bold text-isd-secondary underline"
                    >
                        Program Catalog
                    </a>
                    .
                    <br />
                    <br />
                    Besides the required courses, Industrial Engagement
                    Workshops, Field Trips & Exhibitions, as well as Technology
                    Innovation and Entrepreneurship Seminar will be provided. 
                    <br />
                    <br />
                    Students in teams of 4 to 5 will collaboratively develop a
                    product prototype or service throughout the program, and
                    conduct a product demonstration. Each team will be assigned
                    a prime supervisor and include additional supervisors based
                    on the specialized expertise or guidance necessary from
                    faculty members.
                    <br />
                    <br />
                    Students are required to complete an individual thesis
                    related to the group-based product prototype or service they
                    worked on.
                </p>

                <Image src={Curriculum} alt="Curriculum Timeline" />

                <p>
                    The 2-year program journey and milestones are illustrated as
                    above. 
                </p>
            </div>
        </div>
    );
}
