export default function NewsCard({ type }: { type: 'news' | 'achievement' }) {
    return (
        <a className="flex gap-component-gap h-[360px] items-center" href="lol">
            <div className="w-[396px] h-[240px] bg-isd-font-2/10" />
            <div className="flex-1 flex flex-col gap-[12px]">
                <p className="text-h2 text-secondary">
                    {type === 'news' ? 'News' : 'Achievement'}
                </p>
                <h2 className="text-h2 text-primary">
                    Nine ISD Faculty Members Recognized Among the World’s Top 2%
                    of Most-Cited Scientists for 2025
                </h2>
                <p className="text-md text-isd-font-3 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <span className="text-isd-font-2 text-md">January 1, 2024</span>
            </div>
        </a>
    );
}
