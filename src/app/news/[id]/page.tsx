import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return [{ id: 'lol' }];
}

export default function NewsDetailPage() {
    return (
        <div className="container pt-component-gap-sm pb-section-gap min-h-screen flex flex-col items-stretch">
            <div className="flex flex-col gap-component-gap-sm">
                <Link
                    className="flex gap-[6px] text-md items-center text-isd-primary"
                    href="../"
                >
                    <ArrowLeft size={20} className="text-isd-primary" />
                    Back
                </Link>

                <div className="flex flex-col gap-section-title-gap">
                    <h1 className="text-h1">
                        Nine ISD Faculty Members Recognized Among the World’s
                        Top 2% of Most-Cited Scientists for 2025
                    </h1>

                    <div className="w-full h-[480px] bg-isd-font-2/10" />

                    <div className="flex flex-col gap-component-gap text-md text-isd-font-1">
                        <div className="flex flex-col gap-[24px]">
                            <p>
                                This year, we have nine ISD faculty members
                                recognized as being in the world’s Top 2% of the
                                Most-Cited Scientists for 2025! 
                            </p>
                        </div>

                        <div className="flex flex-col gap-[24px]">
                            <h2 className="text-[36px] leading=[36px] font-bold text-primary">
                                Career-long & Single-year Impact
                            </h2>
                            <p>
                                Prof. Song GUO
                                <br />
                                Prof. Mo LI
                                <br />
                                Prof. Chi Ying TSUI
                                <br />
                                Prof. Qian ZHANG
                            </p>
                        </div>

                        <div className="flex flex-col gap-[24px]">
                            <h2 className="text-[36px] leading=[36px] font-bold text-primary">
                                Career-long & Single-year Impact
                            </h2>
                            <p>Prof. Zexiang LI</p>
                        </div>

                        <div className="flex flex-col gap-[24px]">
                            <h2 className="text-[36px] leading=[36px] font-bold text-primary">
                                Career-long & Single-year Impact
                            </h2>
                            <p>
                                Prof. Arash KAZEMIAN <br />
                                Prof. Yuan LIU
                                <br />
                                Prof. Dongfang XU
                                <br />
                                Prof. Sai Kit YEUNG
                            </p>
                        </div>

                        <div className="flex flex-col gap-[24px]">
                            <p>
                                They are ranked and selected by Stanford
                                University based on their citation scores, out
                                of 100,000 scientists. <br />
                                Congratulations on this remarkable achievement
                                and the high level of research excellence!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
