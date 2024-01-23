import * as React from 'react'
import Head from 'next/head'
import Contact from '@/app/components/screens/contact/Contact';

const ContactPage = () => {

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="pyblog.uz bu Python va dasturlashga oid o’zbek tilidagi blog. Hozirda Python, Javascript, Dasturlash, Veb dasturlash, Foundation va boshqa turkumlarga va o’nlab teglarga mansub maqolalar saytdan joy olgan." /> // Описание страницы
                <meta name="keywords" content="Dasturlash, Blog, Python, Payton, dasturchi, Javascript, maqola, yangilik, dastur." /> // ключевые слова, страницы
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="yandex-verification" content="6f5f50298c460b67" />
                <meta name="google-site-verification" content="YvmMznWrKMTkzmtTOYx8mb8k-2EmNaywBAimqFDg4Ds" />
                <meta name="image_src" content="https://pyblog.uz/pybloguz/static/assets/images/HEAD.svg" /> // URL для img
                <meta name="author" content="Abdurakhmon Rashidov" />

                <meta property="og:title" content="Python va dasturlash haqida o'zbek tilidagi blog." /> // Название страницы
                <meta property="og:description" content="pyblog.uz bu python va dasturlashga oid o'zbek tilidagi sifatli maqola, tutoriallar berib boruvchi blog hisoblanadi." /> // Описание страницы
                <meta property="og:image" content="https://pyblog.uz/pybloguz/static/assets/images/HEAD.svg" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="https://pyblog.uz/" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="pyblog.uz" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <link rel="canonical" href="https://pyblog.uz/" />

                <title>Bog'lanish - pyblog.uz</title>
            </Head>

            <main>
                <Contact /> 
            </main>
        </>
    )
}

export default ContactPage;