'use client';
import React, { useEffect, useState } from 'react';

export default function MSTLEBlock() {
    const [activeContentId, setActiveContentId] = useState('edu-obj');
    const [activeMenuId, setActiveMenuId] = useState('edu-obj-menu');

    const menu = [
        {
            title: 'Educational Objectives',
            id: 'edu-obj',
            idMenu: 'edu-obj-menu',
        },
        { title: 'Curriculum', id: 'curriculum', idMenu: 'curriculum-menu' },
        {
            title: 'Admission & Application',
            id: 'adm-app',
            idMenu: 'adm-app-menu',
        },
    ];

    useEffect(() => {
        // Set initial active state
        setActiveContentId('edu-obj');
        setActiveMenuId('edu-obj-menu');
    }, []);

    const handleMenuClick = (id: string, idMenu: string) => {
        setActiveContentId(id);
        setActiveMenuId(idMenu);
    };

    const contentMenu = [
        {
            content: (
                <div className="flex flex-col gap-component-gap-sm">
                    <div className="flex flex-col">
                        <h1 className="text-h1 offset-text-background text-isd-font-1 ">
                            Master of Science in Technology Leadership and
                            Entrepreneurship
                        </h1>
                        <div className="w-auto overflow-clip pt-section-gap gap-section-title-gap">
                            <div className="w-full flex items-center justify-start gap-component-gap-sm divide-isd-font-2/30 text-isd-font-2">
                                {menu.map((link) => (
                                    <div
                                        key={link.id}
                                        id={link.idMenu}
                                        onClick={() =>
                                            handleMenuClick(
                                                link.id,
                                                link.idMenu
                                            )
                                        }
                                        className={`text-h2 text-center cursor-pointer pb-3 ${
                                            activeMenuId === link.idMenu
                                                ? 'text-isd-secondary border-b-3 border-isd-secondary'
                                                : 'text-isd-font-2'
                                        }`}
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
                            &lsquo;Will I be the next technology leader and
                            change the world?&rsquo;
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
                    <div>
                        <div className="text-isd-secondary font-[700]">
                            interested in building a strategic technical
                            advantage into their product.
                        </div>
                        <div className="text-isd-secondary font-[700]">
                            eager to access advanced facilities, know-hows, and
                            a talent pool for prototyping and launching their
                            product into the market.
                        </div>
                    </div>

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

                    <h3 className="text-[36px] leading-[36px] font-bold font-isd-font-1 text-isd-primary">
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
                            <a href="https://prog-crs.hkust.edu.hk/pgprog/2024-25/msc-tle">
                                Postgraduate Program
                            </a>
                        </span>
                        , 
                        <span className="text-isd-secondary font-[700] underline">
                            <a href="https://prog-crs.hkust.edu.hk/pgcourse/2022-23/MTLE">
                                Course Catalog
                            </a>
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

                    <table className="flex items-center justify-between w-full">
                        <tbody>
                            <tr className="text-h2 font-bold">
                                <td className=" flex flex-col  bg-isd-primary-2 text-isd-primary p-component-gap-sm rounded-md  min-w-80 h-2.0">
                                    Core Courses (9 credits)
                                </td>
                                <td className="p-component-gap-sm">+</td>
                                <td className="flex flex-col  bg-isd-secondary-1  text-isd-secondary p-component-gap-sm rounded-md ">
                                    Elective Courses (12 credits)
                                </td>
                                <td className="p-component-gap-sm">+</td>
                                <td className="flex flex-col  bg-isd-primary-2 text-isd-primary p-component-gap-sm rounded-md ">
                                    TLE Project (9 credits)
                                </td>
                            </tr>
                            <tr className="text-sm">
                                <td className="flex flex-col  bg-isd-primary-2  text-isd-font-3 p-component-gap-sm rounded-md ">
                                    <p>
                                        Technology Leadership and
                                        Entrepreneurship
                                    </p>
                                    <p>Product Development and Prototyping</p>
                                    <p>Start-up Workshop</p>
                                </td>
                                <td className="p-component-gap-sm"> </td>
                                <td className="flex flex-col  bg-isd-secondary-1  text-isd-font-3 p-component-gap-sm rounded-md max-w-200">
                                    Elective courses are a selection of
                                    entrepreneurship and leadership as well as
                                    technology and science related courses
                                    chosen from the portfolio of the School of
                                    Business and Management, the School of
                                    Engineering, the School of Science, and the
                                    Academy of Interdisciplinary Studies.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="text-isd-font-3 text-sm">
                        *Classes are normally held on weekday evenings from
                        Monday to Friday; on Saturday mornings or afternoons.
                        Each course typically meets once a week for
                        approximately three hours. 
                    </div>
                </div>
            ),
        },
        {
            id: 'adm-app',
            subheading: 'Admission & Application',
            content: (
                <div className="flex flex-col gap-component-gap-sm">
                    <p className="text-isd-font-1">
                        Applicants should have obtained a bachelor&apos;s degree
                        from a recognized institution, or an approved equivalent
                        qualification. For English Proficiency Requirements,
                        please refer to {' '}
                        <span className="text-isd-secondary font-[700] underline">
                            <a href="https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/admission-requirements">
                                {' '}
                                HKUST Fok Ying Tung Graduate School
                            </a>
                        </span>
                        . All applicants are considered on a competitive and
                        rolling basis. Early online application is strongly
                        recommended.
                    </p>

                    <div className="bg-isd-primary-2 text-md font-bold text-isd-primary p-5 text-center w-1/6">
                        Apply Now
                    </div>

                    <h3 className="text-[36px] leading-[36px] font-bold font-isd-font-1 text-isd-primary">
                        Faculty Members
                    </h3>

                    <p className="text-isd-font-1">
                        This program is a gateway for students to learn from our
                        professors with diverse knowledge and research
                        experience in the field gained from some of the top
                        engineering institutions from around the world.
                    </p>

                    <a className="cursor-pointer" href="/people">
                        <div className="bg-isd-primary-2 text-md font-bold text-isd-primary p-5 text-center w-1/6">
                            ISD Faculty List
                        </div>
                    </a>

                    <h3 className="text-[36px] leading-[36px] font-bold font-isd-font-1 text-isd-primary">
                        Contact Us{' '}
                    </h3>

                    <div className="flex-1 flex flex-col gap-[12px]">
                        <table>
                            <tbody className="leading-[16px] text-[12px]">
                                <tr className="bg-isd-primary-2 text-isd-primary text-md text-left">
                                    <td className="p-[12px] border-2 border-white">
                                        Email
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        <a href="mailto:enquirytle@ust.hk">
                                            enquirytle@ust.hk
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-isd-secondary text-md">
                                    <td className="p-[12px] border-2 border-white">
                                        Tel
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        +852 3469 2957
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-isd-primary text-md">
                                    <td className="p-[12px] border-2 border-white">
                                        Address
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        Room 5591, Lift 29-30, The Hong Kong
                                        University of Science and Technology,
                                        Clear Water Bay, Hong Kong
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-isd-secondary text-md">
                                    <td className="p-[12px] border-2 border-white">
                                        Linkedin
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        <a href="https://www.linkedin.com/school/hkust/">
                                            {' '}
                                            Click to view more
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-isd-primary text-md">
                                    <td className="p-[12px] border-2 border-white">
                                        YouTube
                                    </td>
                                    <td className="p-[12px] border-2 border-white">
                                        <a href="https://www.youtube.com/user/hkust">
                                            Click to view more
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap dot-pattern before:top-[-95px] before:-mr-component-gap-sm before:right-0 [--dot-color:var(--isd-primary-2)]">
            {contentMenu.map((section, index) => (
                <div key={index}>{section.content}</div>
            ))}

            {content.map((section, index) => (
                <div
                    key={index}
                    id={section.id}
                    className={`flex flex-col gap-component-gap-sm ${
                        activeContentId === section.id ? '' : 'hidden'
                    }`}
                >
                    <h3 className="text-[36px] leading-[36px] font-bold text-isd-primary">
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
