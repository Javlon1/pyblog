import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import MyContainer from '../../ui/MyContainer/MyContainer'
import styles from './Footer.module.scss'
import { Context } from '../../ui/Context/Context'


const Footer = () => {
    const { dark, setDark } = useContext(Context);

    const [componentDark, setComponentDark] = useState()

    const handlerDarkMode = () => {
        setDark(!dark);
    };

    useEffect(() => {
        const footer = `${styles.footer} ${dark ? styles.darkMode : ""}`
        setComponentDark(footer)
    }, [dark])

    return (
        <footer className={componentDark}>
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
                            {
                                dark ? (
                                    <i className="fa-solid fa-sun"></i>
                                ) : (
                                    <i className="fa-solid fa-moon"></i>
                                )
                            }
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