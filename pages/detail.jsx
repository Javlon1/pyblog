import Head from 'next/head'
import DetailPage from '@/app/components/screens/home/Detail/Detail';
import { useRouter } from 'next/router';

const Detail = () => {
    const router = useRouter();
    const metaDetail = router.query

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="image_src" content="https://pyblog.uz/pybloguz/static/assets/images/HEAD.svg" /> // URL для img
                <meta name="theme-color" content="#D3EFEA" />

                <meta property="og:title" content={metaDetail.name} /> // Название страницы
                <meta property="og:description" content={metaDetail.name} /> // Описание страницы
                <meta property="og:image" content="https://pyblog.uz/pybloguz/static/assets/images/HEAD.svg" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="https://pyblog.uz/" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="pyblog.uz" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <link rel="canonical" href="https://pyblog.vercel.app/" /> // изменить нужно
                <link rel="manifest" href="../manifest.json" />

                <title>{metaDetail.name}</title>
            </Head>

            <main>
                <DetailPage />
            </main>
        </>
    )
}

export default Detail;