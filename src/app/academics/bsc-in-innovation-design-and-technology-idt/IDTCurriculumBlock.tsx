import Image from 'next/image';
import IDTCurriculum from '@/assets/idt-curriculum.jpg';
import Link from 'next/link';
import { Link2 } from 'lucide-react';
export default function IDTCurriculumBlock() {
    const curriculumDetails = [
        {
            year: '2022/2023',
            href: 'https://ugadmin.hkust.edu.hk/prog_crs/ug/202223/pdf/22-23isdn.pdf',
        },
        {
            year: '2023/2024',
            href: 'https://ugadmin.hkust.edu.hk/prog_crs/ug/202324/pdf/23-24isdn.pdf',
        },
        {
            year: '2024/2025',
            href: 'https://ugadmin.hkust.edu.hk/prog_crs/ug/202425/pdf/24-25isdn.pdf',
        },
        {
            year: '2025/2026',
            href: 'https://ugadmin.hkust.edu.hk/prog_crs/ug/202526/pdf/25-26isdn.pdf',
        },
    ];

    return (
        <div className="flex flex-col gap-[72px]">
            <div className="flex flex-col gap-9">
                <h2 className="text-4xl font-bold text-primary">Curriculum</h2>
                <div>
                    <p>
                        Every student entering HKUST needs to complete 30
                        credits of core courses, which provide students with a
                        balanced and broad education. In the first year, IDT
                        students acquire fundamental design and technical
                        skills, which are the two components they need to
                        integrate to enhance the design of integrative systems
                        in their second-, third- and fourth-year projects. One
                        prominent feature of the IDT curriculum is that students
                        are free to choose advanced technical courses of their
                        interest and the technical role they play in the
                        yearlong project. Beyond our core curriculum, students
                        can participate in many extracurricular activities to
                        enhance their leadership and research skills and
                        cultural competence as well as to acquire first-hand
                        working experience in the industry. Students with a
                        strong interest in a particular technology area can opt
                        for a double major or minor.
                    </p>
                    <p className="mb-3">Curriculum and courses details:</p>
                    <div className="flex flex-col gap-3">
                        {curriculumDetails.map((item) => (
                            <Link
                                key={item.year}
                                href={item.href}
                                className="flex flex-row gap-[10px] text-primary"
                            >
                                <Link2 />
                                <p>
                                    For students admitted in{' '}
                                    <span className="text-secondary font-bold">
                                        {item.year}
                                    </span>
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Image
                src={IDTCurriculum}
                alt="IDT Curriculum"
                className="w-full h-auto object-contain"
            />
        </div>
    );
}
