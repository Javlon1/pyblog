import NotFound from '@/app/components/ui/NotFound/NotFound';
import Head from 'next/head';

const PageNotFound = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>404 - sahifa topilmadi.</title>
            </Head>
            <div>
                <NotFound />
            </div>
        </>
    )
}

export default PageNotFound; 