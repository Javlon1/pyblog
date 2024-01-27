import Link from 'next/link'
import Image from 'next/image'
import styles from './Bar.module.scss'
import qrcode from "../../../../public/qrcode.png"

const Bar = () => {

    return (
        <section className={styles.bar}>
            <div className={styles.bar__list}>

                <div className={styles.bar__list__item}>
                    <h2 className={styles.bar__list__item__title}>Kun hazili</h2>
                    <Link
                        href={'https://www.instagram.com/p/Cr_RNAMNIMb'}
                        target='_blank'
                    >
                        <Image
                            className={styles.bar__list__item__img}
                            width={290}
                            height={290}
                            priority
                            alt='img'
                            src={"https://pyblog.uz/pybloguz/mediafiles/instagram_images/photo_2023-04-25_07-05-50_7kUHZzE.jpg"}
                        />
                    </Link>
                    <ul className={styles.list}>
                        <li>
                            <b><i className="bi bi-heart-fill"></i></b>
                            <p>+43</p>
                        </li>
                        <li>
                            <b><i className="bi bi-telegram"></i></b>
                            <p>+11</p>
                        </li>
                        <li>
                            <b><i className="bi bi-chat-left-fill"></i></b>
                            <p>+5</p>
                        </li>
                    </ul>
                    <p>Yanada ko’proq memlar bizning <Link target='_blank' href={'https://www.instagram.com/p/Cr_RNAMNIMb'}><i className="bi bi-instagram"></i>Instagram</Link> sahifamizda.</p>
                </div>

                <div className={styles.bar__list__column}>
                    <div className={styles.bar__list__column__title}>
                        <h2>Ruknlar</h2>
                        <p><i className="bi bi-stack"></i></p>
                    </div>
                    <ul className={styles.bar__list__column__list}>
                        <li>
                            <Link href={"/"}>
                                <p>
                                    <i className="fa-brands fa-python"></i>
                                </p>
                                <p>python</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                <p>
                                    <i className="fa-brands fa-python"></i>
                                </p>
                                <p>Dasturlash</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.bar__list__column}>
                    <div className={styles.bar__list__column__title}>
                        <h2>Foydali teglar</h2>
                        <p><i className="bi bi-tags-fill"></i></p>
                    </div>
                    <ul className={styles.bar__list__column__list}>
                        <li></li>
                    </ul>
                </div>

                <div className={styles.bar__list__qrcode}>
                    <Image
                        className={styles.bar__list__qrcode__img}
                        width={290}
                        height={290}
                        priority
                        alt='link'
                        src={qrcode}
                    />
                    <p>Telegram kanalimizga qo'shiling!</p>
                    <Link
                        className={styles.bar__list__qrcode__btn}
                        href={'https://t.me/pybloguz'}
                        target='_blank'
                    >
                        <i className="bi bi-telegram"></i> Kanalga o'tish
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Bar;