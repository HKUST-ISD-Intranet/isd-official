export default function AcademicAndIndustrialPartnersBlock() {
    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="text-[36px] leading-[36px] font-bold text-isd-primary">
                Academic and Industrial Partners
            </h2>

            <p>
                The TIE MPhil program is designed to bridge the gap between
                academic research and real-world application. Our program
                collaborates with a diverse range of academic institutions and
                industrial partners to provide students with a comprehensive
                learning experience.
            </p>

            <div className="flex flex-col">
                <h3 className="text-isd-secondary font-bold">
                    Academic Partners
                </h3>
                <p className="text-isd-font-3">
                    Our academic partners include leading universities and
                    research institutions, including{' '}
                    <a
                        href="https://www.berkeley.edu/"
                        className="font-bold text-isd-secondary underline"
                    >
                        UC Berkeley
                    </a>
                    ,{' '}
                    <a
                        href="https://www.olin.edu/"
                        className="font-bold text-isd-secondary underline"
                    >
                        Olin College of Engineering
                    </a>
                    ,{' '}
                    <a
                        href="https://en.innoxsz.com/"
                        className="font-bold text-isd-secondary underline"
                    >
                        Shenzhen InnoX Academy
                    </a>
                    , etc. Collaborative research projects and joint seminars
                    can foster an environment of innovation, encouraging
                    students to engage with current trends and challenges in
                    technology.
                </p>
            </div>

            <div className="flex flex-col">
                <h3 className="text-isd-secondary font-bold">
                    Industrial Partners
                </h3>
                <p className="text-isd-font-3">
                    We also collaborate with various industrial partners,
                    including
                    <a
                        href="https://www.hkstp.org/"
                        className="font-bold text-isd-secondary underline"
                    >
                        HKSTP
                    </a>
                    , 
                    <a
                        href="https://www.hkcrc.hk/hong-kong-center-construction-robotics-hkcrc"
                        className="font-bold text-isd-secondary underline"
                    >
                        HKCRC
                    </a>
                    , 
                    <a
                        href="https://www.xbotpark.com/"
                        className="font-bold text-isd-secondary underline"
                    >
                        XBot Park
                    </a>
                    , etc. By working closely with industry leaders, students
                    will gain practical experience and insights into the
                    entrepreneurial landscape.
                </p>
            </div>
        </div>
    );
}
