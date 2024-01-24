import { useEffect, useState } from 'react';
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
    const [tagAct, setTagAct] = useState(false)

    useEffect(() => {

        const handleBodyScroll = () => {
            if (opened) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        };

        handleBodyScroll();

        return () => {
            document.body.style.overflow = 'auto';
        };

    }, [opened]);


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
                                        <i className="fa-solid fa-clock"></i>
                                        Yangilar
                                    </button>
                                </li>
                                <li className={styles.list__item}>
                                    <button className={styles.list__item__btn}>
                                        <i className="fa-solid fa-fire"></i>
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
                                        <i className="fa-solid fa-trophy"></i>
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
                                    <li>
                                        <Link href={'/'}>
                                            <i className="fa-solid fa-clock"></i>
                                            <p>Yangilar</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <i className="fa-solid fa-fire"></i>
                                            <p>Yonmoqda</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <b>😍</b>
                                            <p>Emoji</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <i className="fa-solid fa-trophy"></i>
                                            <p>TOP</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.sideBar}>
                                <span className={styles.sideBar__title}>
                                    <h2>Vaqt bo'yicha</h2>
                                    <b>
                                        <i className="fa-solid fa-clock"></i>
                                    </b>
                                </span>
                                <ul className={styles.sideBar__list}>
                                    <li>
                                        <Link href={'/'}>
                                            <i className="fa-solid fa-calendar-week"></i>
                                            <p>Bu haftada</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <i style={{ color: "#3571A3" }} className="fa-solid fa-calendar-days"></i>
                                            <p>Bu oyda</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <i className="fa-solid fa-calendar"></i>
                                            <p>Har doim</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.tag}>
                            <ul>
                                <li>
                                    <Link href={'/'}>
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
                                        <p> Python</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
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
                                <li>
                                    <Link href={'/'}>
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
                                        <p>Front-End</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p>Back-End</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-instagram"></i>
                                        </p>
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <button
                                    className={tagAct ? styles.tagAct : ""}
                                    onClick={() => {
                                        setTagAct(!tagAct)
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={30}
                                        height={30}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>
                            </ul>
                        </div>
                        <div className={`${styles.tags} ${tagAct ? styles.tagsAct : ""}`}>
                            <ul>
                                <li>
                                    <Link href={'/'}>
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
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
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
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
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
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
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
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
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
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
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
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
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
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
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
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.pagination}>
                            <div style={{
                                background: "#fff",
                                height: "100px",
                                position: "relative",
                                zIndex: "2",
                            }}></div>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section >
    )
}

export default Intro;