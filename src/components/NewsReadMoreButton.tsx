import { useSearchParams } from 'next/navigation';

export default function NewsReadMoreButtonPage() {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams?.toString() ?? '');

    return <>{params.get('id')}</>;
}
