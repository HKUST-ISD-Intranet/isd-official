import Image from 'next/image';
import Qian from '@/assets/qian.jpg';

export default function HeadsMessageBlock() {
    return (
        <div
            className="container overflow-clip flex flex-col pt-section-gap gap-section-title-gap scroll-mt-[95px]"
            id="heads-message"
        >
            <h1 className="text-h1 offset-text-background uppercase">
                HEAD&apos;S MESSAGE
            </h1>

            <div className="flex items-start gap-component-gap">
                <div className="flex flex-col border-r-3 border-isd-primary">
                    <div className="w-[360px] h-[468px]">
                        <Image
                            src={Qian}
                            alt="Qian's Profile Picture"
                            width={360}
                            height={468}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col bg-isd-primary-2 py-element-gap px-component-gap-sm gap-[12px]">
                        <h2 className="text-h2 leading-[32px] text-isd-primary">
                            Prof Qian ZHANG
                        </h2>
                        <p className="text-md text-isd-font-1">
                            Head/ Tencent Professor
                            <br />
                            of Engineering and Chair Professor
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-[36px] text-md text-isd-font-1 font-medium">
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[22px]">
                            <div className='className="w-[42.667px] h-[37.338px]"'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="44"
                                    height="38"
                                    viewBox="0 0 44 38"
                                    fill="none"
                                >
                                    <path
                                        d="M29.8333 37.338C28.4188 37.338 27.0623 36.7761 26.0621 35.7759C25.0619 34.7757 24.5 33.4192 24.5 32.0047L24.5 16.0047C24.5 7.65801 28.9 2.15668 37.1853 0.0846819C37.5259 -0.00323917 37.8806 -0.0228963 38.2288 0.0268474C38.5771 0.0765911 38.9121 0.194759 39.2145 0.37453C39.5169 0.554302 39.7807 0.792129 39.9908 1.07431C40.2008 1.35649 40.353 1.67746 40.4385 2.0187C40.524 2.35995 40.5411 2.71474 40.4889 3.06264C40.4366 3.41053 40.3161 3.74466 40.1342 4.04576C39.9522 4.34686 39.7125 4.60899 39.4289 4.81704C39.1452 5.0251 38.8231 5.17496 38.4813 5.25801C32.5426 6.74334 29.8333 10.13 29.8333 16.0047L29.8333 18.6713L37.8333 18.6713C39.1788 18.6709 40.4748 19.1791 41.4614 20.094C42.448 21.0089 43.0524 22.2629 43.1533 23.6047L43.1666 24.0047L43.1666 32.0047C43.1666 33.4192 42.6047 34.7757 41.6045 35.7759C40.6043 36.7761 39.2478 37.338 37.8333 37.338L29.8333 37.338ZM5.83329 37.338C4.4188 37.338 3.06225 36.7761 2.06205 35.7759C1.06186 34.7757 0.499955 33.4192 0.499955 32.0047L0.499956 16.0047C0.499957 7.65801 4.89996 2.15668 13.1853 0.0846798C13.5259 -0.00324127 13.8806 -0.0228984 14.2288 0.0268453C14.5771 0.076589 14.9121 0.194757 15.2145 0.374528C15.5169 0.5543 15.7807 0.792127 15.9908 1.07431C16.2008 1.35649 16.353 1.67745 16.4385 2.0187C16.524 2.35995 16.5411 2.71474 16.4889 3.06264C16.4366 3.41053 16.3161 3.74465 16.1342 4.04575C15.9522 4.34686 15.7125 4.60899 15.4289 4.81704C15.1452 5.02509 14.8231 5.17496 14.4813 5.25801C8.54262 6.74334 5.83329 10.13 5.83329 16.0047L5.83329 18.6713L13.8333 18.6713C15.1788 18.6709 16.4748 19.1791 17.4614 20.094C18.448 21.0089 19.0524 22.2629 19.1533 23.6047L19.1666 24.0047L19.1666 32.0047C19.1666 33.4192 18.6047 34.7757 17.6045 35.7759C16.6043 36.7761 15.2478 37.338 13.8333 37.338L5.83329 37.338Z"
                                        fill="#EC7B60"
                                    />
                                </svg>
                            </div>
                            <p className="font-bold text-isd-secondary">
                                Welcome to the Division of Integrative Systems
                                and Design (ISD), the newest academic unit in
                                the Academy of Interdisciplinary Studies at the
                                Hong Kong University of Science and Technology.
                            </p>
                        </div>
                        <div className="flex flex-col text-justify gap-[12px]">
                            In view of the ever-changing world and the rising
                            multi-faceted challenges, such as global warming,
                            energy crisis and the emergence of AI in human life,
                            ISD was founded in 2017, aiming at nurturing a new
                            generation of technology innovators with our new
                            mode of education and producing top-notch research
                            outputs to solve these problems. Under HKUST 3.0
                            Vision Plan, ISD will continue advance our strengths
                            and consolidate HKUST’s position as a
                            cross-disciplinary hub.
                            <br />
                            <br />
                            Transdisciplinary vision, human-centred mindset,
                            technical ability and design thinking skills are the
                            core dimensions of ISD’s unique pedagogy. Our BSc in
                            Integrative Systems and Design is the first
                            experiential learning undergraduate program in Hong
                            Kong. Through learner-centric approaches and
                            project-based learning experiences, graduates are
                            expected to identify problems and convert ideas to
                            practical solutions and systems. The MSc in
                            Technology Leadership and Entrepreneurship is
                            offered to translate technological innovations to
                            business ventures. We also encourage students to
                            unleash their research potentials through our MPhil
                            and PhD programs.
                            <br />
                            <br />
                            Faculty and researchers of ISD are fully committed
                            in cutting-edge research with translational
                            contributions. The multi-disciplinary background of
                            our research team drives collaborations across
                            academic fields and bridges research outcomes with
                            industry to create societal impacts. In addition to
                            current research foundation, ISD aims to delve
                            deeper into focused areas, such as Bio Health,
                            Marina Tech and AI Design. We believe that by
                            prioritizing technology innovation and
                            entrepreneurship, we can enhance our capabilities in
                            addressing real-world challenges and creating
                            positive changes.
                            <br />
                            <br />
                            You are free to explore our website and get to grips
                            with our division. If you have any comment or
                            suggestion, please contact us.
                        </div>
                    </div>

                    <div>
                        <h2 className="text-h2 text-isd-primary">
                            Prof. Qian ZHANG
                        </h2>
                        <p>
                            Head of Division of Integrative Systems and Design
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
