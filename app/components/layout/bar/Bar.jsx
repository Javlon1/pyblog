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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        width="15"
                                        height="15"
                                    >
                                        <path
                                            d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </p>
                                <p>python</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                <p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        width="15"
                                        height="15"
                                    >
                                        <path
                                            d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
                                            fill="currentColor"
                                        />
                                    </svg>
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