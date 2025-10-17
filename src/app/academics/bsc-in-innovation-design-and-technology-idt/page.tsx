'use client';
import React, { useEffect, useState } from 'react';
import HeroImageFile from '@/assets/scholarships-img.png';
import HeroImage from '@/components/HeroImage';
import IDTEduObjBlock from './IDTEduObjBlock';
import IDTCurriculumBlock from './IDTCurriculumBlock';
import IDTAdmissionBlock from './IDTAdmissionBlock';

export default function IDTPage() {
    const [activeMenuId, setActiveMenuId] = useState('edu-obj-menu');
    const menu = [
        {
            title: 'Educational Objectives',
            id: 'edu-obj',
        },
        { title: 'Curriculum', id: 'curriculum' },
        {
            title: 'Admission Requirements',
            id: 'adm-req',
        },
    ];

    useEffect(() => {
        setActiveMenuId('edu-obj');
    }, []);

    const handleMenuClick = (id: string) => {
        setActiveMenuId(id);
    };
    return (
        <>
            <HeroImage image={HeroImageFile} />
            <div className="dot-pattern before:top-[-115px] before:right-[-10px] [--dot-color:var(--isd-primary-2)]" />

            <div className="container overflow-clip flex flex-col py-section-gap gap-component-gap">
                {/* FIXME - fix underline for multiple lines text */}
                <div>
                    <h1 className="text-h1 offset-text-background uppercase mb-9">
                        BSc in Innovation, Design and Technology (IDT)
                    </h1>

                    <div className="w-full flex items-center justify-start gap-component-gap-sm divide-isd-font-2/30 text-isd-font-2">
                        {menu.map((link) => (
                            <div
                                key={link.id}
                                id={link.id}
                                onClick={() => handleMenuClick(link.id)}
                                className={`text-h2 text-center cursor-pointer pb-3 ${
                                    activeMenuId === link.id
                                        ? 'text-isd-secondary border-b-3 border-isd-secondary'
                                        : 'text-isd-font-2'
                                }`}
                            >
                                {link.title}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {activeMenuId === 'edu-obj' && <IDTEduObjBlock />}{' '}
                    {activeMenuId === 'curriculum' && <IDTCurriculumBlock />}
                    {activeMenuId === 'adm-req' && <IDTAdmissionBlock />}
                </div>
            </div>
            {activeMenuId === 'edu-obj' && (
                <div className="dot-pattern before:top-[-65px] before:left-[-10px] [--dot-color:var(--isd-secondary-1)]" />
            )}
            {activeMenuId === 'curriculum' && (
                <div className="dot-pattern before:top-[-110px] before:left-[-10px] [--dot-color:var(--isd-secondary-1)]" />
            )}
            {activeMenuId === 'adm-req' && (
                <div className="dot-pattern before:top-[-2050px] before:left-[-10px] [--dot-color:var(--isd-secondary-1)]" />
            )}
        </>
    );
}
