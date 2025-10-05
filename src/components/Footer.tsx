import Image from 'next/image';
import Link from 'next/link';
import HKUSTFooterLogo from '@/assets/hkust-footer-logo.png';
import LinkedinIcon from '@/assets/linkedin-icon.png';
import FacebookIcon from '@/assets/facebook-icon.png';
import WechatIcon from '@/assets/wechat-icon.png';
import YoutubeIcon from '@/assets/youtube-icon.png';
import InstagramIcon from '@/assets/instagram-icon.png';
import FooterImage from '@/assets/footer-image.png';

export default function Footer() {
    const navTitles = [
        {
            title: 'About ISD',
            subheadings: [
                'Head’s Message',
                'What is ISD',
                'Join Us',
                'Contact Us',
            ],
        },
        {
            title: 'People',
            subheadings: ['ISD Faculty', 'Affiliates', 'ISD Staff'],
        },
        {
            title: 'Academics',
            subheadings: [
                'Programs',
                'Scholarships',
                'Internship & Exchange',
                'Facilities',
            ],
        },
        {
            title: 'News & Events',
            subheadings: ['News', 'Events', 'Achievement'],
        },
        {
            title: 'Student Life',
            subheadings: [
                'Student Competitions',
                'Extracurricular Activities',
                'Internship',
                'Exchange',
                'Alumni Sharing',
            ],
        },
    ];

    const divisionInfo = [
        {
            title: 'Division of Integrative Systems and Design',
            subtexts: [
                'Location: Room 5591, Lift 29-30, The Hong Kong University of Science and Technology, Clear Water Bay, Hong Kong',
                'Tel: +852 3469 2723',
                'Fax: +852 3521 0943',
                'Email: isd@ust.hk',
            ],
        },
    ];
    return (
        <footer className="bg-isd-primary text-white px-section-gap py-[61px]">
            <div className="container flex flex-col gap-[60px]">
                <div>
                    <div className="flex flex-row justify-start divide-x-1 divide-white gap-component-gap-sm pb-[24px]">
                        <div className="flex flex-row justify-start gap-component-gap-sm w-full">
                            {navTitles.map((nav) => (
                                <div key={nav.title} className="flex flex-col">
                                    <h3 className="font-bold uppercase mb-[24px]">
                                        {nav.title}
                                    </h3>
                                    <div className="flex flex-col gap-[24px] text-footer">
                                        {nav.subheadings.map((sub) => (
                                            // TODO: add hrefs
                                            <Link key={sub} href="">
                                                {sub}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-start gap-component-gap-sm flex-1/3">
                            {divisionInfo.map((nav) => (
                                <div key={nav.title} className="flex flex-col">
                                    <h3 className="font-bold uppercase mb-[24px]">
                                        {nav.title}
                                    </h3>
                                    <div className="flex flex-col gap-[24px] text-footer">
                                        {nav.subtexts.map((sub) => (
                                            <p key={sub}>{sub}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="justify-start font-bold uppercase flex flex-row gap-component-gap-sm">
                        <p>research</p>
                        <p>collaboration</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-[24px]">
                        <Image
                            src={HKUSTFooterLogo}
                            alt="HKUST Logo"
                            width={160}
                            height={50}
                            // className="object-cover"
                        />
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row gap-[36px] text-callout-link">
                                <span>Privacy</span>
                                <span>Sitemap</span>
                            </div>
                            <p className="text-callout mt-2">
                                Copyright &copy; The Hong Kong University of
                                Science and Technology. All rights reserved.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-[24px] items-center">
                        <Image
                            src={FooterImage}
                            alt="HKUST Logo"
                            width={100}
                            height={100}
                        />
                        <span className="text-callout">Follow HKUST on</span>
                        <div className="flex flex-row gap-[12px] items-center h-full">
                            <Image
                                src={FacebookIcon}
                                alt="Facebook Logo"
                                width={36}
                                height={36}
                            />
                            <Image
                                src={InstagramIcon}
                                alt="Instagram Logo"
                                width={36}
                                height={36}
                            />
                            <Image
                                src={LinkedinIcon}
                                alt="LinkedIn Logo"
                                width={36}
                                height={36}
                            />
                            <Image
                                src={YoutubeIcon}
                                alt="YouTube Logo"
                                width={36}
                                height={36}
                            />
                            <Image
                                src={WechatIcon}
                                alt="WeChat Logo"
                                width={36}
                                height={36}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
