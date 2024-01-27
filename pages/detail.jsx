import { useContext } from 'react';
import Head from 'next/head'
import DetailPage from '@/app/components/screens/home/Detail/Detail';
import { Context } from '@/app/components/ui/Context/Context';

const Detail = () => {

    const { detail } = useContext(Context);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="" /> // Описание страницы
                <meta name="keywords" content="" /> // ключевые слова, страницы
                <meta name="image_src" content="" /> // URL для img

                <meta property="og:title" content="detail" /> // Название страницы
                <meta property="og:description" content="" /> // Описание страницы
                <meta property="og:image" content="" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <title>Detail {detail[0] ? detail[0].name : ""}</title>
            </Head>

            <main>
                <DetailPage />
            </main>
        </>
    )
}

export default Detail;