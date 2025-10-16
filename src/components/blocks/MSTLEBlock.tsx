'use client';
import React, { useEffect } from 'react';
export default function MSTLEBlock() {
    const menu = [
        { title: 'Educational Objectives', id: 'edu-obj' },
        { title: 'Curriculum', id: 'curriculum' },
        { title: 'Admission & Application', id: 'adm-app' },
    ];

    useEffect(() => {
        const activeContent = window.document.getElementById('edu-obj');
        if (activeContent) {
            activeContent.classList.remove('hidden'); // Afficher le contenu sélectionné
        }
    }, []);

    const handleMenuClick = (id: string) => {
        // Hide everything
        const sections = ['edu-obj', 'curriculum', 'adm-app'];
        sections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('hidden');
            }
        });

        // Afficher le contenu cliqué
        const activeContent = document.getElementById(id);
        if (activeContent) {
            activeContent.classList.remove('hidden');
        }
    };

    const contentMenu = [
        {
            content: (
                <div className="flex flex-col gap-component-gap-sm">
                    <div className="flex flex-col">
                        <h1 className="text-h1 offset-text-background text-isd-font-1 uppercase">
                            Master of Science in Technology Leadership and
                            Entrepreneurship
                        </h1>
                        <div className="w-full overflow-clip pt-section-gap gap-section-title-gap">
                            <div className="w-full flex items-center justify-start gap-component-gap-sm divide-isd-font-2/30 text-isd-font-2">
                                {menu.map((link, index) => (
                                    <div
                                        key={link.id}
                                        onClick={() => handleMenuClick(link.id)}
                                        className="text-h2 first:text-isd-secondary pr-component-gap-sm last:pr-0 cursor-pointer"
                                    >
                                        {link.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const content = [
        {
            id: 'edu-obj',
            subheading: 'Educational Objectives',
            content: (
                <div className="flex flex-col gap-component-gap-sm">
                    <p className="text-isd-font-1">
                        <span className="text-isd-secondary font-[700]">
                            'Will I be the next technology leader and change the
                            world?'
                        </span>{' '}
                        This may be the question in your mind when you browse
                        this website. We will soon arrange an Info Session to
                        introduce the beauty of TLE. Please stay tuned to our
                        website.
                    </p>
                    <p>
                        Master of Science in Technology Leadership and
                        Entrepreneurship (TLE) program uniquely offers
                        technological and business learning components, as well
                        as entrepreneurial components paving the way for a
                        start-up. It is perfect for students who are:
                    </p>
                    <p className="text-isd-secondary font-[700]">
                        interested in building a strategic technical advantage
                        into their product.
                    </p>
                    <p className="text-isd-secondary font-[700]">
                        eager to access advanced facilities, know-hows, and a
                        talent pool for prototyping and launching their product
                        into the market.
                    </p>

                    <div className="flex flex-col gap-[18px] border-l-5 bg-isd-primary-2 border-l-isd-primary text-isd-font-1 p-component-gap-sm rounded-md">
                        <p className="text-h2 leading-[32px] text-isd-primary">
                            Learning Outcomes
                        </p>
                        <p>
                            Upon completion of the program, graduates will be
                            able to:
                        </p>
                        <ul>
                            <li className="flex before:text-center before:content-['•'] leading-[26px] before:w-component-gap-sm">
                                identify a product or a service that can make a
                                positive impact in some segments of society.
                            </li>
                            <li className="flex before:text-center before:content-['•'] leading-[26px] before:w-component-gap-sm">
                                use design principles to design a product.
                            </li>
                            <li className="flex before:text-center before:content-['•'] leading-[26px] before:w-component-gap-sm">
                                work effectively as an entrepreneur, product
                                developer, or project manager.
                            </li>
                        </ul>
                    </div>

                    <h3 className="text-[36px] leading-[36px] font-bold font-isd-font-1">
                        Major Components
                    </h3>
                    <div className="flex-1 flex flex-col gap-[12px]">
                        <table>
                            <tbody className="leading-[16px] text-[12px]">
                                <tr className="bg-isd-primary-2 text-isd-primary text-md text-left">
                                    <td className="p-[12px] border-2 border-white">
                                        Entrepreneurship
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        From conceptualization of products,
                                        prototype development and establishing a
                                        start-up, TLE program offers you
                                        essential training.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-isd-secondary text-md">
                                    <td className="p-[12px] border-2 border-white">
                                        Technology
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        Students can select technology-related
                                        courses specific to their projects, e.g.
                                        AI, computer vision, software design,
                                        etc.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-isd-primary text-md">
                                    <td className="p-[12px] border-2 border-white">
                                        Business
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        Exposure to business topics relevant to
                                        establishing and maintaining a start-up
                                        in the Greater Bay Area and the world.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ),
        },

        {
            id: 'curriculum',
            subheading: 'Curriculum',
            content: (
                <div className="flex flex-col gap-component-gap-sm">
                    <p className="text-isd-font-1">
                        Students are required to complete at least 30 credits of
                        courses, including 9 credits of core courses, 6 credits
                        of technical or science elective courses and 6 credits
                        of entrepreneurship or leadership elective courses
                        offered by the School Business and Management, the
                        School of Engineering, the School of Science and the
                        Division of Public Policy, as well as a 9-credit project
                        course. For details, please refer to the {' '}
                        <span className="text-isd-secondary font-[700] underline">
                            Postgraduate Program
                        </span>
                        , 
                        <span className="text-isd-secondary font-[700] underline">
                            Course Catalog
                        </span>
                         and 
                        <span className="text-isd-secondary font-[700] underline">
                            Program Brochure
                        </span>
                        .
                    </p>
                    <div className="flex flex-col items-center">
                        <p className="text-h2 leading-[32px] text-isd-primary text-center">
                            30 Credits
                        </p>
                        <div className="w-full border-b-2 border-isd-primary mt-2"></div>
                    </div>
                    <div className="flex items-center justify-between w-full text-h2 font-bold">
                        <div className="flex flex-col gap-[18px] bg-isd-primary-2 border-l-isd-primary text-isd-primary p-component-gap-sm rounded-md flex-1">
                            <p>Core Courses (9 credits)</p>
                        </div>
                        <span className="mx-2">+</span>
                        <div className="flex flex-col gap-[18px] bg-isd-secondary-1 border-l-isd-secondary text-isd-secondary p-component-gap-sm rounded-md flex-1">
                            <p>Elective Courses (12 credits)</p>
                        </div>
                        <span className="mx-2">+</span>
                        <div className="flex flex-col gap-[18px] bg-isd-primary-2 border-l-isd-primary text-isd-primary p-component-gap-sm rounded-md flex-1">
                            <p>TLE Project (9 credits)</p>
                        </div>
                    </div>

                    <div className="flex items-start justify-between w-full text-sm">
                        <div className="flex flex-col gap-[18px] bg-isd-primary-2 border-l-isd-primary text-isd-font-3 p-component-gap-sm rounded-md flex-1">
                            <p>Technology Leadership and Entrepreneurship</p>
                            <p>Product Development and Prototyping</p>
                            <p>Start-up Workshop</p>
                        </div>
                        <span className="mx-2"></span>
                        <div className="flex flex-col gap-[18px] bg-isd-secondary-1 border-l-isd-secondary text-isd-font-3 p-component-gap-sm rounded-md flex-1 ml-4">
                            <p>
                                Elective courses are a selection of
                                entrepreneurship and leadership as well as
                                technology and science related courses chosen
                                from the portfolio of the School of Business and
                                Management, the School of Engineering, the
                                School of Science, and the Academy of
                                Interdisciplinary Studies.
                            </p>
                        </div>
                        <span className="mx-2"></span>
                        <div className="ml-4"></div>
                    </div>

                    <div className="text-isd-font-3 text-sm">
                        *Classes are normally held on weekday evenings from
                        Monday to Friday; on Saturday mornings or afternoons.
                        Each course typically meets once a week for
                        approximately three hours. 
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap dot-pattern before:top-[-95px] before:-mr-component-gap-sm before:right-0 [--dot-color:var(--isd-primary-2)]">
            {contentMenu.map((section, index) => (
                <div key={index} className="flex flex-col gap-component-gap-sm">
                    <div className="text-lg leading-[28px] text-isd-primary">
                        {section.content}
                    </div>{' '}
                </div>
            ))}

            {content.map((section, index) => (
                <div
                    key={index}
                    id={section.id}
                    className="flex flex-col gap-component-gap-sm hidden"
                >
                    <h3 className="text-[36px] leading-[36px] font-bold font-isd-font-1">
                        {section.subheading}
                    </h3>
                    <div className="text-lg leading-[28px] text-isd-font-3">
                        {section.content}
                    </div>
                </div>
            ))}
        </div>
    );
}
