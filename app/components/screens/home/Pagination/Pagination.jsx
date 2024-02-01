import { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Pagination.module.scss';

import thumbs_up from "../../../../../public/emojies/thumbs_up.png"
import heart from "../../../../../public/emojies/heart.png"
import sunglass_face from "../../../../../public/emojies/sunglass_face.png"
import fire from "../../../../../public/emojies/fire.png"
import alien from "../../../../../public/emojies/alien.png"
import neutral_face from "../../../../../public/emojies/neutral_face.png"
import thumbs_down from "../../../../../public/emojies/thumbs_down.png"
import { Context } from '@/app/components/ui/Context/Context';

export default function Pagination() {
    const router = useRouter()
    const [pagination, setPagination] = useState([]);
    const [loading, setLoading] = useState(false);

    const { dark, urlApi } = useContext(Context);

    const [componentDark, setComponentDark] = useState()

    useEffect(() => {
        const item = `${styles.item} ${dark ? styles.darkMode : ""}`
        setComponentDark(item)
    }, [dark])

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setShowModal(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [showModal]);

    const handlerReactionCloce = () => {
        setShowModal(false)
    };

    const handlerReactionAct = () => {
        setShowModal(true)
    };

    const [total_pages, setTotal_pages] = useState();
    const [currentPage, setCurrentPage] = useState(() => {
        const currentPage = typeof window !== 'undefined' ? window.localStorage.getItem('currentPage') : null;
        return currentPage ? currentPage : 1;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('currentPage', currentPage);
        }
    }, [currentPage, total_pages]);

    const pageNumbers = Array.from({ length: total_pages }, (_, index) => index + 1);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < total_pages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const endpointPagination = 'home';
    const fullUrlPagination = `${urlApi}/${endpointPagination}/?page=${currentPage}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrlPagination, {
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
                    setPagination(data);
                    setCurrentPage(data.results.current_page)
                    setTotal_pages(data.results.total_pages)
                    setLoading(true);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [fullUrlPagination]);


    return (
        <div id="projects" className={componentDark}>

            <span className={`${styles.alert} ${showModal ? styles.alertAct : ""}`}>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <i onClick={handlerReactionCloce} className="fa-solid fa-xmark"></i>
            </span>

            <div className={styles.portfolio}>
                {
                    loading ? (
                        pagination.results.posts?.map((item) => (
                            <div key={item.id} className={styles.portfolio__items}>
                                <div className={styles.portfolio__items__top}>
                                    <div className={styles.portfolio__items__top__left}>
                                        <ul>
                                            <li>
                                                <i className={item.category.icon}></i>
                                                <p>{item.category.title}</p>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-eye"></i>
                                                <p>{item.views} marta</p>
                                            </li>
                                        </ul>
                                        <div
                                            onClick={() => {
                                                router.push({
                                                    pathname: '/detail',
                                                    query: item
                                                })
                                            }}
                                        >
                                            <h2>{item.title}</h2>
                                        </div>
                                        <p>
                                            {}
                                        </p>
                                    </div>
                                    <div className={styles.portfolio__items__top__right}>
                                        <div
                                            className={styles.portfolio__items__top__right__link}
                                            onClick={() => {
                                                router.push({
                                                    pathname: '/detail',
                                                    query: item
                                                })
                                            }}
                                        >
                                            <Image
                                                className={styles.img}
                                                width={200}
                                                height={133}
                                                priority
                                                alt='img'
                                                src={item.image}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__items__bottom}>
                                    <div className={styles.tooltip}>
                                        <i className="fa-regular fa-face-smile-wink"></i>
                                        <span>19</span>
                                        <div className={styles.tooltip__reaction}>
                                            Reaksiyalar bildirganlar !
                                        </div>
                                    </div>
                                    <ul className={styles.portfolio__items__bottom__list}>
                                        <li
                                            onClick={handlerReactionAct}
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
                                                width={32}
                                                height={32}
                                                priority
                                                alt='👍'
                                                src={thumbs_up}
                                            />
                                            <span>+{item.good}</span>
                                            <div className={styles.reactionName}>Yaxshi</div>
                                        </li>
                                        <li
                                            onClick={handlerReactionAct}
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
                                                width={32}
                                                height={32}
                                                priority
                                                alt='❤'
                                                src={heart}
                                            />
                                            <span>+{item.like}</span>
                                            <div className={styles.reactionName}>Yoqdi</div>
                                        </li>
                                        <li
                                            onClick={handlerReactionAct}
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
                                                width={32}
                                                height={32}
                                                priority
                                                alt='😎'
                                                src={sunglass_face}
                                            />
                                            <span>+{item.great}</span>
                                            <div className={styles.reactionName}>Zo`r</div>
                                        </li>
                                        <li
                                            onClick={handlerReactionAct}
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
                                                width={32}
                                                height={32}
                                                priority
                                                alt='💥'
                                                src={fire}
                                            />
                                            <span>+{item.excellent}</span>
                                            <div className={styles.reactionName}>Yonmoqda</div>
                                        </li>
                                        <li
                                            onClick={handlerReactionAct}
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
                                                width={32}
                                                height={32}
                                                priority
                                                alt='👽'
                                                src={alien}
                                            />
                                            <span>+{item.legend}</span>
                                            <div className={styles.reactionName}>Bu dunyoniki emas!</div>
                                        </li>
                                        <li
                                            onClick={handlerReactionAct}
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
                                                width={32}
                                                height={32}
                                                priority
                                                alt='😐'
                                                src={neutral_face}
                                            />
                                            <span>+{item.neutral}</span>
                                            <div className={styles.reactionName}>Betaraf</div>
                                        </li>
                                        <li
                                            onClick={handlerReactionAct}
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
                                                width={32}
                                                height={32}
                                                priority
                                                alt='👎'
                                                src={thumbs_down}
                                            />
                                            <span>+{item.dislike}</span>
                                            <div className={styles.reactionName}>Yoqmadi</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))) : (
                        <ul className={styles.skeleton}>
                            <li className={styles.skeleton__item}></li>
                            <li className={styles.skeleton__item}></li>
                            <li className={styles.skeleton__item}></li>
                            <li className={styles.skeleton__item}></li>
                        </ul>
                    )
                }
            </div>

            <ul className={styles.pagination}>
                <li className={styles.pagination__el} onClick={handlePrevClick}>&lt;&lt;</li>

                {pageNumbers.map((pageNumber) => (
                    <li
                        className={`${styles.pagination__el} ${pageNumber === currentPage ? styles.act : ''}`}
                        onClick={() => handleClick(pageNumber)}
                        key={pageNumber}
                    >
                        {pageNumber}
                    </li>
                ))}

                <li className={styles.pagination__el} onClick={handleNextClick}>&gt;&gt;</li>
            </ul>
        </div>
    );
}