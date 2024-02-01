import Link from 'next/link'
import Image from 'next/image'
import styles from './Bar.module.scss'
import qrcode from "../../../../public/qrcode.png"
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../ui/Context/Context'

const Bar = () => {
    const { dark, urlApi } = useContext(Context);
    const [category, setCategory] = useState()
    const [tag, setTag] = useState()

    const [componentDark, setComponentDark] = useState()

    useEffect(() => {
        const bar = `${styles.bar} ${dark ? styles.darkMode : ""}`
        setComponentDark(bar)
    }, [dark])

    const endpointCategory = 'category';
    const fullUrlCategory = `${urlApi}/${endpointCategory}/`;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrlCategory, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${jwt_token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();

                if (data) {
                    setCategory(data);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [fullUrlCategory]);

    const endpointTag = 'tag';
    const fullUrlTag = `${urlApi}/${endpointTag}/`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrlTag, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${jwt_token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();

                if (data) {
                    setTag(data);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [fullUrlTag]);

    return (
        <section className={componentDark}>
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
                            <b><i className="fa-solid fa-heart"></i></b>
                            <p>+43</p>
                        </li>
                        <li>
                            <b><i className="fa-brands fa-telegram"></i></b>
                            <p>+11</p>
                        </li>
                        <li>
                            <b><i className="fa-solid fa-message"></i></b>
                            <p>+5</p>
                        </li>
                    </ul>
                    <p>Yanada ko’proq memlar bizning <Link target='_blank' href={'https://www.instagram.com/p/Cr_RNAMNIMb'}><i className="bi bi-instagram"></i>Instagram</Link> sahifamizda.</p>
                </div>

                <div className={styles.bar__list__column}>
                    <div className={styles.bar__list__column__title}>
                        <h2>Ruknlar</h2>
                        <p><i className="fa-solid fa-layer-group"></i></p>
                    </div>
                    <ul className={styles.bar__list__column__list}>
                        {
                            category?.map((item) => (
                                <li key={item.id}>
                                    <Link href={"/"}>
                                        <p>
                                            <i className={item.icon}></i>
                                        </p>
                                        <p>{item.title}</p>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className={styles.bar__list__column}>
                    <div className={styles.bar__list__column__title}>
                        <h2>Foydali teglar</h2>
                        <p><i className="fa-solid fa-tags"></i></p>
                    </div>
                    <ul className={styles.bar__list__column__list}>
                        {
                            tag?.map((item) => (
                                <li key={item.id}>
                                    <Link href={"/"}>
                                        <p>
                                            <i className={item.icon}></i>
                                        </p>
                                        <p>{item.title}</p>
                                    </Link>
                                </li>
                            ))
                        }
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