import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import MyContainer from '../../ui/MyContainer/MyContainer'
import styles from './Footer.module.scss'
import { Context } from '../../ui/Context/Context'


const Footer = () => {
    const { dark, setDark } = useContext(Context);

    const handlerDarkMode = () => {
        setDark(!dark);
    };

    console.log(dark);

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
                        
                        <button type='button' onClick={handlerDarkMode} aria-label="Toggle Dark Mode">
                            <i className="fa-solid fa-moon"></i>
                        </button>


                    </li>
                    <li className={styles.footer__top__item}>
                        <Link
                            target='_blank'
                            href={'https://t.me/pybloguz'}
                        >
                            <i className="fa-brands fa-telegram"></i>
                            Telegram
                        </Link>
                        <Link
                            target='_blank'
                            href={'https://www.instagram.com/pyblog.uz'}
                        >
                            <i className="fa-brands fa-instagram"></i>
                            Instagram
                        </Link>
                        <Link
                            target='_blank'
                            href={'https://www.facebook.com/pybloguz'}
                        >
                            <i className="fa-brands fa-facebook"></i>
                            Facebook
                        </Link>
                    </li>
                </ul>
                <div className={styles.footer__bottom}>
                    <p>pyblog.uz by <Link href={'https://www.instagram.com/rashidov_21'}>Abdurakhmon Rashidov </Link>created with <b>❤️</b> akalar.</p>
                </div>
            </MyContainer>
        </footer>
    )
}

export default Footer;