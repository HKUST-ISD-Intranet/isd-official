'use client';
import React, { useState } from 'react';
import SummaryBlock from './SummaryBlock';
import EducationalObjectiveBlock from './EducationalObjectiveBlock';
import LearningOutcomeBlock from './LearningOutcomeBlock';
import CurriculumBlock from './CurriculumBlock';
import ResearchAreasBlock from './ResearchAreasBlock';
import AcademicAndIndustrialPartnersBlock from './AcademicAndIndustrialPartnersBlock';
import ApplicationAndFinancialAssistanceBlock from './ApplicationAndFinancialAssistanceBlock';
import ProgramContactBlock from './ProgramContactBlock';

export default function MPTIEBlock() {
    const [activeContentId, setActiveContentId] = useState('edu-obj');

    const content = [
        {
            title: 'Educational Objectives',
            id: 'edu-obj',
            content: (
                <>
                    <SummaryBlock />
                    <EducationalObjectiveBlock />
                    <LearningOutcomeBlock />
                </>
            ),
        },

        {
            title: 'Curriculum',
            id: 'curriculum',
            content: (
                <>
                    <CurriculumBlock />
                </>
            ),
        },
        {
            title: 'Research & Collaborators',
            id: 'research',
            content: (
                <>
                    <ResearchAreasBlock />
                    <AcademicAndIndustrialPartnersBlock />
                </>
            ),
        },
        {
            title: 'Application',
            id: 'app',
            content: (
                <>
                    <ApplicationAndFinancialAssistanceBlock />
                    <ProgramContactBlock />
                </>
            ),
        },
    ];

    return (
        <>
            <div
                className="dot-pattern before:bottom-[-1150px] before:left-[-115px] [--dot-color:var(--isd-secondary-1)]"
                // aria-hidden
            />
            <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap">
                <div className="flex flex-col gap-component-gap-sm">
                    <div className="flex flex-col gap-component-gap-sm">
                        <h1 className="text-h1 offset-text-background text-isd-font-1 text-balance">
                            MPhil in Technology Innovation and Entrepreneurship
                            (TIE)
                        </h1>
                        <div className="w-auto overflow-clip">
                            <div className="w-full flex items-center gap-component-gap-sm text-isd-font-2">
                                {content.map((link) => (
                                    <div
                                        key={link.id}
                                        onClick={() =>
                                            setActiveContentId(link.id)
                                        }
                                        className={`text-h2 h-[60px] flex items-center box-border cursor-pointer ${
                                            activeContentId === link.id
                                                ? 'text-isd-secondary border-b-3 border-isd-secondary'
                                                : 'text-isd-font-2'
                                        }`}
                                    >
                                        <span>{link.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {content.map((section, index) => (
                    <div
                        key={index}
                        id={section.id}
                        className={`flex flex-col gap-[24px] ${
                            activeContentId === section.id ? '' : 'hidden'
                        }`}
                    >
                        <div className="text-md leading-[28px] flex flex-col gap-component-gap text-isd-font-1">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
