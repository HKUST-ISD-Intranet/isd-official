export default function ApplicationAndFinancialAssistanceBlock() {
    return (
        <div className="flex flex-col items-start gap-[24px]">
            <h2 className="text-[36px] leading-[36px] font-bold text-isd-primary">
                Application and Financial Assistance
            </h2>
            <p>
                TIE requires a period of two years of study in full-time mode.
                For details on admission requirements and the application
                process, please visit the{' '}
                <a
                    href="https://prog-crs.hkust.edu.hk/pgprog/2025-26/mphil-tie"
                    className="font-bold text-isd-secondary underline"
                >
                    Program Catalog
                </a>
                .<br />
                Typically, all qualified students accepted to HKUST MPhil
                programs will receive{' '}
                <a
                    href="https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/scholarships-and-fees"
                    className="font-bold text-isd-secondary underline"
                >
                    postgraduate studentship
                </a>{' '}
                (PGS) which carries financial assistance sufficient for an
                individual’s cost of living in Hong Kong. For detailed
                regulations, please visit the{' '}
                <a
                    href="https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/scholarships-and-fees"
                    className="font-bold text-isd-secondary underline"
                >
                    FYTGS webpage
                </a>{' '}
                and{' '}
                <a
                    href="https://fytgs.hkust.edu.hk/academics/Academic-Regulations-and-Requirements/Handbook-for-Research-Postgraduate-Studies/preface"
                    className="font-bold text-isd-secondary underline"
                >
                    Handbook for Research Postgraduate Studies
                </a>{' '}
                for details.
                <br />
                <br />
                Please apply through:
            </p>

            <button className="bg-isd-primary-2 text-md font-bold text-isd-primary px-[36px] py-[10px] text-center">
                Online Application
            </button>
        </div>
    );
}
