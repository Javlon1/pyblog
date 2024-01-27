import Image from 'next/image';
import Link from 'next/link'
import styles from './NotFound.module.scss'
import notFound from "../../../../public/404.svg"

const NotFound = ({ res }) => {

    if (res) {
        res.statusCode = 404;
        console.log(res.statusCode);
    }

    return (
        <section className={styles.notFound}>
            <div className={styles.notFound__item}>
                <h2>'40' + '4' = '404'!</h2>
                <h3>Sahifa topilmadi, lekin rosti rosa qidirdik...</h3>
                <Image
                    className={styles.notFound__item__img}
                    width={100}
                    height={113}
                    priority
                    alt='404'
                    src={notFound}
                />
                <Link className={styles.notFound__item__link} href="/">Bosh sahifa</Link>
            </div>
        </section>
    )
}

export const getServerSideProps = ({ res }) => {
    res.statusCode = 404;
    return { props: {} };
};

export default NotFound;