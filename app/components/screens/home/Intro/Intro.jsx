import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Bar from '@/app/components/layout/bar/Bar';

import thumbs_up from "../../../../../public/emojies/thumbs_up.png"
import heart from "../../../../../public/emojies/heart.png"
import sunglass_face from "../../../../../public/emojies/sunglass_face.png"
import fire from "../../../../../public/emojies/fire.png"
import alien from "../../../../../public/emojies/alien.png"
import neutral_face from "../../../../../public/emojies/neutral_face.png"
import thumbs_down from "../../../../../public/emojies/thumbs_down.png"

const Intro = () => {
    const [opened, setOpened] = useState(false)


    return (
        <section className={styles.intro}>
            <MyContainer>
                <div className={styles.intro__items}>
                    <div className={styles.intro__items__bar}>
                        <Bar />
                    </div>
                    <div className={styles.intro__items__item}>
                        <nav className={styles.intro__items__item__nav}>
                            <h1>pyblog.uz - Python</h1>
                            <ul className={styles.list}>
                                <li className={`${styles.list__item} ${styles.active}`}>
                                    <button className={styles.list__item__btn}>
                                        <i className="bi bi-clock-fill"></i>
                                        Yangilar
                                    </button>
                                </li>
                                <li className={styles.list__item}>
                                    <button className={styles.list__item__btn}>
                                        <i className="bi bi-fire"></i>
                                        Yonmoqda
                                    </button>
                                </li>
                                <li className={styles.list__item}>
                                    <button className={styles.list__item__btn}>
                                        <p>😍</p>
                                        Emoji
                                    </button>
                                </li>
                                <li className={styles.list__item}>
                                    <button className={styles.list__item__btn}>
                                        <i className="bi bi-trophy-fill"></i>
                                        TOP
                                    </button>
                                </li>
                                <li
                                    className={styles.list__item}
                                    onClick={() => {
                                        setOpened(!opened)
                                    }}
                                >
                                    <button className={styles.list__item__btn}>
                                        <span className={`${styles.list__item__btnHam} ${opened ? styles.active_Ham : ""}`}></span>
                                        Menyu
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <div
                            className={`${styles.opasitiyBar} ${opened ? styles.opasitiyActive : ""}`}
                            onClick={() => {
                                setOpened(false)
                            }}></div>
                        <div className={`${styles.intro__items__item__rightBar} ${opened ? styles.opened : ""}`}>
                            <div className={styles.sideBar}>
                                <span className={styles.sideBar__title}>
                                    <h2>Saralash</h2>
                                    <p
                                        className={styles.btnHam}
                                        onClick={() => {
                                            setOpened(false)
                                        }}
                                    ></p>
                                </span>
                                <ul className={styles.sideBar__list}>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Intro;