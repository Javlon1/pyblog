import Image from 'next/image'
import Link from 'next/link'
import MyContainer from '../../ui/MyContainer/MyContainer'
import styles from './Footer.module.scss'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <MyContainer>
                <ul className={styles.footer__top}>
                    <li className={styles.footer__top__item}>
                        <Link
                            className={styles.footer__top__item__link}
                            href={"/"}
                        >
                            <Image
                                className={styles.footer__top__item__link__img}
                                width={40}
                                height={45}
                                priority
                                alt='logo'
                                src={"https://pyblog.uz/pybloguz/static/assets/images/HEAD.svg"}
                            />
                            <span>BETA</span>
                        </Link>
                        <p>Python hamda dasturlashga oid o’zbek tilidagi blog.</p>
                    </li>
                    <li className={styles.footer__top__item}>
                        <Link href={'/'}>Bosh sahifa</Link>
                        <Link href={'/contact'}>Bog’lanish</Link>
                        <button>
                            <i className="bi bi-moon-fill"></i>
                        </button>
                    </li>
                    <li className={styles.footer__top__item}>
                        <Link
                            target='_blank'
                            href={'https://t.me/pybloguz'}
                        >
                            <i className="bi bi-telegram"></i>
                            Telegram
                        </Link>
                        <Link
                            target='_blank'
                            href={'https://www.instagram.com/pyblog.uz/'}
                        >
                            <i className="bi bi-instagram"></i>
                            Instagram
                        </Link>
                        <Link
                            target='_blank'
                            href={'https://www.facebook.com/pybloguz'}
                        >
                            <i className="bi bi-facebook"></i>
                            Facebook
                        </Link>
                    </li>
                </ul>
                <div className={styles.footer__bottom}>
                    <p>pyblog.uz by <Link href={'https://www.instagram.com/rashidov_21/'}>Abdurakhmon Rashidov </Link>created with <b>❤️</b> akalar.</p>
                </div>
            </MyContainer>
        </footer>
    )
}

export default Footer;