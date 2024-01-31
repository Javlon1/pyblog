import { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import styles from './Intro.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Bar from '@/app/components/layout/bar/Bar';
import Pagination from '../Pagination/Pagination';
import { Context } from '@/app/components/ui/Context/Context';


const Intro = () => {
    const { dark } = useContext(Context);
    const [opened, setOpened] = useState(false)
    const [tagAct, setTagAct] = useState(false)

    const [componentDark, setComponentDark] = useState()
    const [index, setIndex] = useState(0);
    const emojiRef = useRef(null);
    const emojiReF = useRef(null);
    const emojies = ["fa-solid fa-thumbs-down", "fa-solid fa-thumbs-up", "fa-solid fa-bolt", "fa-solid fa-fire", "fa-solid fa-star"];
    const colors = ["#6ea7e0", "#6ea7e0", "orange", "orange", "orange"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((item) => {
                if (item === emojies.length - 1) {
                    return 0;
                } else {
                    return item + 1;
                }
            });
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        emojiRef.current.style.transition = "all 0.3s";
        emojiRef.current.className = emojies[index];
        emojiRef.current.style.color = colors[index];

        emojiReF.current.style.transition = "all 0.3s";
        emojiReF.current.className = emojies[index];
        emojiReF.current.style.color = colors[index];
    }, [index]);

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

    useEffect(() => {
        const intro = `${styles.intro} ${dark ? styles.darkMode : ""}`
        setComponentDark(intro)
    }, [dark])

    return (
        <section className={componentDark}>
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
                                    <button type='button' className={styles.list__item__btn}>
                                        <i className="fa-solid fa-clock"></i>
                                        Yangilar
                                    </button>
                                </li>
                                <li className={styles.list__item}>
                                    <button type='button' className={styles.list__item__btn}>
                                        <i className="fa-solid fa-fire"></i>
                                        Yonmoqda
                                    </button>
                                </li>
                                <li className={styles.list__item}>
                                    <button type='button' className={styles.list__item__btn}>
                                        <i className='"fas fa-thumbs-up"' id="emoji1" ref={emojiRef}></i>
                                        Emoji
                                    </button>
                                </li>
                                <li className={styles.list__item}>
                                    <button type='button' className={styles.list__item__btn}>
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
                                    <button type='button' className={styles.list__item__btn}>
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
                                            <i className='"fas fa-thumbs-up"' id="emoji2" ref={emojiReF}></i>
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
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p> Python</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p>Dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-python"></i>
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
                                    aria-labelledby="button-label"
                                    type='button'
                                    className={`${styles.btn} ${tagAct ? styles.tagAct : ""}`}
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
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <p>
                                            <i className="fa-brands fa-python"></i>
                                        </p>
                                        <p>Veb dasturlash</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.pagination}>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section >
    )
}

export default Intro;